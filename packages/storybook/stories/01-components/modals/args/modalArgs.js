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
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        // description: '',
        propName: 'closeBtnARIALabel',
        propType: PROP_TYPES.STRING,
    }),
    ...dialogContextCls,
    ...dialogId,
    ...role,
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
    ...overlayContextCls,
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.NUM],
        defaultValue: 150,
        // description: '',
        propName: 'closeTimeoutMS',
        propType: PROP_TYPES.NUMBER,
    }),
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
    ...shouldCloseOnEsc,
    ...shouldCloseOnOverlayClick,
    ...shouldFocusAfterRender,
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJ],
        defaultValue: [],
        // description: '',
        propName: 'modalActions',
        propType: PROP_TYPES.ARRAY,
    }),
    ...onAfterClose,
    ...onAfterOpen,
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
    ...renderTo,
};
