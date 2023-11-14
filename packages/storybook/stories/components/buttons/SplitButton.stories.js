import { SplitButton as BankaiSplitButton } from '@driponfleek/bankai-ui-buttons';
import StorySplitButton from './StorySplitButton';
import { args, argTypes } from './args/splitButtonArgs';

export default {
    title: 'Components/Buttons/Split Button',
    component: BankaiSplitButton,
    args,
    argTypes,
};

export const SplitButton = {
    name: 'Default',
    render: StorySplitButton,
};
