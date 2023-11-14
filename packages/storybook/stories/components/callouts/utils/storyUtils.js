import {
    Banner,
    BannerAffirmative,
    BannerCautionary,
    BannerDanger,
    BannerInfo,
    Callout,
    CalloutAffirmative,
    CalloutCautionary,
    CalloutDanger,
    CalloutInfo,
} from '@driponfleek/bankai-ui-callouts';
import {
    BankaiCloud,
    BankaiCircleCheck,
    BankaiCircleInfo,
    BankaiTriangleAlert,
} from '@driponfleek/bankai-ui-icons';

// Constants
import { CALLOUT_VARIANTS } from '../const/storyConst';

const { AFFIRMATIVE, CAUTIONARY, DANGER, INFO } = CALLOUT_VARIANTS;

export const getBannerStoryPlaygroundComp = (VARIANT) => {
    switch (VARIANT) {
        case AFFIRMATIVE:
            return BannerAffirmative;
        case CAUTIONARY:
            return BannerCautionary;
        case DANGER:
            return BannerDanger;
        case INFO:
            return BannerInfo;
        default:
            return Banner;
    }
};

export const getIcon = (VARIANT) => {
    switch (VARIANT) {
        case AFFIRMATIVE:
            return BankaiCircleCheck;
        case CAUTIONARY:
        case DANGER:
            return BankaiTriangleAlert;
        case INFO:
            return BankaiCircleInfo;
        default:
            return BankaiCloud;
    }
};

export const getCalloutStoryPlaygroundComp = (VARIANT) => {
    switch (VARIANT) {
        case AFFIRMATIVE:
            return CalloutAffirmative;
        case CAUTIONARY:
            return CalloutCautionary;
        case DANGER:
            return CalloutDanger;
        case INFO:
            return CalloutInfo;
        default:
            return Callout;
    }
};
