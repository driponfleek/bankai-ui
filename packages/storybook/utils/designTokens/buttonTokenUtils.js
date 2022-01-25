import {
    getBtnPrimaryTheme,
    getBtnSecondaryTheme,
    THEME_TOKEN_NAMES,
    getThemeCSSVarFromAPIKey,
    getThemeAPIKeyFromName,
} from '@epr0t0type/bankai-lib-theme-utils';
import {
    getBtnBorderRadius,
    getStateDisabledOpacityToken,
    getCoreColors,
    getColorCanvasToken,
    getColorTextToken,
} from './coreTokenUtils';

const {
    COLOR_BTN_PRIMARY_DEFAULT_BG,
    COLOR_BTN_PRIMARY_DEFAULT_BORDER,
    COLOR_BTN_PRIMARY_DEFAULT_TEXT,
    COLOR_BTN_PRIMARY_FOCUS_HALO,
    COLOR_BTN_PRIMARY_HOVER_BG,
    COLOR_BTN_PRIMARY_HOVER_BORDER,
    COLOR_BTN_PRIMARY_HOVER_TEXT,
    COLOR_BTN_SECONDARY_DEFAULT_BG,
    COLOR_BTN_SECONDARY_DEFAULT_BORDER,
    COLOR_BTN_SECONDARY_DEFAULT_TEXT,
    COLOR_BTN_SECONDARY_FOCUS_HALO,
    COLOR_BTN_SECONDARY_HOVER_BG,
    COLOR_BTN_SECONDARY_HOVER_BORDER,
    COLOR_BTN_SECONDARY_HOVER_TEXT,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_DEFAULT_BG,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_DEFAULT_BORDER,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_DEFAULT_TEXT,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_FOCUS_HALO,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_HOVER_BG,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_HOVER_BORDER,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_HOVER_TEXT,
    COLOR_BTN_SECONDARY_DESTRUCTIVE_DEFAULT_BG,
    COLOR_BTN_SECONDARY_DESTRUCTIVE_DEFAULT_BORDER,
    COLOR_BTN_SECONDARY_DESTRUCTIVE_DEFAULT_TEXT,
    COLOR_BTN_SECONDARY_DESTRUCTIVE_FOCUS_HALO,
    COLOR_BTN_SECONDARY_DESTRUCTIVE_HOVER_BG,
    COLOR_BTN_SECONDARY_DESTRUCTIVE_HOVER_BORDER,
    COLOR_BTN_SECONDARY_DESTRUCTIVE_HOVER_TEXT,
} = THEME_TOKEN_NAMES;

const getPrimaryBtnTokens = (colors = {}, TOKEN_NAMES = {}, config = {}) => {
    const {
        DEFAULT_BG,
        DEFAULT_BORDER,
        DEFAULT_TEXT,
        FOCUS_HALO,
        HOVER_BG,
        HOVER_BORDER,
        HOVER_TEXT,
    } = TOKEN_NAMES;
    const { valDescBase, isDestructive } = config;
    const {
        sourceColorData,
        canvasColorData = {},
        canvasAltColorData = {},
    } = colors;
    const { base = {}, variants = [] } = sourceColorData;
    const btnTheme = getBtnPrimaryTheme(
        {
            sourceColorData,
            canvasColor: canvasColorData.base,
            canvasAltColor: canvasAltColorData.base,
        },
        { isDestructive },
    );
    const restingBGAPIKey = getThemeAPIKeyFromName(DEFAULT_BG);
    const restingBorderAPIKey = getThemeAPIKeyFromName(DEFAULT_BORDER);
    const restingTextAPIKey = getThemeAPIKeyFromName(DEFAULT_TEXT);
    const focusHaloAPIKey = getThemeAPIKeyFromName(FOCUS_HALO);
    const hoverBGAPIKey = getThemeAPIKeyFromName(HOVER_BG);
    const hoverBorderAPIKey = getThemeAPIKeyFromName(HOVER_BORDER);
    const hoverTextAPIKey = getThemeAPIKeyFromName(HOVER_TEXT);
    const hoverBGColor = variants.find(
        (variant) => variant.hex === btnTheme[hoverBGAPIKey],
    );
    const restingBGColor = variants.find(
        (variant) => variant.hex === btnTheme[restingBGAPIKey],
    );
    const isRestingBGBase = base.hex === btnTheme[restingBGAPIKey];
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
        getStateDisabledOpacityToken(),
    ];
};

