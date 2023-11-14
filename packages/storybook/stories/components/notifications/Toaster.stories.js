import { Toaster as BankaiToaster } from '@driponfleek/bankai-ui-notifications';
import StoryToaster from './StoryToaster';
import { argTypes, args } from './args/toasterArgs';

export default {
    title: 'Components/Notifications',
    component: BankaiToaster,
    argTypes,
    args,
};

export const Toasters = {
    name: 'Toaster',
    render: StoryToaster,
    component: BankaiToaster,
};
