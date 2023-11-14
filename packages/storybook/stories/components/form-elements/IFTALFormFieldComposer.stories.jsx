import { IFTALFormFieldComposer as BankaiIFTALFormFieldComposer } from '@driponfleek/bankai-ui-form-elements';
import StoryIFTALFormFieldComposer from './StoryIFTALFormFieldComposer';
import { argTypes, args } from './args/iftalffcArgs';

export default {
    title: 'Components/Form Elements',
    component: BankaiIFTALFormFieldComposer,
    argTypes,
    args,
};

export const IFTALFormFieldComposer = {
    name: 'Infield Top-Aligned Label Form Field Composer',
    render: StoryIFTALFormFieldComposer,
    component: BankaiIFTALFormFieldComposer,
};
