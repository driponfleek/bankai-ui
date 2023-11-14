import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { getBtnStoryPlaygroundComp } from './utils/storyUtils';
import {
    BTNS_STORY_SUB_TITLE,
    PKG_JSON,
    BUTTON_VARIANTS,
} from './const/storyConst';
import SectionDesign from './sections/SectionDesign';
import SectionImplementation from './sections/SectionImplementation';
import SectionOverview from './sections/button-primary/SectionOverview';
import SectionPlayground from './sections/SectionPlayground';
import SectionUsage from './sections/button-primary/SectionUsage';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const { PRIMARY } = BUTTON_VARIANTS;

const StoryButtonPrimary = (props) => {
    const baseCls = genSBBaseCls('button-primary');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.buttons.buttonPrimary.title')}
            subTitle={BTNS_STORY_SUB_TITLE}
        >
            <SectionPlayground
                {...props}
                variant={PRIMARY}
                getPlaygroundComp={getBtnStoryPlaygroundComp}
            />
            <SectionOverview />
            <SectionImplementation {...props} variant="Primary" />
            <SectionUsage />
            <SectionDesign />
        </StoryLayout>
    );
};

export default StoryButtonPrimary;
