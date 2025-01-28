import { useNavigate } from 'react-router-dom'

import PageContainer from '@Components/PageContainer'
import Search from '@Components/Search'
import Tile from '@Components/Tile'
import Dropdown from '@Components/Dropdown'
import { Difficulty, DifficultyLabels } from '@Enums/Difficulty'
import { Time, TimeLabels } from '@Enums/Time'
import useSearchRecipes from './useSearchRecipes'
import ArrowRightIcon from '@Icons/ArrowRightIcon'

const SearchPage = () => {
    const navigate = useNavigate()

    const {
        recipes,
        categories,
        isLoading,
        error,
        selectedCategory,
        selectedTime,
        selectedDifficulty,
        changeCategory,
        changeTime,
        changeDifficulty
    } = useSearchRecipes()

    return (
        <PageContainer>
            <div className="flex flex-row justify-around pb-8">
                <Search />
            </div>

            <Dropdown
                label="Category"
                options={[
                    'All',
                    ...categories.map((category) => category.name)
                ]}
                value={selectedCategory}
                onChange={changeCategory}
            />

            <Dropdown
                label="Time"
                options={[
                    'All',
                    ...Object.values(Time).map((item) => item.label)
                ]}
                value={selectedTime}
                onChange={changeTime}
            />

            <Dropdown
                label="Difficulty"
                options={[
                    'All',
                    ...Object.values(Difficulty).map((item) => item.label)
                ]}
                value={selectedDifficulty}
                onChange={changeDifficulty}
            />

            <div className="flex flex-row gap-16 w-full flex-wrap justify-center">
                {isLoading ? (
                    <div className="flex flex-row justify-center items-center min-w-full min-h-full text-primary-dark">
                        Loading recipes...
                    </div>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    recipes.map((recipe) => (
                        <Tile
                            key={recipe.id}
                            title={recipe.title}
                            subtitle={`${recipe.categories.join(', ')}, ${TimeLabels[recipe.time]}, ${DifficultyLabels[recipe.difficulty]}`}
                            icon={<ArrowRightIcon />}
                            onClick={() => navigate(`/recipe/${recipe.id}`)}
                        />
                    ))
                )}
            </div>
        </PageContainer>
    )
}

export default SearchPage
