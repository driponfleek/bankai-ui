import { ButtonSecondary as BankaiButtonSecondary } from '@driponfleek/bankai-ui-buttons';
import StoryButtonSecondary from './StoryButtonSecondary';
import {
    destructiveArgs as args,
    destructiveArgTypes as argTypes,
} from './args/buttonArgs';

export default {
    title: 'Components/Buttons/Button',
    component: BankaiButtonSecondary,
    args,
    argTypes,
};

export const ButtonSecondary = {
    name: 'Secondary',
    render: StoryButtonSecondary,
};
