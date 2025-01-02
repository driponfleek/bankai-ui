import { Button as BankaiButton } from '@driponfleek/bankai-ui-buttons';
import StoryButtonGuidelines from './StoryButtonGuidelines';
import StoryButtonDefault from './StoryButton';
import { args, argTypes } from './args/buttonArgs';

export default {
    title: 'Components/Buttons/Button',
    component: BankaiButton,
    args,
    argTypes,
};

export const ButtonGuidelines = {
    name: 'Guidelines',
    render: StoryButtonGuidelines,
    parameters: {
        a11y: {
            disable: true,
        },
        actions: {
            disable: true,
        },
        options: {
            showPanel: false,
        },
    },
};

export const Button = {
    name: 'Default',
    render: StoryButtonDefault,
};
