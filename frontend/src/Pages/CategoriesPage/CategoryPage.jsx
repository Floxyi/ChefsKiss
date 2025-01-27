import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Tile from '@Components/Tile'
import PageContainer from '@Components/PageContainer'
import ArrowRightIcon from '@Icons/ArrowRightIcon'

import styles from './CategoryPage.module.css'

const CategoryPage = () => {
    const navigate = useNavigate()

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
            <div className={styles.contentTitle}>Categories</div>
            <div className={styles.categoryContainer}>
                {isLoading ? (
                    <div className={styles.spacer}>Loading categories...</div>
                ) : (
                    categories.map((category) => (
                        <Tile
                            key={category.id}
                            title={category.name}
                            subtitle={`${category.count} recipe${category.count === 1 ? '' : 's'}`}
                            icon={<ArrowRightIcon />}
                            onClick={() => navigate('/search')}
                        />
                    ))
                )}
            </div>
        </PageContainer>
    )
}

export default CategoryPage
