import React from 'react';
import { BankaiMoreVertical } from '@epr0t0type/bankai-ui-icons';
import { VARIANTS } from '@epr0t0type/bankai-ui-buttons';
import { genArgType } from '../../../../utils/argTypesUtils';
import demoOptions from '../mocks/menuButtonMocks';

// Constants
import {
    CONTROL_TYPE_NAMES,
    CONTROL_TYPES,
} from '../../../../const/controlsConst';
import PROP_TYPES from '../../../../const/reactPropTypesConst';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;
const renderIcon = () => <BankaiMoreVertical />;

export const args = {
    text: 'Menu',
    isDisabled: false,
    shouldCloseOnBlur: true,
    shouldCloseOnSelection: true,
    menuOptions: demoOptions,
    renderIcon,
    // onSelection: () => Promise.resolve(),
    // onMenuToggle: () => Promise.resolve(),
};

export const argTypes = {
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        // description: locale.shared.propDesc.contextCls,
        propName: 'btnContextCls',
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
        description: 'Text displayed inside the button.',
        propName: 'text',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.SELECT],
        description: 'Use to set the button variant.',
        options: Object.keys(VARIANTS).map((VARIANT) => VARIANTS[VARIANT]),
        propName: 'variant',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: 'Use to disable the component.',
        propName: 'isDisabled',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: true,
        // description: '',
        propName: 'shouldCloseOnBlur',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: true,
        // description: '',
        propName: 'shouldCloseOnSelection',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJ],
        // description: '',
        propName: 'menuProps',
        propType: PROP_TYPES.OBJECT,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJ],
        // description: '',
        propName: 'wrapperProps',
        propType: PROP_TYPES.OBJECT,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.ARRAY],
        // description: '',
        propName: 'menuOptions',
        propType: PROP_TYPES.ARRAY,
    }),
    ...genArgType({
        action: 'selected',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onSelection',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        action: 'menu toggled',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onMenuToggle',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        description: `Render function for rendering an icon in the button. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderIcon',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        // description: ``,
        propName: 'renderMenuOption',
        propType: PROP_TYPES.FUNC,
    }),
};
