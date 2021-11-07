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
    ...genArgType({
        // description: '',
        propName: 'statusText',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.NUM],
        defaultValue: 200,
        // description: '',
        propName: 'closeTimeoutMS',
        propType: PROP_TYPES.NUMBER,
    }),
    ...isOpen,
    ...shouldCloseOnEsc,
    ...shouldCloseOnOverlayClick,
    ...onAfterClose,
    ...onAfterOpen,
    ...onExit,
    ...genArgType({
        description: 'Render function for rendering an icon in the component.',
        propName: 'renderIcon',
        propType: PROP_TYPES.FUNC,
    }),
    ...renderTo,
};
