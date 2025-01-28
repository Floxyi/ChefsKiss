import { useNavigate } from 'react-router-dom'

import Button from '@Components/Button'

const RecipeNavigation = ({ id }) => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-row gap-16 mb-12">
            <Button onClick={() => navigate(`/recipe/${id}`)}>Recipe</Button>
            <Button onClick={() => navigate(`/recipe/${id}/comments`)}>
                Comments
            </Button>
            <Button onClick={() => navigate(`/recipe/${id}/rating`)}>
                Rating
            </Button>
            <Button onClick={() => navigate(`/recipe/${id}/similar`)}>
                Similar
            </Button>
        </div>
    )
}

export default RecipeNavigation
