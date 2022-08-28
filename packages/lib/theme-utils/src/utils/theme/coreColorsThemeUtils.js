import {
    genColorsData,
    getColorSeedData,
} from '@epr0t0type/bankai-lib-color-utils';
import { getThemeAPIKeyFromName } from '../dataMassageUtils';
import { getThemeDefaults, getFocusHaloRGBA } from '../colorUtils';
import { THEME_TOKEN_NAMES } from '../../const/themeTokensConst';

const {
    COLOR_ACCENT,
    COLOR_AFFIRMATIVE,
    COLOR_BRAND,
    COLOR_CANVAS,
    COLOR_CANVAS_ALT,
    COLOR_CAUTIONARY,
    COLOR_DESTRUCTIVE,
    COLOR_ERROR,
    COLOR_INFO,
    COLOR_LINK,
    COLOR_NEUTRAL_10,
    COLOR_NEUTRAL_20,
    COLOR_NEUTRAL_30,
    COLOR_NEUTRAL_40,
    COLOR_NEUTRAL_50,
    COLOR_NEUTRAL_60,
    COLOR_NEUTRAL_70,
    COLOR_NEUTRAL_80,
    COLOR_NEUTRAL_90,
    COLOR_PRIMARY,
    COLOR_SECONDARY,
    COLOR_TEXT,
    COLOR_TEXT_ALT,
    COLOR_UNIVERSAL_BORDER,
    COLOR_UNIVERSAL_FOCUS_HALO,
    COLOR_UNIVERSAL_HOVER_BG,
} = THEME_TOKEN_NAMES;

