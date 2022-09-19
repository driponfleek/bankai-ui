import {
    getCoreColorsData,
    BTN_STYLE_TOKEN_NAMES,
    BTN_STYLE_TOKEN_DEFAULTS,
    CORE_TOKEN_NAMES,
    CORE_STYLE_TOKEN_DEFAULTS,
    // getThemeDefaults,
    getThemeCSSVarFromAPIKey,
    getThemeAPIKeyFromName,
} from '@epr0t0type/bankai-lib-theme-utils';

const { BTN_BORDER_RADIUS } = BTN_STYLE_TOKEN_NAMES;
const { CORE_STATE_DISABLED_OPACITY } = CORE_TOKEN_NAMES;
const {
    CORE_COLOR_CANVAS,
    CORE_COLOR_CANVAS_ALT,
    CORE_COLOR_TEXT,
    CORE_COLOR_TEXT_ALT,
} = CORE_TOKEN_NAMES;

export const getStateDisabledOpacityToken = () => {
    // const apiKey = getThemeAPIKeyFromName(CORE_STATE_DISABLED_OPACITY);
    // const cssVar = getThemeCSSVarFromAPIKey(apiKey);

    return {
        id: CORE_STATE_DISABLED_OPACITY,
        name: 'Disabled State Opacity',
        tokenName: CORE_STATE_DISABLED_OPACITY,
        value: CORE_STYLE_TOKEN_DEFAULTS[CORE_STATE_DISABLED_OPACITY],
    };
};

export const getCoreColors = (isDarkMode) => getCoreColorsData({}, isDarkMode);

export const getColorCanvasToken = (isDarkMode) => {
    const { canvasColors = {} } = getCoreColors(isDarkMode);
    const { base = {} } = canvasColors;
    // const apiKey = getThemeAPIKeyFromName(CORE_COLOR_CANVAS);

    return {
        // description: getThemeCSSVarFromAPIKey(apiKey),
        id: CORE_COLOR_CANVAS,
        name: 'Canvas Color',
        tokenName: CORE_COLOR_CANVAS,
        value: base.hex,
    };
};

export const getColorCanvasAltToken = (isDarkMode) => {
    const { canvasAltColors = {} } = getCoreColors(isDarkMode);
    const { base = {} } = canvasAltColors;
    // const apiKey = getThemeAPIKeyFromName(CORE_COLOR_CANVAS_ALT);

    return {
        // description: getThemeCSSVarFromAPIKey(apiKey),
        id: CORE_COLOR_CANVAS_ALT,
        name: 'Canvas (Alt) Color',
        tokenName: CORE_COLOR_CANVAS_ALT,
        value: base.hex,
    };
};

export const getColorTextToken = (isDarkMode) => {
    const { textColor = {} } = getCoreColors(isDarkMode);
    // const apiKey = getThemeAPIKeyFromName(CORE_COLOR_TEXT);

    return {
        id: CORE_COLOR_TEXT,
        name: 'Text Color',
        tokenName: CORE_COLOR_TEXT,
        value: textColor.hex,
    };
};

export const getColorTextAltToken = (isDarkMode) => {
    const { textColor = {} } = getCoreColors(isDarkMode);
    const apiKey = getThemeAPIKeyFromName(CORE_COLOR_TEXT_ALT);

    return {
        description: getThemeCSSVarFromAPIKey(apiKey),
        id: apiKey,
        name: 'Text (Alt) Color',
        value: textColor.hex,
    };
};

export const getBtnBorderRadius = () => {
    // const apiKey = getThemeAPIKeyFromName(BTN_BORDER_RADIUS);

    return {
        id: BTN_BORDER_RADIUS,
        name: 'Button Border Radius',
        tokenName: BTN_BORDER_RADIUS,
        value: `${BTN_STYLE_TOKEN_DEFAULTS[BTN_BORDER_RADIUS]}px`,
    };
};
