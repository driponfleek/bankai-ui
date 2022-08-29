import { VARIANTS as BTN_VARIANTS } from '@epr0t0type/bankai-ui-buttons';
import {
    getBtnTheme,
    // getBtnStyles,
    BTN_TOKEN_NAMES,
    // getThemeCSSVarFromAPIKey,
    getThemeAPIKeyFromName,
    BTN_STYLES,
} from '@epr0t0type/bankai-lib-theme-utils';
import {
    getBtnBorderRadius,
    getStateDisabledOpacityToken,
    getCoreColors,
    getColorCanvasToken,
    getColorTextToken,
} from './coreTokenUtils';

const {
    BTN_PRIMARY_BG_COLOR,
    BTN_PRIMARY_BORDER_COLOR,
    BTN_PRIMARY_TEXT_COLOR,
    BTN_PRIMARY_FOCUS_HALO_COLOR,
    BTN_PRIMARY_ACTIVE_BG_COLOR,
    BTN_PRIMARY_ACTIVE_BORDER_COLOR,
    BTN_PRIMARY_ACTIVE_TEXT_COLOR,
    BTN_PRIMARY_HOVER_BG_COLOR,
    BTN_PRIMARY_HOVER_BORDER_COLOR,
    BTN_PRIMARY_HOVER_TEXT_COLOR,
    BTN_SECONDARY_BG_COLOR,
    BTN_SECONDARY_BORDER_COLOR,
    BTN_SECONDARY_TEXT_COLOR,
    BTN_SECONDARY_FOCUS_HALO_COLOR,
    BTN_SECONDARY_ACTIVE_BG_COLOR,
    BTN_SECONDARY_ACTIVE_BORDER_COLOR,
    BTN_SECONDARY_ACTIVE_TEXT_COLOR,
    BTN_SECONDARY_HOVER_BG_COLOR,
    BTN_SECONDARY_HOVER_BORDER_COLOR,
    BTN_SECONDARY_HOVER_TEXT_COLOR,
    BTN_PRIMARY_DESTRUCTIVE_BG_COLOR,
    BTN_PRIMARY_DESTRUCTIVE_BORDER_COLOR,
    BTN_PRIMARY_DESTRUCTIVE_TEXT_COLOR,
    BTN_PRIMARY_DESTRUCTIVE_FOCUS_HALO_COLOR,
    BTN_PRIMARY_DESTRUCTIVE_ACTIVE_BG_COLOR,
    BTN_PRIMARY_DESTRUCTIVE_ACTIVE_BORDER_COLOR,
    BTN_PRIMARY_DESTRUCTIVE_ACTIVE_TEXT_COLOR,
    BTN_PRIMARY_DESTRUCTIVE_HOVER_BG_COLOR,
    BTN_PRIMARY_DESTRUCTIVE_HOVER_BORDER_COLOR,
    BTN_PRIMARY_DESTRUCTIVE_HOVER_TEXT_COLOR,
    BTN_SECONDARY_DESTRUCTIVE_BG_COLOR,
    BTN_SECONDARY_DESTRUCTIVE_BORDER_COLOR,
    BTN_SECONDARY_DESTRUCTIVE_TEXT_COLOR,
    BTN_SECONDARY_DESTRUCTIVE_FOCUS_HALO_COLOR,
    BTN_SECONDARY_DESTRUCTIVE_ACTIVE_BG_COLOR,
    BTN_SECONDARY_DESTRUCTIVE_ACTIVE_BORDER_COLOR,
    BTN_SECONDARY_DESTRUCTIVE_ACTIVE_TEXT_COLOR,
    BTN_SECONDARY_DESTRUCTIVE_HOVER_BG_COLOR,
    BTN_SECONDARY_DESTRUCTIVE_HOVER_BORDER_COLOR,
    BTN_SECONDARY_DESTRUCTIVE_HOVER_TEXT_COLOR,
} = BTN_TOKEN_NAMES;

