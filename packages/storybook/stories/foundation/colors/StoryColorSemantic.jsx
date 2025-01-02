import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import SectionIntro from './sections/semantic/SectionIntro';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

import { getLocale } from '../../../utils/localeUtils';
import { getFoundationTitle } from '../../../utils/storiesConfigUtils';

const StoryColorSemantic = () => {
    const baseCls = genSBBaseCls('foundation-color-semantic');

    return (
        <StoryLayout
            contextCls={baseCls}
            title={getLocale('stories.foundation.color.semantic.title')}
            subTitle={getFoundationTitle(
                getLocale('stories.foundation.color.categoryTitle'),
            )}
        >
            <SectionIntro />
        </StoryLayout>
    );
};

export default StoryColorSemantic;
