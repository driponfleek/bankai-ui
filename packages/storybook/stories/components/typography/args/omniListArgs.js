import { boolArg } from '@driponfleek/bankai-lib-storybook';
import { args as sharedArgs, argTypes as sharedArgTypes } from './sharedArgs';

export const args = {
    ...sharedArgs,
    isOrderedList: false,
};

export const argTypes = {
    ...sharedArgTypes,
    ...boolArg({
        // description: '',
        propName: 'isOrderedList',
    }),
};
