import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON, BADGE_VARIANTS } from './const/storyConst';
import SectionImplementation from './sections/SectionImplementation';
import SectionPlayground from './sections/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const { INFO } = BADGE_VARIANTS;

const StoryBadgeInfo = (props) => {
    const baseCls = genSBBaseCls('badge-info');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.badges.badgeInfo.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} variant={INFO} />
            <SectionImplementation variant="Info" />
        </StoryLayout>
    );
};

export default StoryBadgeInfo;
