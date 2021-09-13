import { FORM_FIELD_COMP_MODES } from '@epr0t0type/bankai-ui-form-elements';
import { genArgType } from '../../../../utils/argTypesUtils';

// Constants
import {
    CONTROL_TYPE_NAMES,
    CONTROL_TYPES,
} from '../../../../const/controlsConst';

// Locale
// import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

// const { bankaiUI: locale } = strings;
const { STACKED, INLINE_LEFT, INLINE_RIGHT, TOGGLE } = FORM_FIELD_COMP_MODES;

export const args = {
    mode: STACKED,
    hasError: false,
    isDisabled: false,
    isReadOnly: false,
    shouldIncludeError: true,
    shouldIncludeHint: true,
    // errorProps: {
    //     errorIconCls: 'bankai-icon-triangle-danger',
    //     errorText: 'Something is wrong!',
    // },
    hintProps: {
        hintText: 'Here is a hint.',
    },
    labelProps: {
        labelText: 'Label Text',
    },
    labelSubtextProps: {
        subtext: 'Lorem ipsum dolor sit amet.',
    },
};

export const argTypes = {
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.SELECT],
        defaultValue: STACKED,
        description:
            'Use to control the layout of the form element, label and hints. `TOGGLE` is used for controls like Radios, Checkboxes, Toggle Switches, etc.',
        options: [INLINE_LEFT, INLINE_RIGHT, STACKED, TOGGLE],
        propName: 'mode',
        propType: 'string',
    }),
};
