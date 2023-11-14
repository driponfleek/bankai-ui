import {
    CodeTag,
    StorySection,
    SectionTitle,
} from '@driponfleek/bankai-lib-storybook';
import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';

const SectionAccessibilityForDesigners = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>For Designers</SectionTitle>
            <StorySection>
                <OmniList>
                    <OmniListItem>
                        <strong>Contrast&#58;</strong> Ensure that icons have
                        sufficient contrast with their background to improve
                        visibility.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Size&#58;</strong> Maintain an adequate size for
                        icons to promote easy identification.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Text Alternatives&#58;</strong>
                        <OmniList>
                            <OmniListItem>
                                Provide an <CodeTag>aria-label</CodeTag> for
                                icons that convey important information and are
                                not accompanied by text.
                            </OmniListItem>
                            <OmniListItem>
                                Consider an accompanying tooltip for icons that
                                convey important information if their intent
                                isn&apos;t easily discernable.
                            </OmniListItem>
                        </OmniList>
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

export default SectionAccessibilityForDesigners;
