import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import {
    STORY_SUB_TITLE,
    PKG_JSON,
    CALLOUT_VARIANTS,
} from './const/storyConst';
import SectionImplementation from './sections/SectionImplementation';
import SectionPlayground from './sections/banner/SectionPlayground';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';

const { CAUTIONARY } = CALLOUT_VARIANTS;

const StoryBannerCautionary = (props) => {
    const baseCls = genSBBaseCls('banner-cautionary');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale(
                'stories.components.callouts.bannerCautionary.title',
            )}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} variant={CAUTIONARY} />
            <SectionImplementation variant="Cautionary" />
        </StoryLayout>
    );
};

export default StoryBannerCautionary;
