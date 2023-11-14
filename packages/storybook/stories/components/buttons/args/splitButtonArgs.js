import { arrayArg } from '@driponfleek/bankai-lib-storybook';
// import { getLocale } from '../../../../utils/localeUtils';
import {
    contextClsArgType,
    contextClsArg,
    isDisabledArgType,
} from '../../../../args/sharedArgs';
import menuOptions from '../mocks/menuButtonMocks';

export const args = {
    ...contextClsArg,
    isDisabled: false,
    menuOptions,
    mainButtonProps: {
        text: 'Main Action',
        isDisabled: false,
    },
    menuButtonProps: {
        'aria-label': 'More options',
        isDisabled: false,
        onMenuToggle: () => Promise.resolve(),
    },
};

export const argTypes = {
    ...contextClsArgType,
    ...arrayArg({
        // description: '',
        propName: 'menuOptions',
    }),
    ...isDisabledArgType,
};
