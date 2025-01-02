import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { getBtnStoryPlaygroundComp } from './utils/storyUtils';
import {
    BTNS_STORY_SUB_TITLE,
    PKG_JSON,
    BUTTON_VARIANTS,
} from './const/storyConst';
import SectionPlayground from './sections/SectionPlayground';
import SectionOverview from './sections/button-secondary/SectionOverview';
import SectionImplementation from './sections/SectionImplementation';
import SectionUsage from './sections/button-secondary/SectionUsage';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const { SECONDARY } = BUTTON_VARIANTS;

const StoryButtonSecondary = (props) => {
    const baseCls = genSBBaseCls('button-secondary');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale(
                'stories.components.buttons.buttonSecondary.title',
            )}
            subTitle={BTNS_STORY_SUB_TITLE}
        >
            <SectionPlayground
                {...props}
                variant={SECONDARY}
                getPlaygroundComp={getBtnStoryPlaygroundComp}
            />
            <SectionOverview />
            <SectionImplementation {...props} variant="Secondary" />
            <SectionUsage />
        </StoryLayout>
    );
};

export default StoryButtonSecondary;
