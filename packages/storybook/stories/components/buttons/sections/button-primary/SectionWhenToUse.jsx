import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';

const SectionWhenToUse = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>
                When to Use Primary Buttons
            </SectionTitle>
            <StorySection>
                <OmniList>
                    <OmniListItem>
                        <strong>Key Calls to Action&#58;</strong> Utilize
                        primary buttons for actions that are central to the user
                        experience and require immediate attention. Examples
                        include submitting forms, confirming important
                        decisions, or initiating significant processes.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Primary Workflows&#58;</strong> Integrate
                        primary buttons into primary workflows where users make
                        critical choices or progress through essential tasks.
                        This helps emphasize the importance of specific actions
                        within the overall user journey.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Encourage Positive Actions&#58;</strong> Employ
                        primary buttons for actions that lead to positive
                        outcomes or signify a step toward achieving a
                        user&apos;s goal. This reinforces a sense of progression
                        and accomplishment.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Prominent Placement&#58;</strong> Place primary
                        buttons prominently within the interface, ensuring they
                        are easily noticeable. Strategic placement enhances user
                        engagement and guides users toward key interactions.
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

export default SectionWhenToUse;
