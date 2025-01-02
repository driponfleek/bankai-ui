import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { getMenuBtnStoryPlaygroundComp } from './utils/storyUtils';
import { MENU_BTNS_STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionImplementation from './sections/menu-button/SectionImplementation';
import SectionPlayground from './sections/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryMenuButton = (props) => {
    const baseCls = genSBBaseCls('menu-btn');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.buttons.menuButton.title')}
            subTitle={MENU_BTNS_STORY_SUB_TITLE}
        >
            <SectionPlayground
                {...props}
                getPlaygroundComp={getMenuBtnStoryPlaygroundComp}
            />
            <SectionImplementation />
        </StoryLayout>
    );
};

export default StoryMenuButton;
