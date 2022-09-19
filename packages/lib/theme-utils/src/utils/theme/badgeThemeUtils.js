import { getNewColorByChangingLightness } from '@epr0t0type/bankai-lib-color-utils';
import { getTextColor } from '../helperUtils';
import { getThemeAPIKeyFromName } from '../dataUtils';
import { BADGE_TOKEN_NAMES } from '../../const/tokens/badgeTokensConst';
import { BADGE_STYLE_TOKEN_DEFAULTS } from '../../const/tokens/defaults/badgeTokenDefaultsConst';

const {
    BADGE_AFFIRMATIVE_BG_COLOR,
    BADGE_AFFIRMATIVE_TEXT_COLOR,
    BADGE_BG_COLOR,
    BADGE_BORDER_RADIUS,
    BADGE_CAUTIONARY_BG_COLOR,
    BADGE_CAUTIONARY_TEXT_COLOR,
    BADGE_ERROR_BG_COLOR,
    BADGE_ERROR_TEXT_COLOR,
    BADGE_INFO_BG_COLOR,
    BADGE_INFO_TEXT_COLOR,
    BADGE_TEXT_COLOR,
} = BADGE_TOKEN_NAMES;

const getBadgeColors = (sourceColors = {}, config = {}) => {
    const { base = {}, recommendedNonTextColor = {} } = sourceColors;
    const { shouldAutoCorrectColors } = config;
    const BG = shouldAutoCorrectColors ? recommendedNonTextColor.hex : base.hex;

    return {
        BG,
        TEXT: getTextColor(BG),
    };
};

export const getBadgeStyle = (data = {}) => {
    const apiKeyRadius = getThemeAPIKeyFromName(BADGE_BORDER_RADIUS);
    const defaultRadius = BADGE_STYLE_TOKEN_DEFAULTS[BADGE_BORDER_RADIUS];
    const { [apiKeyRadius]: radius = defaultRadius } = data;

    return { [apiKeyRadius]: radius };
};

export const getBadgeAffirmativeTheme = (colors = {}) => {
    const { sourceColors } = colors;
    const { BG, TEXT } = getBadgeColors(sourceColors);

    return {
        [getThemeAPIKeyFromName(BADGE_AFFIRMATIVE_BG_COLOR)]: BG,
        [getThemeAPIKeyFromName(BADGE_AFFIRMATIVE_TEXT_COLOR)]: TEXT,
    };
};

export const getBadgeCautionaryTheme = (colors = {}) => {
    const { sourceColors } = colors;
    const { BG, TEXT } = getBadgeColors(sourceColors);

    return {
        [getThemeAPIKeyFromName(BADGE_CAUTIONARY_BG_COLOR)]: BG,
        [getThemeAPIKeyFromName(BADGE_CAUTIONARY_TEXT_COLOR)]: TEXT,
    };
};

export const getBadgeErrorTheme = (colors = {}) => {
    const { sourceColors } = colors;
    const { BG, TEXT } = getBadgeColors(sourceColors);

    return {
        [getThemeAPIKeyFromName(BADGE_ERROR_BG_COLOR)]: BG,
        [getThemeAPIKeyFromName(BADGE_ERROR_TEXT_COLOR)]: TEXT,
    };
};

export const getBadgeInfoTheme = (colors = {}) => {
    const { sourceColors } = colors;
    const { BG, TEXT } = getBadgeColors(sourceColors);

    return {
        [getThemeAPIKeyFromName(BADGE_INFO_BG_COLOR)]: BG,
        [getThemeAPIKeyFromName(BADGE_INFO_TEXT_COLOR)]: TEXT,
    };
};

export const getBadgeDefaultTheme = (colors = {}, config = {}) => {
    const { sourceColors } = colors;
    const { isDarkMode } = config;
    const bgLightness = isDarkMode ? 20 : 80;
    const bgColor = getNewColorByChangingLightness(
        sourceColors.hex,
        bgLightness,
    );
    const textColor = getTextColor(bgColor);

    return {
        [getThemeAPIKeyFromName(BADGE_BG_COLOR)]: bgColor,
        [getThemeAPIKeyFromName(BADGE_TEXT_COLOR)]: textColor,
    };
};
