import { Tile as BankaiTile } from '@driponfleek/bankai-ui-layouts';
import StoryTile from './StoryTile';
import { argTypes, args } from './args/tileArgs';

export default {
    title: 'Components/Layouts',
    component: BankaiTile,
    argTypes,
    args,
};

export const Tile = {
    name: 'Tile',
    render: StoryTile,
    component: BankaiTile,
};
