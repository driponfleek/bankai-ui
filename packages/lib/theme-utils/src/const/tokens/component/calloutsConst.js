import { VARIANTS } from '@driponfleek/bankai-ui-callouts';
import { CORE_RADII_TOKEN_DEFAULTS } from '../core/coreRadiiConst';

const { AFFIRMATIVE, CAUTIONARY, DANGER, INFO } = VARIANTS;

const getBannerVariantTokenNames = (variant) => {
    const formattedVariant = variant ? `${variant}_` : '';

    return {
        [`BANNER_${formattedVariant}BG_COLOR`]: `BANNER_${formattedVariant}BG_COLOR`,
        [`BANNER_${formattedVariant}ICON_COLOR`]: `BANNER_${formattedVariant}ICON_COLOR`,
        [`BANNER_${formattedVariant}TEXT_COLOR`]: `BANNER_${formattedVariant}TEXT_COLOR`,
    };
};

const getCalloutVariantTokens = (variant) => {
    const formattedVariant = variant ? `${variant}_` : '';

    return {
        [`CALLOUT_${formattedVariant}ICON_COLOR`]: `CALLOUT_${formattedVariant}ICON_COLOR`,
    };
};

export const BANNER_TOKEN_NAMES = {
    BANNER_BORDER_RADIUS: 'BANNER_BORDER_RADIUS',
};

export const BANNER_TOKEN_DEFAULTS = {
    BANNER_BORDER_RADIUS: CORE_RADII_TOKEN_DEFAULTS.CORE_RADIUS_02_X,
};

export const BANNER_DEFAULT_COLOR_TOKEN_NAMES = getBannerVariantTokenNames();

export const BANNER_AFFIRMATIVE_COLOR_TOKEN_NAMES =
    getBannerVariantTokenNames(AFFIRMATIVE);

export const BANNER_CAUTIONARY_COLOR_TOKEN_NAMES =
    getBannerVariantTokenNames(CAUTIONARY);

export const BANNER_DANGER_COLOR_TOKEN_NAMES =
    getBannerVariantTokenNames(DANGER);

export const BANNER_INFO_COLOR_TOKEN_NAMES = getBannerVariantTokenNames(INFO);

export const CALLOUT_AFFIRMATIVE_COLOR_TOKEN_NAMES =
    getCalloutVariantTokens(AFFIRMATIVE);

export const CALLOUT_CAUTIONARY_COLOR_TOKEN_NAMES =
    getCalloutVariantTokens(CAUTIONARY);

export const CALLOUT_DANGER_COLOR_TOKEN_NAMES = getCalloutVariantTokens(DANGER);

export const CALLOUT_INFO_COLOR_TOKEN_NAMES = getCalloutVariantTokens(INFO);
