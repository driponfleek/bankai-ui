import { stringArg } from '@driponfleek/bankai-lib-storybook';
import { contextClsArgType, contextClsArg } from '../../../../args/sharedArgs';

export const args = {
    ...contextClsArg,
    title: 'Loading',
    msg: 'Please wait...',
};

export const argTypes = {
    ...contextClsArgType,
    ...stringArg({
        // description: '',
        propName: 'title',
    }),
    ...stringArg({
        // description: '',
        propName: 'msg',
    }),
};
