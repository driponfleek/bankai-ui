import { SplitButtonPrimary as BankaiSplitButtonPrimary } from '@driponfleek/bankai-ui-buttons';
import StorySplitButtonPrimary from './StorySplitButtonPrimary';
import { args, argTypes } from './args/splitButtonArgs';

export default {
    title: 'Components/Buttons/Split Button',
    component: BankaiSplitButtonPrimary,
    args,
    argTypes,
};

export const SplitButtonPrimary = {
    name: 'Primary',
    render: StorySplitButtonPrimary,
};
