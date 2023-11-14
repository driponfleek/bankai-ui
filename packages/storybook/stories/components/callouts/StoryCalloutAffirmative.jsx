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

const { AFFIRMATIVE } = CALLOUT_VARIANTS;

const StoryCalloutAffirmative = (props) => {
    const baseCls = genSBBaseCls('callout-affirmative');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale(
                'stories.components.callouts.calloutAffirmative.title',
            )}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} variant={AFFIRMATIVE} />
            <SectionImplementation variant="Affirmative" isCallout />
        </StoryLayout>
    );
};

export default StoryCalloutAffirmative;
