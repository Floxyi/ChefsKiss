import { useNavigate } from 'react-router-dom'

import PageContainer from '@Components/PageContainer'
import Tile from '@Components/Tile'
import Search from '@Components/Search'
import ArrowRightIcon from '@Icons/ArrowRightIcon'
import RecipeTile from '@Components/RecipeTile'
import useHomePageData from './Hooks/useHomePageData'

const HomePage = () => {
    const navigate = useNavigate()

    const { categories, categoriesLoading, categoriesError, recipes, recipesLoading, recipesError } = useHomePageData()

    return (
        <PageContainer>
            <div className="flex flex-row items-center justify-center mb-12 text-center text-6xl text-primary-dark select-none">
                <div className="font-bold">Find Recipes,&nbsp;</div>
                <div className="font-bold italic text-primary-light text-stroke-dark">Fast.</div>
            </div>

            <div className="flex flex-row justify-around">
                <Search />
            </div>

            <div className="flex flex-row justify-between items-baseline my-auto mb-6 mt-16 select-none">
                <p className="font-semibold text-3xl text-primary-dark">Recommended Recipes</p>
                <div
                    className="flex flex-row items-center text-primary-dark hover:underline hover:cursor-pointer"
                    onClick={() => navigate('/search')}
                >
                    <p>view all</p>
                    <ArrowRightIcon stroke={2} />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6 w-full">
                {recipesLoading ? (
                    <div className="min-w-full min-h-full text-primary-dark">Loading recipes...</div>
                ) : recipesError ? (
                    <div className="min-w-full min-h-full text-red-600">Error fetching recipes</div>
                ) : (
                    recipes.map((recipe) => <RecipeTile key={recipe.id} recipe={recipe} small />)
                )}
            </div>

            <div className="flex flex-row justify-between items-baseline my-auto mb-6 mt-16 select-none">
                <p className="font-semibold text-3xl text-primary-dark">Popular Categories</p>
                <div
                    className="flex flex-row items-center text-primary-dark hover:underline hover:cursor-pointer"
                    onClick={() => navigate('/categories')}
                >
                    <p>view all</p>
                    <ArrowRightIcon stroke={2} />
                </div>
            </div>
            <div className="grid grid-cols-5 gap-6 w-full">
                {categoriesLoading ? (
                    <div className="min-w-full min-h-full text-primary-dark">Loading categories...</div>
                ) : categoriesError ? (
                    <div className="min-w-full min-h-full text-red-600">Error fetching categories</div>
                ) : (
                    categories.map((category) => (
                        <Tile
                            key={category.id}
                            title={category.name}
                            subtitle={`${category.recipeCount} recipe${category.recipeCount === 1 ? '' : 's'}`}
                            icon={<ArrowRightIcon />}
                            onClick={() => navigate(`/search?category=${encodeURIComponent(category.name)}`)}
                        />
                    ))
                )}
            </div>
        </PageContainer>
    )
}

export default HomePage
