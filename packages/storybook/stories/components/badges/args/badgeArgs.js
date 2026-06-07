/* eslint-disable import/prefer-default-export */
import { boolArg } from '@driponfleek/bankai-lib-storybook';
import { contextClsArg, contextClsArgType } from '../../../../args/sharedArgs';

export const args = {
    ...contextClsArg,
    isPill: true,
};

export const argTypes = {
    ...contextClsArgType,
    ...boolArg({
        defaultValue: true,
        propName: 'isPill',
        description:
            'When true the badge will have rounded edges to create a pill shape. When false the badge will have slightly rounded corners.',
    }),
};
