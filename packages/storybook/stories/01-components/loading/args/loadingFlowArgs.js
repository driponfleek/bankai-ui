import {
    stringArg,
    boolArg,
    shapeArg,
    funcArg,
} from '../../../../utils/argTypesUtils';

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
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...boolArg({
        defaultValue: false,
        // description: '',
        propName: 'hasError',
    }),
    ...boolArg({
        defaultValue: true,
        // description: '',
        propName: 'isLoading',
    }),
    ...shapeArg({
        // description: '',
        propName: 'errorStateLocale',
    }),
    ...shapeArg({
        // description: '',
        propName: 'loadingStateLocale',
    }),
    ...funcArg({
        description: `Render function for rendering your own loading state UI instead of the default one.`,
        propName: 'renderLoadingState',
    }),
    ...funcArg({
        description: `Render function for rendering your own error state UI instead of the default one.`,
        propName: 'renderErrorState',
    }),
};
