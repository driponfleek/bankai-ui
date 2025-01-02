import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionImplementation from './sections/toggle-input/SectionImplementation';
import SectionPlayground from './sections/toggle-input/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryCheckbox = (props) => {
    const baseCls = genSBBaseCls('checkbox');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.formElements.checkbox.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} />
            <SectionImplementation />
        </StoryLayout>
    );
};

export default StoryCheckbox;
