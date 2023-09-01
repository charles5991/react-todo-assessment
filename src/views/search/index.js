import React, { useMemo, useState } from 'react'
import { Input, Tree, Modal } from 'antd'
import { Button } from 'components/ui'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import TodoForm from './components/form'

const { Search } = Input

const initialData = [
    {
        title: '吃飯',
        key: 'food',
        children: [
            {
                title: '炒飯',
                key: 'rice',
                children: [
                    {
                        title: '番茄炒飯',
                        key: 'tomatorice',
                        children: [
                            {
                                title: '不要香菜',
                                key: 'novege',
                            },
                            {
                                title: '不要加蛋',
                                key: 'noegg',
                            },
                        ],
                    },
                    {
                        title: '炒飯加蛋',
                        key: 'eggrice',
                    },
                ],
            },
        ],
    },
    {
        title: '練琴',
        key: 'piano',
        children: [
            {
                title: '用腳練琴',
                key: 'useleg',
            },
            {
                title: '用手練琴',
                key: 'usehand',
            },
        ],
    },
    {
        title: '午覺',
        key: 'nap',
    },
]

const App = () => {
    const [expandedKeys, setExpandedKeys] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [autoExpandParent, setAutoExpandParent] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [defaultData, setDefaultData] = useState(initialData)

    const showModal = () => {
        setIsModalOpen(true)
    }
    const handleOk = () => {
        setIsModalOpen(false)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const onExpand = (newExpandedKeys) => {
        setExpandedKeys(newExpandedKeys)
        setAutoExpandParent(false)
    }

    const onChange = (e) => {
        const { value } = e.target

        const filteredData = filterTreeData(defaultData, value)

        const newExpandedKeys = getExpandedKeys(filteredData)

        setExpandedKeys(newExpandedKeys)
        setSearchValue(value)
        setAutoExpandParent(true)
    }

    const getExpandedKeys = (filteredData) => {
        const expandedKeys = []
        filteredData.forEach((item) => {
            expandedKeys.push(item.key)
            if (item.children) {
                expandedKeys.push(...getExpandedKeys(item.children))
            }
        })
        return expandedKeys
    }

    const filterTreeData = (data, searchValue) => {
        return data
            .map((item) => {
                const strTitle = item.title
                if (
                    strTitle.toLowerCase().indexOf(searchValue.toLowerCase()) >
                    -1
                ) {
                    return item
                }
                if (item.children) {
                    const filteredChildren = filterTreeData(
                        item.children,
                        searchValue
                    )
                    if (filteredChildren.length > 0) {
                        return { ...item, children: filteredChildren }
                    }
                }
                return null
            })
            .filter((item) => item !== null)
    }

    const treeData = useMemo(() => {
        return filterTreeData(defaultData, searchValue)
    }, [defaultData, searchValue])

    const themeColor = useSelector((state) => state.theme.themeColor)

    const addNewItem = ({ title, key }) => {
        const newItem = {
            title,
            key,
        }
        setDefaultData((prevDefaultData) => [...prevDefaultData, newItem])
        setIsModalOpen(false)
    }

    return (
        <div>
            <div className="flex-row">
                <Search
                    style={{
                        marginBottom: 8,
                        maxWidth: 250,
                        paddingRight: 6,
                    }}
                    placeholder="輸入是項目"
                    onChange={onChange}
                />
                <Button
                    className={classNames(`bg-${themeColor}-500 text-white`)}
                    size="sm"
                    onClick={showModal}
                >
                    新增
                </Button>
            </div>
            <Tree
                onExpand={onExpand}
                expandedKeys={expandedKeys}
                autoExpandParent={autoExpandParent}
                treeData={treeData}
            />
            <Modal
                title="新增項目"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <TodoForm onAdd={addNewItem} />
            </Modal>
        </div>
    )
}

export default App
