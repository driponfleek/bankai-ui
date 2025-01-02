import { Banner as BankaiBanner } from '@driponfleek/bankai-ui-callouts';
import StoryBanner from './StoryBanner';
import StoryBannerAffirmative from './StoryBannerAffirmative';
import StoryBannerCautionary from './StoryBannerCautionary';
import StoryBannerDanger from './StoryBannerDanger';
import StoryBannerInfo from './StoryBannerInfo';
import { args, argTypes } from './args/bannerArgs';

export default {
    title: 'Components/Callouts/Banners',
    component: BankaiBanner,
    args,
    argTypes,
};

export const Banner = {
    name: 'Default',
    render: StoryBanner,
};

export const BannerAffirmative = {
    name: 'Affirmative',
    render: StoryBannerAffirmative,
};

export const BannerCautionary = {
    name: 'Cautionary',
    render: StoryBannerCautionary,
};

export const BannerDanger = {
    name: 'Danger',
    render: StoryBannerDanger,
};

export const BannerInfo = {
    name: 'Info',
    render: StoryBannerInfo,
};
