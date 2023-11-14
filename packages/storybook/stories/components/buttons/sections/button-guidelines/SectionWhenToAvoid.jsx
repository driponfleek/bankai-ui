import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';

const SectionWhenToAvoid = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>When to Avoid Buttons</SectionTitle>
            <StorySection>
                <Paragraph>
                    <strong>Navigation&#58;</strong> When the primary purpose is
                    navigation, especially within your app or website, consider
                    using hyperlinks instead of buttons. This not only aligns
                    with best practices and user expectations for navigation
                    elements but also enhances accessibility, making it easier
                    for users relying on screen readers or keyboard navigation
                    to understand and interact with your content.
                </Paragraph>
            </StorySection>
        </StorySection>
    );
};

export default SectionWhenToAvoid;
