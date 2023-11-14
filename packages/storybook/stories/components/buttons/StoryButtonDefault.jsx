import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionAccessibility from './sections/button-default/SectionAccessibility';
import SectionDesign from './sections/SectionDesign';
import SectionImplementation from './sections/button-default/SectionImplementation';
import SectionOverview from './sections/button-default/SectionOverview';
import SectionPlayground from './sections/SectionPlayground';
import SectionUsage from './sections/button-default/SectionUsage';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

// TODO: Need to provide guidance on:
// - Icon Placement
// - Button Heirarchy
const StoryButtonDefault = (props) => {
    const baseCls = genSBBaseCls('btn-default');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.buttons.buttonDefault.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} />
            <SectionOverview />
            <SectionImplementation {...props} />
            <SectionUsage />
            <SectionAccessibility />
            <SectionDesign />
        </StoryLayout>
    );
};

export default StoryButtonDefault;