const getPrimaryBtnTokens = (colors = {}, TOKEN_NAMES = {}, config = {}) => {
    const {
        DEFAULT_BG,
        DEFAULT_BORDER,
        DEFAULT_TEXT,
        FOCUS_HALO,
        ACTIVE_BG,
        ACTIVE_BORDER,
        ACTIVE_TEXT,
        HOVER_BG,
        HOVER_BORDER,
        HOVER_TEXT,
    } = TOKEN_NAMES;
    const { valDescBase, isDestructive } = config;
    const { sourceColors, canvasColors = {} } = colors;
    const { base = {}, variants = [] } = sourceColors;
    const btnTheme = getBtnTheme(
        {
            sourceColors,
            canvasColor: canvasColors.base,
        },
        {
            VARIANT: isDestructive
                ? BTN_VARIANTS.PRIMARY_DESTRUCTIVE
                : BTN_VARIANTS.PRIMARY,
            btnStyle: BTN_STYLES.FLAT,
        },
    );
    const restingBGAPIKey = getThemeAPIKeyFromName(DEFAULT_BG);
    const restingBorderAPIKey = getThemeAPIKeyFromName(DEFAULT_BORDER);
    const restingTextAPIKey = getThemeAPIKeyFromName(DEFAULT_TEXT);
    const focusHaloAPIKey = getThemeAPIKeyFromName(FOCUS_HALO);
    const activeBGAPIKey = getThemeAPIKeyFromName(ACTIVE_BG);
    const activeBorderAPIKey = getThemeAPIKeyFromName(ACTIVE_BORDER);
    const activeTextAPIKey = getThemeAPIKeyFromName(ACTIVE_TEXT);
    const hoverBGAPIKey = getThemeAPIKeyFromName(HOVER_BG);
    const hoverBorderAPIKey = getThemeAPIKeyFromName(HOVER_BORDER);
    const hoverTextAPIKey = getThemeAPIKeyFromName(HOVER_TEXT);
    const activeBGColor = variants.find(
        (variant) => variant.hex === btnTheme[activeBGAPIKey],
    );
    const hoverBGColor = variants.find(
        (variant) => variant.hex === btnTheme[hoverBGAPIKey],
    );
    const restingBGColor = [variants].find(
        (variant) => variant.hex === btnTheme[restingBGAPIKey],
    );
    const isRestingBGBase = base.hex === btnTheme[restingBGAPIKey];
    const restingBGValDesc = isRestingBGBase
        ? valDescBase
        : `${valDescBase} (Variant ${restingBGColor?.lightness})`;

    const restingStateTokens = [
        {
            description: restingBGValDesc,
            id: DEFAULT_BG,
            name: 'Background Color',
            tokenName: DEFAULT_BG,
            value: btnTheme[restingBGAPIKey],
        },
        {
            id: DEFAULT_BORDER,
            name: 'Border Color',
            tokenName: DEFAULT_BORDER,
            value: btnTheme[restingBorderAPIKey],
        },
        {
            id: DEFAULT_TEXT,
            name: 'Text Color',
            tokenName: DEFAULT_TEXT,
            value: btnTheme[restingTextAPIKey],
        },
        getBtnBorderRadius(),
        getStateDisabledOpacityToken(),
    ];
    const hoverStateTokens = [
        {
            description: `${valDescBase} (Variant ${hoverBGColor?.lightness})`,
            id: HOVER_BG,
            name: 'Background Color',
            tokenName: HOVER_BG,
            value: btnTheme[hoverBGAPIKey],
        },
        {
            id: HOVER_BORDER,
            name: 'Border Color',
            tokenName: HOVER_BORDER,
            value: btnTheme[hoverBorderAPIKey],
        },
        {
            id: HOVER_TEXT,
            name: 'Text Color',
            tokenName: HOVER_TEXT,
            value: btnTheme[hoverTextAPIKey],
        },
    ];

    const activeStateTokens = [
        {
            description: `${valDescBase} (Variant ${activeBGColor?.lightness})`,
            id: ACTIVE_BG,
            name: 'Background Color',
            tokenName: ACTIVE_BG,
            value: btnTheme[activeBGAPIKey],
        },
        {
            id: ACTIVE_BORDER,
            name: 'Border Color',
            tokenName: ACTIVE_BORDER,
            value: btnTheme[activeBorderAPIKey],
        },
        {
            id: ACTIVE_TEXT,
            name: 'Text Color',
            tokenName: ACTIVE_TEXT,
            value: btnTheme[activeTextAPIKey],
        },
    ];

    const focusStateTokens = [
        {
            // description: getThemeCSSVarFromAPIKey(focusHaloAPIKey),
            id: FOCUS_HALO,
            name: 'Focus Halo',
            tokenName: FOCUS_HALO,
            value: btnTheme[focusHaloAPIKey],
        },
    ];

    return {
        restingStateTokens,
        activeStateTokens,
        hoverStateTokens,
        focusStateTokens,
    };
};

