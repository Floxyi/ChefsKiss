import { useNavigate } from 'react-router-dom'

import SearchIcon from '@Icons/SearchIcon'
import PageContainer from '@Components/PageContainer'
import Tile from '@Components/Tile'
import ArrowRightIcon from '@Icons/ArrowRightIcon'
import Search from '@Components/Search'

import styles from './HomePage.module.css'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <PageContainer useMinDimensions={true}>
            <div className={styles.homeSearchWrapper}>
                <Search />
            </div>
            <div className={styles.contentTitle}>Popular Categories:</div>
            <div className={styles.categoryContainer}>
                <Tile
                    title="Category 1"
                    icon={<ArrowRightIcon />}
                    onClick={() => navigate('/search')}
                />
                <Tile
                    title="Category 2"
                    icon={<ArrowRightIcon />}
                    onClick={() => navigate('/search')}
                />
                <Tile
                    title="Category 4"
                    icon={<ArrowRightIcon />}
                    onClick={() => navigate('/search')}
                />
                <Tile
                    title="Category 5"
                    icon={<ArrowRightIcon />}
                    onClick={() => navigate('/search')}
                />
                <Tile
                    title="View all categories"
                    onClick={() => navigate('/categories')}
                />
            </div>
            <div className={styles.contentTitle}>Popular Recipes:</div>
            <div className={styles.recipeContainer}>
                <Tile
                    title="Recipe 1"
                    icon={<SearchIcon stroke={3} />}
                    onClick={() => navigate('/recipe/1')}
                />
                <Tile
                    title="Recipe 2"
                    icon={<SearchIcon stroke={3} />}
                    onClick={() => navigate('/recipe/1')}
                />
                <Tile
                    title="Recipe 4"
                    icon={<SearchIcon stroke={3} />}
                    onClick={() => navigate('/recipe/1')}
                />
                <Tile
                    title="Recipe 5"
                    icon={<SearchIcon stroke={3} />}
                    onClick={() => navigate('/recipe/1')}
                />
                <Tile
                    title="Recipe 6"
                    icon={<SearchIcon stroke={3} />}
                    onClick={() => navigate('/recipe/1')}
                />
            </div>
        </PageContainer>
    )
}

export default HomePage
