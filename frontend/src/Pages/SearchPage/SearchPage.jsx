import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

import PageContainer from '@Components/PageContainer'

const SearchPage = () => {
    const [searchParams] = useSearchParams() // Get query params from the URL
    const [recipes, setRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null) // Handle errors gracefully

    // Extract the `category` query parameter
    const category = searchParams.get('category')

    useEffect(() => {
        setIsLoading(true)
        setError(null)

        const apiUrl = category
            ? `/api/search?category=${encodeURIComponent(category)}`
            : '/api/search'

        axios
            .get(apiUrl)
            .then((response) => {
                setRecipes(response.data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching the recipes:', error)
                setError('Failed to fetch recipes. Please try again later.')
                setIsLoading(false)
            })
    }, [category])

    return (
        <PageContainer>
            <p>
                {category
                    ? `Search results for category: ${category}`
                    : 'Search all recipes:'}
            </p>

            {isLoading ? (
                <p>Loading recipes...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : recipes.length === 0 ? (
                <p>No recipes found.</p>
            ) : (
                recipes.map((recipe) => (
                    <div key={recipe.id}>
                        <h2>
                            {recipe.title} ({recipe.categories.join(', ')})
                        </h2>
                    </div>
                ))
            )}
        </PageContainer>
    )
}

export default SearchPage
