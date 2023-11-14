import { ToggleSwitch } from '@driponfleek/bankai-ui-form-elements';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <ToggleSwitch {...props} />
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
