import { useEffect, useState } from 'react'
import axios from 'axios'

import PageContainer from '@Components/PageContainer'

const SearchPage = () => {
    const [recipes, setRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get('/api/search/recipes')
            .then((response) => {
                setRecipes(response.data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching the recipes:', error)
                setIsLoading(false)
            })
    }, [])

    return (
        <PageContainer>
            <p>Search all recipes:</p>

            {isLoading ? (
                <p>Loading recipes...</p>
            ) : (
                recipes.map((recipe) => (
                    <div key={recipe.id}>
                        <h2>
                            {recipe.title} (
                            {recipe.categories
                                .map((category) => category.name)
                                .join(', ')}
                            )
                        </h2>
                    </div>
                ))
            )}
        </PageContainer>
    )
}

export default SearchPage
