import { Accordion as BankaiAccordion } from '@driponfleek/bankai-ui-accordions';
import StoryAccordion from './StoryAccordion';
import { argTypes, args } from './args/accordionArgs';

export default {
    title: 'Components/Accordions',
    component: BankaiAccordion,
    argTypes,
    args,
};

export const Accordion = {
    name: 'Accordion',
    render: StoryAccordion,
};
