import {
    stringArg,
    numberArg,
    funcArg,
    boolArg,
    arrayArg,
    objectArg,
} from '@driponfleek/bankai-lib-storybook';
import {
    ariaLabel,
    ariaDescribedby,
    dialogContextCls,
    dialogId,
    role,
    titleId,
    overlayContextCls,
    shouldCloseOnEsc,
    shouldCloseOnOverlayClick,
    shouldFocusAfterRender,
    renderTo,
    focusTrapOptions,
    onAfterClose,
    onAfterOpen,
    onExit,
} from './sharedModalArgs';
import modalActions from '../mocks/modalMocks';

export const args = {
    headingProps: {
        subTitle: 'Sub-Title Text',
        title: 'Title Text',
    },
    closeTimeoutMS: 150,
    hasCloseButton: true,
    // isOpen: false,
    shouldCloseOnEsc: true,
    shouldCloseOnOverlayClick: true,
    shouldFocusAfterRender: true,
    modalActions,
    // onAfterClose: () => Promise.resolve(),
    // onAfterOpen: () => Promise.resolve(),
    // onExit: () => Promise.resolve(),
    // onActionClick: () => Promise.resolve(),
    // renderTo: () => document.body,
};

export const argTypes = {
    ...ariaLabel,
    ...ariaDescribedby,
    ...stringArg({
        // description: '',
        propName: 'closeBtnARIALabel',
    }),
    ...dialogContextCls,
    ...dialogId,
    ...role,
    ...titleId,
    ...overlayContextCls,
    ...numberArg({
        // description: '',
        propName: 'closeTimeoutMS',
    }),
    ...boolArg({
        // description: '',
        propName: 'hasCloseButton',
    }),
    ...boolArg({
        defaultValue: true,
        // description: '',
        propName: 'isMounted',
    }),
    ...shouldCloseOnEsc,
    ...shouldCloseOnOverlayClick,
    ...shouldFocusAfterRender,
    ...arrayArg({
        defaultValue: [],
        // description: '',
        propName: 'modalActions',
    }),
    ...objectArg({
        // description: '',
        propName: 'headingProps',
    }),
    ...focusTrapOptions,
    ...onAfterClose,
    ...onAfterOpen,
    ...onExit,
    ...funcArg({
        action: 'action clicked',
        // defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onActionClick',
    }),
    ...funcArg({
        // description: '',
        propName: 'renderCloseButtonIcon',
    }),
    ...funcArg({
        // description: '',
        propName: 'renderModalActions',
    }),
    ...renderTo,
};
