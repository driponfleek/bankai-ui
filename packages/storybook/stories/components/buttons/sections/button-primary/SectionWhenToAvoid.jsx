import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';

const SectionWhenToAvoid = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>
                When to Avoid Primary Buttons
            </SectionTitle>
            <StorySection>
                <OmniList>
                    <OmniListItem>
                        <strong>Secondary Actions&#58;</strong> Reserve primary
                        buttons for primary actions and avoid using them for
                        secondary or less critical actions. For less impactful
                        interactions, consider using secondary buttons or
                        alternative UI elements.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Overuse&#58;</strong> Avoid overusing primary
                        buttons, as their significance diminishes when applied
                        excessively. Use them judiciously to maintain their
                        impact and prevent user confusion.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Inconsequential Tasks&#58;</strong> Steer clear
                        of employing primary buttons for inconsequential tasks
                        that don&apos;t contribute significantly to the
                        user&apos;s journey. Opt for less prominent buttons or
                        alternative UI elements for minor interactions.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Cluttered Interfaces&#58;</strong> Refrain from
                        incorporating primary buttons in already cluttered
                        interfaces. Maintain visual hierarchy by reserving
                        primary buttons for the most important actions, ensuring
                        a clean and intuitive design.
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

export default SectionWhenToAvoid;
