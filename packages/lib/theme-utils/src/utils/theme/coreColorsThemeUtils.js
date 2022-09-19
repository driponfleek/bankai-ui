import { getColorSeedData } from '@epr0t0type/bankai-lib-color-utils';
import { getThemeAPIKeyFromName, getColorData } from '../dataUtils';
import { getFocusHaloRGBA } from '../helperUtils';
import { getThemeDefaults } from '../../const/tokens/defaults/coreTokenDefaultsConst';
import {
    CORE_COLOR_TOKEN_NAMES,
    CORE_NEUTRAL_COLOR_TOKEN_NAMES,
} from '../../const/tokens/coreTokensConst';

const {
    CORE_COLOR_ACCENT,
    CORE_COLOR_AFFIRMATIVE,
    CORE_COLOR_BRAND,
    CORE_COLOR_CANVAS,
    CORE_COLOR_CANVAS_ALT,
    CORE_COLOR_CAUTIONARY,
    CORE_COLOR_DESTRUCTIVE,
    CORE_COLOR_ERROR,
    CORE_COLOR_TEXT_ERROR,
    CORE_COLOR_INFO,
    CORE_COLOR_PRIMARY,
    CORE_COLOR_SECONDARY,
    CORE_COLOR_HEADINGS_TEXT,
    CORE_COLOR_TEXT,
    CORE_COLOR_TEXT_ALT,
    CORE_COLOR_UNIVERSAL_ACCESSIBLE_BORDER,
    CORE_COLOR_UNIVERSAL_DECORATIVE_BORDER,
    CORE_COLOR_UNIVERSAL_FOCUS_HALO,
    CORE_COLOR_UNIVERSAL_HOVER_BG,
} = CORE_COLOR_TOKEN_NAMES;
const {
    CORE_COLOR_NEUTRAL_0,
    CORE_COLOR_NEUTRAL_10,
    CORE_COLOR_NEUTRAL_20,
    CORE_COLOR_NEUTRAL_30,
    CORE_COLOR_NEUTRAL_40,
    CORE_COLOR_NEUTRAL_50,
    CORE_COLOR_NEUTRAL_60,
    CORE_COLOR_NEUTRAL_70,
    CORE_COLOR_NEUTRAL_80,
    CORE_COLOR_NEUTRAL_90,
    CORE_COLOR_NEUTRAL_100,
} = CORE_NEUTRAL_COLOR_TOKEN_NAMES;
// const { LINK_TEXT_COLOR } = THEME_TOKEN_NAMES;

