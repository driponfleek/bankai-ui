import PropTypes from 'prop-types';
import { ButtonPrimary } from '@driponfleek/bankai-ui-buttons';
import {
    Fieldset,
    IFLFormFieldComposer,
    TextInput,
    Textarea,
} from '@driponfleek/bankai-ui-form-elements';
import { DatePicker } from '@driponfleek/bankai-ui-form-elements-rw';
import {
    DynamicFormLayout,
    DynamicFormSection,
    DynamicFormRow,
    RetainLayoutComposer,
} from '@driponfleek/bankai-ui-layouts';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const TextInputField = IFLFormFieldComposer(TextInput);
const TextareaField = IFLFormFieldComposer(Textarea);
const DatePickerField = IFLFormFieldComposer(DatePicker);
const FormSectionWithPassthrough = RetainLayoutComposer(DynamicFormSection);
const FieldsetWithPassthrough = RetainLayoutComposer(Fieldset);

const SectionPlayground = (props) => {
    const { baseCls, ...rest } = props;
    const renderFormActions = () => {
        return <ButtonPrimary text="Save User Info" />;
    };

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <DynamicFormLayout {...rest} renderActions={renderFormActions}>
                    <FormSectionWithPassthrough>
                        <FieldsetWithPassthrough legend="User Info">
                            <DynamicFormRow contextCls={`${baseCls}`}>
                                <TextInputField
                                    labelProps={{ content: 'First Name' }}
                                />
                                <TextInputField
                                    labelProps={{ content: 'Last Name' }}
                                />
                            </DynamicFormRow>
                        </FieldsetWithPassthrough>
                    </FormSectionWithPassthrough>
                    <FormSectionWithPassthrough>
                        <FieldsetWithPassthrough legend="About You">
                            <DynamicFormRow>
                                <TextareaField
                                    labelProps={{ content: 'Bio' }}
                                    hintProps={{
                                        children: '300 characters remaining',
                                    }}
                                />
                            </DynamicFormRow>
                            <DynamicFormRow>
                                <DatePickerField
                                    labelProps={{ content: 'Birthday' }}
                                />
                            </DynamicFormRow>
                        </FieldsetWithPassthrough>
                    </FormSectionWithPassthrough>
                </DynamicFormLayout>
            </ComponentPreview>
        </StorySection>
    );
};

SectionPlayground.propTypes = {
    baseCls: PropTypes.string,
};

export default SectionPlayground;
