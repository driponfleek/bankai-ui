import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { getLocale } from '../../../../utils/localeUtils';
import { getEveryoneTitle } from '../../../../utils/storiesConfigUtils';

export const STORY_SUB_TITLE = getEveryoneTitle(
    getLocale('stories.everyone.designTokens.categoryTitle'),
);

export const BASE_CLS_NAMING_CONVENTION_STRAT = genSBBaseCls(
    'design-token-naming-convention-and-strat',
);
