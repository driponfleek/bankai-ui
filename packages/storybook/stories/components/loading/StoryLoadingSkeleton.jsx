import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionPlayground from './sections/loading-skeleton/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

// Styles
import './styles/story-loading-skeleton.scss';

const StoryLoadingSkeleton = (props) => {
    const baseCls = genSBBaseCls('loading-skeleton');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale(
                'stories.components.loading.loadingSkeleton.title',
            )}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} />
        </StoryLayout>
    );
};

export default StoryLoadingSkeleton;
