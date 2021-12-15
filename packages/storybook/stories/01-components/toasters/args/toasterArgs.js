import {
    TOASTER_VARIANTS,
    TOASTER_POSITIONS,
} from '@epr0t0type/bankai-ui-toasters';
import {
    genArgType,
    stringArg,
    numberArg,
    selectArg,
    boolArg,
    objectArg,
    funcArg,
} from '../../../../utils/argTypesUtils';

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
    ...stringArg({
        defaultValue: 'root',
        // description: '',
        propName: 'appNodeId',
    }),
    ...stringArg({
        // description: '',
        propName: 'closeBtnARIALabel',
    }),
    ...stringArg({
        defaultValue: 'bankai-toast-container',
        // description: '',
        propName: 'containerId',
    }),
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...stringArg({
        defaultValue: 'x',
        // description: '',
        propName: 'dragDirection',
    }),
    ...stringArg({
        // description: '',
        propName: 'message',
    }),
    ...selectArg({
        defaultValue: BOTTOM_RIGHT,
        description: 'Use to set the component position.',
        options: Object.keys(TOASTER_POSITIONS).map(
            (POSITION) => TOASTER_POSITIONS[POSITION],
        ),
        propName: 'position',
    }),
    ...stringArg({
        defaultValue: 'alert',
        // description: '',
        propName: 'role',
    }),
    ...stringArg({
        // description: '',
        propName: 'title',
    }),
    ...stringArg({
        // description: '',
        propName: 'toastId',
    }),
    ...stringArg({
        defaultValue: DEFAULT,
        description: 'Use to set the component variant.',
        options: Object.keys(TOASTER_VARIANTS).map(
            (VARIANT) => TOASTER_VARIANTS[VARIANT],
        ),
        propName: 'variant',
    }),
    ...numberArg({
        // description: '',
        propName: 'delay',
    }),
    ...numberArg({
        defaultValue: 80,
        // description: '',
        propName: 'dragToDismissPercent',
    }),
    ...numberArg({
        // defaultValue: ,
        // description: '',
        propName: 'limit',
    }),
    ...numberArg({
        // defaultValue: ,
        // description: '',
        propName: 'progress',
    }),
    ...boolArg({
        defaultValue: true,
        // description: '',
        propName: 'hasCloseButton',
    }),
    ...boolArg({
        defaultValue: true,
        // description: '',
        propName: 'isDraggable',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'isRTL',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'shouldCloseOnClick',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'shouldHideProgressBar',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'shouldPauseOnFocusLoss',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'shouldPauseOnHover',
    }),
    ...boolArg({
        defaultValue: true,
        // description: '',
        propName: 'shouldPlaceNewestOnTop',
    }),
    ...boolArg({
        defaultValue: true,
        // description: '',
        propName: 'shouldShowIcon',
    }),
    ...objectArg({
        // description: '',
        propName: 'toastContainerProps',
    }),
    ...objectArg({
        // description: '',
        propName: 'toasterProps',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.NUMBER],
        // description: '',
        propName: 'autoClose',
        propType: [PROP_TYPES.BOOL, PROP_TYPES.NUMBER],
    }),
    ...funcArg({
        action: 'clicked',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onClick',
    }),
    ...funcArg({
        action: 'closed',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onClose',
    }),
    ...funcArg({
        action: 'opened',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onOpen',
    }),
    ...funcArg({
        description:
            'Render function for rendering a custom close button in the toaster.',
        propName: 'renderCloseButton',
    }),
    ...funcArg({
        description: `Render function for rendering an icon in the toaster. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderIcon',
    }),
};
