import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

// Utils
import { getMenuBtnStoryPlaygroundComp } from '../../utils/storyUtils';

/**
 * @param {Object} props
 * @param {string} [props.variant] - MenuButton variant name used to resolve the playground component
 */
const SectionPlayground = (props) => {
    const { variant, ...rest } = props;
    const Button = getMenuBtnStoryPlaygroundComp(variant);

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Button {...rest} />
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
