/* eslint-disable import/prefer-default-export */
import {
    Badge,
    BadgeAffirmative,
    BadgeCautionary,
    BadgeDanger,
    BadgeInfo,
} from '@driponfleek/bankai-ui-badges';

// Constants
import { BADGE_VARIANTS } from '../const/storyConst';

const { AFFIRMATIVE, CAUTIONARY, DANGER, INFO } = BADGE_VARIANTS;

export const getBadgeStoryPlaygroundComp = (VARIANT) => {
    switch (VARIANT) {
        case AFFIRMATIVE:
            return BadgeAffirmative;
        case CAUTIONARY:
            return BadgeCautionary;
        case DANGER:
            return BadgeDanger;
        case INFO:
            return BadgeInfo;
        default:
            return Badge;
    }
};
