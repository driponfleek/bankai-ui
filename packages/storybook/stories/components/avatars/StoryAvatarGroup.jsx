import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionImplementation from './sections/avatar-group/SectionImplementation';
import SectionPlayground from './sections/avatar-group/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryAvatarGroup = (props) => {
    const baseCls = genSBBaseCls('avatar-group');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.avatars.avatarGroup.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} />
            <SectionImplementation />
        </StoryLayout>
    );
};

export default StoryAvatarGroup;
