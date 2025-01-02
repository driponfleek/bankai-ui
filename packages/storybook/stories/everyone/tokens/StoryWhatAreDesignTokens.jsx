import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE } from './const/storyConst';
import SectionIntro from './sections/what-are-design-tokens/SectionIntro';
import SectionBridgeTheGap from './sections/what-are-design-tokens/SectionBridgeTheGap';
import SectionDesignTokenLifecycle from './sections/what-are-design-tokens/SectionDesignTokenLifecycle';
import SectionWhyAreTokensImportant from './sections/what-are-design-tokens/SectionWhyAreTokensImportant';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryWhatAreDesignTokens = () => {
    const baseCls = genSBBaseCls('what-are-design-tokens');

    return (
        <StoryLayout
            contextCls={baseCls}
            title={getLocale(
                'stories.everyone.designTokens.whatAreDesignTokens.title',
            )}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionIntro />
            <SectionWhyAreTokensImportant />
            <SectionDesignTokenLifecycle />
            <SectionBridgeTheGap />
        </StoryLayout>
    );
};

export default StoryWhatAreDesignTokens;
