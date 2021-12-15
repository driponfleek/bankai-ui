import {
    stringArg,
    numberArg,
    boolArg,
    funcArg,
} from '../../../../utils/argTypesUtils';

// Locale
// import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

// const { bankaiUI: locale } = strings;

export const args = {
    isMounted: false,
};

export const ariaLabel = stringArg({
    // description: '',
    propName: 'ariaLabel',
});

export const ariaDescribedby = stringArg({
    // description: '',
    propName: 'ariaDescribedby',
});

export const dialogContextCls = stringArg({
    // description: '',
    propName: 'dialogContextCls',
});

export const dialogId = stringArg({
    // description: '',
    propName: 'dialogId',
});

export const role = stringArg({
    defaultValue: 'dialog',
    // description: '',
    propName: 'role',
});

export const titleId = stringArg({
    // description: '',
    propName: 'titleId',
});

export const overlayContextCls = stringArg({
    // description: '',
    propName: 'overlayContextCls',
});

export const closeTimeoutMS = numberArg({
    defaultValue: 0,
    // description: '',
    propName: 'closeTimeoutMS',
});

export const isOpen = boolArg({
    defaultValue: 'false',
    // description: '',
    propName: 'isOpen',
});

export const shouldCloseOnEsc = boolArg({
    defaultValue: true,
    // description: '',
    propName: 'shouldCloseOnEsc',
});

export const shouldCloseOnOverlayClick = boolArg({
    defaultValue: true,
    // description: '',
    propName: 'shouldCloseOnOverlayClick',
});

export const shouldDisableScroll = boolArg({
    defaultValue: true,
    // description: '',
    propName: 'shouldDisableScroll',
});

export const shouldFocusAfterRender = boolArg({
    defaultValue: true,
    // description: '',
    propName: 'shouldFocusAfterRender',
});

export const onAfterClose = funcArg({
    action: 'enter',
    defaultValue: '() => Promise.resolve()',
    // description: '',
    propName: 'onAfterClose',
});

export const onAfterOpen = funcArg({
    action: 'enter',
    defaultValue: '() => Promise.resolve()',
    // description: '',
    propName: 'onAfterOpen',
});

export const onExit = funcArg({
    action: 'exit',
    defaultValue: '() => Promise.resolve()',
    // description: '',
    propName: 'onExit',
});

export const renderTo = funcArg({
    defaultValue: '() => document.body',
    // description: '',
    propName: 'renderTo',
});
