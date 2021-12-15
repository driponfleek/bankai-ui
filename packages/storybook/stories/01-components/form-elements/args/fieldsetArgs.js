import {
    genArgType,
    stringArg,
    boolArg,
    objectArg,
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
    isDisabled: false,
    shouldIndentContent: true,
    legend: 'User Information',
};

export const argTypes = {
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...stringArg({
        // description: '',
        propName: 'formId',
    }),
    ...stringArg({
        // description: '',
        propName: 'name',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'isDisabled',
    }),
    ...boolArg({
        defaultValue: true,
        // description: '',
        propName: 'shouldIndentContent',
    }),
    ...objectArg({
        // description: '',
        propName: 'legendProps',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        // description: '',
        isRequired: true,
        propName: 'legend',
        propType: [PROP_TYPES.STRING, PROP_TYPES.ELEMENT],
    }),
};
