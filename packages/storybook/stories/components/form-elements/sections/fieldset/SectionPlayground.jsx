import {
    Fieldset,
    IFLFormFieldComposer,
    TextInput,
    Textarea,
} from '@driponfleek/bankai-ui-form-elements';
import {
    FormLayout,
    FormLayoutSection,
    DynamicFormRow,
} from '@driponfleek/bankai-ui-layouts';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const TextInputField = IFLFormFieldComposer(TextInput);
const TextareaField = IFLFormFieldComposer(Textarea);

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Fieldset {...props}>
                    <FormLayout>
                        <FormLayoutSection>
                            <DynamicFormRow>
                                <TextInputField
                                    labelProps={{ content: 'First Name' }}
                                />
                            </DynamicFormRow>
                            <DynamicFormRow>
                                <TextInputField
                                    labelProps={{ content: 'Last Name' }}
                                />
                            </DynamicFormRow>
                            <DynamicFormRow>
                                <TextareaField
                                    labelProps={{ content: 'Address' }}
                                />
                            </DynamicFormRow>
                        </FormLayoutSection>
                    </FormLayout>
                </Fieldset>
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
