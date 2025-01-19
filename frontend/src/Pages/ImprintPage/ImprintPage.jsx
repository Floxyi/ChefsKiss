import { Link } from 'react-router-dom'

import Header from '@Components/Header/Header'
import PageContainer from '@Components/PageContainer/PageContainer'

const ImprintPage = () => {
    return (
        <PageContainer>
            <Header />
            <p>On this page you can view the imprint.</p>
            <Link to="/">Home</Link>
        </PageContainer>
    )
}

export default ImprintPage
