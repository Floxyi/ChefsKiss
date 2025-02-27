import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import PageContainer from '@Components/PageContainer'
import RecipeHeader from '@Components/RecipeHeader'
import RecipeNavigation from '@Components/RecipeNavigation'

const InstructionsPage = () => {
    const { id } = useParams()

    const fetchRecipe = async (id) => {
        const { data } = await axios.get(`/api/recipe/?id=${id}`)
        return data
    }

    const {
        data: recipe,
        isLoading,
        error
    } = useQuery({
        queryKey: ['recipe', id],
        queryFn: () => fetchRecipe(id),
        enabled: !!id
    })

    if (error) {
        console.error('Error fetching the recipe:', error)
    }

    return (
        <PageContainer>
            <div>
                <RecipeHeader isLoading={isLoading} recipe={recipe} />
            </div>

            <RecipeNavigation id={id} />

            <p>On this page you can view recipe instructions from {id}.</p>
        </PageContainer>
    )
}

export default InstructionsPage
