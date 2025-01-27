import { useNavigate, useParams } from 'react-router-dom'

import PageContainer from '@Components/PageContainer'
import Button from '@Components/Button'

const SimilarPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    return (
        <PageContainer>
            <p>On this page you can view similar recipes from {id}.</p>
            <Button onClick={() => navigate('/recipe/1')}>Recipe 1</Button>
            <Button onClick={() => navigate('/recipe/1/comments')}>
                Recipe 1 comments
            </Button>
            <Button onClick={() => navigate('/recipe/1/rating')}>
                Recipe 1 rating
            </Button>
        </PageContainer>
    )
}

export default SimilarPage
