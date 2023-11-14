import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionPlayground from './sections/loading-bars/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryLoadingBars = (props) => {
    const baseCls = genSBBaseCls('loading-bars');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.loading.loadingBars.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} />
        </StoryLayout>
    );
};

export default StoryLoadingBars;
