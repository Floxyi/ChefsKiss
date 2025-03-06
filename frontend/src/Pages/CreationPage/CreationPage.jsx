import Dropdown from '@Components/Dropdown'
import PageContainer from '@Components/PageContainer'
import Title from '@Components/Title'
import CategoryDropdown from '@Components/CategoryDropdown'
import FileUpload from '@Components/FileUpload'

import ArrowRightIcon from '@Icons/ArrowRightIcon'

import { DifficultyLabels, DifficultyOptions } from '@Enums/Difficulty'
import { TimeLabels, TimeOptions } from '@Enums/Time'

import useRecipeCreation from './Hooks/useRecipeCreation'

const CreationPage = () => {
    const {
        name,
        setName,
        selectedTimeValue,
        setSelectedTimeValue,
        selectedDifficultyValue,
        setSelectedDifficultyValue,
        cookingInstructions,
        setCookingInstructions,
        selectedCategories,
        setSelectedCategories,
        isValid,
        handleCreateClick,
        previews,
        onFileChange
    } = useRecipeCreation()

    return (
        <PageContainer>
            <Title title="Create" margin />
            <div className="grid grid-cols-7 h-full w-full">
                <div className="h-full flex flex-col col-span-6">
                    <div className="flex flex-col flex-1">
                        <div>
                            <p className="text-xl text-primary-dark font-semibold select-none">Name:</p>
                            <input
                                className="mt-2 w-full font-bold text-xl text-primary-dark bg-transparent border-[3px] border-primary-dark pl-4 rounded-full placeholder:font-normal placeholder:select-none placeholder:text-primary-normal focus:outline-none"
                                type="text"
                                value={name}
                                placeholder="Pumpkin Soup"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-2 mt-6">
                            <Dropdown
                                label="Time"
                                options={TimeOptions}
                                value={TimeLabels[selectedTimeValue] ?? 'select'}
                                defaultValue={'select'}
                                onChange={(time) => setSelectedTimeValue(time)}
                            />
                            <Dropdown
                                label="Difficulty"
                                options={DifficultyOptions}
                                value={DifficultyLabels[selectedDifficultyValue] ?? 'select'}
                                defaultValue={'select'}
                                onChange={(difficulty) => setSelectedDifficultyValue(difficulty)}
                            />
                            <div className="col-span-2">
                                <CategoryDropdown
                                    selectedCategories={selectedCategories}
                                    setSelectedCategories={setSelectedCategories}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-xl text-primary-dark font-semibold select-none">Upload Pictures:</p>
                            <FileUpload onFileChange={onFileChange} previews={previews} />
                        </div>
                        <div className="mt-4 flex flex-col flex-1">
                            <p className="text-xl text-primary-dark font-semibold select-none">Cooking Instructions:</p>
                            <div className="flex-1 mb-2">
                                <textarea
                                    className="w-full h-full resize-none font-bold rounded-2xl custom-scrollbar text-primary-dark bg-transparent border-[3px] border-primary-dark p-2 placeholder:font-normal placeholder:text-primary-normal placeholder:select-none focus:outline-none"
                                    value={cookingInstructions}
                                    onChange={(e) => setCookingInstructions(e.target.value)}
                                    placeholder="Write down your cooking instructions here!"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <div className="w-fit h-fit flex flex-col items-center">
                        <div
                            className={`flex w-12 h-12 mb-2 mt-1 rounded-full border-[3px] justify-center items-center
                                ${isValid()
                                    ? 'cursor-pointer text-primary-dark border-primary-dark hover:w-14 hover:h-14 hover:mb-1 hover:mt-0'
                                    : 'cursor-not-allowed text-primary-normal border-primary-normal'
                                }`}
                            onClick={isValid() ? handleCreateClick : null}
                        >
                            <ArrowRightIcon width={48} height={48} stroke={2} />
                        </div>
                        <p
                            className={`text-xl font-semibold select-none ${isValid() ? 'text-primary-dark' : 'text-primary-normal'}`}
                        >
                            Create
                        </p>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

export default CreationPage
