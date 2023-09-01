import React from 'react'
import { Button } from 'components/ui'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const toAdd = () => {
        navigate('/search')
    }

    return (
        <div className="justify-center place-content-center flex">
            <Button onClick={toAdd}>+ 新建一個事項</Button>
        </div>
    )
}

export default Home
