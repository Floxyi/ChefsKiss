import { useParams } from 'react-router-dom'

import PageContainer from '@Components/PageContainer'
import RecipeHeader from '@Components/RecipeHeader'
import RecipeNavigation from '@Components/RecipeNavigation'
import useRecipeInstructions from './Hooks/useRecipeInstructions'

const InstructionsPage = () => {
    const { id } = useParams()

    const { recipe, isLoading, isError, error, sanitizedInstructions } = useRecipeInstructions(id)

    return (
        <PageContainer>
            <RecipeHeader isLoading={isLoading} recipe={recipe} />

            <RecipeNavigation id={id} />

            <div className="text-lg text-primary-dark font-bold leading-8">
                {isError ? (
                    <div>{error.message}</div>
                ) : isLoading ? (
                    <div>Loading similar recipes...</div>
                ) : (
                    sanitizedInstructions && <p dangerouslySetInnerHTML={{ __html: sanitizedInstructions }} />
                )}
            </div>
        </PageContainer>
    )
}

export default InstructionsPage
