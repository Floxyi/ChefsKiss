import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import PageContainer from '@Components/PageContainer'
import Tile from '@Components/Tile'
import Search from '@Components/Search'
import ArrowRightIcon from '@Icons/ArrowRightIcon'
import { DifficultyLabels } from '@Enums/Difficulty'
import { TimeLabels } from '@Enums/Time'

const HomePage = () => {
    const navigate = useNavigate()

    const [categories, setCategories] = useState([])
    const [recipes, setRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`/api/homepage/categories?amount=4`)
            .then((response) => {
                setCategories(response.data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching the categories:', error)
                setIsLoading(false)
            })
    }, [])

    useEffect(() => {
        axios
            .get('/api/homepage/recipes?amount=4')
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
        <PageContainer useMinDimensions={true}>
            <div className="flex flex-row items-center justify-center mb-20 text-center text-6xl text-primary-dark">
                <div className="font-bold">Find Recipes,&nbsp;</div>
                <div className="font-bold italic text-primary-light text-stroke-dark">
                    Fast.
                </div>
            </div>

            <div className="flex flex-row justify-around">
                <Search />
            </div>

            <div className="font-semibold text-3xl text-primary-dark my-auto mb-6 mt-20 select-none">
                Recommended Recipes:
            </div>
            <div className="flex flex-row gap-16 w-full justify-between">
                {isLoading ? (
                    <div className="min-w-full min-h-full text-primary-dark">
                        Loading categories...
                    </div>
                ) : (
                    recipes.map((recipe) => (
                        <Tile
                            key={recipe.id}
                            title={recipe.title}
                            subtitle={`${recipe.categories.join(', ')}, ${TimeLabels[recipe.time]}, ${DifficultyLabels[recipe.difficulty]}`}
                            icon={<ArrowRightIcon />}
                            onClick={() => navigate(`/recipe/${recipe.id}`)}
                        />
                    ))
                )}
            </div>

            <div className="font-semibold text-3xl text-primary-dark my-auto mb-6 mt-16 select-none">
                Popular Categories:
            </div>
            <div className="flex flex-row gap-16 w-full justify-between">
                {isLoading ? (
                    <div className="min-w-full min-h-full text-primary-dark">
                        Loading categories...
                    </div>
                ) : (
                    categories.map((category) => (
                        <Tile
                            key={category.id}
                            title={category.name}
                            subtitle={`${category.recipeCount} recipe${category.recipeCount === 1 ? '' : 's'}`}
                            icon={<ArrowRightIcon />}
                            onClick={() =>
                                navigate(
                                    `/search?category=${encodeURIComponent(category.name)}`
                                )
                            }
                        />
                    ))
                )}
                <Tile
                    title="View all categories"
                    onClick={() => navigate('/categories')}
                />
            </div>
        </PageContainer>
    )
}

export default HomePage
