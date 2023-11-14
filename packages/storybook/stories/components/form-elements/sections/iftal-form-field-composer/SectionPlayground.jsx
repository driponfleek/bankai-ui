import {
    IFTALFormFieldComposer,
    TextInput,
} from '@driponfleek/bankai-ui-form-elements';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const InputField = IFTALFormFieldComposer(TextInput);

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <InputField {...props} />
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
