import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import pkgJSON from '@driponfleek/bankai-ui-lists/package.json';
// import SectionAccessibility from './sections/button-default/SectionAccessibility';
// import SectionDesign from './sections/SectionDesign';
// import SectionImplementation from './sections/button-default/SectionImplementation';
// import SectionOverview from './sections/button-default/SectionOverview';
import SectionPlayground from './sections/list-item/SectionPlayground';
// import SectionUsage from './sections/button-default/SectionUsage';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getComponentsTitle } from '../../../utils/storiesConfigUtils';
import { getLocale } from '../../../utils/localeUtils';

const StoryListItem = (props) => {
    const baseCls = genSBBaseCls('list-item');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={pkgJSON.version}
            title={getLocale('stories.components.lists.listItem.title')}
            subTitle={getComponentsTitle(
                getLocale('stories.components.lists.categoryTitle'),
            )}
        >
            <SectionPlayground {...props} />
            {/* <SectionOverview />
            <SectionImplementation {...props} />
            <SectionUsage />
            <SectionAccessibility />
            <SectionDesign /> */}
        </StoryLayout>
    );
};

export default StoryListItem;
