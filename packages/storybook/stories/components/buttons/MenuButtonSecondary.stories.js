import { MenuButtonSecondary as BankaiMenuButtonSecondary } from '@driponfleek/bankai-ui-buttons';
import StoryMenuButtonSecondary from './StoryMenuButtonSecondary';
import { args, argTypes } from './args/menuButtonArgs';

export default {
    title: 'Components/Buttons/Menu Button',
    component: BankaiMenuButtonSecondary,
    args,
    argTypes,
};

export const MenuButtonSecondary = {
    name: 'Secondary',
    render: StoryMenuButtonSecondary,
};
