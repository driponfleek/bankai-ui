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
    isBusy: true,
    isChecked: false,
    isDefaultChecked: false,
    isDisabled: false,
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
        description:
            'If `true` on initial render, the toggle is checked. If `false` on initial render, the toggle is unchecked. Use this if you want to treat the toggle as an uncontrolled component',
        propName: 'isDefaultChecked',
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
        description: locale.shared.propDesc.isBusy,
        propName: 'isBusy',
        propType: PROP_TYPES.BOOL,
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
        description: `Render function for rendering an alternative icon to the default one provided in the component. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderBusyIcon',
        propType: PROP_TYPES.FUNC,
    }),
};
