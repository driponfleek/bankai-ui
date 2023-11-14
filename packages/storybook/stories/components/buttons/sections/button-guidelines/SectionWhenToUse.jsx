import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';

const SectionWhenToUse = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>When to Use Buttons</SectionTitle>
            <StorySection>
                <OmniList>
                    <OmniListItem>
                        <strong>Initiating Actions&#58;</strong> Buttons are
                        ideal for triggering actions, such as submitting forms,
                        saving changes, or initiating a process.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Calls-to-Action&#58;</strong> Use buttons to
                        highlight key actions you want users to take, such as
                        signing up, making a purchase, or starting a free trial.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Confirmation Dialogs&#58;</strong> In scenarios
                        where user confirmation is needed, buttons can be used
                        within confirmation dialogs. For example, confirming a
                        deletion or acknowledging critical decisions.
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

export default SectionWhenToUse;
