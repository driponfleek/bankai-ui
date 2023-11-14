import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionPlayground from './sections/toggle-input/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryRadio = (props) => {
    const baseCls = genSBBaseCls('radio');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.formElements.radio.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} isRadio />
        </StoryLayout>
    );
};

export default StoryRadio;
