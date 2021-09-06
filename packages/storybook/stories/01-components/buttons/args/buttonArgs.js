import { genArgType } from '../../../../utils/argTypesUtils';

// Constants
import {
    CONTROL_TYPE_NAMES,
    CONTROL_TYPES,
} from '../../../../const/controlsConst';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    busyIconCls: 'bankai-icon-spinner',
    iconCls: 'bankai-icon-plus-circle',
    text: 'Button Text',
    type: 'button',
    isBusy: false,
    isDestructive: false,
    isDisabled: false,
    isLink: false,
    isPrimary: false,
    isSecondary: false,
    shouldAnimateBusyIcon: true,
};

export const argTypes = {
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
        propType: 'string',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        defaultValue: 'bankai-icon-spinner',
        description:
            'CSS Class used to render a busy icon in the button when `isBusy` prop is `true`. Requires [Bankai Iconography Package](?path=/story/style-guide-iconography--iconography-story) or your own custom iconography solution.',
        propName: 'busyIconCls',
        propType: 'string',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description:
            'CSS Class used to render icons in the button. Requires [Bankai Iconography Package](?path=/story/style-guide-iconography--iconography-story) or your own custom iconography solution.',
        propName: 'iconCls',
        propType: 'string',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: 'Text displayed inside the button.',
        propName: 'text',
        propType: 'string',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.SELECT],
        defaultValue: 'button',
        description: 'Use to set the HTML button type attribute.',
        options: ['button', 'submit'],
        propName: 'type',
        propType: 'string',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description:
            'Use to render a busy state for the component when the UI needs time to perform an action triggerd by a user interaction with the component.',
        propName: 'isBusy',
        propType: 'bool',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description:
            'Use to render the button as a destructive action. Must also have either `isPrimary` or `isSecondary` set to `true` in order to indicate the action type for destructive treatment to be applied.',
        propName: 'isDestructive',
        propType: 'bool',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: 'Use to disable the component.',
        propName: 'isDisabled',
        propType: 'bool',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description:
            'Use when you need to semantically use a button but need a visual treatment of a link.',
        propName: 'isLink',
        propType: 'bool',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: 'Use to indicate the button is a primary action.',
        propName: 'isPrimary',
        propType: 'bool',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description: 'Use to indicate the button is a secondary action.',
        propName: 'isSecondary',
        propType: 'bool',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'true',
        description:
            'When `true` will apply an infinite rotating animation to the busy icon. Turn off to handle your custom implementations.',
        propName: 'shouldAnimateBusyIcon',
        propType: 'bool',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJ],
        description:
            'Can be used to pass data back to an `onClick` handler when the user clicks on the button.',
        propName: 'data',
        propType: 'object',
    }),
    ...genArgType({
        action: 'clicked',
        defaultValue: '() => Promise.resolve()',
        description: 'Handler called when the user clicks on the button.',
        propName: 'onClick',
        propType: 'func',
    }),
};
