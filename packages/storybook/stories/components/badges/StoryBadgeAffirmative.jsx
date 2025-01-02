import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON, BADGE_VARIANTS } from './const/storyConst';
import SectionImplementation from './sections/SectionImplementation';
import SectionPlayground from './sections/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const { AFFIRMATIVE } = BADGE_VARIANTS;

const StoryBadgeAffirmative = (props) => {
    const baseCls = genSBBaseCls('badge-affirmative');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale(
                'stories.components.badges.badgeAffirmative.title',
            )}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} variant={AFFIRMATIVE} />
            <SectionImplementation variant="Affirmative" />
        </StoryLayout>
    );
};

export default StoryBadgeAffirmative;
