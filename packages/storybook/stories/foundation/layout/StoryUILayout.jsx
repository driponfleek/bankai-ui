import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import SectionIntro from './sections/SectionIntro';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

import { getLocale } from '../../../utils/localeUtils';

const StoryUILayout = () => {
    const baseCls = genSBBaseCls('foundation-layout');

    return (
        <StoryLayout
            contextCls={baseCls}
            title={getLocale('stories.foundation.structure.layout.title')}
            subTitle={getLocale('titles.foundation')}
        >
            <SectionIntro />
        </StoryLayout>
    );
};

export default StoryUILayout;
