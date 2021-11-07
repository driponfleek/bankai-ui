import { genArgType } from '../../../../utils/argTypesUtils';

// Constants
import {
    CONTROL_TYPE_NAMES,
    CONTROL_TYPES,
} from '../../../../const/controlsConst';
import PROP_TYPES from '../../../../const/reactPropTypesConst';

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

export const ariaLabel = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
    // description: '',
    propName: 'ariaLabel',
    propType: PROP_TYPES.STRING,
});

export const ariaDescribedby = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
    // description: '',
    propName: 'ariaDescribedby',
    propType: PROP_TYPES.STRING,
});

export const dialogContextCls = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
    // description: '',
    propName: 'dialogContextCls',
    propType: PROP_TYPES.STRING,
});

export const dialogId = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
    // description: '',
    propName: 'dialogId',
    propType: PROP_TYPES.STRING,
});

export const role = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
    defaultValue: 'dialog',
    // description: '',
    propName: 'role',
    propType: PROP_TYPES.STRING,
});

export const titleId = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
    // description: '',
    propName: 'titleId',
    propType: PROP_TYPES.STRING,
});

export const overlayContextCls = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
    // description: '',
    propName: 'overlayContextCls',
    propType: PROP_TYPES.STRING,
});

export const closeTimeoutMS = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.NUM],
    defaultValue: 0,
    // description: '',
    propName: 'closeTimeoutMS',
    propType: PROP_TYPES.NUMBER,
});

export const isOpen = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
    defaultValue: 'false',
    // description: '',
    propName: 'isOpen',
    propType: PROP_TYPES.BOOL,
});

export const shouldCloseOnEsc = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
    defaultValue: true,
    // description: '',
    propName: 'shouldCloseOnEsc',
    propType: PROP_TYPES.BOOL,
});

export const shouldCloseOnOverlayClick = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
    defaultValue: true,
    // description: '',
    propName: 'shouldCloseOnOverlayClick',
    propType: PROP_TYPES.BOOL,
});

export const shouldDisableScroll = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
    defaultValue: true,
    // description: '',
    propName: 'shouldDisableScroll',
    propType: PROP_TYPES.BOOL,
});

export const shouldFocusAfterRender = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
    defaultValue: true,
    // description: '',
    propName: 'shouldFocusAfterRender',
    propType: PROP_TYPES.BOOL,
});

export const onAfterClose = genArgType({
    action: 'enter',
    defaultValue: '() => Promise.resolve()',
    // description: '',
    propName: 'onAfterClose',
    propType: PROP_TYPES.FUNC,
});

export const onAfterOpen = genArgType({
    action: 'enter',
    defaultValue: '() => Promise.resolve()',
    // description: '',
    propName: 'onAfterOpen',
    propType: PROP_TYPES.FUNC,
});

export const onExit = genArgType({
    action: 'exit',
    defaultValue: '() => Promise.resolve()',
    // description: '',
    propName: 'onExit',
    propType: PROP_TYPES.FUNC,
});

export const renderTo = genArgType({
    // controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
    defaultValue: '() => document.body',
    // description: '',
    propName: 'renderTo',
    propType: PROP_TYPES.FUNC,
});
