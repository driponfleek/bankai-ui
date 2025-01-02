import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionImplementation from './sections/SectionImplementation';
import SectionPlayground from './sections/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryBadge = (props) => {
    const baseCls = genSBBaseCls('badge');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.badges.badge.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} />
            <SectionImplementation />
        </StoryLayout>
    );
};

export default StoryBadge;
