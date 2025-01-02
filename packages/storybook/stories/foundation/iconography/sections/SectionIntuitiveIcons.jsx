import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import {
    OmniList,
    OmniListItem,
    Paragraph,
} from '@driponfleek/bankai-ui-typography';

const SectionIntuitiveIcons = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>Making Icons Intuitive</SectionTitle>
            <StorySection>
                <Paragraph>
                    Ensure icons are easily understandable&#58;
                </Paragraph>
                <OmniList>
                    <OmniListItem>
                        <strong>Universality&#58;</strong> Choose universally
                        recognized symbols when possible.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Clarity&#58;</strong> Whenever possible, pair
                        icons with clear and concise text for enhanced
                        understanding.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Meaning Consistency&#58;</strong> Ensure icons
                        consistently represent the same actions or concepts.
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

export default SectionIntuitiveIcons;
