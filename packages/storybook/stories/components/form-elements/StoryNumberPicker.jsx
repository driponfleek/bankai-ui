import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON_RW } from './const/storyConst';
import SectionImplementation from './sections/number-picker/SectionImplementation';
import SectionPlayground from './sections/number-picker/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryNumberPicker = (props) => {
    const baseCls = genSBBaseCls('number-picker');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON_RW.version}
            title={getLocale(
                'stories.components.formElements.numberPicker.title',
            )}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} />
            <SectionImplementation />
        </StoryLayout>
    );
};

export default StoryNumberPicker;
