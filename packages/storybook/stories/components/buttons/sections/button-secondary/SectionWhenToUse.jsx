import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';

const SectionWhenToUse = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>
                When to Use Secondary Buttons
            </SectionTitle>
            <StorySection>
                <OmniList>
                    <OmniListItem>
                        <strong>Supporting Actions&#58;</strong> Use the
                        secondary button for actions that are supplementary or
                        less critical than the primary action on the page.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Alternative Pathways&#58;</strong> Employ the
                        secondary button for secondary pathways or alternative
                        options, providing users with choices without
                        overshadowing the primary call-to-action.
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

export default SectionWhenToUse;
