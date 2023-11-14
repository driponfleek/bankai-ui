import { Tooltip as BankaiTooltip } from '@driponfleek/bankai-ui-tooltips';
import StoryTooltip from './StoryTooltip';
import { argTypes, args } from './args/tooltipArgs';

export default {
    title: 'Components/Tooltips',
    component: BankaiTooltip,
    argTypes,
    args,
};

export const Tooltip = {
    name: 'Tooltip',
    render: StoryTooltip,
    component: BankaiTooltip,
};