export const getCoreColorsData = (data, isDarkMode) => {
    const DEFAULTS = getThemeDefaults(isDarkMode);
    const {
        [`${getThemeAPIKeyFromName(COLOR_ACCENT)}`]:
            THEME_COLOR_ACCENT = DEFAULTS[COLOR_ACCENT],
        [`${getThemeAPIKeyFromName(COLOR_AFFIRMATIVE)}`]:
            THEME_COLOR_AFFIRMATIVE = DEFAULTS[COLOR_AFFIRMATIVE],
        [`${getThemeAPIKeyFromName(COLOR_BRAND)}`]:
            THEME_COLOR_BRAND = DEFAULTS[COLOR_BRAND],
        [`${getThemeAPIKeyFromName(COLOR_CANVAS)}`]:
            THEME_COLOR_CANVAS = DEFAULTS[COLOR_CANVAS],
        [`${getThemeAPIKeyFromName(COLOR_CANVAS_ALT)}`]:
            THEME_COLOR_CANVAS_ALT = DEFAULTS[COLOR_CANVAS_ALT],
        [`${getThemeAPIKeyFromName(COLOR_CAUTIONARY)}`]:
            THEME_COLOR_CAUTIONARY = DEFAULTS[COLOR_CAUTIONARY],
        [`${getThemeAPIKeyFromName(COLOR_DESTRUCTIVE)}`]:
            THEME_COLOR_DESTRUCTIVE = DEFAULTS[COLOR_DESTRUCTIVE],
        [`${getThemeAPIKeyFromName(COLOR_ERROR)}`]:
            THEME_COLOR_ERROR = DEFAULTS[COLOR_ERROR],
        [`${getThemeAPIKeyFromName(COLOR_INFO)}`]: THEME_COLOR_INFO = DEFAULTS[
            COLOR_INFO
        ],
        [`${getThemeAPIKeyFromName(COLOR_LINK)}`]: THEME_COLOR_LINK = DEFAULTS[
            COLOR_LINK
        ],
        [`${getThemeAPIKeyFromName(COLOR_NEUTRAL_10)}`]:
            THEME_COLOR_NEUTRAL_10 = DEFAULTS[COLOR_NEUTRAL_10],
        [`${getThemeAPIKeyFromName(COLOR_NEUTRAL_20)}`]:
            THEME_COLOR_NEUTRAL_20 = DEFAULTS[COLOR_NEUTRAL_20],
        [`${getThemeAPIKeyFromName(COLOR_NEUTRAL_30)}`]:
            THEME_COLOR_NEUTRAL_30 = DEFAULTS[COLOR_NEUTRAL_30],
        [`${getThemeAPIKeyFromName(COLOR_NEUTRAL_40)}`]:
            THEME_COLOR_NEUTRAL_40 = DEFAULTS[COLOR_NEUTRAL_40],
        [`${getThemeAPIKeyFromName(COLOR_NEUTRAL_50)}`]:
            THEME_COLOR_NEUTRAL_50 = DEFAULTS[COLOR_NEUTRAL_50],
        [`${getThemeAPIKeyFromName(COLOR_NEUTRAL_60)}`]:
            THEME_COLOR_NEUTRAL_60 = DEFAULTS[COLOR_NEUTRAL_60],
        [`${getThemeAPIKeyFromName(COLOR_NEUTRAL_70)}`]:
            THEME_COLOR_NEUTRAL_70 = DEFAULTS[COLOR_NEUTRAL_70],
        [`${getThemeAPIKeyFromName(COLOR_NEUTRAL_80)}`]:
            THEME_COLOR_NEUTRAL_80 = DEFAULTS[COLOR_NEUTRAL_80],
        [`${getThemeAPIKeyFromName(COLOR_NEUTRAL_90)}`]:
            THEME_COLOR_NEUTRAL_90 = DEFAULTS[COLOR_NEUTRAL_90],
        [`${getThemeAPIKeyFromName(COLOR_PRIMARY)}`]:
            THEME_COLOR_PRIMARY = DEFAULTS[COLOR_PRIMARY],
        [`${getThemeAPIKeyFromName(COLOR_SECONDARY)}`]:
            THEME_COLOR_SECONDARY = DEFAULTS[COLOR_SECONDARY],
        [`${getThemeAPIKeyFromName(COLOR_TEXT)}`]: THEME_COLOR_TEXT = DEFAULTS[
            COLOR_TEXT
        ],
        [`${getThemeAPIKeyFromName(COLOR_TEXT_ALT)}`]:
            THEME_COLOR_TEXT_ALT = DEFAULTS[COLOR_TEXT_ALT],
        [`${getThemeAPIKeyFromName(COLOR_UNIVERSAL_BORDER)}`]:
            THEME_COLOR_UNIVERSAL_BORDER = DEFAULTS[COLOR_UNIVERSAL_BORDER],
        [`${getThemeAPIKeyFromName(COLOR_UNIVERSAL_HOVER_BG)}`]:
            THEME_COLOR_UNIVERSAL_HOVER_BG = DEFAULTS[COLOR_UNIVERSAL_HOVER_BG],
    } = data ?? {};
    const accentColorData = genColorsData(THEME_COLOR_ACCENT);
    const affirmativeColorData = genColorsData(THEME_COLOR_AFFIRMATIVE);
    const brandColorData = genColorsData(THEME_COLOR_BRAND);
    const canvasColorData = genColorsData(THEME_COLOR_CANVAS);
    const canvasAltColorData = genColorsData(THEME_COLOR_CANVAS_ALT);
    const cautionaryColorData = genColorsData(THEME_COLOR_CAUTIONARY);
    const destructiveColorData = genColorsData(THEME_COLOR_DESTRUCTIVE);
    const errorColorData = genColorsData(THEME_COLOR_ERROR);
    const infoColorData = genColorsData(THEME_COLOR_INFO);
    const linkColorData = genColorsData(THEME_COLOR_LINK);
    const neutral10Color = getColorSeedData(THEME_COLOR_NEUTRAL_10);
    const neutral20Color = getColorSeedData(THEME_COLOR_NEUTRAL_20);
    const neutral30Color = getColorSeedData(THEME_COLOR_NEUTRAL_30);
    const neutral40Color = getColorSeedData(THEME_COLOR_NEUTRAL_40);
    const neutral50Color = getColorSeedData(THEME_COLOR_NEUTRAL_50);
    const neutral60Color = getColorSeedData(THEME_COLOR_NEUTRAL_60);
    const neutral70Color = getColorSeedData(THEME_COLOR_NEUTRAL_70);
    const neutral80Color = getColorSeedData(THEME_COLOR_NEUTRAL_80);
    const neutral90Color = getColorSeedData(THEME_COLOR_NEUTRAL_90);
    const primaryColorData = genColorsData(THEME_COLOR_PRIMARY);
    const secondaryColorData = genColorsData(THEME_COLOR_SECONDARY);
    const textColor = getColorSeedData(THEME_COLOR_TEXT);
    const textAltColor = getColorSeedData(THEME_COLOR_TEXT_ALT);
    const universalBorderColor = getColorSeedData(THEME_COLOR_UNIVERSAL_BORDER);
    const universalHoverColor = getColorSeedData(
        THEME_COLOR_UNIVERSAL_HOVER_BG,
    );

    return {
        accentColorData,
        affirmativeColorData,
        brandColorData,
        canvasAltColorData,
        canvasColorData,
        cautionaryColorData,
        destructiveColorData,
        errorColorData,
        infoColorData,
        linkColorData,
        neutral10Color,
        neutral20Color,
        neutral30Color,
        neutral40Color,
        neutral50Color,
        neutral60Color,
        neutral70Color,
        neutral80Color,
        neutral90Color,
        primaryColorData,
        secondaryColorData,
        textColor,
        textAltColor,
        universalBorderColor,
        universalHoverColor,
    };
};

export const getCoreColorsTheme = (data = {}, config = {}) => {
    const { isDarkMode } = config;
    const DEFAULTS = getThemeDefaults(isDarkMode);
    const themeData = {
        [getThemeAPIKeyFromName(COLOR_UNIVERSAL_FOCUS_HALO)]: getFocusHaloRGBA(
            isDarkMode ? '#ffffff' : '#000000',
        ),
    };
    const coreColorKeys = [
        COLOR_ACCENT,
        COLOR_AFFIRMATIVE,
        COLOR_BRAND,
        COLOR_CANVAS,
        COLOR_CANVAS_ALT,
        COLOR_CAUTIONARY,
        COLOR_DESTRUCTIVE,
        COLOR_ERROR,
        COLOR_INFO,
        COLOR_NEUTRAL_10,
        COLOR_NEUTRAL_20,
        COLOR_NEUTRAL_30,
        COLOR_NEUTRAL_40,
        COLOR_NEUTRAL_50,
        COLOR_NEUTRAL_60,
        COLOR_NEUTRAL_70,
        COLOR_NEUTRAL_80,
        COLOR_NEUTRAL_90,
        COLOR_PRIMARY,
        COLOR_SECONDARY,
        COLOR_TEXT,
        COLOR_TEXT_ALT,
        COLOR_UNIVERSAL_BORDER,
        COLOR_UNIVERSAL_HOVER_BG,
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
