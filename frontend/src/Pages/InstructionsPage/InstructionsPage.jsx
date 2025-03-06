import { useParams, useNavigate } from 'react-router-dom'

import PageContainer from '@Components/PageContainer'
import RecipeHeader from '@Components/RecipeHeader'
import RecipeNavigation from '@Components/RecipeNavigation'
import useRecipeInstructions from './Hooks/useRecipeInstructions'

const InstructionsPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { recipe, isLoading, isError, error, sanitizedInstructions } = useRecipeInstructions(id)

    if (error?.response?.status === 404) {
        navigate('/not-found')
    }

    return (
        <PageContainer>
            <RecipeHeader isLoading={isLoading || error} recipe={recipe} />

            <RecipeNavigation id={id} />

            <div className="text-lg text-primary-dark font-bold leading-8">
                {isError ? (
                    <div>{error.message}</div>
                ) : isLoading ? (
                    <div>Loading recipe instructions...</div>
                ) : (
                    sanitizedInstructions && <p dangerouslySetInnerHTML={{ __html: sanitizedInstructions }} />
                )}
            </div>
        </PageContainer>
    )
}

export default InstructionsPage
