import {
    stringArg,
    boolArg,
    objectArg,
} from '@driponfleek/bankai-lib-storybook';
import {
    contextClsArgType,
    isDisabledArgType,
} from '../../../../args/sharedArgs';

export const args = {
    isDisabled: false,
    shouldIndentContent: false,
    legend: 'User Information',
};

export const argTypes = {
    ...contextClsArgType,
    ...stringArg({
        // description: '',
        propName: 'formId',
    }),
    ...stringArg({
        // description: '',
        propName: 'name',
    }),
    ...isDisabledArgType,
    ...boolArg({
        // description: '',
        propName: 'shouldIndentContent',
    }),
    ...objectArg({
        // description: '',
        propName: 'legendProps',
    }),
};
