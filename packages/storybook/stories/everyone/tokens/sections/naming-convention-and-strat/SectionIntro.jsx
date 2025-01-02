import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection } from '@driponfleek/bankai-lib-storybook';

const SectionIntro = () => (
    <StorySection>
        <Paragraph>
            This strategy organizes design tokens into three levels (
            <strong>Core</strong>, <strong>Semantic</strong>, and{' '}
            <strong>Component</strong>) with a clear, scalable naming structure.
            It ensures consistency, clarity, and flexibility, providing a shared
            foundation for designers and developers.
        </Paragraph>
    </StorySection>
);

export default SectionIntro;
