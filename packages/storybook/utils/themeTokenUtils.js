import {
    getCoreColorsData,
    getBtnPrimaryTheme,
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
    COLOR_BTN_PRIMARY_DEFAULT_BG,
    COLOR_BTN_PRIMARY_DEFAULT_BORDER,
    COLOR_BTN_PRIMARY_DEFAULT_TEXT,
    COLOR_BTN_PRIMARY_FOCUS_HALO,
    COLOR_BTN_PRIMARY_HOVER_BG,
    COLOR_BTN_PRIMARY_HOVER_BORDER,
    COLOR_BTN_PRIMARY_HOVER_TEXT,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_DEFAULT_BG,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_DEFAULT_BORDER,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_DEFAULT_TEXT,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_FOCUS_HALO,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_HOVER_BG,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_HOVER_BORDER,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_HOVER_TEXT,
    // COLOR_PRIMARY,
    // COLOR_SECONDARY,
    // COLOR_DESTRUCTIVE,
    COLOR_TEXT,
    COLOR_TEXT_ALT,
} = THEME_TOKEN_NAMES;

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

export const getPrimaryBtnTokenData = (isDarkMode) => {
    const {
        primaryColorData: sourceColorData = {},
        canvasColorData = {},
        canvasAltColorData = {},
    } = getCoreColors(isDarkMode);
    const { base = {}, variants = [] } = sourceColorData;
    const btnTheme = getBtnPrimaryTheme({
        sourceColorData,
        canvasColor: canvasColorData.base,
        canvasAltColor: canvasAltColorData.base,
    });
    const restingBGAPIKey = getThemeAPIKeyFromName(
        COLOR_BTN_PRIMARY_DEFAULT_BG,
    );
    const restingBorderAPIKey = getThemeAPIKeyFromName(
        COLOR_BTN_PRIMARY_DEFAULT_BORDER,
    );
    const restingTextAPIKey = getThemeAPIKeyFromName(
        COLOR_BTN_PRIMARY_DEFAULT_TEXT,
    );
    const focusHaloAPIKey = getThemeAPIKeyFromName(
        COLOR_BTN_PRIMARY_FOCUS_HALO,
    );
    const hoverBGAPIKey = getThemeAPIKeyFromName(COLOR_BTN_PRIMARY_HOVER_BG);
    const hoverBorderAPIKey = getThemeAPIKeyFromName(
        COLOR_BTN_PRIMARY_HOVER_BORDER,
    );
    const hoverTextAPIKey = getThemeAPIKeyFromName(
        COLOR_BTN_PRIMARY_HOVER_TEXT,
    );
    const hoverBGColor = variants.find(
        (variant) => variant.hex === btnTheme[hoverBGAPIKey],
    );
    const restingBGColor = variants.find(
        (variant) => variant.hex === btnTheme[restingBGAPIKey],
    );
    const isRestingBGBase = base.hex === btnTheme[restingBGAPIKey];
    const valDescBase = 'Primary Color';
    const restingBGValDesc = isRestingBGBase
        ? valDescBase
        : `${valDescBase} (Variant ${restingBGColor?.lightness})`;

    return [
        {
            description: getThemeCSSVarFromAPIKey(restingBGAPIKey),
            id: restingBGAPIKey,
            name: 'Background Color (Resting State)',
            value: btnTheme[restingBGAPIKey],
            valueDesc: restingBGValDesc,
        },
        {
            description: getThemeCSSVarFromAPIKey(restingBorderAPIKey),
            id: restingBorderAPIKey,
            name: 'Border Color (Resting State)',
            value: btnTheme[restingBorderAPIKey],
            isAlt: true,
        },
        {
            description: getThemeCSSVarFromAPIKey(restingTextAPIKey),
            id: restingTextAPIKey,
            name: 'Text Color (Resting State)',
            value: btnTheme[restingTextAPIKey],
        },
        {
            description: getThemeCSSVarFromAPIKey(hoverBGAPIKey),
            id: hoverBGAPIKey,
            name: 'Background Color (Hover State)',
            value: btnTheme[hoverBGAPIKey],
            valueDesc: `${restingBGValDesc} (Variant ${hoverBGColor?.lightness})`,
            isAlt: true,
        },
        {
            description: getThemeCSSVarFromAPIKey(hoverBorderAPIKey),
            id: hoverBorderAPIKey,
            name: 'Border Color (Hover State)',
            value: btnTheme[hoverBorderAPIKey],
        },
        {
            description: getThemeCSSVarFromAPIKey(hoverTextAPIKey),
            id: hoverTextAPIKey,
            name: 'Text Color (Hover State)',
            value: btnTheme[hoverTextAPIKey],
            isAlt: true,
        },
        {
            description: getThemeCSSVarFromAPIKey(focusHaloAPIKey),
            id: focusHaloAPIKey,
            name: 'Focus Halo',
            value: btnTheme[focusHaloAPIKey],
        },
        {
            ...getBtnBorderRadius(),
            isAlt: true,
        },
    ];
};

