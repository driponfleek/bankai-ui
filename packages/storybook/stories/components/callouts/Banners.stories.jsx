import { Banner, VARIANTS } from '@driponfleek/bankai-ui-callouts';
import StoryBannerDefault from './StoryBannerDefault';
import StoryBannerAffirmative from './StoryBannerAffirmative';
import StoryBannerCautionary from './StoryBannerCautionary';
import StoryBannerDanger from './StoryBannerDanger';
import StoryBannerInfo from './StoryBannerInfo';
import { args, argTypes } from './args/bannerArgs';

const { AFFIRMATIVE, CAUTIONARY, DANGER, INFO } = VARIANTS;

export default {
    title: 'Components/Banners',
    component: Banner,
    args,
    argTypes,
};

export const Default = {
    name: 'Banner (Default)',
    render: StoryBannerDefault,
};

export const Affirmative = {
    name: 'Banner (Affirmative)',
    render: StoryBannerAffirmative,
    args: {
        variant: AFFIRMATIVE,
    },
};

export const Cautionary = {
    name: 'Banner (Cautionary)',
    render: StoryBannerCautionary,
    args: {
        variant: CAUTIONARY,
    },
};

export const Danger = {
    name: 'Banner (Danger)',
    render: StoryBannerDanger,
    args: {
        variant: DANGER,
    },
};

export const Info = {
    name: 'Banner (Info)',
    render: StoryBannerInfo,
    args: {
        variant: INFO,
    },
};
