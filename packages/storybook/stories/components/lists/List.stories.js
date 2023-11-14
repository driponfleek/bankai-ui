import { List as BankaiList } from '@driponfleek/bankai-ui-lists';
import StoryList from './StoryList';
import { argTypes, args } from './args/listArgs';

export default {
    title: 'Components/Lists',
    component: BankaiList,
    argTypes,
    args,
};

export const List = {
    name: 'List',
    render: StoryList,
    component: BankaiList,
};