export const getPrimaryDestructiveBtnTokenData = (isDarkMode) => {
    const {
        destructiveColorData: sourceColorData = {},
        canvasColorData = {},
        canvasAltColorData = {},
    } = getCoreColors(isDarkMode);
    // console.log('sourceColorData: ', sourceColorData);
    const { base = {}, variants = [] } = sourceColorData;
    const btnTheme = getBtnPrimaryTheme(
        {
            sourceColorData,
            canvasColor: canvasColorData.base,
            canvasAltColor: canvasAltColorData.base,
        },
        { isDestructive: true },
    );
    const restingBGAPIKey = getThemeAPIKeyFromName(
        COLOR_BTN_PRIMARY_DESTRUCTIVE_DEFAULT_BG,
    );
    const restingBorderAPIKey = getThemeAPIKeyFromName(
        COLOR_BTN_PRIMARY_DESTRUCTIVE_DEFAULT_BORDER,
    );
    const restingTextAPIKey = getThemeAPIKeyFromName(
        COLOR_BTN_PRIMARY_DESTRUCTIVE_DEFAULT_TEXT,
    );
    const focusHaloAPIKey = getThemeAPIKeyFromName(
        COLOR_BTN_PRIMARY_DESTRUCTIVE_FOCUS_HALO,
    );
    const hoverBGAPIKey = getThemeAPIKeyFromName(
        COLOR_BTN_PRIMARY_DESTRUCTIVE_HOVER_BG,
    );
    const hoverBorderAPIKey = getThemeAPIKeyFromName(
        COLOR_BTN_PRIMARY_DESTRUCTIVE_HOVER_BORDER,
    );
    const hoverTextAPIKey = getThemeAPIKeyFromName(
        COLOR_BTN_PRIMARY_DESTRUCTIVE_HOVER_TEXT,
    );
    const hoverBGColor = variants.find(
        (variant) => variant.hex === btnTheme[hoverBGAPIKey],
    );
    const restingBGColor = variants.find(
        (variant) => variant.hex === btnTheme[restingBGAPIKey],
    );
    const isRestingBGBase = base.hex === btnTheme[restingBGAPIKey];
    const valDescBase = 'Destructive Color';
    const restingBGValDesc = isRestingBGBase
        ? valDescBase
        : `${valDescBase} (Variant ${restingBGColor?.lightness})`;

    return [
        {
            description: getThemeCSSVarFromAPIKey(restingBGAPIKey),
            id: restingBGAPIKey,
            name: 'Background Color (Resting State)',
            value: btnTheme[restingBGAPIKey],
            valueDesc: restingBGValDesc,
        },
        {
            description: getThemeCSSVarFromAPIKey(restingBorderAPIKey),
            id: restingBorderAPIKey,
            name: 'Border Color (Resting State)',
            value: btnTheme[restingBorderAPIKey],
            isAlt: true,
        },
        {
            description: getThemeCSSVarFromAPIKey(restingTextAPIKey),
            id: restingTextAPIKey,
            name: 'Text Color (Resting State)',
            value: btnTheme[restingTextAPIKey],
        },
        {
            description: getThemeCSSVarFromAPIKey(hoverBGAPIKey),
            id: hoverBGAPIKey,
            name: 'Background Color (Hover State)',
            value: btnTheme[hoverBGAPIKey],
            valueDesc: `${valDescBase} (Variant ${hoverBGColor?.lightness})`,
            isAlt: true,
        },
        {
            description: getThemeCSSVarFromAPIKey(hoverBorderAPIKey),
            id: hoverBorderAPIKey,
            name: 'Border Color (Hover State)',
            value: btnTheme[hoverBorderAPIKey],
        },
        {
            description: getThemeCSSVarFromAPIKey(hoverTextAPIKey),
            id: hoverTextAPIKey,
            name: 'Text Color (Hover State)',
            value: btnTheme[hoverTextAPIKey],
            isAlt: true,
        },
        {
            description: getThemeCSSVarFromAPIKey(focusHaloAPIKey),
            id: focusHaloAPIKey,
            name: 'Focus Halo',
            value: btnTheme[focusHaloAPIKey],
        },
        {
            ...getBtnBorderRadius(),
            isAlt: true,
        },
    ];
};
