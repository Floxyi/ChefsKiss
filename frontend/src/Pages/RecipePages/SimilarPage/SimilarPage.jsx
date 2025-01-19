import { Link, useParams } from 'react-router-dom'

import Header from '@Components/Header/Header'
import PageContainer from '@Components/PageContainer/PageContainer'

const SimilarPage = () => {
    const { id } = useParams()

    return (
        <PageContainer>
            <Header />
            <p>On this page you can view recipe instructions from {id}.</p>
            <Link to="/">Home</Link>
        </PageContainer>
    )
}

export default SimilarPage
