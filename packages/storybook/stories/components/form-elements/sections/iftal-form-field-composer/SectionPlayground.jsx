import {
    IFTALFormFieldComposer,
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

const InputField = IFTALFormFieldComposer(TextInput);
const TextAreaField = IFTALFormFieldComposer(Textarea);
const ComboboxField = IFTALFormFieldComposer(Combobox);
const DatePickerField = IFTALFormFieldComposer(DatePicker);
const DropdownField = IFTALFormFieldComposer(Dropdown);
const MultiselectField = IFTALFormFieldComposer(Multiselect);
const NumberPickerField = IFTALFormFieldComposer(NumberPicker);

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
