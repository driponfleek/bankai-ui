import React from 'react';
import { BankaiCirclePlus } from '@epr0t0type/bankai-ui-icons';
import { BTN_VARIANTS } from '@epr0t0type/bankai-ui-buttons';
import { genArgType } from '../../../../utils/argTypesUtils';

// Constants
import {
    CONTROL_TYPE_NAMES,
    CONTROL_TYPES,
} from '../../../../const/controlsConst';
import PROP_TYPES from '../../../../const/reactPropTypesConst';

// Locale
import strings from '../../../../i18n/strings.json';

const {
    LINK,
    PRIMARY,
    PRIMARY_DESTRUCTIVE,
    SECONDARY,
    SECONDARY_DESTRUCTIVE,
} = BTN_VARIANTS;

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;
const renderIcon = () => <BankaiCirclePlus />;

export const args = {
    text: 'Button Text',
    type: 'button',
    isBusy: false,
    isDisabled: false,
    renderIcon,
};

export const argTypes = {
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
        defaultValue: 'button',
        description: 'Use to set the HTML button type attribute.',
        options: ['button', 'submit'],
        propName: 'type',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.SELECT],
        defaultValue: undefined,
        description: 'Use to set the button variant.',
        options: [
            LINK,
            PRIMARY,
            PRIMARY_DESTRUCTIVE,
            SECONDARY,
            SECONDARY_DESTRUCTIVE,
        ],
        propName: 'variant',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.SELECT],
        defaultValue: 'button',
        description: 'Use to set the HTML button type attribute.',
        options: ['button', 'submit'],
        propName: 'type',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description:
            'Use to render a busy state for the component when the UI needs time to perform an action triggerd by a user interaction with the component.',
        propName: 'isBusy',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: 'Use to disable the component.',
        propName: 'isDisabled',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJ],
        description:
            'Can be used to pass data back to an `onClick` handler when the user clicks on the button.',
        propName: 'data',
        propType: PROP_TYPES.OBJECT,
    }),
    ...genArgType({
        action: 'clicked',
        defaultValue: '() => Promise.resolve()',
        description: 'Handler called when the user clicks on the button.',
        propName: 'onClick',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        description: `Render function for rendering an icon in the button. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderIcon',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        description:
            'Render function for rendering a different busy icon than the default one.',
        propName: 'renderBusyIcon',
        propType: PROP_TYPES.FUNC,
    }),
};
