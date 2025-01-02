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

const { DANGER } = CALLOUT_VARIANTS;

const StoryBannerDanger = (props) => {
    const baseCls = genSBBaseCls('banner-danger');

    return (
        <StoryLayout
            contextCls={baseCls}
            pkgVer={PKG_JSON.version}
            title={getLocale('stories.components.callouts.bannerDanger.title')}
            subTitle={STORY_SUB_TITLE}
        >
            <SectionPlayground {...props} variant={DANGER} />
            <SectionImplementation variant="Danger" />
        </StoryLayout>
    );
};

export default StoryBannerDanger;
