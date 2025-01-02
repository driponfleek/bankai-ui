import { LoadingSquares as BankaiLoadingSquares } from '@driponfleek/bankai-ui-loading';
import StoryLoadingSquares from './StoryLoadingSquares';
import { argTypes, args } from './args/loadingSquaresArgs';

export default {
    title: 'Components/Loading',
    component: BankaiLoadingSquares,
    argTypes,
    args,
};

export const LoadingSquares = {
    name: 'Loading Squares',
    render: StoryLoadingSquares,
    component: BankaiLoadingSquares,
};
