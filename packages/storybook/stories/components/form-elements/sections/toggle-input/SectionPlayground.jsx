import { Checkbox, Radio } from '@driponfleek/bankai-ui-form-elements';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

/**
 * @param {Object} props
 * @param {boolean} [props.isRadio] - When true, renders a Radio component in the preview; otherwise renders Checkbox
 */
const SectionPlayground = (props) => {
    const { isRadio = false, ...rest } = props;
    const Comp = isRadio ? Radio : Checkbox;

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Comp {...rest} />
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
