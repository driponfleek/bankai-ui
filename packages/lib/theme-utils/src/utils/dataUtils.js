import {
    genColorsData,
    getColorCorrelationsData,
    getRecommendedColor,
    convertColorToHex,
} from '@epr0t0type/bankai-lib-color-utils';
import {
    CORE_TOKEN_NAMES,
    CORE_TYPOGRAPHY_STYLE_TOKEN_NAMES,
} from '../const/tokens/coreTokensConst';

export const getThemeAPIKeyFromName = (name) => {
    if (!name) {
        return name;
    }

    const testRegEx = /_/g;

    return name.toLowerCase().replace(testRegEx, '.');
};

/**
 * This is used to create api key constants that
 * convert constant names using Underscore notation to
 * API key dot notation.
 * @param {object} names
 * @returns - Object with `CONSTANT_NAME: 'contsant.name'` pattern
 */
export const getThemeAPIKeysFromNames = (names = {}) => {
    const keysObj = {};
    const nameKeys = Object.keys(names);

    if (nameKeys.length === 0) {
        return keysObj;
    }

    for (let index = 0; index < nameKeys.length; index += 1) {
        const NAME = nameKeys[index];
        const testRegEx = /_/g;
        const VALUE = NAME.toLowerCase().replace(testRegEx, '.');

        keysObj[NAME] = VALUE;
    }

    return keysObj;
};

export const mapThemeAPIKeysToDefaults = (
    NAMES = {},
    API_KEYS = {},
    DEFAULTS = {},
) => {
    const finalMap = {};
    const nameKeys = Object.keys(NAMES);

    for (let index = 0; index < nameKeys.length; index += 1) {
        const NAME = nameKeys[index];
        const API_KEY = API_KEYS[NAME];
        const VALUE = DEFAULTS[NAME];

        if (VALUE) {
            finalMap[API_KEY] = VALUE;
        }
    }

    return finalMap;
};

export const formatThemeBorderRadiusValsForWeb = (themeData = {}) => {
    const themeDataClone = { ...themeData };
    const themeKeys = Object.keys(themeDataClone);
    const borderRadiusKeys = themeKeys.filter((themeKey) =>
        themeKey.includes('.radius'),
    );

    for (let index = 0; index < borderRadiusKeys.length; index += 1) {
        const borderRadiusKey = borderRadiusKeys[index];
        const val = themeDataClone[borderRadiusKey];

        themeDataClone[borderRadiusKey] = `${val}px`;
    }

    return themeDataClone;
};

export const formatBorderWidthsForWeb = (themeData = {}) => {
    const themeDataClone = { ...themeData };
    const themeKeys = Object.keys(themeDataClone);
    const borderWidthKeys = themeKeys.filter((themeKey) =>
        themeKey.includes('border.width'),
    );

    for (let index = 0; index < borderWidthKeys.length; index += 1) {
        const borderWidthKey = borderWidthKeys[index];
        const val = themeDataClone[borderWidthKey];

        themeDataClone[borderWidthKey] = `${val}px`;
    }

    return themeDataClone;
};

export const formatFontSizeValsForWeb = (themeData = {}) => {
    const themeDataClone = { ...themeData };
    const fontSizeKeys = [
        ...Object.keys(CORE_TYPOGRAPHY_STYLE_TOKEN_NAMES)
            .filter(
                (tokenName) =>
                    tokenName.includes('FONT_SIZE') &&
                    !tokenName.includes('CORE_TYPOGRAPHY_FONT_SIZE_SCALE'),
            )
            .map((tokenName) => getThemeAPIKeyFromName(tokenName)),
    ];

    for (let index = 0; index < fontSizeKeys.length; index += 1) {
        const fontSizeKey = fontSizeKeys[index];
        const value = themeDataClone[fontSizeKey];

        if (value !== undefined) {
            themeDataClone[fontSizeKey] = `${value / 10}rem`;
        }
    }

    return themeDataClone;
};

export const formatThemeColorValuesForWeb = (themeData = {}) => {
    const themeDataClone = { ...themeData };
    const themeKeys = Object.keys(themeDataClone);

    if (themeKeys.length === 0) {
        return themeDataClone;
    }
    const colorKeys = themeKeys.filter((themeKey) =>
        themeKey.startsWith('color.'),
    );

    for (let index = 0; index < colorKeys.length; index += 1) {
        const colorKey = colorKeys[index];
        const val = themeDataClone[colorKey] || '';

        const isRGB = val.includes('rgb(');

        if (isRGB) {
            themeDataClone[colorKey] = convertColorToHex(val);
        }
    }

    return themeDataClone;
};

