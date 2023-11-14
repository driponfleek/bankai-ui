import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionPlayground from './sections/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

// Styles
import './styles/story-tabs.scss';

const StoryTabs = (props) => {
    const baseCls = genSBBaseCls('tabs');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.tabViews.tabs.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} baseCls={baseCls} />
        </StoryLayout>
    );
};

export default StoryTabs;
