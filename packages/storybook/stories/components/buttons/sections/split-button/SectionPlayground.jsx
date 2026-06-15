import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

// Utils
import { getSplitBtnStoryPlaygroundComp } from '../../utils/storyUtils';

/**
 * @param {Object} props
 * @param {string} [props.variant] - SplitButton variant name used to resolve the playground component
 */
const SectionPlayground = (props) => {
    const { variant, ...rest } = props;
    const Button = getSplitBtnStoryPlaygroundComp(variant);

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Button {...rest} />
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
