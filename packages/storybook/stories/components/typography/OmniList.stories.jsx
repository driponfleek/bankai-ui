import { OmniList as BankaiOmniList } from '@driponfleek/bankai-ui-typography';
import StoryOmniList from './StoryOmniList';
import { argTypes, args } from './args/omniListArgs';

export default {
    title: 'Components/Typography',
    component: BankaiOmniList,
    argTypes,
    args,
};

export const OmniList = {
    name: 'Omni-List',
    render: StoryOmniList,
    component: BankaiOmniList,
};
