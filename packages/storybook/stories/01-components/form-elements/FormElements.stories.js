import { getComponentsTitle } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

export default {
    title: getComponentsTitle(
        locale.stories.components.formElements.categoryTitle,
    ),
};

export { default as CheckboxStory } from './CheckboxStory';
export { default as ComboboxStory } from './ComboboxStory';
export { default as DatePickerStory } from './DatePickerStory';
// export { default as DnDFileUploaderStory } from './DnDFileUploaderStory';
export { default as DropdownStory } from './DropdownStory';
export { default as FieldsetStory } from './FieldsetStory';
export { default as FormFieldComposerStory } from './FormFieldComposerStory';
export { default as MultiselectStory } from './MultiselectStory';
export { default as NumberPickerStory } from './NumberPickerStory';
export { default as RadioStory } from './RadioStory';
export { default as TextareaStory } from './TextareaStory';
export { default as TextInputStory } from './TextInputStory';
export { default as ToggleSwitchStory } from './ToggleSwitchStory';
