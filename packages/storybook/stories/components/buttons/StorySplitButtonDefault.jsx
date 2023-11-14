import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { BUTTONS, STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionPlayground from './sections/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const { SPLIT_BUTTON } = BUTTONS;

const StorySplitButtonDefault = (props) => {
    const baseCls = genSBBaseCls('link-btn');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.buttons.linkButton.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} compName={SPLIT_BUTTON} />
        </StoryLayout>
    );
};

export default StorySplitButtonDefault;
