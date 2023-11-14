import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON_RW } from './const/storyConst';
import SectionPlayground from './sections/dropdown/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryDropdown = (props) => {
    const baseCls = genSBBaseCls('dropdown');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON_RW.version}
            title={getLocale('stories.components.formElements.dropdown.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} />
        </StoryLayout>
    );
};

export default StoryDropdown;
