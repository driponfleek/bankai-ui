import {
    FLFormFieldComposer,
    TextInput,
    Textarea,
} from '@driponfleek/bankai-ui-form-elements';
import {
    Combobox,
    DatePicker,
    Dropdown,
    Multiselect,
    NumberPicker,
} from '@driponfleek/bankai-ui-form-elements-rw';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const InputField = FLFormFieldComposer(TextInput);
const TextAreaField = FLFormFieldComposer(Textarea);
const ComboboxField = FLFormFieldComposer(Combobox);
const DatePickerField = FLFormFieldComposer(DatePicker);
const DropdownField = FLFormFieldComposer(Dropdown);
const MultiselectField = FLFormFieldComposer(Multiselect);
const NumberPickerField = FLFormFieldComposer(NumberPicker);

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <InputField {...props} />
                <TextAreaField {...props} />
                <ComboboxField {...props} />
                <DatePickerField {...props} />
                <DropdownField {...props} />
                <MultiselectField {...props} />
                <NumberPickerField {...props} />
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
