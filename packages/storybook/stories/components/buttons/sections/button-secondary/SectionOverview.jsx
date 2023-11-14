import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';

const SectionOverview = () => {
    return (
        <StorySection>
            <SectionTitle>Overview</SectionTitle>
            <Paragraph>
                The secondary button complements the primary action, providing
                users with an alternative option that is typically less
                prominent. While it doesn&apos;t carry the same weight as the
                primary button, the secondary button serves as a valuable
                addition for less critical actions or alternative pathways
                within the user interface.
            </Paragraph>
        </StorySection>
    );
};

export default SectionOverview;
