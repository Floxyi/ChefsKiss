import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Tile from '@Components/Tile'
import PageContainer from '@Components/PageContainer'
import Title from '@Components/Title'
import ArrowRightIcon from '@Icons/ArrowRightIcon'

const CategoryPage = () => {
    const navigate = useNavigate()

    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get('/api/categories/')
            .then((response) => {
                setCategories(response.data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching the categories:', error)
                setIsLoading(false)
            })
    }, [])

    return (
        <PageContainer>
            <Title title="Categories" margin />

            <div className="grid grid-cols-5 gap-12 w-full">
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
            </div>
        </PageContainer>
    )
}

export default CategoryPage
