import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import {
    OmniList,
    OmniListItem,
    Paragraph,
} from '@driponfleek/bankai-ui-typography';

const SectionWhenToAvoid = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>When to Avoid Icons</SectionTitle>
            <StorySection>
                <Paragraph>
                    While icons can be powerful, be mindful of their usage.
                    Avoid using icons when&#58;
                </Paragraph>
                <OmniList>
                    <OmniListItem>
                        <strong>Ambiguity&#58;</strong> The icon&apos;s meaning
                        is unclear or may be interpreted differently by users.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Overcrowding&#58;</strong> Excessive use of
                        icons can clutter the interface, overwhelming users.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Visual Noise&#58;</strong> Icons that introduce
                        visual noise without adding significant value may hinder
                        the user experience.
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

export default SectionWhenToAvoid;
