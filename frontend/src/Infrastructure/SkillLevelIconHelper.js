import { Difficulty } from '@Enums/Difficulty'

import SkillLevelBasicIcon from '@Icons/SkillLevelBasicIcon'
import SkillLevelAdvancedIcon from '@Icons/SkillLevelAdvancedIcon'
import SkillLevelIntermediateIcon from '@Icons/SkillLevelIntermediateIcon'

export const SkillLevelIcon = ({ difficulty }) => {
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
