import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '@Components/Header/Header'
import PageContainer from '@Components/PageContainer/PageContainer'
import Footer from '@Components/Footer/Footer'

const CategoryPage = () => {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get('/api/categories')
            .then((response) => {
                setCategories(response.data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching the categories:', error)
                setIsLoading(false)
            })
    }, [])

    return (
        <PageContainer>
            <Header />
            <p>On this page you can view all categories.</p>

            {isLoading ? (
                <p>Loading categories...</p>
            ) : (
                categories.map((category) => (
                    <div key={category.id}>
                        <h2>{category.name}</h2>
                    </div>
                ))
            )}

            <Footer />
        </PageContainer>
    )
}

export default CategoryPage
