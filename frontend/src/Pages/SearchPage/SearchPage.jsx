import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '@Components/Header/Header'
import Button from '@Components/Button/Button'
import PageContainer from '@Components/PageContainer/PageContainer'
import Footer from '@Components/Footer/Footer'

const SearchPage = () => {
    const [recipes, setRecipes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/search')
            .then((response) => setRecipes(response.data))
            .catch((error) =>
                console.error('Error fetching the recipes:', error),
            )
    }, [])

    return (
        <PageContainer>
            <Header />
            <p>Search all recipes:</p>

            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <h2>{recipe.title}</h2>
                </div>
            ))}

            <Button onClick={() => navigate('/')}>Home</Button>
            <Footer />
        </PageContainer>
    )
}

export default SearchPage
