import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import {
    OmniList,
    OmniListItem,
    Paragraph,
} from '@driponfleek/bankai-ui-typography';

const SectionIconPlacement = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>Icon Placement</SectionTitle>
            <StorySection>
                <Paragraph>
                    Consider the following guidelines for placing icons&#58;
                </Paragraph>
                <OmniList>
                    <OmniListItem>
                        <strong>Proximity&#58;</strong> Place icons close to
                        related text or actions for clear association.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Reading Order&#58;</strong> In most cases, place
                        icons before accompanying text to align with the natural
                        reading order. This helps users quickly identify the
                        action or information associated with the icon.
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

export default SectionIconPlacement;
