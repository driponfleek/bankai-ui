import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import {
    STORY_SUB_TITLE,
    PKG_JSON,
    CALLOUT_VARIANTS,
} from './const/storyConst';
import SectionImplementation from './sections/SectionImplementation';
import SectionPlayground from './sections/callout/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const { INFO } = CALLOUT_VARIANTS;

const StoryCalloutInfo = (props) => {
    const baseCls = genSBBaseCls('callout-info');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.callouts.calloutInfo.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} variant={INFO} />
            <SectionImplementation variant="Info" isCallout />
        </StoryLayout>
    );
};

export default StoryCalloutInfo;
