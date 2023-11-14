/* eslint-disable import/prefer-default-export */
import {
    FormFieldComposer,
    TextInput,
    ToggleSwitch,
    FORM_FIELD_COMP_VARIANTS,
} from '@driponfleek/bankai-ui-form-elements';

const { TOGGLE } = FORM_FIELD_COMP_VARIANTS;
const TextInputField = FormFieldComposer(TextInput);
const ToggleSwitchField = FormFieldComposer(ToggleSwitch);
// const CheckboxField = FormFieldComposer(Checkbox);

export const getFFCGuidePlaygroundComp = (variant) => {
    switch (variant) {
        case TOGGLE:
            return ToggleSwitchField;
        default:
            return TextInputField;
    }
};
