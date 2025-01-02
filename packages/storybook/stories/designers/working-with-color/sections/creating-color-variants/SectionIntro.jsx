import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection } from '@driponfleek/bankai-lib-storybook';

const SectionIntro = () => (
    <StorySection>
        <Paragraph>
            When generating color variants from a base color, the goal is to
            create harmonious, perceptually balanced variations that feel
            consistent and natural. To generate these variants, we use the LCH
            color space&mdash;a modern and perceptually uniform approach that
            makes your designs look better and work more effectively.
        </Paragraph>
    </StorySection>
);

export default SectionIntro;
