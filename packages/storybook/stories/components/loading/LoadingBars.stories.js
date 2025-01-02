import { LoadingBars as BankaiLoadingBars } from '@driponfleek/bankai-ui-loading';
import StoryLoadingBars from './StoryLoadingBars';
import { argTypes, args } from './args/loadingBarsArgs';

export default {
    title: 'Components/Loading',
    component: BankaiLoadingBars,
    argTypes,
    args,
};

export const LoadingBars = {
    name: 'Loading Bars',
    render: StoryLoadingBars,
    component: BankaiLoadingBars,
};
