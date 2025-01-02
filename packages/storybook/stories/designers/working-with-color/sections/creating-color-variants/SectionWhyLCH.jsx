import { OmniList } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import SectionWhyLCHHowHumansSeeColor from './SectionWhyLCHHowHumansSeeColor';
import SectionWhyLCHMakesAccessibilityEasier from './SectionWhyLCHMakesAccessibilityEasier';
import SectionWhyLCHHandlesTrickyColorsBetter from './SectionWhyLCHHandlesTrickyColorsBetter';
import { getLocale } from '../../../../../utils/localeUtils';

const SectionWhyLCH = () => (
    <StorySection>
        <SectionTitle>
            {getLocale(
                'stories.designers.workingWithColor.creatingColorVariants.sectionTitles.whyLCH',
            )}
        </SectionTitle>
        <OmniList isOrderedList>
            <SectionWhyLCHHowHumansSeeColor />
            <SectionWhyLCHMakesAccessibilityEasier />
            <SectionWhyLCHHandlesTrickyColorsBetter />
        </OmniList>
    </StorySection>
);

export default SectionWhyLCH;
