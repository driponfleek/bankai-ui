import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { BTNS_STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionIntro from './sections/button-guidelines/SectionIntro';
import SectionAccessibility from './sections/button-guidelines/SectionAccessibility';
// import SectionImplementation from './sections/button/SectionImplementation';
// import SectionOverview from './sections/button/SectionOverview';
import SectionUsage from './sections/button-guidelines/SectionUsage';
// import SectionUsageWhenToUse from './sections/button-guidelines/SectionUsageWhenToUse';
// import SectionUsageWhenToAvoid from './sections/button-guidelines/SectionWhenToAvoid';
import SectionBestPractices from './sections/button-guidelines/SectionBestPractices';
// import SectionIconsInButtons from './sections/button-guidelines/SectionIconsInButtons';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

// TODO: Need to provide guidance on:
// - Icon Placement
// - Button Heirarchy
const StoryButtonGuidelines = () => {
    const baseCls = genSBBaseCls('button-guidelines');
    const btnText = 'Button Text';

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale(
                'stories.components.buttons.buttonGuidelines.title',
            )}
            subTitle={BTNS_STORY_SUB_TITLE}
        >
            <SectionIntro />
            <SectionUsage btnText={btnText} baseCls={baseCls} />
            {/* <SectionUsageWhenToAvoid /> */}
            {/* <SectionIconsInButtons baseCls={baseCls} btnText={btnText} /> */}
            <SectionAccessibility btnText={btnText} />
            <SectionBestPractices />
            {/* <SectionOverview /> */}
            {/* <SectionImplementation {...props} /> */}
            {/* <SectionDesign /> */}
        </StoryLayout>
    );
};

export default StoryButtonGuidelines;
