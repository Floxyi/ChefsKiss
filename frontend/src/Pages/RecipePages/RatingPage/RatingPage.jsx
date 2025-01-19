import { useNavigate, useParams } from 'react-router-dom'

import Header from '@Components/Header/Header'
import PageContainer from '@Components/PageContainer/PageContainer'
import Footer from '@Components/Footer/Footer'
import Button from '@Components/Button/Button'

const RatingPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    return (
        <PageContainer>
            <Header />
            <p>On this page you can view recipe rating from {id}.</p>
            <Button onClick={() => navigate('/recipe/1')}>Recipe 1</Button>
            <Button onClick={() => navigate('/recipe/1/comments')}>
                Recipe 1 comments
            </Button>
            <Button onClick={() => navigate('/recipe/1/similar')}>
                Recipe 1 similar
            </Button>
            <Footer />
        </PageContainer>
    )
}

export default RatingPage
