import {
    IFLFormFieldComposer,
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

const InputField = IFLFormFieldComposer(TextInput);
const TextAreaField = IFLFormFieldComposer(Textarea);
const ComboboxField = IFLFormFieldComposer(Combobox);
const DatePickerField = IFLFormFieldComposer(DatePicker);
const DropdownField = IFLFormFieldComposer(Dropdown);
const MultiselectField = IFLFormFieldComposer(Multiselect);
const NumberPickerField = IFLFormFieldComposer(NumberPicker);

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
