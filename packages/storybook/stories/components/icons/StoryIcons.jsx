import packageJSON from '@driponfleek/bankai-ui-icons/package.json';
import {
    StoryLayout,
    StorySection,
    IconsList,
    genSBBaseCls,
} from '@driponfleek/bankai-lib-storybook';

// Utils
import iconData from './data/iconsData';
import { getLocale } from '../../../utils/localeUtils';
import { getComponentsTitle } from '../../../utils/storiesConfigUtils';

// Data

const StoryIcons = () => {
    const listLocale = {
        copyText: getLocale('shared.copy'),
        copiedText: getLocale('shared.copied'),
    };

    return (
        <StoryLayout
            contextCls={genSBBaseCls('guide-icons')}
            packageVer={packageJSON.version}
            title={getLocale('stories.components.iconography.icons.title')}
            subTitle={getComponentsTitle(
                getLocale('stories.components.iconography.categoryTitle'),
            )}
        >
            <StorySection>
                <IconsList icons={iconData} locale={listLocale} />
            </StorySection>
        </StoryLayout>
    );
};

export default StoryIcons;
