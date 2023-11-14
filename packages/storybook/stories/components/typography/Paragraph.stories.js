import { Paragraph as BankaiParagraph } from '@driponfleek/bankai-ui-typography';
import StoryParagraph from './StoryParagraph';
import { argTypes, args } from './args/sharedArgs';

export default {
    title: 'Components/Typography',
    component: BankaiParagraph,
    argTypes,
    args,
};

export const Paragraph = {
    name: 'Paragraph',
    render: StoryParagraph,
    component: BankaiParagraph,
};
