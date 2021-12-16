import { defaultDateFormats } from '@epr0t0type/bankai-ui-form-elements-rw';
import {
    genArgType,
    stringArg,
    boolArg,
    objectArg,
    funcArg,
} from '../../../../utils/argTypesUtils';

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
    valueDisplayFormat: defaultDateFormats.date,
    shouldAutoFocus: false,
    isDefaultOpen: false,
    isDisabled: false,
    hasError: false,
    shouldDropUp: false,
    isReadOnly: false,
    formats: defaultDateFormats,
    // onBlur: () => Promise.resolve(),
    // onChange: () => Promise.resolve(),
    // onCurrentDateChange: () => Promise.resolve(),
    // onFocus: () => Promise.resolve(),
    // onKeyDown: () => Promise.resolve(),
    // onKeyPress: () => Promise.resolve(),
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
        propName: 'currentDate',
        propType: `${PROP_TYPES.INSTANCE_OF}: Date`,
    }),
    ...genArgType({
        propName: 'defaultValue',
        propType: `${PROP_TYPES.INSTANCE_OF}: Date`,
    }),
    ...genArgType({
        propName: 'max',
        propType: `${PROP_TYPES.INSTANCE_OF}: Date`,
    }),
    ...genArgType({
        propName: 'min',
        propType: `${PROP_TYPES.INSTANCE_OF}: Date`,
    }),
    ...genArgType({
        propName: 'value',
        propType: `${PROP_TYPES.INSTANCE_OF}: Date`,
    }),
    ...boolArg({
        defaultValue: 'false',
        description: locale.shared.propDesc.formError,
        propName: 'hasError',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'isDefaultOpen',
    }),
    ...boolArg({
        defaultValue: 'false',
        description: locale.shared.propDesc.isDisabled,
        propName: 'isDisabled',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'isReadOnly',
    }),
    ...boolArg({
        // description: '',
        propName: 'isOpen',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'shouldAutoFocus',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'shouldDropUp',
    }),
    ...objectArg({
        defaultValue: defaultDateFormats,
        // description: '',
        propName: 'formats',
    }),
    ...objectArg({
        // description: '',
        propName: 'inputProps',
    }),
    ...objectArg({
        // description: '',
        propName: 'messages',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.STRING],
        defaultValue: defaultDateFormats.date,
        description: '',
        propName: 'valueDisplayFormat',
        propType: [PROP_TYPES.STRING, PROP_TYPES.OBJECT],
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJECT],
        description: '',
        propName: 'valueEditFormat',
        propType: [PROP_TYPES.STRING, PROP_TYPES.OBJECT],
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJECT],
        description: '',
        propName: 'valueFormat',
        propType: [PROP_TYPES.STRING, PROP_TYPES.OBJECT],
    }),
    ...funcArg({
        action: 'blur',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onBlur',
    }),
    ...funcArg({
        action: 'change',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onChange',
    }),
    ...funcArg({
        action: 'current date change',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onCurrentDateChange',
    }),
    ...funcArg({
        action: 'focus',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onFocus',
    }),
    ...funcArg({
        action: 'key down',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onKeyDown',
    }),
    ...funcArg({
        action: 'key press',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onKeyPress',
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
    ...funcArg({
        description: `Render function for overriding the default busy state icon in the component. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderBusyIcon',
    }),
    ...funcArg({
        description: `Render function for overriding the default rejected state icon in the component. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderSelectIcon',
    }),
};
