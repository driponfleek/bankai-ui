import { genArgType } from '../../../../utils/argTypesUtils';

// Constants
import {
    CONTROL_TYPE_NAMES,
    CONTROL_TYPES,
} from '../../../../const/controlsConst';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    hasError: false,
    isDisabled: false,
    isProtected: false,
    isReadOnly: false,
    shouldAutoComplete: true,
    shouldAutoFocus: false,
    shouldSpellCheck: false,
    // onChange: () => Promise.resolve(),
};

export const argTypes = {
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
        propType: 'string',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.formId,
        propName: 'id',
        propType: 'string',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.formName,
        propName: 'name',
        propType: 'string',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.formPlaceholder,
        propName: 'placeholder',
        propType: 'string',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.formValue,
        propName: 'value',
        propType: 'string',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: locale.shared.propDesc.formError,
        propName: 'hasError',
        propType: 'bool',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: locale.shared.propDesc.isDisabled,
        propName: 'isDisabled',
        propType: 'bool',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description:
            'When `true` will convert the text input into a password input.',
        propName: 'isProtected',
        propType: 'bool',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: locale.shared.propDesc.formIsReadOnly,
        propName: 'isReadOnly',
        propType: 'bool',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'true',
        description: locale.shared.propDesc.shouldAutoComplete,
        propName: 'shouldAutoComplete',
        propType: 'bool',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: locale.shared.propDesc.shouldAutoFocus,
        propName: 'shouldAutoFocus',
        propType: 'bool',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: locale.shared.propDesc.shouldSpellCheck,
        propName: 'shouldSpellCheck',
        propType: 'bool',
    }),
    ...genArgType({
        action: 'change',
        defaultValue: '() => Promise.resolve()',
        // description: 'Handler called when the user clicks on the button.',
        propName: 'onChange',
        propType: 'func',
    }),
    ...genArgType({
        action: 'focus',
        // defaultValue: '() => Promise.resolve()',
        // description: 'Handler called when the user clicks on the button.',
        propName: 'onFocus',
        propType: 'func',
    }),
    ...genArgType({
        action: 'blur',
        // defaultValue: '() => Promise.resolve()',
        // description: 'Handler called when the user clicks on the button.',
        propName: 'onBlur',
        propType: 'func',
    }),
};
