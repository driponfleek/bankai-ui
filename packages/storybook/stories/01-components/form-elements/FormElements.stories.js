import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(
        locale.stories.components.formElements.categoryTitle,
    ),
};

export { default as Checkbox } from './StoryCheckbox';
export { default as ColorPicker } from './StoryColorPicker';
export { default as ColorPickerInput } from './StoryColorPickerInput';
export { default as Combobox } from './StoryCombobox';
export { default as DatePickerStory } from './StoryDatePicker';
export { default as DnDFileUploader } from './StoryDnDFileUploader';
export { default as Dropdown } from './StoryDropdown';
export { default as Fieldset } from './StoryFieldset';
export { default as FormFieldComposer } from './StoryFormFieldComposer';
export { default as Multiselect } from './StoryMultiselect';
export { default as NumberPicker } from './StoryNumberPicker';
export { default as Radio } from './StoryRadio';
export { default as Textarea } from './StoryTextarea';
export { default as TextInput } from './StoryTextInput';
export { default as ToggleSwitch } from './StoryToggleSwitch';
