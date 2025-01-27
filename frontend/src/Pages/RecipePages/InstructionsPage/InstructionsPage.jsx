import { useNavigate, useParams } from 'react-router-dom'

import PageContainer from '@Components/PageContainer'
import Button from '@Components/Button'

const InstructionsPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    return (
        <PageContainer>
            <p>On this page you can view recipe instructions from {id}.</p>
            <Button onClick={() => navigate('/recipe/1/comments')}>
                Recipe 1 comments
            </Button>
            <Button onClick={() => navigate('/recipe/1/rating')}>
                Recipe 1 rating
            </Button>
            <Button onClick={() => navigate('/recipe/1/similar')}>
                Recipe 1 similar
            </Button>
        </PageContainer>
    )
}

export default InstructionsPage
