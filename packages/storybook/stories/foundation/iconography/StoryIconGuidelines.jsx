import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import SectionIntro from './sections/SectionIntro';
import SectionUsage from './sections/SectionUsage';
import SectionBestPractices from './sections/SectionBestPractices';
import SectionAccessibility from './sections/SectionAccessibility';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

import { getLocale } from '../../../utils/localeUtils';
import { getFoundationTitle } from '../../../utils/storiesConfigUtils';

const StoryIconGuidelines = () => {
    const baseCls = genSBBaseCls('foundation-iconography');

    return (
        <StoryLayout
            contextCls={baseCls}
            title={getLocale('stories.foundation.iconography.guidelines.title')}
            subTitle={getFoundationTitle(getLocale('titles.iconography'))}
        >
            <SectionIntro />
            <SectionUsage />
            <SectionBestPractices />
            <SectionAccessibility />
        </StoryLayout>
    );
};

export default StoryIconGuidelines;
