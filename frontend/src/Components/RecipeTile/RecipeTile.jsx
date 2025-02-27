import { useNavigate } from 'react-router-dom'

import burger from '@Images/burger.jpeg'
import { Difficulty, DifficultyLabels } from '@Enums/Difficulty'
import { TimeLabels } from '@Enums/Time'
import ClockIcon from '@Icons/ClockIcon'
import SkillLevelBasicIcon from '@Icons/SkillLevelBasicIcon'
import SkillLevelAdvancedIcon from '@Icons/SkillLevelAdvancedIcon'
import SkillLevelIntermediateIcon from '@Icons/SkillLevelIntermediateIcon'
import VLabelIcon from '@Icons/VLabelIcon'

const RecipeTile = ({ recipe }) => {
    const navigate = useNavigate()

    const { id, title, time, difficulty, categories, titleImage } = recipe

    const isVegan = categories.some((category) => category.toLowerCase() === 'vegan')
    const isVegetarian = categories.some((category) => category.toLowerCase() === 'vegetarian')

    const SkillLevelIcon = ({ difficulty }) => {
        switch (difficulty) {
            case Difficulty.EASY.value:
                return <SkillLevelBasicIcon width={14} height={14} />
            case Difficulty.MEDIUM.value:
                return <SkillLevelIntermediateIcon width={14} height={14} />
            case Difficulty.HARD.value:
                return <SkillLevelAdvancedIcon width={14} height={14} />
            default:
                return <SkillLevelBasicIcon width={14} height={14} />
        }
    }

    return (
        <div
            className="bg-primary-background border-[3px] border-primary-dark rounded-xl cursor-pointer select-none p-4 hover:scale-105 hover:shadow-xl"
            onClick={() => navigate(`/recipe/${id}`)}
        >
            <img
                className="w-full h-40 rounded-lg object-cover"
                src={recipe?.titleImage ? `data:${titleImage.type};base64,${titleImage.data}` : burger}
                alt={recipe.title}
            />

            <div className="flex flex-col items-start max-w-72 mt-3">
                <div className="flex flex-row items-center gap-2 max-w-72">
                    <div className="font-bold text-primary-dark text-xl">{title}</div>
                    {isVegan && (
                        <div className="text-green-800">
                            <VLabelIcon width={20} height={20} />
                        </div>
                    )}
                    {isVegetarian && !isVegan && (
                        <div className="text-yellow-500">
                            <VLabelIcon width={20} height={20} />
                        </div>
                    )}
                </div>
                <div className="flex flex-row items-center gap-2 text-sm text-primary-dark mt-2 max-w-72 flex-wrap">
                    <div className="flex flex-row items-center gap-1 text-primary-dark border-[2px] border-primary-dark rounded-lg px-1 overflow-hidden whitespace-nowrap min-w-min">
                        <ClockIcon width={14} height={14} />
                        {TimeLabels[time]}
                    </div>
                    <div className="flex flex-row items-center gap-1 text-primary-dark border-[2px] border-primary-dark rounded-lg px-1 overflow-hidden min-w-min">
                        <SkillLevelIcon difficulty={difficulty} />
                        {DifficultyLabels[difficulty]}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeTile
