import { useNavigate } from 'react-router-dom'
import Tile from '@Components/Tile'
import PageContainer from '@Components/PageContainer'
import Title from '@Components/Title'
import ArrowRightIcon from '@Icons/ArrowRightIcon'
import useCategories from './Hooks/useCategories'

const CategoryPage = () => {
    const navigate = useNavigate()

    const { data: categories, isLoading, isError, error } = useCategories()

    return (
        <PageContainer>
            <Title title="Categories" margin />

            {isError && (
                <div className="min-w-full min-h-full text-danger-dark">
                    {error.response ? `Error: ${error.response.data || 'Unknown error'}` : 'Something went wrong'}
                </div>
            )}

            <div className="grid grid-cols-5 gap-12 w-full">
                {isLoading ? (
                    <div className="min-w-full min-h-full text-primary-dark">Loading categories...</div>
                ) : categories.length === 0 ? (
                    <div className="min-w-full min-h-full text-primary-dark">No categories found.</div>
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

export default CategoryPage
