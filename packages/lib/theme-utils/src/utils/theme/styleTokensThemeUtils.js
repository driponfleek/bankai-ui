import { getThemeAPIKeyFromName } from '../dataUtils';
import { CORE_STYLE_TOKEN_NAMES } from '../../const/tokens/coreTokensConst';
import { CORE_STYLE_TOKEN_DEFAULTS } from '../../const/tokens/defaults/coreTokenDefaultsConst';

const {
    CORE_TYPOGRAPHY_FONT_FAMILY_FALLBACK,
    CORE_TYPOGRAPHY_FONT_SIZE,
    CORE_TYPOGRAPHY_FONT_SIZE_SCALE,
    CORE_TYPOGRAPHY_FONT_WEIGHT,
    CORE_TYPOGRAPHY_FOOTNOTE_FONT_SIZE,
    CORE_TYPOGRAPHY_FOOTNOTE_MOBILE_FONT_SIZE,
    CORE_TYPOGRAPHY_FORM_INPUT_FONT_SIZE,
    CORE_TYPOGRAPHY_HEADINGS_FONT_FAMILY_FALLBACK,
    CORE_TYPOGRAPHY_HEADINGS_FONT_WEIGHT,
    CORE_TYPOGRAPHY_HEADINGS_LEVEL5_FONT_SIZE,
    CORE_TYPOGRAPHY_HEADINGS_LEVEL5_MOBILE_FONT_SIZE,
    CORE_TYPOGRAPHY_HEADINGS_LEVEL4_FONT_SIZE,
    CORE_TYPOGRAPHY_HEADINGS_LEVEL4_MOBILE_FONT_SIZE,
    CORE_TYPOGRAPHY_HEADINGS_LEVEL3_FONT_SIZE,
    CORE_TYPOGRAPHY_HEADINGS_LEVEL3_MOBILE_FONT_SIZE,
    CORE_TYPOGRAPHY_HEADINGS_LEVEL2_FONT_SIZE,
    CORE_TYPOGRAPHY_HEADINGS_LEVEL2_MOBILE_FONT_SIZE,
    CORE_TYPOGRAPHY_HEADINGS_LEVEL1_FONT_SIZE,
    CORE_TYPOGRAPHY_HEADINGS_LEVEL1_MOBILE_FONT_SIZE,
    CORE_TYPOGRAPHY_MOBILE_FONT_SIZE_SCALE,
    CORE_TYPOGRAPHY_SUB_TEXT_FONT_SIZE,
    CORE_TYPOGRAPHY_SUB_TEXT_MOBILE_FONT_SIZE,
    CORE_STATE_DISABLED_OPACITY,
    CORE_SYSTEM_SCALE,
    ...LOOPABLE_NAMES
} = CORE_STYLE_TOKEN_NAMES;

const getBorderRadiusDefaults = () => {
    const TOKEN_NAMES = Object.keys(CORE_STYLE_TOKEN_NAMES).filter((NAME) =>
        NAME.includes('BORDER_RADIUS'),
    );
    const defaults = {};

    for (let index = 0; index < TOKEN_NAMES.length; index += 1) {
        const NAME = TOKEN_NAMES[index];
        const API_KEY = getThemeAPIKeyFromName(NAME);
        const VALUE = CORE_STYLE_TOKEN_DEFAULTS[NAME];

        defaults[API_KEY] = VALUE;
    }

    return defaults;
};

