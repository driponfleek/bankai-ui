import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { getMenuBtnStoryPlaygroundComp } from './utils/storyUtils';
import {
    MENU_BTNS_STORY_SUB_TITLE,
    PKG_JSON,
    BUTTON_VARIANTS,
} from './const/storyConst';
import SectionImplementation from './sections/menu-button/SectionImplementation';
import SectionPlayground from './sections/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const { PRIMARY } = BUTTON_VARIANTS;

const StoryMenuButtonPrimary = (props) => {
    const baseCls = genSBBaseCls('menu-btn-default');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale(
                'stories.components.buttons.menuButtonPrimary.title',
            )}
            subTitle={MENU_BTNS_STORY_SUB_TITLE}
        >
            <SectionPlayground
                {...props}
                variant={PRIMARY}
                getPlaygroundComp={getMenuBtnStoryPlaygroundComp}
            />
            <SectionImplementation variant="Primary" />
        </StoryLayout>
    );
};

export default StoryMenuButtonPrimary;
