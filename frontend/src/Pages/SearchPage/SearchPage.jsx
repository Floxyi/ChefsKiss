import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '@Components/Header/Header'
import PageContainer from '@Components/PageContainer/PageContainer'
import Footer from '@Components/Footer/Footer'

const SearchPage = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios
            .get('/api/search')
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

            <Footer />
        </PageContainer>
    )
}

export default SearchPage
