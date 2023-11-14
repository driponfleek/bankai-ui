import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON_RW } from './const/storyConst';
import SectionPlayground from './sections/multiselect/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryMultiselect = (props) => {
    const baseCls = genSBBaseCls('multiselect');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON_RW.version}
            title={getLocale(
                'stories.components.formElements.multiselect.title',
            )}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} />
        </StoryLayout>
    );
};

export default StoryMultiselect;