export const getCoreColorsData = (data, config = {}) => {
    const { isDarkMode, isMobile } = config;
    const DEFAULTS = getThemeDefaults(isDarkMode);
    const {
        [`${getThemeAPIKeyFromName(CORE_COLOR_ACCENT)}`]: accentHex = DEFAULTS[
            CORE_COLOR_ACCENT
        ],
        [`${getThemeAPIKeyFromName(CORE_COLOR_AFFIRMATIVE)}`]:
            affirmativeHex = DEFAULTS[CORE_COLOR_AFFIRMATIVE],
        [`${getThemeAPIKeyFromName(CORE_COLOR_BRAND)}`]: brandHex = DEFAULTS[
            CORE_COLOR_BRAND
        ],
        [`${getThemeAPIKeyFromName(CORE_COLOR_CANVAS)}`]: canvasHex = DEFAULTS[
            CORE_COLOR_CANVAS
        ],
        [`${getThemeAPIKeyFromName(CORE_COLOR_CANVAS_ALT)}`]:
            canvasAltHex = DEFAULTS[CORE_COLOR_CANVAS_ALT],
        [`${getThemeAPIKeyFromName(CORE_COLOR_CAUTIONARY)}`]:
            cautionaryHex = DEFAULTS[CORE_COLOR_CAUTIONARY],
        [`${getThemeAPIKeyFromName(CORE_COLOR_DESTRUCTIVE)}`]:
            destructiveHex = DEFAULTS[CORE_COLOR_DESTRUCTIVE],
        [`${getThemeAPIKeyFromName(CORE_COLOR_ERROR)}`]: errorHex = DEFAULTS[
            CORE_COLOR_ERROR
        ],
        [`${getThemeAPIKeyFromName(CORE_COLOR_INFO)}`]: infoHex = DEFAULTS[
            CORE_COLOR_INFO
        ],
        // [`${getThemeAPIKeyFromName(LINK_TEXT_COLOR)}`]: linkHex = DEFAULTS[
        //     LINK_TEXT_COLOR
        // ],
        [`${getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_0)}`]:
            neutral0Hex = DEFAULTS[CORE_COLOR_NEUTRAL_0],
        [`${getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_10)}`]:
            neutral10Hex = DEFAULTS[CORE_COLOR_NEUTRAL_10],
        [`${getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_20)}`]:
            neutral20Hex = DEFAULTS[CORE_COLOR_NEUTRAL_20],
        [`${getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_30)}`]:
            neutral30Hex = DEFAULTS[CORE_COLOR_NEUTRAL_30],
        [`${getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_40)}`]:
            neutral40Hex = DEFAULTS[CORE_COLOR_NEUTRAL_40],
        [`${getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_50)}`]:
            neutral50Hex = DEFAULTS[CORE_COLOR_NEUTRAL_50],
        [`${getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_60)}`]:
            neutral60Hex = DEFAULTS[CORE_COLOR_NEUTRAL_60],
        [`${getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_70)}`]:
            neutral70Hex = DEFAULTS[CORE_COLOR_NEUTRAL_70],
        [`${getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_80)}`]:
            neutral80Hex = DEFAULTS[CORE_COLOR_NEUTRAL_80],
        [`${getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_90)}`]:
            neutral90Hex = DEFAULTS[CORE_COLOR_NEUTRAL_90],
        [`${getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_100)}`]:
            neutral100Hex = DEFAULTS[CORE_COLOR_NEUTRAL_100],
        [`${getThemeAPIKeyFromName(CORE_COLOR_PRIMARY)}`]:
            primaryHex = DEFAULTS[CORE_COLOR_PRIMARY],
        [`${getThemeAPIKeyFromName(CORE_COLOR_SECONDARY)}`]:
            secondaryHex = DEFAULTS[CORE_COLOR_SECONDARY],
        [`${getThemeAPIKeyFromName(CORE_COLOR_HEADINGS_TEXT)}`]:
            headingsTextHex = DEFAULTS[CORE_COLOR_HEADINGS_TEXT],
        [`${getThemeAPIKeyFromName(CORE_COLOR_TEXT)}`]: textHex = DEFAULTS[
            CORE_COLOR_TEXT
        ],
        [`${getThemeAPIKeyFromName(CORE_COLOR_TEXT_ALT)}`]:
            textAltHex = DEFAULTS[CORE_COLOR_TEXT_ALT],
        [`${getThemeAPIKeyFromName(CORE_COLOR_UNIVERSAL_ACCESSIBLE_BORDER)}`]:
            universalBorderAccessibleHex = DEFAULTS[
                CORE_COLOR_UNIVERSAL_ACCESSIBLE_BORDER
            ],
        [`${getThemeAPIKeyFromName(CORE_COLOR_UNIVERSAL_DECORATIVE_BORDER)}`]:
            universalBorderDecorativeHex = DEFAULTS[
                CORE_COLOR_UNIVERSAL_DECORATIVE_BORDER
            ],
        [`${getThemeAPIKeyFromName(CORE_COLOR_UNIVERSAL_HOVER_BG)}`]:
            universalHoverBgHex = DEFAULTS[CORE_COLOR_UNIVERSAL_HOVER_BG],
    } = data ?? {};

    // Canvas Colors
    const canvasColors = getColorData({
        hex: canvasHex,
        tokenId: getThemeAPIKeyFromName(CORE_COLOR_CANVAS),
    });
    const canvasAltColors = getColorData({
        hex: canvasAltHex,
        tokenId: getThemeAPIKeyFromName(CORE_COLOR_CANVAS_ALT),
    });
    const { base: canvasColor } = canvasColors;
    const { base: canvasAltColor } = canvasAltColors;
    // Main Colors
    const accentColors = getColorData({
        hex: accentHex,
        tokenId: getThemeAPIKeyFromName(CORE_COLOR_ACCENT),
        canvasColor,
        canvasAltColor,
    });
    const brandColors = getColorData({
        hex: brandHex,
        tokenId: getThemeAPIKeyFromName(CORE_COLOR_BRAND),
        canvasColor,
        canvasAltColor,
    });
    const primaryColors = getColorData({
        hex: primaryHex,
        tokenId: getThemeAPIKeyFromName(CORE_COLOR_PRIMARY),
        canvasColor,
        canvasAltColor,
    });
    const secondaryColors = getColorData({
        hex: secondaryHex,
        tokenId: getThemeAPIKeyFromName(CORE_COLOR_SECONDARY),
        canvasColor,
        canvasAltColor,
    });
    // Status Colors
    const affirmativeColors = getColorData({
        hex: affirmativeHex,
        tokenId: getThemeAPIKeyFromName(CORE_COLOR_AFFIRMATIVE),
        canvasColor,
        canvasAltColor,
    });
    const cautionaryColors = getColorData({
        hex: cautionaryHex,
        tokenId: getThemeAPIKeyFromName(CORE_COLOR_CAUTIONARY),
        canvasColor,
        canvasAltColor,
    });
    const errorColors = getColorData({
        hex: errorHex,
        tokenId: getThemeAPIKeyFromName(CORE_COLOR_ERROR),
        canvasColor,
        canvasAltColor,
    });
    // Informative Colors
    const destructiveColors = getColorData({
        hex: destructiveHex,
        tokenId: getThemeAPIKeyFromName(CORE_COLOR_DESTRUCTIVE),
        canvasColor,
        canvasAltColor,
    });
    const infoColors = getColorData({
        hex: infoHex,
        tokenId: getThemeAPIKeyFromName(CORE_COLOR_INFO),
        canvasColor,
        canvasAltColor,
    });
    // Text Colors
    const headingsTextColor = getColorSeedData(
        headingsTextHex,
        getThemeAPIKeyFromName(CORE_COLOR_HEADINGS_TEXT),
    );
    // const linkColors = getColorData({
    //     hex: linkHex,
    //     tokenId: getThemeAPIKeyFromName(LINK_TEXT_COLOR),
    //     step: 2,
    //     canvasColor,
    //     canvasAltColor,
    // });
    const textAltColor = getColorSeedData(textAltHex, CORE_COLOR_TEXT_ALT);
    const textColor = getColorSeedData(textHex, CORE_COLOR_TEXT);
    // Neutrals
    const neutral0Color = getColorSeedData(
        neutral0Hex,
        getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_0),
    );
    const neutral10Color = getColorSeedData(
        neutral10Hex,
        getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_10),
    );
    const neutral20Color = getColorSeedData(
        neutral20Hex,
        getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_20),
    );
    const neutral30Color = getColorSeedData(
        neutral30Hex,
        getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_30),
    );
    const neutral40Color = getColorSeedData(
        neutral40Hex,
        getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_40),
    );
    const neutral50Color = getColorSeedData(
        neutral50Hex,
        getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_50),
    );
    const neutral60Color = getColorSeedData(
        neutral60Hex,
        getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_60),
    );
    const neutral70Color = getColorSeedData(
        neutral70Hex,
        getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_70),
    );
    const neutral80Color = getColorSeedData(
        neutral80Hex,
        getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_80),
    );
    const neutral90Color = getColorSeedData(
        neutral90Hex,
        getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_90),
    );
    const neutral100Color = getColorSeedData(
        neutral100Hex,
        getThemeAPIKeyFromName(CORE_COLOR_NEUTRAL_100),
    );
    // Universal
    const universalBorderAccessibleColor = getColorSeedData(
        universalBorderAccessibleHex,
        getThemeAPIKeyFromName(CORE_COLOR_UNIVERSAL_ACCESSIBLE_BORDER),
    );
    const universalBorderDecorativeColor = getColorSeedData(
        universalBorderDecorativeHex,
        getThemeAPIKeyFromName(CORE_COLOR_UNIVERSAL_DECORATIVE_BORDER),
    );
    const universalHoverColor = getColorSeedData(
        universalHoverBgHex,
        getThemeAPIKeyFromName(CORE_COLOR_UNIVERSAL_HOVER_BG),
    );

    return {
        accentColors,
        affirmativeColors,
        brandColors,
        canvasAltColors,
        canvasColors,
        cautionaryColors,
        destructiveColors,
        errorColors,
        headingsTextColor,
        infoColors,
        // linkColors,
        neutral0Color,
        neutral10Color,
        neutral20Color,
        neutral30Color,
        neutral40Color,
        neutral50Color,
        neutral60Color,
        neutral70Color,
        neutral80Color,
        neutral90Color,
        neutral100Color,
        primaryColors,
        secondaryColors,
        textColor,
        textAltColor,
        universalBorderAccessibleColor,
        universalBorderDecorativeColor,
        ...(!isMobile && { universalHoverColor }),
    };
};

