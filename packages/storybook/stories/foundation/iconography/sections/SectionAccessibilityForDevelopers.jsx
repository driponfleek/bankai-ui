import {
    CodeTag,
    StorySection,
    SectionTitle,
} from '@driponfleek/bankai-lib-storybook';
import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';

const SectionAccessibilityForDevelopers = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>For Developers</SectionTitle>
            <StorySection>
                <OmniList>
                    <OmniListItem>
                        <strong>Contrast&#58;</strong> Ensure sufficient color
                        contrast for users with visual impairments.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Labelling&#58;</strong>
                        <OmniList>
                            <OmniListItem>
                                Consider using <CodeTag>aria-label</CodeTag> for
                                icons that convey important information and are
                                not accompanied by text.
                            </OmniListItem>
                            <OmniListItem>
                                Consider using a tooltip for icons that convey
                                important information if their intent isn&apos;t
                                easily discernable.
                            </OmniListItem>
                        </OmniList>
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

export default SectionAccessibilityForDevelopers;
