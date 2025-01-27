import { useNavigate } from 'react-router-dom'

import PageContainer from '@Components/PageContainer'
import Tile from '@Components/Tile'
import Search from '@Components/Search'
import ArrowRightIcon from '@Icons/ArrowRightIcon'
import SearchIcon from '@Icons/SearchIcon'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <PageContainer useMinDimensions={true}>
            <div className="flex flex-row justify-around">
                <Search />
            </div>
            <div className="font-semibold text-3xl text-primary-dark my-auto pb-4 pt-16 select-none">
                Popular Categories:
            </div>
            <div className="flex flex-row gap-16 w-full justify-between">
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
            <div className="font-semibold text-3xl text-primary-dark my-auto pb-4 pt-16 select-none">
                Popular Recipes:
            </div>
            <div className="flex flex-row gap-16 w-full justify-between">
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