export const getTypographyTheme = (data = {}, config = {}) => {
    const { isMobile } = config;
    const fontSizeScaleValName = isMobile
        ? CORE_TYPOGRAPHY_MOBILE_FONT_SIZE_SCALE
        : CORE_TYPOGRAPHY_FONT_SIZE_SCALE;
    const footnoteValName = isMobile
        ? CORE_TYPOGRAPHY_FOOTNOTE_MOBILE_FONT_SIZE
        : CORE_TYPOGRAPHY_FOOTNOTE_FONT_SIZE;
    const h1ValName = isMobile
        ? CORE_TYPOGRAPHY_HEADINGS_LEVEL1_MOBILE_FONT_SIZE
        : CORE_TYPOGRAPHY_HEADINGS_LEVEL1_FONT_SIZE;
    const h2ValName = isMobile
        ? CORE_TYPOGRAPHY_HEADINGS_LEVEL2_MOBILE_FONT_SIZE
        : CORE_TYPOGRAPHY_HEADINGS_LEVEL2_FONT_SIZE;
    const h3ValName = isMobile
        ? CORE_TYPOGRAPHY_HEADINGS_LEVEL3_MOBILE_FONT_SIZE
        : CORE_TYPOGRAPHY_HEADINGS_LEVEL3_FONT_SIZE;
    const h4ValName = isMobile
        ? CORE_TYPOGRAPHY_HEADINGS_LEVEL4_MOBILE_FONT_SIZE
        : CORE_TYPOGRAPHY_HEADINGS_LEVEL4_FONT_SIZE;
    const h5ValName = isMobile
        ? CORE_TYPOGRAPHY_HEADINGS_LEVEL5_MOBILE_FONT_SIZE
        : CORE_TYPOGRAPHY_HEADINGS_LEVEL5_FONT_SIZE;
    const subTextValName = isMobile
        ? CORE_TYPOGRAPHY_SUB_TEXT_MOBILE_FONT_SIZE
        : CORE_TYPOGRAPHY_SUB_TEXT_FONT_SIZE;
    const typographyNameKeys = [
        CORE_TYPOGRAPHY_FONT_SIZE,
        CORE_TYPOGRAPHY_FONT_SIZE_SCALE,
        CORE_TYPOGRAPHY_FONT_WEIGHT,
        CORE_TYPOGRAPHY_HEADINGS_FONT_WEIGHT,
        ...(!isMobile
            ? [
                  CORE_TYPOGRAPHY_FONT_FAMILY_FALLBACK,
                  CORE_TYPOGRAPHY_FOOTNOTE_MOBILE_FONT_SIZE,
                  CORE_TYPOGRAPHY_HEADINGS_FONT_FAMILY_FALLBACK,
                  CORE_TYPOGRAPHY_HEADINGS_LEVEL1_MOBILE_FONT_SIZE,
                  CORE_TYPOGRAPHY_HEADINGS_LEVEL2_MOBILE_FONT_SIZE,
                  CORE_TYPOGRAPHY_HEADINGS_LEVEL3_MOBILE_FONT_SIZE,
                  CORE_TYPOGRAPHY_HEADINGS_LEVEL4_MOBILE_FONT_SIZE,
                  CORE_TYPOGRAPHY_HEADINGS_LEVEL5_MOBILE_FONT_SIZE,
                  CORE_TYPOGRAPHY_MOBILE_FONT_SIZE_SCALE,
                  CORE_TYPOGRAPHY_SUB_TEXT_MOBILE_FONT_SIZE,
              ]
            : []),
        ...Object.keys(LOOPABLE_NAMES).filter((dataKey) =>
            dataKey.startsWith('CORE_TYPOGRAPHY'),
        ),
    ];
    const themeData = {};

    for (let index = 0; index < typographyNameKeys.length; index += 1) {
        const nameKey = typographyNameKeys[index];
        const apiKey = getThemeAPIKeyFromName(nameKey);
        const value =
            data[apiKey] !== undefined
                ? data[apiKey]
                : CORE_STYLE_TOKEN_DEFAULTS[nameKey];

        themeData[apiKey] = value;
    }

    themeData[getThemeAPIKeyFromName(CORE_TYPOGRAPHY_FONT_SIZE_SCALE)] =
        CORE_STYLE_TOKEN_DEFAULTS[fontSizeScaleValName];
    themeData[getThemeAPIKeyFromName(CORE_TYPOGRAPHY_FOOTNOTE_FONT_SIZE)] =
        CORE_STYLE_TOKEN_DEFAULTS[footnoteValName];
    themeData[getThemeAPIKeyFromName(CORE_TYPOGRAPHY_FORM_INPUT_FONT_SIZE)] =
        CORE_STYLE_TOKEN_DEFAULTS[CORE_TYPOGRAPHY_FORM_INPUT_FONT_SIZE];
    themeData[
        getThemeAPIKeyFromName(CORE_TYPOGRAPHY_HEADINGS_LEVEL1_FONT_SIZE)
    ] = CORE_STYLE_TOKEN_DEFAULTS[h1ValName];
    themeData[
        getThemeAPIKeyFromName(CORE_TYPOGRAPHY_HEADINGS_LEVEL2_FONT_SIZE)
    ] = CORE_STYLE_TOKEN_DEFAULTS[h2ValName];
    themeData[
        getThemeAPIKeyFromName(CORE_TYPOGRAPHY_HEADINGS_LEVEL3_FONT_SIZE)
    ] = CORE_STYLE_TOKEN_DEFAULTS[h3ValName];
    themeData[
        getThemeAPIKeyFromName(CORE_TYPOGRAPHY_HEADINGS_LEVEL4_FONT_SIZE)
    ] = CORE_STYLE_TOKEN_DEFAULTS[h4ValName];
    themeData[
        getThemeAPIKeyFromName(CORE_TYPOGRAPHY_HEADINGS_LEVEL5_FONT_SIZE)
    ] = CORE_STYLE_TOKEN_DEFAULTS[h5ValName];
    themeData[getThemeAPIKeyFromName(CORE_TYPOGRAPHY_SUB_TEXT_FONT_SIZE)] =
        CORE_STYLE_TOKEN_DEFAULTS[subTextValName];

    return themeData;
};

