import { Badge as BankaiBadge } from '@driponfleek/bankai-ui-badges';
import StoryBadgeAffirmative from './StoryBadgeAffirmative';
import StoryBadgeCautionary from './StoryBadgeCautionary';
import StoryBadge from './StoryBadge';
import StoryBadgeDanger from './StoryBadgeDanger';
import StoryBadgeInfo from './StoryBadgeInfo';
import { argTypes } from './args/badgeArgs';

export default {
    title: 'Components/Badges',
    component: BankaiBadge,
    argTypes,
};

export const Badge = {
    name: 'Default',
    render: StoryBadge,
};

export const Affirmative = {
    name: 'Affirmative',
    render: StoryBadgeAffirmative,
};

export const Cautionary = {
    name: 'Cautionary',
    render: StoryBadgeCautionary,
};

export const Danger = {
    name: 'Danger',
    render: StoryBadgeDanger,
};

export const Info = {
    name: 'Info',
    render: StoryBadgeInfo,
};
