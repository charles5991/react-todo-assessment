import React from 'react'
import classNames from 'classnames'
import { Container } from 'components/shared'
import { useDispatch } from 'react-redux'
import { setThemeColor } from 'store/theme/themeSlice'
import { BsFillSquareFill } from 'react-icons/bs'
import { StickyFooter } from 'components/shared'

const FooterContent = () => {
    const colorList = [
        { label: 'Orange', value: 'orange' },
        { label: 'Green', value: 'green' },
        { label: 'Sky', value: 'sky' },
        { label: 'Blue', value: 'blue' },
        { label: 'Indigo', value: 'indigo' },
        { label: 'Purple', value: 'purple' },
    ]

    const dispatch = useDispatch()

    const onThemeColorChange = (value) => {
        dispatch(setThemeColor(value))
    }

    return (
        <div className={classNames('flex justify-between gap-4 w-full px-4 ')}>
            <div
                className="text-blue-700 cursor-pointer"
                onClick={() => onThemeColorChange('blue')}
            >
                <BsFillSquareFill />
                {colorList[3].label}
            </div>
            <div
                className="text-purple-700 cursor-pointer"
                onClick={() => onThemeColorChange('purple')}
            >
                <BsFillSquareFill />
                {colorList[5].label}
            </div>
            <div
                className="text-green-700 cursor-pointer"
                onClick={() => onThemeColorChange('green')}
            >
                <BsFillSquareFill />
                {colorList[2].label}
            </div>
            <div
                className="text-orange-500 cursor-pointer"
                onClick={() => onThemeColorChange('orange')}
            >
                <BsFillSquareFill />
                {colorList[0].label}
            </div>
        </div>
    )
}

export default function Footer({ pageContainerType }) {
    const colorList = [
        { label: 'Orange', value: 'orange' },
        { label: 'Green', value: 'green' },
        { label: 'Sky', value: 'sky' },
        { label: 'Blue', value: 'blue' },
        { label: 'Indigo', value: 'indigo' },
        { label: 'Purple', value: 'purple' },
    ]

    return (
        <StickyFooter>
            <footer
                className={classNames(
                    `footer flex flex-auto items-center h-16 shadow-inner`
                )}
            >
                {pageContainerType === 'contained' ? (
                    <Container>
                        <FooterContent />
                    </Container>
                ) : (
                    <FooterContent />
                )}
            </footer>
        </StickyFooter>
    )
}
