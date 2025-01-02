import { FLFormFieldComposer as BankaiFLFormFieldComposer } from '@driponfleek/bankai-ui-form-elements';
import StoryFLFormFieldComposer from './StoryFLFormFieldComposer';
import { argTypes, args } from './args/sharedFFCArgs';

export default {
    title: 'Components/Form Elements',
    component: BankaiFLFormFieldComposer,
    argTypes,
    args,
};

export const FloatingLabelFormFieldComposer = {
    name: 'Floating Label Form Field Composer',
    render: StoryFLFormFieldComposer,
};
