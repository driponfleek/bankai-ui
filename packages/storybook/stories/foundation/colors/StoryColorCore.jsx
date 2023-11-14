import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import SectionNeutrals from './sections/core/SectionNeutrals';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

import { getLocale } from '../../../utils/localeUtils';
import { getFoundationTitle } from '../../../utils/storiesConfigUtils';

const StoryColorCore = () => {
    const baseCls = genSBBaseCls('foundation-color-core');

    return (
        <StoryLayout
            contextCls={baseCls}
            title={getLocale('stories.foundation.color.core.title')}
            subTitle={getFoundationTitle(
                getLocale('stories.foundation.color.categoryTitle'),
            )}
        >
            <SectionNeutrals />
        </StoryLayout>
    );
};

export default StoryColorCore;
