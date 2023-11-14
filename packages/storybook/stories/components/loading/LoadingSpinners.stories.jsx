import { LoadingSpinners as BankaiLoadingSpinners } from '@driponfleek/bankai-ui-loading';
import StoryLoadingSpinners from './StoryLoadingSpinners';
import { argTypes, args } from './args/loadingSpinnersArgs';

export default {
    title: 'Components/Loading',
    component: BankaiLoadingSpinners,
    argTypes,
    args,
};

export const LoadingSpinners = {
    name: 'Loading Spinners',
    render: StoryLoadingSpinners,
    component: BankaiLoadingSpinners,
};
