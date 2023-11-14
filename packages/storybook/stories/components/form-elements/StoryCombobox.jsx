import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON_RW } from './const/storyConst';
import SectionImplementation from './sections/combobox/SectionImplementation';
import SectionPlayground from './sections/combobox/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryCombobox = (props) => {
    const baseCls = genSBBaseCls('combobox');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON_RW.version}
            title={getLocale('stories.components.formElements.combobox.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} />
            <SectionImplementation />
        </StoryLayout>
    );
};

export default StoryCombobox;