export const getErrorTextColor = (colors = {}, config = {}) => {
    const { sourceColors = {} } = colors;
    const { shouldAutoCorrectColors } = config;
    const { base = {}, recommendedTextColor = {} } = sourceColors;

    return {
        [getThemeAPIKeyFromName(CORE_COLOR_TEXT_ERROR)]: shouldAutoCorrectColors
            ? recommendedTextColor.hex
            : base.hex,
    };
};

export const getCoreColorsTheme = (data = {}, config = {}) => {
    const { isDarkMode, isMobile } = config;
    const DEFAULTS = getThemeDefaults(isDarkMode);
    const themeData = {
        [getThemeAPIKeyFromName(CORE_COLOR_UNIVERSAL_FOCUS_HALO)]:
            getFocusHaloRGBA(isDarkMode ? '#ffffff' : '#000000'),
    };
    const coreColorKeys = [
        CORE_COLOR_ACCENT,
        CORE_COLOR_AFFIRMATIVE,
        CORE_COLOR_BRAND,
        CORE_COLOR_CANVAS,
        CORE_COLOR_CANVAS_ALT,
        CORE_COLOR_CAUTIONARY,
        CORE_COLOR_DESTRUCTIVE,
        CORE_COLOR_ERROR,
        CORE_COLOR_HEADINGS_TEXT,
        CORE_COLOR_INFO,
        CORE_COLOR_NEUTRAL_0,
        CORE_COLOR_NEUTRAL_10,
        CORE_COLOR_NEUTRAL_20,
        CORE_COLOR_NEUTRAL_30,
        CORE_COLOR_NEUTRAL_40,
        CORE_COLOR_NEUTRAL_50,
        CORE_COLOR_NEUTRAL_60,
        CORE_COLOR_NEUTRAL_70,
        CORE_COLOR_NEUTRAL_80,
        CORE_COLOR_NEUTRAL_90,
        CORE_COLOR_NEUTRAL_100,
        CORE_COLOR_PRIMARY,
        CORE_COLOR_SECONDARY,
        CORE_COLOR_TEXT,
        CORE_COLOR_TEXT_ALT,
        CORE_COLOR_UNIVERSAL_ACCESSIBLE_BORDER,
        CORE_COLOR_UNIVERSAL_DECORATIVE_BORDER,
        ...(!isMobile ? [CORE_COLOR_UNIVERSAL_HOVER_BG] : []),
    ];

    for (let index = 0; index < coreColorKeys.length; index += 1) {
        const COLOR_NAME = coreColorKeys[index];
        const COLOR_API_KEY = getThemeAPIKeyFromName(COLOR_NAME);
        const VALUE =
            data[COLOR_API_KEY] !== undefined
                ? data[COLOR_API_KEY]
                : DEFAULTS[COLOR_NAME];

        themeData[COLOR_API_KEY] = VALUE;
    }

    return themeData;
};
