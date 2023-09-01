import React, { useState } from 'react'

const TodoForm = ({ onAdd, parentKey }) => {
    const [title, setTitle] = useState('')
    const [key, setKey] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title.trim() === '' || key.trim() === '') {
            return
        }

        onAdd({ title, key, parentKey })

        // Clear the input fields after adding
        setTitle('')
        setKey('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm
