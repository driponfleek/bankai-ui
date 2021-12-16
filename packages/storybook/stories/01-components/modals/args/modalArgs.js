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
    onAfterClose,
    onAfterOpen,
    onExit,
} from './sharedModalArgs';
import modalActions from '../mocks/modalMocks';
import {
    stringArg,
    numberArg,
    funcArg,
    boolArg,
    arrayArg,
} from '../../../../utils/argTypesUtils';

// Locale
// import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

// const { bankaiUI: locale } = strings;

export const args = {
    subTitle: 'Sub-Title Text',
    title: 'Title Text',
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
    ...stringArg({
        // description: '',
        propName: 'subTitle',
    }),
    ...stringArg({
        // description: '',
        propName: 'title',
    }),
    ...titleId,
    ...overlayContextCls,
    ...numberArg({
        defaultValue: 150,
        // description: '',
        propName: 'closeTimeoutMS',
    }),
    ...boolArg({
        defaultValue: true,
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
