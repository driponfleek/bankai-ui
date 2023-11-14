import { Combobox as BankaiCombobox } from '@driponfleek/bankai-ui-form-elements-rw';
import StoryCombobox from './StoryCombobox';
import { argTypes, args } from './args/comboboxArgs';

export default {
    title: 'Components/Form Elements',
    component: BankaiCombobox,
    args,
    argTypes,
};

export const Combobox = {
    name: 'Combobox',
    render: StoryCombobox,
    component: BankaiCombobox,
};
