import { stringArg, boolArg } from '@driponfleek/bankai-lib-storybook';
import { contextClsArgType, contextClsArg } from '../../../../args/sharedArgs';

// Imgage
import avatar from '../../../../media/images/avatars/avatar07.jpg';

export const args = {
    ...contextClsArg,
    imgURL: avatar,
    hasBorder: true,
};

export const argTypes = {
    ...contextClsArgType,
    ...stringArg({
        description: 'URL to an image to be used in the avatar.',
        propName: 'imgURL',
    }),
    ...boolArg({
        defaultValue: true,
        description: 'Use to add a border to the avatar.',
        propName: 'hasBorder',
    }),
};
