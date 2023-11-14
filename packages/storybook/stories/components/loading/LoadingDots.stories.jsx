import { LoadingDots as BankaiLoadingDots } from '@driponfleek/bankai-ui-loading';
import StoryLoadingDots from './StoryLoadingDots';
import { argTypes, args } from './args/loadingDotsArgs';

export default {
    title: 'Components/Loading',
    component: BankaiLoadingDots,
    argTypes,
    args,
};

export const LoadingDots = {
    name: 'Loading Dots',
    render: StoryLoadingDots,
    component: BankaiLoadingDots,
};
