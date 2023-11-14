import { Badge, VARIANTS } from '@driponfleek/bankai-ui-badges';
import StoryBadgeAffirmative from './StoryBadgeAffirmative';
import StoryBadgeCautionary from './StoryBadgeCautionary';
import StoryBadgeDefault from './StoryBadgeDefault';
import StoryBadgeDanger from './StoryBadgeDanger';
import StoryBadgeInfo from './StoryBadgeInfo';
import { argTypes } from './args/badgeArgs';

const { AFFIRMATIVE, CAUTIONARY, DANGER, INFO } = VARIANTS;

export default {
    title: 'Components/Badges',
    component: Badge,
    argTypes,
};

export const Default = {
    name: 'Badge (Default)',
    render: StoryBadgeDefault,
};

export const Affirmative = {
    name: 'Badge (Affirmative)',
    render: StoryBadgeAffirmative,
    args: {
        variant: AFFIRMATIVE,
    },
    argTypes: {
        ...argTypes,
        variant: {
            ...argTypes.variant,
            table: {
                defaultValue: { summary: AFFIRMATIVE },
            },
        },
    },
};

export const Cautionary = {
    name: 'Badge (Cautionary)',
    render: StoryBadgeCautionary,
    args: {
        variant: CAUTIONARY,
    },
    argTypes: {
        ...argTypes,
        variant: {
            ...argTypes.variant,
            table: {
                defaultValue: { summary: CAUTIONARY },
            },
        },
    },
};

export const Danger = {
    name: 'Badge (Danger)',
    render: StoryBadgeDanger,
    args: {
        variant: DANGER,
    },
    argTypes: {
        ...argTypes,
        variant: {
            ...argTypes.variant,
            table: {
                defaultValue: { summary: DANGER },
            },
        },
    },
};

export const Info = {
    name: 'Badge (Info)',
    render: StoryBadgeInfo,
    args: {
        variant: INFO,
    },
    argTypes: {
        ...argTypes,
        variant: {
            ...argTypes.variant,
            table: {
                defaultValue: { summary: INFO },
            },
        },
    },
};
