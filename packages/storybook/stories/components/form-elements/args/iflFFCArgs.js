import { boolArg } from '@driponfleek/bankai-lib-storybook';
import {
    argTypes as sharedFFCArgTypes,
    args as sharedFFCArgs,
} from './sharedFFCArgs';

export const args = {
    ...sharedFFCArgs,
    isLeftAlignedLabel: false,
};

export const argTypes = {
    ...sharedFFCArgTypes,
    ...boolArg({
        // description: '',
        propName: 'isLeftAlignedLabel',
    }),
};
