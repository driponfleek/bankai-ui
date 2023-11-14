import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import { StorySection } from '@driponfleek/bankai-lib-storybook';

// Utils
// import { getLocale } from '../../../../../utils/localeUtils';

const SectionIntro = () => {
    return (
        <StorySection>
            <Paragraph>Specifications for&#58;</Paragraph>
            <OmniList>
                {/* <OmniListItem>
                    Spacing and overall layout principles to ensure consistent
                    spacing and alignment.
                </OmniListItem> */}
                <OmniListItem>Spacing</OmniListItem>
                <OmniListItem>Layout</OmniListItem>
                {/* <OmniListItem>
                    The grid structure that helps maintain alignment and
                    consistency in layouts.
                </OmniListItem> */}
                <OmniListItem>Grid System</OmniListItem>
                <OmniListItem>Elevation</OmniListItem>
            </OmniList>
            <Paragraph>Coming soon.</Paragraph>
        </StorySection>
    );
};

export default SectionIntro;
