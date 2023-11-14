import { boolArg, arrayArg } from '@driponfleek/bankai-lib-storybook';
import { avatars } from '../mocks/avatarGroupMocks';
import { contextClsArgType, contextClsArg } from '../../../../args/sharedArgs';

export const args = {
    ...contextClsArg,
    shouldOverlap: true,
    avatars,
};

export const argTypes = {
    ...contextClsArgType,
    ...boolArg({
        defaultValue: true,
        description: 'Use to overlap avatars.',
        propName: 'shouldOverlap',
    }),
    ...arrayArg({
        defaultValue: [],
        description: 'Array of avatar data passed to the Avatar component.',
        propName: 'avatars',
    }),
};
