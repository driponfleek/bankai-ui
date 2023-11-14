import { ProtectedInput as BankaiProtectedInput } from '@driponfleek/bankai-ui-form-elements';
import StoryProtectedInput from './StoryProtectedInput';

export default {
    title: 'Components/Form Elements',
    component: BankaiProtectedInput,
};

export const ProtectedInput = {
    name: 'Protected Input',
    render: StoryProtectedInput,
};
