import {
    stringArg,
    arrayArg,
    funcArg,
} from '@driponfleek/bankai-lib-storybook';
import {
    contextClsArgType,
    contextClsArg,
    isDisabledArgType,
    variantDisabledArgType,
} from '../../../../args/sharedArgs';
import menuOptions from '../mocks/menuButtonMocks';

export const args = {
    ...contextClsArg,
    text: 'Menu Button Text',
    isDisabled: false,
    shouldCloseOnBlur: true,
    shouldCloseOnSelection: true,
    menuOptions,
    // onSelection: () => Promise.resolve(),
    // onMenuToggle: () => Promise.resolve(),
};

export const argTypes = {
    ...stringArg({
        description: contextClsArgType.contextCls.description,
        propName: 'btnContextCls',
    }),
    ...contextClsArgType,
    ...isDisabledArgType,
    ...arrayArg({
        // description: '',
        propName: 'menuOptions',
    }),
    variant: {
        ...variantDisabledArgType.variant,
        description: `${variantDisabledArgType.variant.description} When not defined the Default button is rendered with minimal styling and can be used as a starting point for a new button variant if one of the predefined variants do not fit your use case.`,
    },
    ...funcArg({
        action: 'selected',
        // description: '',
        propName: 'onSelection',
    }),
    ...funcArg({
        action: 'menu toggled',
        // description: '',
        propName: 'onMenuToggle',
    }),
    ...funcArg({
        // description: ``,
        propName: 'renderMenuOption',
    }),
};
