import {
    FormFieldComposer,
    TextInput,
} from '@driponfleek/bankai-ui-form-elements';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const TextInputField = FormFieldComposer(TextInput);

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <TextInputField {...props} />
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
