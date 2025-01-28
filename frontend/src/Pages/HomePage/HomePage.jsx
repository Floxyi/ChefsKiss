import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import PageContainer from '@Components/PageContainer'
import Tile from '@Components/Tile'
import Search from '@Components/Search'
import ArrowRightIcon from '@Icons/ArrowRightIcon'
import SearchIcon from '@Icons/SearchIcon'

const HomePage = () => {
    const navigate = useNavigate()

    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`/api/homepage/?amount=4`)
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
        <PageContainer useMinDimensions={true}>
            <div className="flex flex-row justify-around">
                <Search />
            </div>
            <div className="font-semibold text-3xl text-primary-dark my-auto pb-4 pt-16 select-none">
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
            <div className="font-semibold text-3xl text-primary-dark my-auto pb-4 pt-16 select-none">
                Recommended Recipes:
            </div>
            <div className="flex flex-row gap-16 w-full justify-between">
                <Tile
                    title="Recipe 1"
                    icon={<SearchIcon stroke={3} />}
                    onClick={() => navigate('/recipe/1')}
                />
                <Tile
                    title="Recipe 2"
                    icon={<SearchIcon stroke={3} />}
                    onClick={() => navigate('/recipe/2')}
                />
                <Tile
                    title="Recipe 3"
                    icon={<SearchIcon stroke={3} />}
                    onClick={() => navigate('/recipe/3')}
                />
                <Tile
                    title="Recipe 4"
                    icon={<SearchIcon stroke={3} />}
                    onClick={() => navigate('/recipe/4')}
                />
                <Tile
                    title="Recipe 5"
                    icon={<SearchIcon stroke={3} />}
                    onClick={() => navigate('/recipe/5')}
                />
            </div>
        </PageContainer>
    )
}

export default HomePage
