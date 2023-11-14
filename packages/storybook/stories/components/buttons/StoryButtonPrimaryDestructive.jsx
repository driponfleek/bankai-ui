import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionPlayground from './sections/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryButtonPrimaryDestructive = (props) => {
    const baseCls = genSBBaseCls('btn-primary-destructive');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale(
                'stories.components.buttons.buttonPrimaryDestructive.title',
            )}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} />
        </StoryLayout>
    );
};

export default StoryButtonPrimaryDestructive;