export const getBorderRadiusTheme = (data, isRoundedUI) => {
    const dataClone = {
        ...getBorderRadiusDefaults(),
        ...data,
    };
    const borderRadiusKeys = Object.keys(dataClone).filter((dataKey) =>
        dataKey.includes('border.radius'),
    );
    const theme = {};

    for (let index = 0; index < borderRadiusKeys.length; index += 1) {
        const borderRadiusKey = borderRadiusKeys[index];
        const value = dataClone[borderRadiusKey];

        if (!isRoundedUI) {
            theme[borderRadiusKey] = 0;
        }

        if (isRoundedUI) {
            theme[borderRadiusKey] = value;
        }
    }

    const { FORM_INPUT_BORDER_RADIUS, FORM_PILL_BORDER_RADIUS } =
        CORE_STYLE_TOKEN_NAMES;

    let inputBorderRadius =
        data[getThemeAPIKeyFromName(FORM_INPUT_BORDER_RADIUS)];

    if (inputBorderRadius === undefined) {
        inputBorderRadius = CORE_STYLE_TOKEN_DEFAULTS[FORM_INPUT_BORDER_RADIUS];
    }

    return {
        ...theme,
        [getThemeAPIKeyFromName(FORM_PILL_BORDER_RADIUS)]: !isRoundedUI
            ? 0
            : Math.max(inputBorderRadius - 1, 0),
    };
};

export const getSpecTheme = (data, isRoundedUI) => {
    const typographyTheme = getTypographyTheme(data);
    const borderRadiusTheme = getBorderRadiusTheme(data, isRoundedUI);
    const GRID_BASE_API_KEY = getThemeAPIKeyFromName(CORE_SYSTEM_SCALE);
    let gridBaseValue = data[GRID_BASE_API_KEY];

    if (gridBaseValue === undefined) {
        gridBaseValue = CORE_STYLE_TOKEN_DEFAULTS[CORE_SYSTEM_SCALE];
    }

    return {
        ...typographyTheme,
        ...borderRadiusTheme,
        [GRID_BASE_API_KEY]: gridBaseValue,
    };
};
