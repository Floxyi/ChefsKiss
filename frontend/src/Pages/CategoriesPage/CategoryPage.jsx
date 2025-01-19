import { Link } from 'react-router-dom'

import Header from '@Components/Header/Header'
import PageContainer from '@Components/PageContainer/PageContainer'

const CategoryPage = () => {
    return (
        <PageContainer>
            <Header />
            <p>On this page you can view all categories.</p>
            <Link to="/">Home</Link>
        </PageContainer>
    )
}

export default CategoryPage
