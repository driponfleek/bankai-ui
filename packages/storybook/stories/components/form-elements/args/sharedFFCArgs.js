import {
    stringArg,
    boolArg,
    objectArg,
} from '@driponfleek/bankai-lib-storybook';
import {
    contextClsArgType,
    contextClsArg,
    isDisabledArgType,
} from '../../../../args/sharedArgs';

export const args = {
    ...contextClsArg,
    rwSuffix: '_input',
    hintProps: {
        children: 'Here is a hint',
    },
    labelProps: {
        content: 'Label Text',
    },
    hasError: false,
    isDisabled: false,
    isReadOnly: false,
    shouldIncludeError: true,
    shouldIncludeHint: true,
};

export const argTypes = {
    ...contextClsArgType,
    ...stringArg({
        // description: '',
        propName: 'id',
    }),
    ...stringArg({
        // description: '',
        propName: 'rwSuffix',
    }),
    ...boolArg({
        // description: '',
        propName: 'hasError',
    }),
    ...isDisabledArgType,
    ...boolArg({
        // description: '',
        propName: 'isReadOnly',
    }),
    ...boolArg({
        // description: '',
        propName: 'shouldIncludeError',
    }),
    ...boolArg({
        // description: '',
        propName: 'shouldIncludeHint',
    }),
    ...objectArg({
        // description: '',
        propName: 'errorProps',
    }),
    ...objectArg({
        // description: '',
        propName: 'hintProps',
    }),
    ...objectArg({
        // description: '',
        propName: 'labelProps',
    }),
};
