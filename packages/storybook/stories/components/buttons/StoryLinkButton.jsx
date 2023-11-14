import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON, BUTTONS } from './const/storyConst';
import SectionPlayground from './sections/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

// Constants

const { LINK_BUTTON } = BUTTONS;

const StoryLinkButton = (props) => {
    const baseCls = genSBBaseCls('link-btn');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.buttons.linkButton.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} compName={LINK_BUTTON} />
        </StoryLayout>
    );
};

export default StoryLinkButton;
