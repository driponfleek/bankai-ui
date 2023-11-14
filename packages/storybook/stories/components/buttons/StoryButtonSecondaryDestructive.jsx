import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionPlayground from './sections/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryButtonSecondaryDestructive = (props) => {
    const baseCls = genSBBaseCls('btn-secondary-destructive');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale(
                'stories.components.buttons.buttonSecondaryDestructive.title',
            )}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} />
        </StoryLayout>
    );
};

export default StoryButtonSecondaryDestructive;
