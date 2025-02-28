import Title from '@Components/Title'
import { Difficulty, DifficultyLabels } from '@Enums/Difficulty'
import { TimeLabels } from '@Enums/Time'
import ClockIcon from '@Icons/ClockIcon'
import SkillLevelBasicIcon from '@Icons/SkillLevelBasicIcon'
import SkillLevelAdvancedIcon from '@Icons/SkillLevelAdvancedIcon'
import SkillLevelIntermediateIcon from '@Icons/SkillLevelIntermediateIcon'

const RecipeHeader = ({ isLoading, recipe }) => {
    const { time, difficulty, categories, images } = recipe ?? {}

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

    const InfoBadge = ({ icon: Icon, label }) => {
        return (
            <div className="flex flex-row items-center gap-1 text-primary-dark border-[2px] border-primary-dark rounded-lg px-1 py-1 overflow-hidden whitespace-nowrap min-w-min text-[16px]">
                {Icon && <Icon width={16} height={16} />}
                {label}
            </div>
        )
    }

    return (
        <div className="mb-8">
            <Title title={isLoading ? 'Recipe' : recipe.title} />
            <div className="flex flex-row items-center gap-8 text-primary-dark mt-8">
                <div className="flex flex-row items-center gap-4 overflow-y-scroll">
                    {images?.map((image, index) => (
                        <img
                            key={index + image}
                            className="h-40 shadow-md rounded-lg object-cover"
                            src={`data:${image.type};base64,${image.data}`}
                            alt={recipe.title}
                        />
                    ))}
                </div>
                <div className="flex flex-col items-start gap-2 text-sm text-primary-dark flex-wrap min-w-fit">
                    <InfoBadge icon={ClockIcon} label={TimeLabels[time]} />
                    <InfoBadge icon={SkillLevelIcon} label={DifficultyLabels[difficulty]} />
                    <div className="flex flex-row items-start gap-2 text-sm text-primary-dark mt-2 flex-wrap">
                        {categories?.map((category) => (
                            <InfoBadge key={category} label={category} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeHeader
