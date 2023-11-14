import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { getSplitBtnStoryPlaygroundComp } from './utils/storyUtils';
import {
    SPLIT_BTNS_STORY_SUB_TITLE,
    PKG_JSON,
    BUTTON_VARIANTS,
} from './const/storyConst';
import SectionImplementation from './sections/split-button/SectionImplementation';
import SectionPlayground from './sections/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const { SECONDARY } = BUTTON_VARIANTS;

const StorySplitButtonSecondary = (props) => {
    const baseCls = genSBBaseCls('split-button-secondary');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale(
                'stories.components.buttons.splitButtonSecondary.title',
            )}
            subTitle={SPLIT_BTNS_STORY_SUB_TITLE}
        >
            <SectionPlayground
                {...props}
                getPlaygroundComp={getSplitBtnStoryPlaygroundComp}
                variant={SECONDARY}
            />
            <SectionImplementation variant="Secondary" />
        </StoryLayout>
    );
};

export default StorySplitButtonSecondary;
