import PageContainer from '@Components/PageContainer'
import Search from '@Components/Search'
import RecipeTile from '@Components/RecipeTile'
import Dropdown from '@Components/Dropdown'
import Title from '@Components/Title'
import { Difficulty, DifficultyLabels, DifficultyOptionsFull } from '@Enums/Difficulty'
import { Time, TimeLabels, TimeOptionsFull } from '@Enums/Time'

import useSearchRecipes from './Hooks/useSearchRecipes'

const SearchPage = () => {
    const {
        recipes,
        categories,
        isLoading,
        error,
        selectedCategory,
        selectedTimeValue,
        selectedDifficultyValue,
        changeCategory,
        changeTime,
        changeDifficulty
    } = useSearchRecipes()

    return (
        <PageContainer>
            <Title title="Search" margin />

            <div className="flex flex-row justify-around pb-8">
                <Search />
            </div>

            <div className="flex flex-row justify-center pb-8">
                <div className="px-2">
                    <Dropdown
                        label="Category"
                        options={['All', ...(categories ? categories.map((category) => category.name) : [])]}
                        value={selectedCategory}
                        defaultValue="All"
                        onChange={changeCategory}
                    />
                </div>

                <div className="px-2">
                    <Dropdown
                        label="Time"
                        options={TimeOptionsFull}
                        value={TimeLabels[selectedTimeValue]}
                        defaultValue={Time.ALL.label}
                        onChange={changeTime}
                    />
                </div>

                <div className="px-2">
                    <Dropdown
                        label="Difficulty"
                        options={DifficultyOptionsFull}
                        value={DifficultyLabels[selectedDifficultyValue]}
                        defaultValue={Difficulty.ALL.label}
                        onChange={changeDifficulty}
                    />
                </div>
            </div>

            {isLoading ? (
                <div className="text-center font-bold text-primary-dark">Loading recipes...</div>
            ) : error ? (
                <p className="text-center font-bold text-primary-dark">{error}</p>
            ) : recipes.length === 0 ? (
                <p className="text-center font-bold text-primary-dark">
                    We are sorry, but we couldn't find any matching recipes. <br /> :(
                </p>
            ) : (
                <div className="grid grid-cols-4 gap-8 w-full">
                    {recipes.map((recipe) => (
                        <RecipeTile key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            )}
        </PageContainer>
    )
}

export default SearchPage
