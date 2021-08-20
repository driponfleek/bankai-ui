// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes
export const args = {
    // contextCls: '',
    iconCls: 'bankai-icon-plus-circle',
    text: 'Button Text',
    type: 'button',
    isBusy: false,
    isDestructive: false,
    isDisabled: false,
    isLink: false,
    isPrimary: false,
    isSecondary: false,
    // onClick: () => Promise.resolve(),
};

export const argTypes = {
    contextCls: {
        control: {
            type: 'text',
        },
        description:
            'CSS Class that can be used when contextually styling the component.',
        name: 'contextCls',
        table: {
            type: {
                summary: 'string',
            },
        },
    },
    type: {
        control: {
            type: 'select',
        },
        description: 'Use to set the HTML button type attribute.',
        name: 'type',
        options: ['button', 'submit'],
        table: {
            defaultValue: { summary: 'button' },
            type: {
                // detail: '',
                summary: 'string',
            },
        },
    },
    isBusy: {
        control: {
            type: 'boolean',
        },
        description:
            'Use to render a busy state for the button when it has been interacted with and the UI needs time to perform the action triggerd by interacting with the button.',
        table: {
            defaultValue: { summary: false },
            type: {
                // detail: '',
                summary: 'boolean',
            },
        },
    },
    data: {
        control: {
            type: 'object',
        },
        description:
            'Can be used to pass data when an event is triggered from the button',
        name: 'data',
        table: {
            type: {
                summary: 'object',
            },
        },
    },
    onClick: { name: 'onClick', action: 'clicked' },
};
