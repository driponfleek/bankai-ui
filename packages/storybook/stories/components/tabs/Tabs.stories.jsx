import { Tabs as BankaiTabs } from '@driponfleek/bankai-ui-tabs';
import StoryTabs from './StoryTabs';
import { argTypes, args } from './args/tabsArgs';

export default {
    title: 'Components/Tab Views',
    component: BankaiTabs,
    argTypes,
    args,
};

export const Tabs = {
    name: 'Tabs',
    render: StoryTabs,
    component: BankaiTabs,
};
