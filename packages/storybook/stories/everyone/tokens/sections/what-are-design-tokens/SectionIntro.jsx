import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection } from '@driponfleek/bankai-lib-storybook';

const SectionIntro = () => (
    <StorySection>
        <Paragraph>
            Design tokens are reusable, platform-agnostic variables that define
            the visual properties of a design system, such as colors,
            typography, spacing, and borders. They codify design decisions into
            a single source of truth, enabling consistent styling across
            platforms and bridging the gap between design and development.
        </Paragraph>
    </StorySection>
);

export default SectionIntro;
