import { getRecommendedColor } from '@epr0t0type/bankai-lib-color-utils';
import { getTextColor } from '../helperUtils';
import { getThemeAPIKeyFromName } from '../dataUtils';
import { CALLOUT_TOKEN_NAMES } from '../../const/tokens/calloutTokensConst';
import { CALLOUT_STYLE_TOKEN_DEFAULTS } from '../../const/tokens/defaults/calloutTokenDefaultsConst';

const {
    CALLOUT_AFFIRMATIVE_ICON_COLOR,
    CALLOUT_CAUTIONARY_ICON_COLOR,
    CALLOUT_ERROR_ICON_COLOR,
    CALLOUT_ICON_COLOR,
    CALLOUT_INFO_ICON_COLOR,
    CALLOUT_BANNER_BG_COLOR,
    CALLOUT_BANNER_ICON_COLOR,
    CALLOUT_BANNER_TEXT_COLOR,
    CALLOUT_BANNER_AFFIRMATIVE_BG_COLOR,
    CALLOUT_BANNER_AFFIRMATIVE_ICON_COLOR,
    CALLOUT_BANNER_AFFIRMATIVE_TEXT_COLOR,
    CALLOUT_BANNER_CAUTIONARY_BG_COLOR,
    CALLOUT_BANNER_CAUTIONARY_ICON_COLOR,
    CALLOUT_BANNER_CAUTIONARY_TEXT_COLOR,
    CALLOUT_BANNER_ERROR_BG_COLOR,
    CALLOUT_BANNER_ERROR_ICON_COLOR,
    CALLOUT_BANNER_ERROR_TEXT_COLOR,
    CALLOUT_BANNER_INFO_BG_COLOR,
    CALLOUT_BANNER_INFO_ICON_COLOR,
    CALLOUT_BANNER_INFO_TEXT_COLOR,
    CALLOUT_BANNER_BORDER_RADIUS,
} = CALLOUT_TOKEN_NAMES;

const getCalloutBannerColors = (sourceColors = {}) => {
    const { base = {}, variants = [] } = sourceColors;
    const bgColorData =
        variants.find((variant) => variant.lightness === 80) || {};
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

export const getCalloutBannerStyle = (data = {}) => {
    const apiKeyCMBorderRadius = getThemeAPIKeyFromName(
        CALLOUT_BANNER_BORDER_RADIUS,
    );
    const defaultCMBorderRadius =
        CALLOUT_STYLE_TOKEN_DEFAULTS[CALLOUT_BANNER_BORDER_RADIUS];
    const { [apiKeyCMBorderRadius]: cmBorderRadius = defaultCMBorderRadius } =
        data;

    return {
        [apiKeyCMBorderRadius]: cmBorderRadius,
    };
};

export const getCalloutBannerAffirmativeTheme = (colors = {}) => {
    const { sourceColors = {} } = colors;
    const { ICON, TEXT, BG } = getCalloutBannerColors(sourceColors);

    return {
        [getThemeAPIKeyFromName(CALLOUT_BANNER_AFFIRMATIVE_ICON_COLOR)]: ICON,
        [getThemeAPIKeyFromName(CALLOUT_BANNER_AFFIRMATIVE_TEXT_COLOR)]: TEXT,
        [getThemeAPIKeyFromName(CALLOUT_BANNER_AFFIRMATIVE_BG_COLOR)]: BG,
    };
};

export const getCalloutBannerCautionaryTheme = (colors = {}) => {
    const { sourceColors = {} } = colors;
    const { ICON, TEXT, BG } = getCalloutBannerColors(sourceColors);

    return {
        [getThemeAPIKeyFromName(CALLOUT_BANNER_CAUTIONARY_ICON_COLOR)]: ICON,
        [getThemeAPIKeyFromName(CALLOUT_BANNER_CAUTIONARY_TEXT_COLOR)]: TEXT,
        [getThemeAPIKeyFromName(CALLOUT_BANNER_CAUTIONARY_BG_COLOR)]: BG,
    };
};

export const getCalloutBannerDefaultTheme = (colors = {}) => {
    const { sourceColors = {} } = colors;
    const { ICON, TEXT, BG } = getCalloutBannerColors(sourceColors);

    return {
        [getThemeAPIKeyFromName(CALLOUT_BANNER_BG_COLOR)]: BG,
        [getThemeAPIKeyFromName(CALLOUT_BANNER_ICON_COLOR)]: ICON,
        [getThemeAPIKeyFromName(CALLOUT_BANNER_TEXT_COLOR)]: TEXT,
    };
};

export const getCalloutBannerErrorTheme = (colors = {}) => {
    const { sourceColors = {} } = colors;
    const { ICON, TEXT, BG } = getCalloutBannerColors(sourceColors);

    return {
        [getThemeAPIKeyFromName(CALLOUT_BANNER_ERROR_ICON_COLOR)]: ICON,
        [getThemeAPIKeyFromName(CALLOUT_BANNER_ERROR_TEXT_COLOR)]: TEXT,
        [getThemeAPIKeyFromName(CALLOUT_BANNER_ERROR_BG_COLOR)]: BG,
    };
};

export const getCalloutBannerInfoTheme = (colors = {}) => {
    const { sourceColors = {} } = colors;
    const { ICON, TEXT, BG } = getCalloutBannerColors(sourceColors);

    return {
        [getThemeAPIKeyFromName(CALLOUT_BANNER_INFO_ICON_COLOR)]: ICON,
        [getThemeAPIKeyFromName(CALLOUT_BANNER_INFO_TEXT_COLOR)]: TEXT,
        [getThemeAPIKeyFromName(CALLOUT_BANNER_INFO_BG_COLOR)]: BG,
    };
};

export const getCalloutTheme = (colors = {}, config = {}) => {
    const { sourceColors = {} } = colors;
    const { shouldAutoCorrectColors = true, TOKEN_ID } = config;
    const { base = {}, recommendedNonTextColor = {} } = sourceColors;
    const themeData = {
        [getThemeAPIKeyFromName(TOKEN_ID)]: shouldAutoCorrectColors
            ? recommendedNonTextColor.hex
            : base.hex,
    };

    return themeData;
};

export const getCalloutAffirmativeTheme = (colors = {}, config = {}) => {
    return getCalloutTheme(colors, {
        ...config,
        TOKEN_ID: CALLOUT_AFFIRMATIVE_ICON_COLOR,
    });
};

export const getCalloutCautionaryTheme = (colors = {}, config = {}) => {
    return getCalloutTheme(colors, {
        ...config,
        TOKEN_ID: CALLOUT_CAUTIONARY_ICON_COLOR,
    });
};

export const getCalloutDefaultTheme = (colors = {}, config = {}) => {
    return getCalloutTheme(colors, { ...config, TOKEN_ID: CALLOUT_ICON_COLOR });
};

export const getCalloutErrorTheme = (colors = {}, config = {}) => {
    return getCalloutTheme(colors, {
        ...config,
        TOKEN_ID: CALLOUT_ERROR_ICON_COLOR,
    });
};

export const getCalloutInfoTheme = (colors = {}, config = {}) => {
    return getCalloutTheme(colors, {
        ...config,
        TOKEN_ID: CALLOUT_INFO_ICON_COLOR,
    });
};
