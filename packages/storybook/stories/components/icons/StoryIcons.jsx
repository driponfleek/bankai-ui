import packageJSON from '@driponfleek/bankai-ui-icons/package.json';
import {
    StoryLayout,
    StorySection,
    genSBBaseCls,
} from '@driponfleek/bankai-lib-storybook';
import SectionPlayground from './sections/SectionPlayground';
import SectionImplementation from './sections/SectionImplementation';
import SectionFurtherReading from './sections/SectionFurtherReading';

// Utils
import { getLocale } from '../../../utils/localeUtils';
import { getComponentsTitle } from '../../../utils/storiesConfigUtils';

// Data

const StoryIcons = () => {
    return (
        <StoryLayout
            contextCls={genSBBaseCls('guide-icons')}
            packageVer={packageJSON.version}
            title={getLocale('stories.components.iconography.icons.title')}
            subTitle={getComponentsTitle(
                getLocale('stories.components.iconography.categoryTitle'),
            )}
        >
            <StorySection>
                <SectionPlayground />
                <SectionImplementation />
                <SectionFurtherReading />
            </StorySection>
        </StoryLayout>
    );
};

export default StoryIcons;
