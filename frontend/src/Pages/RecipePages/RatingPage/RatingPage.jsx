import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import PageContainer from '@Components/PageContainer'
import RecipeHeader from '@Components/RecipeHeader'
import RecipeNavigation from '@Components/RecipeNavigation'

const RatingPage = () => {
    const { id } = useParams()

    const [recipe, setRecipe] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`/api/recipe/?id=${id}`)
            .then((response) => {
                setRecipe(response.data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching the categories:', error)
                setIsLoading(false)
            })
    }, [id])

    return (
        <PageContainer>
            <div>
                <RecipeHeader isLoading={isLoading} recipe={recipe} />
            </div>

            <RecipeNavigation id={id} />

            <p>On this page you can view recipe rating from {id}.</p>
        </PageContainer>
    )
}

export default RatingPage