const getSecondaryBtnTokens = (colors = {}, TOKEN_NAMES = {}, config = {}) => {
    const {
        DEFAULT_BG,
        DEFAULT_BORDER,
        DEFAULT_TEXT,
        FOCUS_HALO,
        ACTIVE_BG,
        ACTIVE_BORDER,
        ACTIVE_TEXT,
        HOVER_BG,
        HOVER_BORDER,
        HOVER_TEXT,
    } = TOKEN_NAMES;
    const { sourceColors, canvasColor } = colors;
    const { valDescBase, isDestructive, isDarkMode } = config;
    const { base = {}, variants = [] } = sourceColors;
    const btnTheme = getBtnTheme(
        {
            sourceColors,
            canvasColor,
        },
        {
            isDarkMode,
            VARIANT: isDestructive
                ? BTN_VARIANTS.SECONDARY_DESTRUCTIVE
                : BTN_VARIANTS.SECONDARY,
            btnStyle: BTN_STYLES.GHOST,
        },
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

    const restingStateTokens = [
        {
            description: 'Canvas Color',
            id: DEFAULT_BG,
            name: 'Background Color',
            tokenName: DEFAULT_BG,
            value: btnTheme[restingBGAPIKey],
        },
        {
            description: restingTextValDesc,
            id: restingBorderAPIKey,
            name: 'Border Color',
            value: btnTheme[restingBorderAPIKey],
            valueDesc: restingTextValDesc,
        },
        {
            description: restingTextValDesc,
            id: restingTextAPIKey,
            name: 'Text Color',
            value: btnTheme[restingTextAPIKey],
            valueDesc: restingTextValDesc,
        },
        getBtnBorderRadius(),
        getStateDisabledOpacityToken(),
    ];

    const activeStateTokens = [
        {
            description: `${valDescBase} (Variant ${hoverBGColor?.lightness})`,
            id: ACTIVE_BG,
            name: 'Background Color',
            tokenName: ACTIVE_BG,
            value: btnTheme[hoverBGAPIKey],
        },
        {
            description: `${valDescBase} (Variant ${hoverTextColor?.lightness})`,
            id: ACTIVE_BORDER,
            name: 'Border Color',
            tokenName: ACTIVE_BORDER,
            value: btnTheme[hoverBorderAPIKey],
        },
        {
            description: `${valDescBase} (Variant ${hoverTextColor?.lightness})`,
            id: ACTIVE_TEXT,
            name: 'Text Color',
            tokenName: ACTIVE_TEXT,
            value: btnTheme[hoverTextAPIKey],
        },
    ];

    const hoverStateTokens = [
        {
            description: `${valDescBase} (Variant ${hoverBGColor?.lightness})`,
            id: HOVER_BG,
            name: 'Background Color',
            tokenName: HOVER_BG,
            value: btnTheme[hoverBGAPIKey],
        },
        {
            description: `${valDescBase} (Variant ${hoverTextColor?.lightness})`,
            id: HOVER_BORDER,
            name: 'Border Color',
            tokenName: HOVER_BORDER,
            value: btnTheme[hoverBorderAPIKey],
        },
        {
            description: `${valDescBase} (Variant ${hoverTextColor?.lightness})`,
            id: HOVER_TEXT,
            name: 'Text Color',
            tokenName: HOVER_TEXT,
            value: btnTheme[hoverTextAPIKey],
        },
    ];

    const focusStateTokens = [
        {
            // description: getThemeCSSVarFromAPIKey(focusHaloAPIKey),
            id: FOCUS_HALO,
            name: 'Focus Halo',
            tokenName: FOCUS_HALO,
            value: btnTheme[focusHaloAPIKey],
        },
    ];

    return {
        restingStateTokens,
        activeStateTokens,
        hoverStateTokens,
        focusStateTokens,
    };
};

export const getDefaultBtnTokenData = (isDarkMode) => {
    const canvasToken = getColorCanvasToken(isDarkMode);
    const textToken = getColorTextToken(isDarkMode);

    return [
        {
            ...canvasToken,
            name: 'Background Color',
        },
        {
            ...textToken,
            name: 'Text Color',
            isAlt: true,
        },
        getBtnBorderRadius(),
        getStateDisabledOpacityToken(),
    ];
};

export const getPrimaryBtnTokenData = (isDarkMode, isDestructive) => {
    const {
        primaryColors = {},
        destructiveColors = {},
        canvasColors = {},
        canvasAltColors = {},
    } = getCoreColors(isDarkMode);
    const colors = {
        sourceColors: isDestructive ? destructiveColors : primaryColors,
        canvasColors,
        canvasAltColors,
    };
    const PRIMARY_TOKEN_NAMES = {
        DEFAULT_BG: BTN_PRIMARY_BG_COLOR,
        DEFAULT_BORDER: BTN_PRIMARY_BORDER_COLOR,
        DEFAULT_TEXT: BTN_PRIMARY_TEXT_COLOR,
        FOCUS_HALO: BTN_PRIMARY_FOCUS_HALO_COLOR,
        ACTIVE_BG: BTN_PRIMARY_ACTIVE_BG_COLOR,
        ACTIVE_BORDER: BTN_PRIMARY_ACTIVE_BORDER_COLOR,
        ACTIVE_TEXT: BTN_PRIMARY_ACTIVE_TEXT_COLOR,
        HOVER_BG: BTN_PRIMARY_HOVER_BG_COLOR,
        HOVER_BORDER: BTN_PRIMARY_HOVER_BORDER_COLOR,
        HOVER_TEXT: BTN_PRIMARY_HOVER_TEXT_COLOR,
    };
    const PRIMARY_DESTRUCTIVE_TOKEN_NAMES = {
        DEFAULT_BG: BTN_PRIMARY_DESTRUCTIVE_BG_COLOR,
        DEFAULT_BORDER: BTN_PRIMARY_DESTRUCTIVE_BORDER_COLOR,
        DEFAULT_TEXT: BTN_PRIMARY_DESTRUCTIVE_TEXT_COLOR,
        FOCUS_HALO: BTN_PRIMARY_DESTRUCTIVE_FOCUS_HALO_COLOR,
        ACTIVE_BG: BTN_PRIMARY_DESTRUCTIVE_ACTIVE_BG_COLOR,
        ACTIVE_BORDER: BTN_PRIMARY_DESTRUCTIVE_ACTIVE_BORDER_COLOR,
        ACTIVE_TEXT: BTN_PRIMARY_DESTRUCTIVE_ACTIVE_TEXT_COLOR,
        HOVER_BG: BTN_PRIMARY_DESTRUCTIVE_HOVER_BG_COLOR,
        HOVER_BORDER: BTN_PRIMARY_DESTRUCTIVE_HOVER_BORDER_COLOR,
        HOVER_TEXT: BTN_PRIMARY_DESTRUCTIVE_HOVER_TEXT_COLOR,
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
        secondaryColors = {},
        destructiveColors = {},
        canvasColors = {},
    } = getCoreColors(isDarkMode);
    const sourceColors = isDestructive ? destructiveColors : secondaryColors;
    const colors = {
        sourceColors,
        canvasColor: canvasColors?.base,
    };
    const SECONDARY_TOKEN_NAMES = {
        DEFAULT_BG: BTN_SECONDARY_BG_COLOR,
        DEFAULT_BORDER: BTN_SECONDARY_BORDER_COLOR,
        DEFAULT_TEXT: BTN_SECONDARY_TEXT_COLOR,
        FOCUS_HALO: BTN_SECONDARY_FOCUS_HALO_COLOR,
        ACTIVE_BG: BTN_SECONDARY_ACTIVE_BG_COLOR,
        ACTIVE_BORDER: BTN_SECONDARY_ACTIVE_BORDER_COLOR,
        ACTIVE_TEXT: BTN_SECONDARY_ACTIVE_TEXT_COLOR,
        HOVER_BG: BTN_SECONDARY_HOVER_BG_COLOR,
        HOVER_BORDER: BTN_SECONDARY_HOVER_BORDER_COLOR,
        HOVER_TEXT: BTN_SECONDARY_HOVER_TEXT_COLOR,
    };
    const SECONDARY_DESTRUCTIVE_TOKEN_NAMES = {
        DEFAULT_BG: BTN_SECONDARY_DESTRUCTIVE_BG_COLOR,
        DEFAULT_BORDER: BTN_SECONDARY_DESTRUCTIVE_BORDER_COLOR,
        DEFAULT_TEXT: BTN_SECONDARY_DESTRUCTIVE_TEXT_COLOR,
        FOCUS_HALO: BTN_SECONDARY_DESTRUCTIVE_FOCUS_HALO_COLOR,
        ACTIVE_BG: BTN_SECONDARY_DESTRUCTIVE_ACTIVE_BG_COLOR,
        ACTIVE_BORDER: BTN_SECONDARY_DESTRUCTIVE_ACTIVE_BORDER_COLOR,
        ACTIVE_TEXT: BTN_SECONDARY_DESTRUCTIVE_ACTIVE_TEXT_COLOR,
        HOVER_BG: BTN_SECONDARY_DESTRUCTIVE_HOVER_BG_COLOR,
        HOVER_BORDER: BTN_SECONDARY_DESTRUCTIVE_HOVER_BORDER_COLOR,
        HOVER_TEXT: BTN_SECONDARY_DESTRUCTIVE_HOVER_TEXT_COLOR,
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
