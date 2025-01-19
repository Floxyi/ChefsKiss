import { Link, useParams } from 'react-router-dom'

import Header from '@Components/Header/Header'
import PageContainer from '@Components/PageContainer/PageContainer'
import Footer from '@Components/Footer/Footer'

const CommentsPage = () => {
    const { id } = useParams()

    return (
        <PageContainer>
            <Header />
            <p>On this page you can view recipe comments from {id}.</p>
            <Link to="/">Home</Link>
            <Footer />
        </PageContainer>
    )
}

export default CommentsPage
