import { MenuButtonPrimary as BankaiMenuButtonPrimary } from '@driponfleek/bankai-ui-buttons';
import StoryMenuButtonPrimary from './StoryMenuButtonPrimary';
import { args, argTypes } from './args/menuButtonArgs';

export default {
    title: 'Components/Buttons/Menu Button',
    component: BankaiMenuButtonPrimary,
    args,
    argTypes,
};

export const MenuButtonPrimary = {
    name: 'Primary',
    render: StoryMenuButtonPrimary,
};
