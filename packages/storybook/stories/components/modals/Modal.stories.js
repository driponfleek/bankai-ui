import { Modal as BankaiModal } from '@driponfleek/bankai-ui-modals';
import StoryModal from './StoryModal';
import { argTypes, args } from './args/modalArgs';

export default {
    title: 'Components/Modals',
    component: BankaiModal,
    argTypes,
    args,
};

export const Modals = {
    name: 'Modal',
    render: StoryModal,
    component: BankaiModal,
};
