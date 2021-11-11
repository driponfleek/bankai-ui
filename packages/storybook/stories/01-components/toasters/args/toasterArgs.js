import {
    TOASTER_VARIANTS,
    TOASTER_POSITIONS,
} from '@epr0t0type/bankai-ui-toasters';
import { genArgType } from '../../../../utils/argTypesUtils';

// Constants
import {
    CONTROL_TYPE_NAMES,
    CONTROL_TYPES,
} from '../../../../const/controlsConst';
import PROP_TYPES from '../../../../const/reactPropTypesConst';

// Locale
import strings from '../../../../i18n/strings.json';

const { DEFAULT } = TOASTER_VARIANTS;
const { BOTTOM_RIGHT } = TOASTER_POSITIONS;

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    appNodeId: 'root',
    closeBtnARIALabel: 'Close Toaster',
    containerId: 'bankai-toast-container',
    dragDirection: 'x',
    message: "I'm a toaster. See me toast!",
    position: BOTTOM_RIGHT,
    role: 'alert',
    title: 'Toaster Title',
    variant: DEFAULT,
    autoClose: 6000,
    dragToDismissPercent: 80,
    hasCloseButton: true,
    isDraggable: false,
    isRTL: false,
    shouldCloseOnClick: false,
    shouldHideProgressBar: false,
    shouldPauseOnFocusLoss: false,
    shouldPauseOnHover: false,
    shouldPlaceNewestOnTop: true,
    shouldShowIcon: true,
    // onClick: () => Promise.resolve(),
    // onClose: () => Promise.resolve(),
    // onOpen: () => Promise.resolve(),
};

export const argTypes = {
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        defaultValue: 'root',
        // description: '',
        propName: 'appNodeId',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        // defaultValue: '',
        // description: '',
        propName: 'closeBtnARIALabel',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        defaultValue: 'bankai-toast-container',
        // description: '',
        propName: 'containerId',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        defaultValue: 'x',
        // description: '',
        propName: 'dragDirection',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        // description: '',
        propName: 'message',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.SELECT],
        defaultValue: BOTTOM_RIGHT,
        description: 'Use to set the component position.',
        options: Object.keys(TOASTER_POSITIONS).map(
            (POSITION) => TOASTER_POSITIONS[POSITION],
        ),
        propName: 'position',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        defaultValue: 'alert',
        // description: '',
        propName: 'role',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        // description: '',
        propName: 'title',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        // description: '',
        propName: 'toastId',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.SELECT],
        defaultValue: DEFAULT,
        description: 'Use to set the component variant.',
        options: Object.keys(TOASTER_VARIANTS).map(
            (VARIANT) => TOASTER_VARIANTS[VARIANT],
        ),
        propName: 'variant',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.NUM],
        // description: '',
        propName: 'delay',
        propType: PROP_TYPES.NUMBER,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.NUM],
        defaultValue: 80,
        // description: '',
        propName: 'dragToDismissPercent',
        propType: PROP_TYPES.NUMBER,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.NUM],
        // defaultValue: ,
        // description: '',
        propName: 'limit',
        propType: PROP_TYPES.NUMBER,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.NUM],
        // defaultValue: ,
        // description: '',
        propName: 'progress',
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
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: true,
        description: '',
        propName: 'isDraggable',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: '',
        propName: 'isRTL',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: '',
        propName: 'shouldCloseOnClick',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: '',
        propName: 'shouldHideProgressBar',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: '',
        propName: 'shouldPauseOnFocusLoss',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: '',
        propName: 'shouldPauseOnHover',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: true,
        description: '',
        propName: 'shouldPlaceNewestOnTop',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: true,
        description: '',
        propName: 'shouldShowIcon',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJ],
        // description: '',
        propName: 'toastContainerProps',
        propType: PROP_TYPES.OBJECT,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJ],
        // description: '',
        propName: 'toasterProps',
        propType: PROP_TYPES.OBJECT,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJ],
        // description: '',
        propName: 'autoClose',
        propType: [PROP_TYPES.BOOL, PROP_TYPES.NUMBER],
    }),
    ...genArgType({
        action: 'clicked',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onClick',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        action: 'closed',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onClose',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        action: 'opened',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onOpen',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        description:
            'Render function for rendering a custom close button in the toaster.',
        propName: 'renderCloseButton',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        description: `Render function for rendering an icon in the toaster. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderIcon',
        propType: PROP_TYPES.FUNC,
    }),
};
