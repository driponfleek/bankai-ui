import {
    genColorMetadata,
    genColorVariantsWithMetadata,
} from '@driponfleek/bankai-lib-color-utils';
import {
    massageConstToDotNotation,
    massageThemeDataForWeb,
    massageDesignTokenToCSSVar,
} from './dataMassageUtils';
import { CORE_COLOR_NEUTRAL_SEED_DEFAULT } from '../const/tokens/core/coreColorsConst';

/**
 * Used for generating Core Neutral Colors
 * @param {string} BASE_COLOR - The color from which all other neutral colors will be derived.
 * @param {number} step - Used to increment the lightness of neutral colors.
 * @returns {object} - Object with `CORE_COLOR_NEUTRAL_<Lightness>: <colorHexValue>` pattern
 */
export const genCoreNeutralColors = (
    seedColor = CORE_COLOR_NEUTRAL_SEED_DEFAULT,
    step = 10,
    isHexValsOnly = false,
) => {
    const hexVals = {};
    const keyPrefix = 'core.color.neutral.';
    const neutralColors = [
        { tokenId: `${keyPrefix}0`, ...genColorMetadata('#000000') },
        ...genColorVariantsWithMetadata({
            hex: seedColor,
            step,
            tokenId: 'core.color.neutral',
        }),
        { tokenId: `${keyPrefix}100`, ...genColorMetadata('#ffffff') },
    ].sort((neutralColorA, neutralColorB) => {
        if (neutralColorA.tokenId < neutralColorB.tokenId) {
            return -1;
        }

        if (neutralColorA.tokenId > neutralColorB.tokenId) {
            return 1;
        }

        return 0;
    });

    if (isHexValsOnly) {
        return neutralColors;
    }

    for (let index = 0; index < neutralColors.length; index += 1) {
        const { tokenId, hex } = neutralColors[index];
        hexVals[tokenId] = hex;
    }

    return hexVals;
};

/**
 * Used to map an object of constant names to their corresponding design token name.
 * @param {object} names
 * @returns {object} - Object with `CONSTANT_NAME: 'contsant.name'` pattern
 */
export const genConstToDotNotationMap = (names = {}) => {
    // TODO: This probably belongs in a different package?
    const constTokenMap = {};
    const nameKeys = Object.keys(names);

    if (nameKeys.length === 0) {
        return constTokenMap;
    }

    for (let index = 0; index < nameKeys.length; index += 1) {
        const NAME = nameKeys[index];
        const VALUE = massageConstToDotNotation(NAME);

        constTokenMap[NAME] = VALUE;
    }

    return constTokenMap;
};

export const genCSSVars = (designTokens = {}, selector = ':root') => {
    const sanitizedThemeData = massageThemeDataForWeb(designTokens);
    const themeKeys = Object.keys(sanitizedThemeData);

    if (themeKeys.length === 0) {
        return '';
    }

    return `${selector} {
        ${themeKeys
            .map((themeKey) => {
                const cssVar = massageDesignTokenToCSSVar(themeKey);
                const cssVarVal = sanitizedThemeData[themeKey];

                return `${cssVar}: ${cssVarVal};`;
            })
            .join('\r\n')}
    }`;
};
