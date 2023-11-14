import { MenuButton, VARIANTS } from '@driponfleek/bankai-ui-buttons';
import StoryMenuButtonDefault from './StoryMenuButtonDefault';
import StoryMenuButtonPrimary from './StoryMenuButtonPrimary';
import StoryMenuButtonSecondary from './StoryMenuButtonSecondary';
import { args, argTypes } from './args/menuButtonArgs';

const { PRIMARY, SECONDARY } = VARIANTS;

export default {
    title: 'Components/Buttons',
    component: MenuButton,
    args,
    argTypes,
};

export const MenuButtonDefault = {
    name: 'Menu Button (Default)',
    render: StoryMenuButtonDefault,
};

export const MenuButtonPrimary = {
    name: 'Menu Button (Primary)',
    render: StoryMenuButtonPrimary,
    args: {
        variant: PRIMARY,
    },
};

export const MenuButtonSecondary = {
    name: 'Menu Button (Secondary)',
    render: StoryMenuButtonSecondary,
    args: {
        variant: SECONDARY,
    },
};
