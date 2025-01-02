import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import SectionAccessibilityForDesigners from './SectionAccessibilityForDesigners';
import SectionAccessibilityForDevelopers from './SectionAccessibilityForDevelopers';

const SectionAccessibility = () => {
    return (
        <StorySection>
            <SectionTitle>
                Accessibility&#58; Designing Icons for All Users
            </SectionTitle>
            <StorySection>
                <Paragraph>
                    Icons play a crucial role in creating an inclusive user
                    experience. Ensuring they are accessible is essential for
                    providing a seamless interaction for all users. The
                    following guidelines provide insights for both designers and
                    developers to enhance the accessibility of icons in your
                    application.
                </Paragraph>
            </StorySection>
            <SectionAccessibilityForDesigners />
            <SectionAccessibilityForDevelopers />
        </StorySection>
    );
};

export default SectionAccessibility;
