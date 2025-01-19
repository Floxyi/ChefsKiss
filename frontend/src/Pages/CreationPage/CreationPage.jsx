import { Link } from 'react-router-dom'

import Header from '@Components/Header/Header'
import PageContainer from '@Components/PageContainer/PageContainer'

const CreationPage = () => {
    return (
        <PageContainer>
            <Header />
            <p>On this page you can create recipes.</p>
            <Link to="/">Home</Link>
        </PageContainer>
    )
}

export default CreationPage
