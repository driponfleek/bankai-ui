import { Multiselect as BankaiMultiselect } from '@driponfleek/bankai-ui-form-elements-rw';
import StoryMultiselect from './StoryMultiselect';
import { argTypes, args } from './args/multiselectArgs';

export default {
    title: 'Components/Form Elements',
    component: BankaiMultiselect,
    argTypes,
    args,
};

export const Multiselect = {
    name: 'Multiselect',
    render: StoryMultiselect,
    component: BankaiMultiselect,
};
