import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';

const SectionIconConsiderations = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>Icon Considerations</SectionTitle>
            <OmniList>
                <OmniListItem>
                    <strong>Use Appropriate Icons&#58;</strong> Select icons
                    that clearly represent the intended action. Choose
                    universally recognized symbols to ensure a shared
                    understanding across diverse user groups.
                </OmniListItem>
                <OmniListItem>
                    <strong>Maintain Consistency&#58;</strong> Establish
                    consistency in iconography throughout your application. Use
                    similar icons for comparable actions to create a cohesive
                    and intuitive user interface.
                </OmniListItem>
            </OmniList>
        </StorySection>
    );
};

export default SectionIconConsiderations;
