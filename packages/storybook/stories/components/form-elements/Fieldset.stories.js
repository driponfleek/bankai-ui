import { Fieldset as BankaiFieldset } from '@driponfleek/bankai-ui-form-elements';
import StoryFieldset from './StoryFieldset';
import { argTypes, args } from './args/fieldsetArgs';

export default {
    title: 'Components/Form Elements',
    component: BankaiFieldset,
    argTypes,
    args,
};

export const Fieldset = {
    name: 'Fieldset',
    render: StoryFieldset,
    component: BankaiFieldset,
};
