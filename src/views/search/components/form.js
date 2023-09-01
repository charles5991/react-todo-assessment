import React, { useState } from 'react'
import classNames from 'classnames'
import { Button } from 'components/ui'

const TodoForm = ({ onAdd, parentKey, themeColor }) => {
    const [title, setTitle] = useState('')
    const [key, setKey] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title.trim() === '' || key.trim() === '') {
            return
        }

        onAdd({ title, key, parentKey })

        setTitle('')
        setKey('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="項目名"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
            />
            <Button
                type="submit"
                className={classNames(`bg-${themeColor}-500 text-white`)}
            >
                Add
            </Button>
        </form>
    )
}

export default TodoForm
