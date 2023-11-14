import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON, INPUTS } from './const/storyConst';
import SectionPlayground from './sections/text-input/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryProtectedInput = (props) => {
    const baseCls = genSBBaseCls('protected-text-input');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale(
                'stories.components.formElements.protectedInput.title',
            )}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} compName={INPUTS.PROTECTED} />
        </StoryLayout>
    );
};

export default StoryProtectedInput;
