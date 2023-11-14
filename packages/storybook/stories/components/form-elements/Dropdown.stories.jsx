import { Dropdown as BankaiDropdown } from '@driponfleek/bankai-ui-form-elements-rw';
import StoryDropdown from './StoryDropdown';
import { argTypes, args } from './args/dropdownArgs';

export default {
    title: 'Components/Form Elements',
    component: BankaiDropdown,
    argTypes,
    args,
};

export const Dropdown = {
    name: 'Dropdown',
    render: StoryDropdown,
    component: BankaiDropdown,
};
