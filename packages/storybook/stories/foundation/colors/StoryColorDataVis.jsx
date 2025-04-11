import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import SectionIntro from './sections/data/SectionIntro';
import SectionFoundationalColors from './sections/data/SectionFoundationalColors';
import SectionDivergingColors from './sections/data/SectionDivergingColors';
import SectionQualitativeColors from './sections/data/SectionQualitativeColors';
import SectionSequentialColors from './sections/data/SectionSequentialColors';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

import { getLocale } from '../../../utils/localeUtils';
import { getFoundationTitle } from '../../../utils/storiesConfigUtils';

const StoryColorDataVis = () => {
    const baseCls = genSBBaseCls('foundation-color-data-vis');

    return (
        <StoryLayout
            contextCls={baseCls}
            title={getLocale('stories.foundation.color.dataVis.title')}
            subTitle={getFoundationTitle(
                getLocale('stories.foundation.color.categoryTitle'),
            )}
        >
            <SectionIntro />
            <SectionFoundationalColors />
            <SectionDivergingColors />
            <SectionQualitativeColors />
            <SectionSequentialColors />
        </StoryLayout>
    );
};

export default StoryColorDataVis;
