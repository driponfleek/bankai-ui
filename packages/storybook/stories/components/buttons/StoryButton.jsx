import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { getBtnStoryPlaygroundComp } from './utils/storyUtils';
import { BTNS_STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionDesign from './sections/SectionDesign';
import SectionImplementation from './sections/SectionImplementation';
import SectionOverview from './sections/button/SectionOverview';
import SectionPlayground from './sections/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryButton = (props) => {
    const baseCls = genSBBaseCls('button');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.buttons.button.title')}
            subTitle={BTNS_STORY_SUB_TITLE}
        >
            <SectionPlayground
                {...props}
                getPlaygroundComp={getBtnStoryPlaygroundComp}
            />
            <SectionOverview />
            <SectionImplementation {...props} />
            <SectionDesign />
        </StoryLayout>
    );
};

export default StoryButton;
