import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import CircleIcon from '@Icons/SearchIcon'
import Header from '@Components/Header/Header'
import PageContainer from '@Components/PageContainer/PageContainer'
import Button from '@Components/Button/Button'

import './HomePage.css'

const HomePage = () => {
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/homepage/greeting')
            .then((response) => setMessage(response.data))
            .catch((error) =>
                console.error('Error fetching the greeting:', error),
            )
    }, [])

    return (
        <PageContainer>
            <Header />
            <p className="text">{message}</p>
            <div className="buttonContainer">
                <Button onClick={() => navigate('/imprint')}>Imprint</Button>
                <Button onClick={() => navigate('/search')}>
                    <CircleIcon width={14} height={14} />
                    Search
                </Button>
                <Button onClick={() => navigate('/recipe/1')}>Recipe 1</Button>
                <Button onClick={() => navigate('/recipe/1/comments')}>
                    Recipe 1 comments
                </Button>
                <Button onClick={() => navigate('/recipe/1/rating')}>
                    Recipe 1 rating
                </Button>
                <Button onClick={() => navigate('/recipe/1/similar')}>
                    Recipe 1 similar
                </Button>
            </div>
        </PageContainer>
    )
}

export default HomePage
