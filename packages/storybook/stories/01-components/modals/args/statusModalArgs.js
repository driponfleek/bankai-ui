import {
    ariaLabel,
    ariaDescribedby,
    dialogContextCls,
    dialogId,
    role,
    overlayContextCls,
    isOpen,
    shouldCloseOnEsc,
    shouldCloseOnOverlayClick,
    onAfterClose,
    onAfterOpen,
    onExit,
    renderTo,
} from './sharedModalArgs';
import { stringArg, numberArg, funcArg } from '../../../../utils/argTypesUtils';

// Locale
// import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

// const { bankaiUI: locale } = strings;

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
        description: 'Render function for rendering an icon in the component.',
        propName: 'renderIcon',
    }),
    ...renderTo,
};
