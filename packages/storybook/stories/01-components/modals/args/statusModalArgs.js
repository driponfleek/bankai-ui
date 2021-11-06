import {
    ariaLabel,
    dialogContextCls,
    dialogId,
    titleId,
    underlayContextCls,
    isMounted,
    shouldExitOnEscapePress,
    shouldExitOnUnderlayClick,
    focusTrapOptions,
    appNode,
    renderTo,
    onEnter,
    onExit,
} from './sharedModalArgs';
import { genArgType } from '../../../../utils/argTypesUtils';

// Constants
// import {
//     CONTROL_TYPE_NAMES,
//     CONTROL_TYPES,
// } from '../../../../const/controlsConst';
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
    isMounted: false,
};

export const argTypes = {
    ...ariaLabel,
    ...dialogContextCls,
    ...dialogId,
    ...titleId,
    ...underlayContextCls,
    ...isMounted,
    ...shouldExitOnEscapePress,
    ...shouldExitOnUnderlayClick,
    ...focusTrapOptions,
    ...appNode,
    ...renderTo,
    ...onEnter,
    ...onExit,
    ...genArgType({
        description: 'Render function for rendering an icon in the component.',
        propName: 'renderIcon',
        propType: PROP_TYPES.FUNC,
    }),
};
