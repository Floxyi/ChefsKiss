import Title from '@Components/Title'
import { DifficultyLabels } from '@Enums/Difficulty'
import { TimeLabels } from '@Enums/Time'
import ClockIcon from '@Icons/ClockIcon'
import { getSkillLevelIcon } from '@Infrastructure/SkillLevelIconHelper'

const RecipeHeader = ({ isLoading, recipe }) => {
    const { time, difficulty, categories, images } = recipe ?? {}

    const InfoBadge = ({ icon: Icon, label }) => {
        return (
            <div className="flex flex-row items-center gap-1 text-primary-dark border-[2px] border-primary-dark rounded-lg px-1 py-1 overflow-hidden whitespace-nowrap min-w-min text-[16px]">
                {Icon}
                {label}
            </div>
        )
    }

    return (
        <div className="mb-8">
            <Title title={isLoading ? 'Recipe' : recipe.title} />
            <div className="grid grid-cols-3 gap-8 text-primary-dark mt-8">
                <div className="col-span-2 flex flex-row items-center gap-4 custom-scrollbar-no-margin overflow-x-scroll">
                    {images?.map((image, index) => (
                        <img
                            key={index + image}
                            className="h-72 shadow-md rounded-lg object-cover"
                            src={`data:${image.type};base64,${image.data}`}
                            alt={recipe.title}
                        />
                    ))}
                </div>
                <div className="flex flex-col items-start gap-2 text-sm text-primary-dark flex-wrap min-w-fit">
                    <div className="flex flex-row items-center gap-4">
                        <p className="text-xl font-bold">Time:</p>
                        <InfoBadge icon={<ClockIcon width={18} height={18} />} label={TimeLabels[time]} />
                    </div>

                    <div className="flex flex-row items-center gap-4 mt-2">
                        <p className="text-xl font-bold">Difficulty:</p>
                        <InfoBadge icon={getSkillLevelIcon(difficulty, 18)} label={DifficultyLabels[difficulty]} />
                    </div>


                    <div className="flex flex-row items-start gap-2 text-sm text-primary-dark mt-2 flex-wrap">
                        <p className="text-xl font-bold pr-2">Categories:</p>
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
