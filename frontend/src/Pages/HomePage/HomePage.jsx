import { useNavigate } from 'react-router-dom'

import SearchIcon from '@Icons/SearchIcon'
import Header from '@Components/Header/Header'
import Footer from '@Components/Footer/Footer'
import ScreenPageContainer from '@Components/ScreenPageContainer/ScreenPageContainer'
import Tile from '@Components/Tile/Tile'
import ArrowRightIcon from '@Icons/ArrowIcon'
import HomeSearch from '@Components/HomeSearch/HomeSearch'

import './HomePage.css'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <ScreenPageContainer>
            <Header />
            <div className="homeContainer">
                <div className="homeContentContainer">
                    <div className="homeSearchWrapper">
                        <HomeSearch />
                    </div>
                    <div className="contentTitle">Popular Categories:</div>
                    <div className="categoryContainer">
                        <Tile
                            text="Category 1"
                            icon={<ArrowRightIcon />}
                            onClick={() => navigate('/search')}
                        />
                        <Tile
                            text="Category 2"
                            icon={<ArrowRightIcon />}
                            onClick={() => navigate('/search')}
                        />
                        <Tile
                            text="Category 4"
                            icon={<ArrowRightIcon />}
                            onClick={() => navigate('/search')}
                        />
                        <Tile
                            text="Category 5"
                            icon={<ArrowRightIcon />}
                            onClick={() => navigate('/search')}
                        />
                        <Tile text="View all categories" />
                    </div>
                    <div className="contentTitle">Popular Recipes:</div>
                    <div className="recipeContainer">
                        <Tile
                            text="Recipe 1"
                            icon={<SearchIcon stroke={3} />}
                            onClick={() => navigate('/recipe/1')}
                        />
                        <Tile
                            text="Recipe 2"
                            icon={<SearchIcon stroke={3} />}
                            onClick={() => navigate('/recipe/1')}
                        />
                        <Tile
                            text="Recipe 4"
                            icon={<SearchIcon stroke={3} />}
                            onClick={() => navigate('/recipe/1')}
                        />
                        <Tile
                            text="Recipe 5"
                            icon={<SearchIcon stroke={3} />}
                            onClick={() => navigate('/recipe/1')}
                        />
                        <Tile
                            text="Recipe 6"
                            icon={<SearchIcon stroke={3} />}
                            onClick={() => navigate('/recipe/1')}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </ScreenPageContainer>
    )
}

export default HomePage
