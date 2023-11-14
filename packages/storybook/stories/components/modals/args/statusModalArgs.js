import {
    stringArg,
    numberArg,
    funcArg,
} from '@driponfleek/bankai-lib-storybook';
import {
    ariaLabel,
    ariaDescribedby,
    dialogContextCls,
    dialogId,
    role,
    overlayContextCls,
    shouldCloseOnEsc,
    shouldCloseOnOverlayClick,
    renderTo,
    onAfterClose,
    onAfterOpen,
    isOpen,
    onExit,
} from './sharedModalArgs';

export const args = {
    statusText: 'Saving...',
    closeTimeoutMS: 200,
    isOpen: false,
};

export const argTypes = {
    ...ariaLabel,
    ...ariaDescribedby,
    ...dialogContextCls,
    ...dialogId,
    ...role,
    ...overlayContextCls,
    ...stringArg({
        // description: '',
        propName: 'statusText',
    }),
    ...numberArg({
        defaultValue: 200,
        // description: '',
        propName: 'closeTimeoutMS',
    }),
    ...isOpen,
    ...shouldCloseOnEsc,
    ...shouldCloseOnOverlayClick,
    ...onAfterClose,
    ...onAfterOpen,
    ...onExit,
    ...funcArg({
        // description: 'Render function for rendering an icon in the component.',
        propName: 'renderIcon',
    }),
    ...renderTo,
};
