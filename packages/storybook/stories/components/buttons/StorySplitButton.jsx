import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { getSplitBtnStoryPlaygroundComp } from './utils/storyUtils';
import { SPLIT_BTNS_STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionImplementation from './sections/split-button/SectionImplementation';
import SectionPlayground from './sections/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StorySplitButton = (props) => {
    const baseCls = genSBBaseCls('split-btn');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.buttons.splitButton.title')}
            subTitle={SPLIT_BTNS_STORY_SUB_TITLE}
        >
            <SectionPlayground
                {...props}
                getPlaygroundComp={getSplitBtnStoryPlaygroundComp}
            />
            <SectionImplementation />
        </StoryLayout>
    );
};

export default StorySplitButton;
