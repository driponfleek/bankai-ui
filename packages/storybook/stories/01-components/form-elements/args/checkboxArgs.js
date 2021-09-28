import { genArgType } from '../../../../utils/argTypesUtils';

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
    isDisabled: false,
    isChecked: false,
    isReadOnly: false,
    // onChange: () => Promise.resolve(),
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
        description: locale.shared.propDesc.formValue,
        propName: 'value',
        propType: [PROP_TYPES.STRING, PROP_TYPES.ARRAY, PROP_TYPES.OBJECT],
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: locale.shared.propDesc.formError,
        propName: 'isChecked',
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
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJ],
        defaultValue: undefined,
        description:
            'Use to pass data back when the onChange handler is called.',
        propName: 'data',
        propType: PROP_TYPES.OBJECT,
    }),
    ...genArgType({
        action: 'changed',
        defaultValue: '() => Promise.resolve()',
        description:
            'Handler called when the user interacts with the component.',
        propName: 'onChange',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        description: `Render function for rendering an icon in the button. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderCheckedIcon',
        propType: PROP_TYPES.FUNC,
    }),
};
