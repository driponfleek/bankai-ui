import { Heading } from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

/**
 * @param {Object} props
 * @param {number} [props.headingLvl] - Heading level passed to the Heading component
 */
const SectionPlayground = (props) => {
    const { headingLvl } = props;

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Heading {...props}>
                    Heading Text &#40;Level {headingLvl}&#41;
                </Heading>
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
