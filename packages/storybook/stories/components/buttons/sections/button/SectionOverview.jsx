import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';

const SectionOverview = () => {
    return (
        <StorySection>
            <SectionTitle>Overview</SectionTitle>
            <Paragraph>
                This button serves as the perfect starting point for crafting an
                array of button variants. We&apos;ve kept it simple and
                unadorned, so you won&apos;t have to wrestle with excessive CSS
                to get started.
            </Paragraph>
        </StorySection>
    );
};

export default SectionOverview;
