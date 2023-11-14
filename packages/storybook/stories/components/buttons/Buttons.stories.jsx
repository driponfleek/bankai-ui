import { Button, VARIANTS } from '@driponfleek/bankai-ui-buttons';
import StoryButtonDefault from './StoryButtonDefault';
import StoryButtonPrimary from './StoryButtonPrimary';
import StoryButtonPrimaryDestructive from './StoryButtonPrimaryDestructive';
import StoryButtonSecondary from './StoryButtonSecondary';
import StoryButtonSecondaryDestructive from './StoryButtonSecondaryDestructive';
import { args, argTypes } from './args/buttonArgs';

const { PRIMARY, PRIMARY_DESTRUCTIVE, SECONDARY, SECONDARY_DESTRUCTIVE } =
    VARIANTS;

export default {
    title: 'Components/Buttons',
    component: Button,
    // tags: ['autodocs'],
    args,
    argTypes,
};

export const Default = {
    name: 'Button (Default)',
    render: StoryButtonDefault,
};

export const Primary = {
    name: 'Button (Primary)',
    render: StoryButtonPrimary,
    args: {
        ...args,
        variant: PRIMARY,
    },
    argTypes: {
        ...argTypes,
        variant: {
            ...argTypes.variant,
            table: {
                defaultValue: { summary: PRIMARY },
            },
        },
    },
};

export const PrimaryDestructive = {
    name: 'Button (Primary Destructive)',
    render: StoryButtonPrimaryDestructive,
    args: {
        ...args,
        variant: PRIMARY_DESTRUCTIVE,
    },
    argTypes: {
        ...argTypes,
        variant: {
            ...argTypes.variant,
            table: {
                defaultValue: { summary: PRIMARY_DESTRUCTIVE },
            },
        },
    },
};

export const Secondary = {
    name: 'Button (Secondary)',
    render: StoryButtonSecondary,
    args: {
        ...args,
        variant: SECONDARY,
    },
    argTypes: {
        ...argTypes,
        variant: {
            ...argTypes.variant,
            table: {
                defaultValue: { summary: SECONDARY },
            },
        },
    },
};

export const SecondaryDestructive = {
    name: 'Button (Secondary Destructive)',
    render: StoryButtonSecondaryDestructive,
    args: {
        ...args,
        variant: SECONDARY_DESTRUCTIVE,
    },
    argTypes: {
        ...argTypes,
        variant: {
            ...argTypes.variant,
            table: {
                defaultValue: { summary: SECONDARY_DESTRUCTIVE },
            },
        },
    },
};
