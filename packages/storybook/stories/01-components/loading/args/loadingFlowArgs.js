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
    isLoading: true,
    hasError: false,
    errorStateLocale: {
        msg: 'Please try again.',
        title: 'Something Went Wrong',
    },
    loadingStateLocale: {
        msg: 'Please wait...',
        title: 'Loading',
    },
};

export const argTypes = {
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: false,
        // description: '',
        propName: 'hasError',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: true,
        // description: '',
        propName: 'isLoading',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJ],
        // description: '',
        propName: 'errorStateLocale',
        propType: PROP_TYPES.SHAPE,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJ],
        // description: '',
        propName: 'loadingStateLocale',
        propType: PROP_TYPES.SHAPE,
    }),
    ...genArgType({
        description: `Render function for rendering your own loading state UI instead of the default one.`,
        propName: 'renderLoadingState',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        description: `Render function for rendering your own error state UI instead of the default one.`,
        propName: 'renderErrorState',
        propType: PROP_TYPES.FUNC,
    }),
};
