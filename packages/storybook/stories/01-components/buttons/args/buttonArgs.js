import React from 'react';
import { BankaiCirclePlus } from '@epr0t0type/bankai-ui-icons';
import { genArgType } from '../../../../utils/argTypesUtils';

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
const renderIcon = () => <BankaiCirclePlus />;

export const args = {
    text: 'Button Text',
    type: 'button',
    isBusy: false,
    isDestructive: false,
    isDisabled: false,
    isLink: false,
    isPrimary: false,
    isSecondary: false,
    shouldAnimateBusyIcon: true,
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
        description:
            'Use to render the button as a destructive action. Must also have either `isPrimary` or `isSecondary` set to `true` in order to indicate the action type for destructive treatment to be applied.',
        propName: 'isDestructive',
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
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description:
            'Use when you need to semantically use a button but need a visual treatment of a link.',
        propName: 'isLink',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: 'Use to indicate the button is a primary action.',
        propName: 'isPrimary',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: 'Use to indicate the button is a secondary action.',
        propName: 'isSecondary',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'true',
        description:
            'When `true` will apply an infinite rotating animation to the busy icon. Turn off to handle your custom implementations.',
        propName: 'shouldAnimateBusyIcon',
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
        description:
            'Render function for rendering an icon in the button. Requires [Bankai Iconography Package](?path=/story/style-guide-iconography--iconography-story) or your own custom iconography solution.',
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
