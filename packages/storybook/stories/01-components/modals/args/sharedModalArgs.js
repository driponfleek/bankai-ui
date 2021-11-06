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

export const initialFocus = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
    // description: '',
    propName: 'initialFocus',
    propType: PROP_TYPES.STRING,
});

export const titleId = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
    // description: '',
    propName: 'titleId',
    propType: PROP_TYPES.STRING,
});

export const underlayContextCls = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
    // description: '',
    propName: 'underlayContextCls',
    propType: PROP_TYPES.STRING,
});

export const isAlert = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
    defaultValue: 'false',
    // description: '',
    propName: 'isAlert',
    propType: PROP_TYPES.BOOL,
});

export const isMounted = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
    defaultValue: 'false',
    // description: '',
    propName: 'isMounted',
    propType: PROP_TYPES.BOOL,
});

export const shouldCenter = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
    defaultValue: true,
    // description: '',
    propName: 'shouldCenter',
    propType: PROP_TYPES.BOOL,
});

export const shouldDisableScroll = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
    defaultValue: true,
    // description: '',
    propName: 'shouldDisableScroll',
    propType: PROP_TYPES.BOOL,
});

export const shouldExitOnEscapePress = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
    defaultValue: true,
    // description: '',
    propName: 'shouldExitOnEscapePress',
    propType: PROP_TYPES.BOOL,
});

export const shouldExitOnUnderlayClick = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
    defaultValue: true,
    // description: '',
    propName: 'shouldExitOnUnderlayClick',
    propType: PROP_TYPES.BOOL,
});

export const shouldFocusDialog = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
    defaultValue: true,
    // description: '',
    propName: 'shouldFocusDialog',
    propType: PROP_TYPES.BOOL,
});

export const focusTrapOptions = genArgType({
    controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJ],
    // description: '',
    propName: 'focusTrapOptions',
    propType: PROP_TYPES.OBJECT,
});

export const appNode = genArgType({
    // controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJ],
    defaultValue: "document.getElementById('root')",
    // description: '',
    // isDisabled: true,
    propName: 'appNode',
    propType: `${PROP_TYPES.INSTANCE_OF}(Element)`,
});

export const renderTo = genArgType({
    // controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
    // description: '',
    propName: 'renderTo',
    propType: [PROP_TYPES.STRING, PROP_TYPES.ELEMENT],
});

export const onEnter = genArgType({
    action: 'enter',
    defaultValue: '() => Promise.resolve()',
    // description: '',
    propName: 'onEnter',
    propType: PROP_TYPES.FUNC,
});

export const onExit = genArgType({
    action: 'exit',
    defaultValue: '() => Promise.resolve()',
    // description: '',
    propName: 'onExit',
    propType: PROP_TYPES.FUNC,
});
