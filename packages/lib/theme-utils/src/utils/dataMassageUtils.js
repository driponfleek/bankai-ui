/**
 * Used to update all border radius unitless values in themeData data with units (px)
 * @param {object} themeData
 * @returns {object} - Cloned themeData object with all border radius values updated to include units (px)
 */
export const massageThemeBorderRadiiValsForWeb = (themeData = {}) => {
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

/**
 * Used to update all border widths unitless values in themeData data with units (px)
 * @param {object} themeData
 * @returns {object} - Cloned themeData object with all border widths values updated to include units (px)
 */
export const massageBorderWidthsForWeb = (themeData = {}) => {
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

/**
 * Used to update all unitless font sizes in themeData data with units (rem)
 * @param {object} themeData
 * @param {number} remBaseScale - used for rem conversion. Default is base 10 (ex: 1 rem = 10px).
 * @returns {object} - Cloned themeData object with all font size values updated to include units (rem)
 */
export const massageFontSizeValsForWeb = (
    themeData = {},
    remBaseScale = 10,
) => {
    const themeDataClone = { ...themeData };
    const fontSizeKeys = [
        ...Object.keys(themeDataClone).filter(
            (tokenName) =>
                tokenName.includes('font.size') &&
                !tokenName.includes('font.size.scale'),
        ),
    ];

    for (let index = 0; index < fontSizeKeys.length; index += 1) {
        const fontSizeKey = fontSizeKeys[index];
        const value = themeDataClone[fontSizeKey];

        if (value !== undefined) {
            themeDataClone[fontSizeKey] = `${value / remBaseScale}rem`;
        }
    }

    return themeDataClone;
};

/**
 * Used to update all unitless font sizes and border radiuses in themeData data with units
 * @param {object} themeData
 * @param {number} remBaseScale - used for rem conversion. Default is base 10 (ex: 1 rem = 10px).
 * @returns {object} - Cloned themeData object with all font size and border radius values updated to include units
 */
export const massageThemeDataForWeb = (themeData = {}, remBaseScale = 10) => {
    let themeDataClone = { ...themeData };
    const themeKeys = Object.keys(themeDataClone);

    if (themeKeys.length === 0) {
        return themeDataClone;
    }

    // Fix Web-Specific Formats
    themeDataClone = massageBorderWidthsForWeb(
        massageFontSizeValsForWeb(
            massageThemeBorderRadiiValsForWeb(themeDataClone),
            remBaseScale,
        ),
    );

    return themeDataClone;
};

/**
 * Used to convert a constant string to a dot-notation string.
 * @param {string} constStr - Ex: 'CORE_COLOR_NEUTRAL_0'
 * @returns {string} - Ex: 'core.color.neutral.0'
 */
export const massageConstToDotNotation = (constStr) => {
    if (!constStr) {
        return constStr;
    }

    const testRegEx = /_/g;

    return constStr.toLowerCase().replace(testRegEx, '.');
};

/**
 * Used to convert a dot-ntation string to a constant string.
 * @param {string} constStr - Ex: 'CORE_COLOR_NEUTRAL_0'
 * @returns {string} - Ex: 'core.color.neutral.0'
 */
export const massageDotNotationToConst = (dotNotationStr) => {
    if (!dotNotationStr) {
        return dotNotationStr;
    }

    const testRegEx = /\./g;

    return dotNotationStr.toUppererCase().replace(testRegEx, '_');
};

/**
 * Converts a design token to its corresponding CSS variable syntax.
 * @param {string} key - The design token dot-notation JSON key (Ex: `color.text`)
 * @returns {string} - Key converted to CSS Variable syntax (Ex: `--bankai-color-text`)
 */
export const massageDesignTokenToCSSVar = (key) => {
    if (!key) {
        return undefined;
    }

    const cssVarPrefix = '--bankai-';
    const testRegEx = /\./g;
    const formattedKey = key.replace(testRegEx, '-');

    return `${cssVarPrefix}${formattedKey}`;
};

export const sortDesignTokens = (tokens = {}) => {
    const unsortedArr = [...Object.entries(tokens)];
    const sortedArr = unsortedArr.sort(([key1], [key2]) =>
        key1.localeCompare(key2),
    );
    const sortedTokens = {};

    for (let index = 0; index < sortedArr.length; index += 1) {
        const [key, value] = sortedArr[index];
        sortedTokens[key] = value;
    }

    return sortedTokens;
};