export const formatSpecValuesForWeb = (themeData = {}) => {
    const themeDataClone = { ...themeData };
    const GRID_BASE_API_KEY = getThemeAPIKeyFromName(
        CORE_TOKEN_NAMES.CORE_SYSTEM_SCALE,
    );
    themeDataClone[
        GRID_BASE_API_KEY
    ] = `${themeDataClone[GRID_BASE_API_KEY]}px`;

    return themeDataClone;
};

// Used to set web-related units for data that does not contain it
export const formatThemeDataForWeb = (themeData = {}) => {
    let themeDataClone = { ...themeData };
    const themeKeys = Object.keys(themeDataClone);

    if (themeKeys.length === 0) {
        return themeDataClone;
    }

    // Fix Web-Specific Formats
    themeDataClone = formatThemeColorValuesForWeb(
        formatBorderWidthsForWeb(
            formatFontSizeValsForWeb(
                formatThemeBorderRadiusValsForWeb(themeDataClone),
            ),
        ),
    );

    return themeDataClone;
};

export const getCommonIds = (idList1 = [], idList2 = []) => {
    const isIdList1Shorter = idList2.length > idList1.length;
    const sourceArr = isIdList1Shorter ? idList1 : idList2;
    const testArr = isIdList1Shorter ? idList2 : idList1;

    return sourceArr.filter((id) => testArr.indexOf(id) > -1);
};

export const getCommonColorCompatabilities = (
    color1Data = {},
    color2Data = {},
) => {
    return {
        compatibleTextColors: getCommonIds(
            color1Data.compatibleTextColors,
            color2Data.compatibleTextColors,
        ),
        compatibleNonTextColors: getCommonIds(
            color1Data.compatibleNonTextColors,
            color2Data.compatibleNonTextColors,
        ),
    };
};

export const getJuxtaposedColorAgainstCanvases = (
    colors,
    shouldEvalForText,
) => {
    const {
        sourceColors = {},
        canvasColor = {},
        canvasAltColor = {},
    } = colors ?? {};
    let { base = {} } = sourceColors;
    const { variants = [] } = sourceColors;
    const canvasOptions = [base, ...variants];
    const evaluatedCanvasColor = getColorCorrelationsData(
        canvasColor,
        canvasOptions,
    );
    const evaluatedCanvasAltColor = getColorCorrelationsData(
        canvasAltColor,
        canvasOptions,
    );
    const { compatibleNonTextColors, compatibleTextColors } =
        getCommonColorCompatabilities(
            evaluatedCanvasColor,
            evaluatedCanvasAltColor,
        );

    const compatColors = shouldEvalForText
        ? compatibleTextColors
        : compatibleNonTextColors;
    const canUseBase = compatColors.indexOf('base') > -1;

    if (!canUseBase) {
        base = getRecommendedColor(
            {
                ...evaluatedCanvasColor,
                compatibleNonTextColors: compatColors,
                compatibleTextColors: compatColors,
            },
            canvasOptions.filter(
                (canvasOption) => compatColors.indexOf(canvasOption.id) !== -1,
            ),
            shouldEvalForText,
        );
    }

    return base || {};
};

export const withRecommendedColors = (colors) => {
    const { sourceColors } = colors ?? {};
    const recommendedTextColor = getJuxtaposedColorAgainstCanvases(
        colors,
        true,
    );
    const recommendedNonTextColor = getJuxtaposedColorAgainstCanvases(colors);

    return {
        ...sourceColors,
        recommendedNonTextColor,
        recommendedTextColor,
    };
};

export const getColorData = ({
    hex,
    tokenId,
    step,
    canvasColor,
    canvasAltColor,
}) => {
    const shouldRecommendColors = !!canvasColor && !!canvasAltColor;
    const sourceColors = genColorsData({
        hex,
        tokenId,
        ...(!!step && { step }),
    });

    if (!shouldRecommendColors) {
        return sourceColors;
    }

    return withRecommendedColors({
        canvasAltColor,
        canvasColor,
        sourceColors,
    });
};

export const getComponentSourceColor = ({
    fallback,
    overrideHex,
    canvasAltColor,
    canvasColor,
}) => {
    if (!overrideHex) {
        return fallback;
    }

    const { tokenId } = fallback ?? {};

    return getColorData({
        hex: overrideHex,
        tokenId,
        canvasAltColor,
        canvasColor,
    });
};
