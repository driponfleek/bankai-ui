import { CORE_RADII_TOKEN_DEFAULTS } from '../core/coreRadiiConst';

export const BADGE_VARIANTS = {
    AFFIRMATIVE: 'AFFIRMATIVE',
    CAUTIONARY: 'CAUTIONARY',
    DANGER: 'DANGER',
    INFO: 'INFO',
};

const { AFFIRMATIVE, CAUTIONARY, DANGER, INFO } = BADGE_VARIANTS;

const getBadgeVariantTokenNames = (variant) => {
    const formattedVariant = variant ? `${variant}_` : '';

    return {
        [`BADGE_${formattedVariant}BG_COLOR`]: `BADGE_${formattedVariant}BG_COLOR`,
        [`BADGE_${formattedVariant}ICON_COLOR`]: `BADGE_${formattedVariant}ICON_COLOR`,
        [`BADGE_${formattedVariant}TEXT_COLOR`]: `BADGE_${formattedVariant}TEXT_COLOR`,
    };
};

export const BADGE_TOKEN_NAMES = {
    BADGE_BORDER_RADIUS: 'BADGE_BORDER_RADIUS',
    ...getBadgeVariantTokenNames(),
    ...getBadgeVariantTokenNames(AFFIRMATIVE),
    ...getBadgeVariantTokenNames(CAUTIONARY),
    ...getBadgeVariantTokenNames(DANGER),
    ...getBadgeVariantTokenNames(INFO),
};

export const BADGE_TOKEN_DEFAULTS = {
    BADGE_BORDER_RADIUS: CORE_RADII_TOKEN_DEFAULTS.CORE_RADIUS_04_X,
};
