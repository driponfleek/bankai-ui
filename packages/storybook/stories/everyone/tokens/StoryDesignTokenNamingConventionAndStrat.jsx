import {
    STORY_SUB_TITLE,
    BASE_CLS_NAMING_CONVENTION_STRAT,
} from './const/storyConst';
import SectionIntro from './sections/naming-convention-and-strat/SectionIntro';
import SectionComponentTokens from './sections/naming-convention-and-strat/SectionComponentTokens';
import SectionCoreTokens from './sections/naming-convention-and-strat/SectionCoreTokens';
import SectionSemanticTokens from './sections/naming-convention-and-strat/SectionSemanticTokens';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryDesignTokenNamingConventionAndStrat = () => {
    return (
        <StoryLayout
            contextCls={BASE_CLS_NAMING_CONVENTION_STRAT}
            title={getLocale(
                'stories.everyone.designTokens.namingAndStrategy.title',
            )}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionIntro />
            <SectionCoreTokens />
            <SectionSemanticTokens />
            <SectionComponentTokens />
        </StoryLayout>
    );
};

export default StoryDesignTokenNamingConventionAndStrat;
