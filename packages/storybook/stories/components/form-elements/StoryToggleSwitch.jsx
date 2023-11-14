import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionPlayground from './sections/toggle-switch/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryToggleSwitch = (props) => {
    const baseCls = genSBBaseCls('text-input');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale(
                'stories.components.formElements.toggleSwitch.title',
            )}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} />
        </StoryLayout>
    );
};

export default StoryToggleSwitch;
