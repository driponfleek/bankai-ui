import { SplitButtonSecondary as BankaiSplitButtonSecondary } from '@driponfleek/bankai-ui-buttons';
import StorySplitButtonSecondary from './StorySplitButtonSecondary';
import { args, argTypes } from './args/splitButtonArgs';

export default {
    title: 'Components/Buttons/Split Button',
    component: BankaiSplitButtonSecondary,
    args,
    argTypes,
};

export const SplitButtonSecondary = {
    name: 'Secondary',
    render: StorySplitButtonSecondary,
};
