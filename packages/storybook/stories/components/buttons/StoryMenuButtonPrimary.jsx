import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON, BUTTONS } from './const/storyConst';
import SectionPlayground from './sections/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

// Constants

const { MENU_BUTTON } = BUTTONS;

const StoryMenuButtonPrimary = (props) => {
    const baseCls = genSBBaseCls('menu-btn-default');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale(
                'stories.components.buttons.menuButtonPrimary.title',
            )}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} compName={MENU_BUTTON} />
        </StoryLayout>
    );
};

export default StoryMenuButtonPrimary;
