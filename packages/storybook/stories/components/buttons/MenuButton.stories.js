import { MenuButton as BankaiMenuButton } from '@driponfleek/bankai-ui-buttons';
import StoryMenuButton from './StoryMenuButton';
import { args, argTypes } from './args/menuButtonArgs';

export default {
    title: 'Components/Buttons/Menu Button',
    component: BankaiMenuButton,
    args,
    argTypes,
};

export const MenuButton = {
    name: 'Default',
    render: StoryMenuButton,
};
