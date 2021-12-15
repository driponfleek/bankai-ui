import {
    genArgType,
    stringArg,
    boolArg,
    funcArg,
} from '../../../../utils/argTypesUtils';
import mockData from '../__mock-data__/menuMockData';

// Constants
import {
    CONTROL_TYPE_NAMES,
    CONTROL_TYPES,
} from '../../../../const/controlsConst';
import PROP_TYPES from '../../../../const/reactPropTypesConst';

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
    shouldAutoSelectMatches: false,
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
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...stringArg({
        description: locale.shared.propDesc.formId,
        propName: 'id',
    }),
    ...stringArg({
        description: locale.shared.propDesc.formName,
        propName: 'name',
    }),
    ...stringArg({
        description: locale.shared.propDesc.formPlaceholder,
        propName: 'placeholder',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.formValue,
        propName: 'value',
        propType: [PROP_TYPES.STRING, PROP_TYPES.ARRAY, PROP_TYPES.OBJECT],
    }),
    ...boolArg({
        defaultValue: 'false',
        description: locale.shared.propDesc.formError,
        propName: 'hasError',
    }),
    ...boolArg({
        defaultValue: 'false',
        description: locale.shared.propDesc.isDisabled,
        propName: 'isDisabled',
    }),
    ...boolArg({
        defaultValue: 'false',
        description: locale.shared.propDesc.formIsReadOnly,
        propName: 'isReadOnly',
    }),
    ...boolArg({
        defaultValue: 'false',
        description: locale.shared.propDesc.shouldAutoFocus,
        propName: 'shouldAutoFocus',
    }),
    ...funcArg({
        action: 'change',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onChange',
    }),
    ...funcArg({
        action: 'select',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onSelect',
    }),
    ...funcArg({
        action: 'toggle',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onToggle',
    }),
};
