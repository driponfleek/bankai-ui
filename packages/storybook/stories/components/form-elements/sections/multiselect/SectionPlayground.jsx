import { Multiselect } from '@driponfleek/bankai-ui-form-elements-rw';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Multiselect {...props} />
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
