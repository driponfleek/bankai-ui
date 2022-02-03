import { convertColorToHex } from '@epr0t0type/bankai-lib-color-utils';
import { SPEC_TOKEN_NAMES } from '../const/specTokensConst';

export const getThemeAPIKeyFromName = (name) => {
    if (!name) {
        return name;
    }

    const testRegEx = /_/g;

    return name.toLowerCase().replace(testRegEx, '.');
};

export const getNameFromThemeAPIKey = (apiKey) => {
    if (!apiKey) {
        return apiKey;
    }

    const testRegEx = /\./g;

    return apiKey.toUpperCase().replace(testRegEx, '_');
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

export const formatFontSizeValsForWeb = (themeData = {}) => {
    const themeDataClone = { ...themeData };
    const typographySizeBaseKey = getThemeAPIKeyFromName(
        SPEC_TOKEN_NAMES.TYPOGRAPHY_SIZE_BASE,
    );
    const fontSizeKeys = [
        typographySizeBaseKey,
        ...Object.keys(SPEC_TOKEN_NAMES)
            .filter((tokenName) => tokenName.includes('FONT_SIZE'))
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
        SPEC_TOKEN_NAMES.LAYOUT_GRID_BASE,
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
        formatFontSizeValsForWeb(
            formatThemeBorderRadiusValsForWeb(themeDataClone),
        ),
    );

    return themeDataClone;
};
