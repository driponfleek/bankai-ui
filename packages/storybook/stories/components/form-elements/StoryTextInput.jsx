import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionImplementation from './sections/text-input/SectionImplementation';
import SectionPlayground from './sections/text-input/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryTextInput = (props) => {
    const baseCls = genSBBaseCls('text-input');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.formElements.textInput.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} />
            <SectionImplementation />
        </StoryLayout>
    );
};

export default StoryTextInput;
