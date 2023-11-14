import { ButtonPrimary as BankaiButtonPrimary } from '@driponfleek/bankai-ui-buttons';
import StoryButtonPrimary from './StoryButtonPrimary';
import {
    destructiveArgs as args,
    destructiveArgTypes as argTypes,
} from './args/buttonArgs';

export default {
    title: 'Components/Buttons/Button',
    component: BankaiButtonPrimary,
    args,
    argTypes,
};

export const ButtonPrimary = {
    name: 'Primary',
    render: StoryButtonPrimary,
};
