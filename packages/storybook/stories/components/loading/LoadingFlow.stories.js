import { LoadingFlow as BankaiLoadingFlow } from '@driponfleek/bankai-ui-loading';
import StoryLoadingFlow from './StoryLoadingFlow';
import { argTypes, args } from './args/loadingFlowArgs';

export default {
    title: 'Components/Loading',
    component: BankaiLoadingFlow,
    argTypes,
    args,
};

export const LoadingFlow = {
    name: 'Loading Flow',
    render: StoryLoadingFlow,
    component: BankaiLoadingFlow,
};
