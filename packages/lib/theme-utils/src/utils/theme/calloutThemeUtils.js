import {
    getRecommendedColor,
    getNewColorByChangingLightness,
} from '@epr0t0type/bankai-lib-color-utils';
import { getJuxtaposedColorAgainstCanvases, getTextColor } from '../colorUtils';
import { getThemeAPIKeyFromName } from '../dataMassageUtils';
import { THEME_TOKEN_NAMES } from '../../const/themeTokensConst';

const {
    COLOR_CALLOUT_GENERIC_ERROR_ICON,
    COLOR_CALLOUT_ICON,
    COLOR_CALLOUT_MEMO_BG,
    COLOR_CALLOUT_MEMO_ICON,
    COLOR_CALLOUT_MEMO_TEXT,
    COLOR_CALLOUT_MEMO_AFFIRMATIVE_BG,
    COLOR_CALLOUT_MEMO_AFFIRMATIVE_ICON,
    COLOR_CALLOUT_MEMO_AFFIRMATIVE_TEXT,
    COLOR_CALLOUT_MEMO_CAUTIONARY_BG,
    COLOR_CALLOUT_MEMO_CAUTIONARY_ICON,
    COLOR_CALLOUT_MEMO_CAUTIONARY_TEXT,
    COLOR_CALLOUT_MEMO_ERROR_BG,
    COLOR_CALLOUT_MEMO_ERROR_ICON,
    COLOR_CALLOUT_MEMO_ERROR_TEXT,
    COLOR_CALLOUT_MEMO_INFO_BG,
    COLOR_CALLOUT_MEMO_INFO_ICON,
    COLOR_CALLOUT_MEMO_INFO_TEXT,
} = THEME_TOKEN_NAMES;

const getCalloutMemoColors = (sourceColorData = {}) => {
    const { base = {}, variants = [] } = sourceColorData;
    const bgColorData = variants.find((variant) => variant.id === '80') || {};
    const { hex: BG } = bgColorData;
    const { hex: ICON } =
        getRecommendedColor(bgColorData, [base, ...variants]) || {};
    const TEXT = getTextColor(BG);

    return {
        ICON,
        TEXT,
        BG,
    };
};

export const getCalloutMemoAffirmativeTheme = (sourceColorData = {}) => {
    const { ICON, TEXT, BG } = getCalloutMemoColors(sourceColorData);

    return {
        [getThemeAPIKeyFromName(COLOR_CALLOUT_MEMO_AFFIRMATIVE_ICON)]: ICON,
        [getThemeAPIKeyFromName(COLOR_CALLOUT_MEMO_AFFIRMATIVE_TEXT)]: TEXT,
        [getThemeAPIKeyFromName(COLOR_CALLOUT_MEMO_AFFIRMATIVE_BG)]: BG,
    };
};

export const getCalloutMemoCautionaryTheme = (sourceColorData = {}) => {
    const { ICON, TEXT, BG } = getCalloutMemoColors(sourceColorData);

    return {
        [getThemeAPIKeyFromName(COLOR_CALLOUT_MEMO_CAUTIONARY_ICON)]: ICON,
        [getThemeAPIKeyFromName(COLOR_CALLOUT_MEMO_CAUTIONARY_TEXT)]: TEXT,
        [getThemeAPIKeyFromName(COLOR_CALLOUT_MEMO_CAUTIONARY_BG)]: BG,
    };
};

export const getCalloutMemoErrorTheme = (sourceColorData = {}) => {
    const { ICON, TEXT, BG } = getCalloutMemoColors(sourceColorData);

    return {
        [getThemeAPIKeyFromName(COLOR_CALLOUT_MEMO_ERROR_ICON)]: ICON,
        [getThemeAPIKeyFromName(COLOR_CALLOUT_MEMO_ERROR_TEXT)]: TEXT,
        [getThemeAPIKeyFromName(COLOR_CALLOUT_MEMO_ERROR_BG)]: BG,
    };
};

export const getCalloutMemoInfoTheme = (sourceColorData = {}) => {
    const { ICON, TEXT, BG } = getCalloutMemoColors(sourceColorData);

    return {
        [getThemeAPIKeyFromName(COLOR_CALLOUT_MEMO_INFO_ICON)]: ICON,
        [getThemeAPIKeyFromName(COLOR_CALLOUT_MEMO_INFO_TEXT)]: TEXT,
        [getThemeAPIKeyFromName(COLOR_CALLOUT_MEMO_INFO_BG)]: BG,
    };
};

export const getCalloutTheme = (colors = {}, config = {}) => {
    const {
        errorColorData = {},
        canvasColor = {},
        canvasAltColor,
        textAltColor,
    } = colors;
    const { isDarkMode, shouldAutoCorrectColors = true } = config;
    const bgLightness = isDarkMode ? 20 : 80;
    const calloutMemoBgColor = getNewColorByChangingLightness(
        canvasColor.hex,
        bgLightness,
    );
    const calloutMemoTextColor = getTextColor(calloutMemoBgColor);

    const genericErrorCalloutIconColor = !shouldAutoCorrectColors
        ? errorColorData?.base?.hex
        : getJuxtaposedColorAgainstCanvases({
              canvasColor,
              canvasAltColor,
              sourceColorData: errorColorData,
          }).hex;
    const themeData = {
        [getThemeAPIKeyFromName(COLOR_CALLOUT_ICON)]: textAltColor.hex,
        [getThemeAPIKeyFromName(COLOR_CALLOUT_MEMO_BG)]: calloutMemoBgColor,
        [getThemeAPIKeyFromName(COLOR_CALLOUT_MEMO_ICON)]: calloutMemoTextColor,
        [getThemeAPIKeyFromName(COLOR_CALLOUT_MEMO_TEXT)]: calloutMemoTextColor,
        [getThemeAPIKeyFromName(COLOR_CALLOUT_GENERIC_ERROR_ICON)]:
            genericErrorCalloutIconColor,
    };

    return themeData;
};
