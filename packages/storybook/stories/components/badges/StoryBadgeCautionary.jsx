import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON, BADGE_VARIANTS } from './const/storyConst';
import SectionImplementation from './sections/SectionImplementation';
import SectionPlayground from './sections/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const { CAUTIONARY } = BADGE_VARIANTS;

const StoryBadgeCautionary = (props) => {
    const baseCls = genSBBaseCls('badge-cautionary');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.badges.badgeCautionary.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} variant={CAUTIONARY} />
            <SectionImplementation variant="Cautionary" />
        </StoryLayout>
    );
};

export default StoryBadgeCautionary;
