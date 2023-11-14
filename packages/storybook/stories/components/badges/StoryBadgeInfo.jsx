import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionPlayground from './sections/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryBadgeInfo = (props) => {
    const baseCls = genSBBaseCls('badge-info');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.badges.badgeInfo.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} />
        </StoryLayout>
    );
};

export default StoryBadgeInfo;
