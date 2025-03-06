import { Difficulty } from '@Enums/Difficulty'

import SkillLevelBasicIcon from '@Icons/SkillLevelBasicIcon'
import SkillLevelAdvancedIcon from '@Icons/SkillLevelAdvancedIcon'
import SkillLevelIntermediateIcon from '@Icons/SkillLevelIntermediateIcon'

export const getSkillLevelIcon = (difficulty) => {
    switch (difficulty) {
        case Difficulty.EASY.value:
            return <SkillLevelBasicIcon />
        case Difficulty.MEDIUM.value:
            return <SkillLevelIntermediateIcon />
        case Difficulty.HARD.value:
            return <SkillLevelAdvancedIcon />
        default:
            return <SkillLevelBasicIcon />
    }
}
