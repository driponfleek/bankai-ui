import { getNewColorByChangingLightness } from '@epr0t0type/bankai-lib-color-utils';
import { getTextColor } from '../colorUtils';
import { getThemeAPIKeyFromName } from '../dataMassageUtils';
import { THEME_TOKEN_NAMES } from '../../const/themeTokensConst';

const {
    COLOR_BADGE_BG,
    COLOR_BADGE_TEXT,
    COLOR_BADGE_AFFIRMATIVE_BG,
    COLOR_BADGE_AFFIRMATIVE_TEXT,
    COLOR_BADGE_CAUTIONARY_BG,
    COLOR_BADGE_CAUTIONARY_TEXT,
    COLOR_BADGE_ERROR_BG,
    COLOR_BADGE_ERROR_TEXT,
    COLOR_BADGE_INFO_BG,
    COLOR_BADGE_INFO_TEXT,
} = THEME_TOKEN_NAMES;

export const getBadgeColors = (colorData = {}) => {
    const { base = {} } = colorData;
    const { hex } = base;

    return {
        BG: hex,
        TEXT: getTextColor(hex),
    };
};

export const getBadgeAffirmativeTheme = (sourceColorData = {}) => {
    const { BG, TEXT } = getBadgeColors(sourceColorData);

    return {
        [getThemeAPIKeyFromName(COLOR_BADGE_AFFIRMATIVE_BG)]: BG,
        [getThemeAPIKeyFromName(COLOR_BADGE_AFFIRMATIVE_TEXT)]: TEXT,
    };
};

export const getBadgeCautionaryTheme = (sourceColorData = {}) => {
    const { BG, TEXT } = getBadgeColors(sourceColorData);

    return {
        [getThemeAPIKeyFromName(COLOR_BADGE_CAUTIONARY_BG)]: BG,
        [getThemeAPIKeyFromName(COLOR_BADGE_CAUTIONARY_TEXT)]: TEXT,
    };
};

export const getBadgeErrorTheme = (sourceColorData = {}) => {
    const { BG, TEXT } = getBadgeColors(sourceColorData);

    return {
        [getThemeAPIKeyFromName(COLOR_BADGE_ERROR_BG)]: BG,
        [getThemeAPIKeyFromName(COLOR_BADGE_ERROR_TEXT)]: TEXT,
    };
};

export const getBadgeInfoTheme = (sourceColorData = {}) => {
    const { BG, TEXT } = getBadgeColors(sourceColorData);

    return {
        [getThemeAPIKeyFromName(COLOR_BADGE_INFO_BG)]: BG,
        [getThemeAPIKeyFromName(COLOR_BADGE_INFO_TEXT)]: TEXT,
    };
};

export const getBadgeDefaultTheme = (canvasColor = {}, config = {}) => {
    const { isDarkMode } = config;
    const bgLightness = isDarkMode ? 20 : 80;
    const bgColor = getNewColorByChangingLightness(
        canvasColor.hex,
        bgLightness,
    );
    const textColor = getTextColor(bgColor);

    return {
        [getThemeAPIKeyFromName(COLOR_BADGE_BG)]: bgColor,
        [getThemeAPIKeyFromName(COLOR_BADGE_TEXT)]: textColor,
    };
};
