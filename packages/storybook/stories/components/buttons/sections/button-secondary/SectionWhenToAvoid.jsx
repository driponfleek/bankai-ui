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
                        <strong>Overemphasis&#58;</strong> Avoid using the
                        secondary button when its presence may lead to an
                        unintended emphasis on a less critical action. Reserve
                        it for scenarios where users are likely to prioritize
                        the primary action.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Confusion&#58;</strong> Steer clear of
                        incorporating secondary buttons when their presence
                        might confuse users about the primary course of action.
                        Ensure a clear hierarchy between primary and secondary
                        actions to prevent user uncertainty.
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

export default SectionWhenToAvoid;
