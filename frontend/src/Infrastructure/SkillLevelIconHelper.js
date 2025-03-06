import { Difficulty } from '@Enums/Difficulty'

import SkillLevelBasicIcon from '@Icons/SkillLevelBasicIcon'
import SkillLevelAdvancedIcon from '@Icons/SkillLevelAdvancedIcon'
import SkillLevelIntermediateIcon from '@Icons/SkillLevelIntermediateIcon'

export const getSkillLevelIcon = (difficulty, size = 24) => {
    switch (difficulty) {
        case Difficulty.EASY.value:
            return <SkillLevelBasicIcon width={size} height={size} />;
        case Difficulty.MEDIUM.value:
            return <SkillLevelIntermediateIcon width={size} height={size} />;
        case Difficulty.HARD.value:
            return <SkillLevelAdvancedIcon width={size} height={size} />;
        default:
            return <SkillLevelBasicIcon width={size} height={size} />;
    }
}
