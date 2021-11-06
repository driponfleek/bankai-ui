import {
    ariaLabel,
    dialogContextCls,
    dialogId,
    titleId,
    underlayContextCls,
    shouldExitOnEscapePress,
    shouldExitOnUnderlayClick,
    shouldFocusDialog,
    focusTrapOptions,
    appNode,
    renderTo,
    onEnter,
    onExit,
} from './sharedModalArgs';
import modalActions from '../mocks/modalMocks';
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
    subTitle: 'Sub-Title Text',
    title: 'Title Text',
    hasCloseButton: true,
    // isMounted: false,
    shouldExitOnEscapePress: true,
    shouldExitOnUnderlayClick: true,
    shouldFocusDialog: true,
    modalActions,
    // modalActions: [],
    // appNode: document.getElementById('root'),
    // onEnter: () => Promise.resolve(),
    // onExit: () => Promise.resolve(),
    // onActionClick: (params) => {
    //     console.log(params);

    //     return params;
    // },
};

export const argTypes = {
    ...ariaLabel,
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        // description: '',
        propName: 'closeBtnARIALabel',
        propType: PROP_TYPES.STRING,
    }),
    ...dialogContextCls,
    ...dialogId,
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        // description: '',
        propName: 'subTitle',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        // description: '',
        propName: 'title',
        propType: PROP_TYPES.STRING,
    }),
    ...titleId,
    ...underlayContextCls,
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: true,
        // description: '',
        propName: 'hasCloseButton',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        // controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: true,
        // description: '',
        propName: 'isMounted',
        propType: PROP_TYPES.BOOL,
    }),
    ...shouldExitOnEscapePress,
    ...shouldExitOnUnderlayClick,
    ...shouldFocusDialog,
    ...focusTrapOptions,
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJ],
        defaultValue: [],
        // description: '',
        propName: 'modalActions',
        propType: PROP_TYPES.ARRAY,
    }),
    ...appNode,
    ...renderTo,
    ...onEnter,
    ...onExit,
    ...genArgType({
        // action: 'action clicked',
        // defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onActionClick',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        // description: '',
        propName: 'renderCloseButtonIcon',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        // description: '',
        propName: 'renderModalActions',
        propType: PROP_TYPES.FUNC,
    }),
};
