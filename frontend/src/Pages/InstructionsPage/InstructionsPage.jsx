import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import DOMPurify from 'dompurify'

import PageContainer from '@Components/PageContainer'
import RecipeHeader from '@Components/RecipeHeader'
import RecipeNavigation from '@Components/RecipeNavigation'

const InstructionsPage = () => {
    const { id } = useParams()

    const fetchRecipe = async (id) => {
        const { data } = await axios.get(`/api/instructions/?id=${id}`)
        return data
    }

    const { data: recipe, isLoading } = useQuery({
        queryKey: ['recipe', id],
        queryFn: () => fetchRecipe(id),
        enabled: !!id
    })

    const sanitizedInstructions =
        !isLoading && recipe && recipe.instructions
            ? DOMPurify.sanitize(recipe.instructions.replace(/\n/g, '<br />'))
            : ''

    return (
        <PageContainer>
            <div>
                <RecipeHeader isLoading={isLoading} recipe={recipe} />
            </div>

            <RecipeNavigation id={id} />
            <div className="text-lg text-primary-dark font-bold leading-8">
                {!isLoading && <p dangerouslySetInnerHTML={{ __html: sanitizedInstructions }} />}
            </div>
        </PageContainer>
    )
}

export default InstructionsPage
