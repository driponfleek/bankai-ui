import { boolArg, shapeArg, funcArg } from '@driponfleek/bankai-lib-storybook';
import { contextClsArgType, contextClsArg } from '../../../../args/sharedArgs';

export const args = {
    ...contextClsArg,
    isLoading: true,
    hasError: false,
    errorStateProps: {
        msg: 'Please try again.',
        title: 'Something Went Wrong',
    },
    loadingStateProps: {
        msg: 'Please wait...',
        title: 'Loading',
    },
};

export const argTypes = {
    ...contextClsArgType,
    ...boolArg({
        // description: '',
        propName: 'hasError',
    }),
    ...boolArg({
        // description: '',
        propName: 'isLoading',
    }),
    ...shapeArg({
        // description: '',
        propName: 'errorStateProps',
    }),
    ...shapeArg({
        // description: '',
        propName: 'loadingStateProps',
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
