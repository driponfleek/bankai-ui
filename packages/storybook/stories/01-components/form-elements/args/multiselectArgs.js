import { genArgType } from '../../../../utils/argTypesUtils';

// Constants
import {
    CONTROL_TYPE_NAMES,
    CONTROL_TYPES,
} from '../../../../const/controlsConst';
import PROP_TYPES from '../../../../const/reactPropTypesConst';

import mockData from '../__mock-data__/menuMockData';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    dataKey: 'id',
    placeholder: 'Please select one...',
    textField: 'text',
    shouldAutoFocus: false,
    hasError: false,
    isBusy: false,
    isDefaultOpen: false,
    isDisabled: false,
    isReadOnly: false,
    shouldDropUp: false,
    shouldFocustFirstItem: false,
    data: mockData,
    // onChange: () => Promise.resolve(),
    // onSelect: () => Promise.resolve(),
    // onToggle: () => Promise.resolve(),
};

export const argTypes = {
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.formId,
        propName: 'id',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.formName,
        propName: 'name',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.formPlaceholder,
        propName: 'placeholder',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.formValue,
        propName: 'value',
        propType: [PROP_TYPES.STRING, PROP_TYPES.ARRAY, PROP_TYPES.OBJECT],
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: locale.shared.propDesc.formError,
        propName: 'hasError',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: locale.shared.propDesc.isDisabled,
        propName: 'isDisabled',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: locale.shared.propDesc.formIsReadOnly,
        propName: 'isReadOnly',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: locale.shared.propDesc.shouldAutoFocus,
        propName: 'shouldAutoFocus',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        action: 'change',
        defaultValue: '() => Promise.resolve()',
        // description: 'Handler called when the user clicks on the button.',
        propName: 'onChange',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        action: 'select',
        defaultValue: '() => Promise.resolve()',
        // description: 'Handler called when the user clicks on the button.',
        propName: 'onSelect',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        action: 'toggle',
        defaultValue: '() => Promise.resolve()',
        // description: 'Handler called when the user clicks on the button.',
        propName: 'onToggle',
        propType: PROP_TYPES.FUNC,
    }),
};
