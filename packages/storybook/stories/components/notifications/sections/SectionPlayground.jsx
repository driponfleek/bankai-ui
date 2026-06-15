import { ButtonPrimary } from '@driponfleek/bankai-ui-buttons';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

/**
 * @param {Object} props
 * @param {Function} [props.onClick] - Called when the "Click to Show Toaster" button is clicked
 * @param {Function} [props.onClose] - Called when the toaster closes
 */
const SectionPlayground = (props) => {
    const { onClick, onClose, ...rest } = props;

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <ButtonPrimary
                    text="Click to Show Toaster"
                    onClick={onClick}
                    data={{ ...rest, onClose }}
                />
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
