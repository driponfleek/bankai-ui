import { ListItem as BankaiListItem } from '@driponfleek/bankai-ui-lists';
import StoryListItem from './StoryListItem';
import { argTypes, args } from './args/listItemArgs';

export default {
    title: 'Components/Lists',
    component: BankaiListItem,
    argTypes,
    args,
};

export const ListItem = {
    name: 'List Item',
    render: StoryListItem,
    component: BankaiListItem,
};
