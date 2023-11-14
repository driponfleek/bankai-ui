import { IFLFormFieldComposer as BankaiIFLFormFieldComposer } from '@driponfleek/bankai-ui-form-elements';
import StoryIFLFormFieldComposer from './StoryIFLFormFieldComposer';
import { argTypes, args } from './args/iflFFCArgs';

export default {
    title: 'Components/Form Elements',
    component: BankaiIFLFormFieldComposer,
    argTypes,
    args,
};

export const IFLFormFieldComposer = {
    name: 'Infield Label Form Field Composer',
    render: StoryIFLFormFieldComposer,
    component: BankaiIFLFormFieldComposer,
};
