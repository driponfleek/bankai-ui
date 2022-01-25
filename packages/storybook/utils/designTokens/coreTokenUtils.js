import {
    getCoreColorsData,
    THEME_TOKEN_NAMES,
    SPEC_TOKEN_DEFAULTS,
    // getThemeDefaults,
    getThemeCSSVarFromAPIKey,
    getThemeAPIKeyFromName,
} from '@epr0t0type/bankai-lib-theme-utils';

const {
    BTN_BORDER_RADIUS,
    COLOR_CANVAS,
    COLOR_CANVAS_ALT,
    COLOR_TEXT,
    COLOR_TEXT_ALT,
    STATE_DISABLED_OPACITY,
} = THEME_TOKEN_NAMES;

export const getStateDisabledOpacityToken = () => {
    const apiKey = getThemeAPIKeyFromName(STATE_DISABLED_OPACITY);

    return {
        description: getThemeCSSVarFromAPIKey(apiKey),
        id: apiKey,
        name: 'Disabled State Opacity',
        value: SPEC_TOKEN_DEFAULTS[STATE_DISABLED_OPACITY],
    };
};

export const getCoreColors = (isDarkMode) => getCoreColorsData({}, isDarkMode);

export const getColorCanvasToken = (isDarkMode) => {
    const { canvasColorData = {} } = getCoreColors(isDarkMode);
    const { base = {} } = canvasColorData;
    const apiKey = getThemeAPIKeyFromName(COLOR_CANVAS);

    return {
        description: getThemeCSSVarFromAPIKey(apiKey),
        id: apiKey,
        name: 'Canvas Color',
        value: base.hex,
    };
};

export const getColorCanvasAltToken = (isDarkMode) => {
    const { canvasColorAltData = {} } = getCoreColors(isDarkMode);
    const { base = {} } = canvasColorAltData;
    const apiKey = getThemeAPIKeyFromName(COLOR_CANVAS_ALT);

    return {
        description: getThemeCSSVarFromAPIKey(apiKey),
        id: apiKey,
        name: 'Canvas (Alt) Color',
        value: base.hex,
    };
};

export const getColorTextToken = (isDarkMode) => {
    const { textColor = {} } = getCoreColors(isDarkMode);
    const apiKey = getThemeAPIKeyFromName(COLOR_TEXT);

    return {
        description: getThemeCSSVarFromAPIKey(apiKey),
        id: apiKey,
        name: 'Text Color',
        value: textColor.hex,
    };
};

export const getColorTextAltToken = (isDarkMode) => {
    const { textColor = {} } = getCoreColors(isDarkMode);
    const apiKey = getThemeAPIKeyFromName(COLOR_TEXT_ALT);

    return {
        description: getThemeCSSVarFromAPIKey(apiKey),
        id: apiKey,
        name: 'Text (Alt) Color',
        value: textColor.hex,
    };
};

export const getBtnBorderRadius = () => {
    const apiKey = getThemeAPIKeyFromName(BTN_BORDER_RADIUS);

    return {
        description: getThemeCSSVarFromAPIKey(apiKey),
        id: apiKey,
        name: 'Button Border Radius',
        value: `${SPEC_TOKEN_DEFAULTS[BTN_BORDER_RADIUS]}px`,
    };
};
