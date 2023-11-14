import { LoadingState as BankaiLoadingState } from '@driponfleek/bankai-ui-loading';
import StoryLoadingState from './StoryLoadingState';
import { argTypes, args } from './args/loadingStateArgs';

export default {
    title: 'Components/Loading',
    component: BankaiLoadingState,
    argTypes,
    args,
};

export const LoadingState = {
    name: 'Loading State',
    render: StoryLoadingState,
    component: BankaiLoadingState,
};
