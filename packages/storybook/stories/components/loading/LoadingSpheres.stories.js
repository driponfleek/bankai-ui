import { LoadingSpheres as BankaiLoadingSpheres } from '@driponfleek/bankai-ui-loading';
import StoryLoadingSpheres from './StoryLoadingSpheres';
import { argTypes, args } from './args/loadingSpheresArgs';

export default {
    title: 'Components/Loading',
    component: BankaiLoadingSpheres,
    argTypes,
    args,
};

export const LoadingSpheres = {
    name: 'Loading Spheres',
    render: StoryLoadingSpheres,
    component: BankaiLoadingSpheres,
};
