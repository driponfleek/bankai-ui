import { Heading as BankaiHeading } from '@driponfleek/bankai-ui-typography';
import StoryHeading from './StoryHeading';
import { argTypes, args } from './args/headingArgs';

export default {
    title: 'Components/Typography',
    component: BankaiHeading,
    argTypes,
    args,
};

export const Heading = {
    name: 'Heading',
    render: StoryHeading,
    component: BankaiHeading,
};
