import { FormFieldComposer as BankaiFormFieldComposer } from '@driponfleek/bankai-ui-form-elements';
import StoryFormFieldComposer from './StoryFormFieldComposer';
import { argTypes, args } from './args/ffcArgs';

export default {
    title: 'Components/Form Elements',
    component: BankaiFormFieldComposer,
    argTypes,
    args,
};

export const FormFieldComposer = {
    name: 'Form Field Composer',
    render: StoryFormFieldComposer,
    component: BankaiFormFieldComposer,
};