const getSecondaryBtnTokens = (colors = {}, TOKEN_NAMES = {}, config = {}) => {
    const {
        DEFAULT_BG,
        DEFAULT_BORDER,
        DEFAULT_TEXT,
        FOCUS_HALO,
        HOVER_BG,
        HOVER_BORDER,
        HOVER_TEXT,
    } = TOKEN_NAMES;
    const { sourceColorData, defaultBtnBGColor } = colors;
    const { valDescBase, isDestructive, isDarkMode } = config;
    const { base = {}, variants = [] } = sourceColorData;
    const btnTheme = getBtnSecondaryTheme(
        {
            sourceColorData,
            defaultBtnBGColor,
        },
        { isDarkMode, isDestructive },
    );
    const restingBGAPIKey = getThemeAPIKeyFromName(DEFAULT_BG);
    const restingBorderAPIKey = getThemeAPIKeyFromName(DEFAULT_BORDER);
    const restingTextAPIKey = getThemeAPIKeyFromName(DEFAULT_TEXT);
    const focusHaloAPIKey = getThemeAPIKeyFromName(FOCUS_HALO);
    const hoverBGAPIKey = getThemeAPIKeyFromName(HOVER_BG);
    const hoverBorderAPIKey = getThemeAPIKeyFromName(HOVER_BORDER);
    const hoverTextAPIKey = getThemeAPIKeyFromName(HOVER_TEXT);
    const restingTextColor = btnTheme[restingTextAPIKey];
    const isRestingTextBase = base.hex === restingTextColor;
    const restingTextValDesc = isRestingTextBase
        ? valDescBase
        : `${valDescBase} (Variant ${
              variants.find((variant) => variant.hex === restingTextColor)
                  ?.lightness
          })`;
    const hoverBGColor = variants.find(
        (variant) => variant.hex === btnTheme[hoverBGAPIKey],
    );
    const hoverTextColor = variants.find(
        (variant) => variant.hex === btnTheme[hoverTextAPIKey],
    );

    return [
        {
            description: getThemeCSSVarFromAPIKey(restingBGAPIKey),
            id: restingBGAPIKey,
            name: 'Background Color (Resting State)',
            value: btnTheme[restingBGAPIKey],
            valueDesc: 'Canvas Color',
        },
        {
            description: getThemeCSSVarFromAPIKey(restingBorderAPIKey),
            id: restingBorderAPIKey,
            name: 'Border Color (Resting State)',
            value: btnTheme[restingBorderAPIKey],
            valueDesc: restingTextValDesc,
            isAlt: true,
        },
        {
            description: getThemeCSSVarFromAPIKey(restingTextAPIKey),
            id: restingTextAPIKey,
            name: 'Text Color (Resting State)',
            value: btnTheme[restingTextAPIKey],
            valueDesc: restingTextValDesc,
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
            valueDesc: `${valDescBase} (Variant ${hoverTextColor?.lightness})`,
        },
        {
            description: getThemeCSSVarFromAPIKey(hoverTextAPIKey),
            id: hoverTextAPIKey,
            name: 'Text Color (Hover State)',
            value: btnTheme[hoverTextAPIKey],
            valueDesc: `${valDescBase} (Variant ${hoverTextColor?.lightness})`,
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
        getStateDisabledOpacityToken(),
    ];
};

export const getDefaultBtnTokenData = (isDarkMode) => {
    const canvasToken = getColorCanvasToken(isDarkMode);
    const textToken = getColorTextToken(isDarkMode);

    return [
        {
            ...canvasToken,
            name: 'Background Color (Resting State)',
        },
        {
            ...textToken,
            name: 'Text Color (Resting State)',
            isAlt: true,
        },
        getBtnBorderRadius(),
    ];
};

export const getPrimaryBtnTokenData = (isDarkMode, isDestructive) => {
    const {
        primaryColorData = {},
        destructiveColorData = {},
        canvasColorData = {},
        canvasAltColorData = {},
    } = getCoreColors(isDarkMode);
    const colors = {
        sourceColorData: isDestructive
            ? destructiveColorData
            : primaryColorData,
        canvasColorData,
        canvasAltColorData,
    };
    const PRIMARY_TOKEN_NAMES = {
        DEFAULT_BG: COLOR_BTN_PRIMARY_DEFAULT_BG,
        DEFAULT_BORDER: COLOR_BTN_PRIMARY_DEFAULT_BORDER,
        DEFAULT_TEXT: COLOR_BTN_PRIMARY_DEFAULT_TEXT,
        FOCUS_HALO: COLOR_BTN_PRIMARY_FOCUS_HALO,
        HOVER_BG: COLOR_BTN_PRIMARY_HOVER_BG,
        HOVER_BORDER: COLOR_BTN_PRIMARY_HOVER_BORDER,
        HOVER_TEXT: COLOR_BTN_PRIMARY_HOVER_TEXT,
    };
    const PRIMARY_DESTRUCTIVE_TOKEN_NAMES = {
        DEFAULT_BG: COLOR_BTN_PRIMARY_DESTRUCTIVE_DEFAULT_BG,
        DEFAULT_BORDER: COLOR_BTN_PRIMARY_DESTRUCTIVE_DEFAULT_BORDER,
        DEFAULT_TEXT: COLOR_BTN_PRIMARY_DESTRUCTIVE_DEFAULT_TEXT,
        FOCUS_HALO: COLOR_BTN_PRIMARY_DESTRUCTIVE_FOCUS_HALO,
        HOVER_BG: COLOR_BTN_PRIMARY_DESTRUCTIVE_HOVER_BG,
        HOVER_BORDER: COLOR_BTN_PRIMARY_DESTRUCTIVE_HOVER_BORDER,
        HOVER_TEXT: COLOR_BTN_PRIMARY_DESTRUCTIVE_HOVER_TEXT,
    };
    const TOKEN_NAMES = isDestructive
        ? PRIMARY_DESTRUCTIVE_TOKEN_NAMES
        : PRIMARY_TOKEN_NAMES;
    const valDescBase = isDestructive ? 'Destructive Color' : 'Primary Color';

    return getPrimaryBtnTokens(colors, TOKEN_NAMES, {
        isDarkMode,
        isDestructive,
        valDescBase,
    });
};

export const getSecondaryBtnTokenData = (isDarkMode, isDestructive) => {
    const {
        secondaryColorData = {},
        destructiveColorData = {},
        canvasColorData = {},
    } = getCoreColors(isDarkMode);
    const sourceColorData = isDestructive
        ? destructiveColorData
        : secondaryColorData;
    const colors = {
        sourceColorData,
        defaultBtnBGColor: canvasColorData?.base,
    };
    const SECONDARY_TOKEN_NAMES = {
        DEFAULT_BG: COLOR_BTN_SECONDARY_DEFAULT_BG,
        DEFAULT_BORDER: COLOR_BTN_SECONDARY_DEFAULT_BORDER,
        DEFAULT_TEXT: COLOR_BTN_SECONDARY_DEFAULT_TEXT,
        FOCUS_HALO: COLOR_BTN_SECONDARY_FOCUS_HALO,
        HOVER_BG: COLOR_BTN_SECONDARY_HOVER_BG,
        HOVER_BORDER: COLOR_BTN_SECONDARY_HOVER_BORDER,
        HOVER_TEXT: COLOR_BTN_SECONDARY_HOVER_TEXT,
    };
    const SECONDARY_DESTRUCTIVE_TOKEN_NAMES = {
        DEFAULT_BG: COLOR_BTN_SECONDARY_DESTRUCTIVE_DEFAULT_BG,
        DEFAULT_BORDER: COLOR_BTN_SECONDARY_DESTRUCTIVE_DEFAULT_BORDER,
        DEFAULT_TEXT: COLOR_BTN_SECONDARY_DESTRUCTIVE_DEFAULT_TEXT,
        FOCUS_HALO: COLOR_BTN_SECONDARY_DESTRUCTIVE_FOCUS_HALO,
        HOVER_BG: COLOR_BTN_SECONDARY_DESTRUCTIVE_HOVER_BG,
        HOVER_BORDER: COLOR_BTN_SECONDARY_DESTRUCTIVE_HOVER_BORDER,
        HOVER_TEXT: COLOR_BTN_SECONDARY_DESTRUCTIVE_HOVER_TEXT,
    };
    const TOKEN_NAMES = isDestructive
        ? SECONDARY_DESTRUCTIVE_TOKEN_NAMES
        : SECONDARY_TOKEN_NAMES;
    const valDescBase = isDestructive ? 'Destructive Color' : 'Secondary Color';

    return getSecondaryBtnTokens(colors, TOKEN_NAMES, {
        isDarkMode,
        isDestructive,
        valDescBase,
    });
};
