import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { STORY_SUB_TITLE, PKG_JSON } from './const/storyConst';
import SectionImplementation from './sections/SectionImplementation';
import SectionPlayground from './sections/callout/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const StoryCallout = (props) => {
    const baseCls = genSBBaseCls('callout');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.callouts.callout.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} isCallout />
            <SectionImplementation isCallout />
        </StoryLayout>
    );
};

export default StoryCallout;
