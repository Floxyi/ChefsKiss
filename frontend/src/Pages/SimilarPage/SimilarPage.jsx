import { useParams } from 'react-router-dom'
import PageContainer from '@Components/PageContainer'
import RecipeHeader from '@Components/RecipeHeader'
import RecipeNavigation from '@Components/RecipeNavigation'
import RecipeTile from '@Components/RecipeTile'
import useSimilarRecipe from './Hooks/useSimilarRecipe'

const SimilarPage = () => {
    const { id } = useParams()
    const { data, isLoading, isError, error } = useSimilarRecipe(id)

    const { title, difficulty, time, categories, images } = data ?? {}
    const recipe = { id, title, difficulty, time, categories, images }

    return (
        <PageContainer>
            <div>
                <RecipeHeader isLoading={isLoading} recipe={recipe} />
            </div>

            <RecipeNavigation id={id} />

            <div className="grid grid-cols-5 gap-6 w-full">
                {isError ? (
                    <div>{error.message}</div>
                ) : isLoading ? (
                    <div>Loading similar recipes...</div>
                ) : (
                    data?.similarRecipes?.map((recipe) => <RecipeTile key={recipe.id} recipe={recipe} small />)
                )}
            </div>
        </PageContainer>
    )
}

export default SimilarPage
