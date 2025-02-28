import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import PageContainer from '@Components/PageContainer'
import RecipeHeader from '@Components/RecipeHeader'
import RecipeNavigation from '@Components/RecipeNavigation'
import RecipeTile from '@Components/RecipeTile'

const SimilarPage = () => {
    const { id } = useParams()

    const fetchRecipe = async (id) => {
        const { data } = await axios.get(`/api/similar/?id=${id}`)
        return data
    }

    const { data, isLoading } = useQuery({
        queryKey: ['recipe', id],
        queryFn: () => fetchRecipe(id),
        enabled: !!id
    })

    const { title, difficulty, time, categories, images } = data ?? {}
    const recipe = { id, title, difficulty, time, categories, images }

    return (
        <PageContainer>
            <div>
                <RecipeHeader isLoading={isLoading} recipe={recipe} />
            </div>

            <RecipeNavigation id={id} />

            <div className="grid grid-cols-5 gap-6 w-full">
                {data?.similarRecipes?.map((recipe) => (
                    <RecipeTile key={recipe.id} recipe={recipe} small />
                ))}
            </div>
        </PageContainer>
    )
}

export default SimilarPage
