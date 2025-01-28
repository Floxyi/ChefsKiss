import { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import PageContainer from '@Components/PageContainer'
import Search from '@Components/Search'
import ArrowRightIcon from '@Icons/ArrowRightIcon'
import Tile from '@Components/Tile'
import Dropdown from '@Components/Dropdown'

const SearchPage = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [recipes, setRecipes] = useState([])
    const [categories, setCategories] = useState([])

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const category = searchParams.get('category')
    const [selectedCategory, setSelectedcategory] = useState(category ?? 'All')

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

    useEffect(() => {
        axios
            .get('/api/search/categories')
            .then((response) => {
                setCategories(response.data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching the recipes:', error)
            })
    }, [categories])

    const changeCategory = (category) => {
        setSelectedcategory(category)
        category === 'All'
            ? navigate(`/search`)
            : navigate(`/search?category=${category}`)
    }

    return (
        <PageContainer>
            <div className="flex flex-row justify-around pb-8">
                <Search />
            </div>

            <Dropdown
                label="Category"
                options={[
                    'All',
                    ...categories.map((category) => category.name)
                ]}
                value={selectedCategory}
                onChange={changeCategory}
            />

            <div className="flex flex-row gap-16 w-full flex-wrap justify-center">
                {isLoading ? (
                    <div className="flex flex-row justify-center items-center min-w-full min-h-full text-primary-dark">
                        Loading categories...
                    </div>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    recipes.map((recipe) => (
                        <Tile
                            key={recipe.id}
                            title={recipe.title}
                            subtitle={recipe.categories.join(', ')}
                            icon={<ArrowRightIcon />}
                            onClick={() => navigate(`/recipe/${recipe.id}`)}
                        />
                    ))
                )}
            </div>
        </PageContainer>
    )
}

export default SearchPage
