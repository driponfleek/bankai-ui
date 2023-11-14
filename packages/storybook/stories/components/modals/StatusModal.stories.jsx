import { StatusModal as BankaiStatusModal } from '@driponfleek/bankai-ui-modals';
import StoryStatusModal from './StoryStatusModal';
import { argTypes, args } from './args/statusModalArgs';

export default {
    title: 'Components/Modals',
    component: BankaiStatusModal,
    argTypes,
    args,
};

export const StatusModals = {
    name: 'Status Modal',
    render: StoryStatusModal,
    component: BankaiStatusModal,
};
