import {
    // genColorsData,
    getNewColorByChangingLightness,
} from '@driponfleek/bankai-lib-color-utils';
// import { withRecommendedTextAndNonTextColors } from './dataEvalUtils';
import {
    massageConstToDotNotation,
    massageThemeDataForWeb,
    massageDesignTokenToCSSVar,
} from './dataMassageUtils';

/**
 * Used for generating Core Neutral Colors
 * @param {string} BASE_COLOR - The color from which all other neutral colors will be derived.
 * @param {number} step - Used to increment the lightness of neutral colors.
 * @returns {object} - Object with `CORE_COLOR_NEUTRAL_<Lightness>: <colorHexValue>` pattern
 */
export const genCoreNeutralColors = (BASE_COLOR = '#6d7282', step = 10) => {
    // baseColor was #424b5a
    // baseColor was #f1f2f3
    let i = step;
    const max = 100;
    const colors = {};
    const keyPrefix = 'CORE_COLOR_NEUTRAL_';

    do {
        const key = `${keyPrefix}${i}`;
        colors[key] = getNewColorByChangingLightness(BASE_COLOR, i);
        i += step;
    } while (i < max);

    return {
        [`${keyPrefix}0`]: '#000000',
        ...colors,
        [`${keyPrefix}100`]: '#ffffff',
    };
};

/**
 *
 * @param {object} params
 * @param {string} params.hex - Hex color that data will be derived from.
 * @param {string} params.tokenId - (OPTIONAL) Design token ID that is unique to this color.
 * @param {number} params.step - Used to generate variants of the preferred color. Must be divisible by 100 or will default to 10
 * @param {object} params.canvasColor - (OPTIONAL) Object containing the necessary data about the canvas (aka background) color. When provided color data will include recommended accessible Text and Non-Text colors.
 * @param {object} params.canvasAltColor - (OPTIONAL) Object containing the necessary data about an alternative canvas (aka background) color, in the event there are 2 possible background colors you want to check against. This will not be evaluated if a canvasColor is not also provided.
 * @returns {object}
 */
// export const genColorData = (params) => {
//     const { hex, tokenId, step, canvasColor, canvasAltColor } = params ?? {};
//     const shouldRecommendColors = !!canvasColor && !!canvasAltColor;
//     const sourceColors = genColorsData({
//         hex,
//         tokenId,
//         ...(!!step && { step }),
//     });

//     if (!shouldRecommendColors) {
//         return sourceColors;
//     }

//     return withRecommendedTextAndNonTextColors({
//         canvasAltColor,
//         canvasColor,
//         sourceColors,
//     });
// };

/**
 * TODO: Figure out where this should go
 * @param {object} params
 * @param {object} params.fallback - Fallback color data that is returned in the event there is no overrideHex provided.
 * @param {string} params.overrideHex - Hex color override for theme to use instead of the fallback.
 * @param {object} params.canvasColor - (OPTIONAL) Object containing the necessary data about the canvas (aka background) color. When provided color data will include recommended accessible Text and Non-Text colors.
 * @param {object} params.canvasAltColor - (OPTIONAL) Object containing the necessary data about an alternative canvas (aka background) color, in the event there are 2 possible background colors you want to check against. This will not be evaluated if a canvasColor is not also provided.
 * @returns
 */
// export const getComponentSourceColor = (params) => {
//     const { fallback, overrideHex, canvasAltColor, canvasColor } = params ?? {};

//     if (!overrideHex) {
//         return fallback;
//     }

//     const { tokenId } = fallback ?? {};

//     return genColorData({
//         hex: overrideHex,
//         tokenId,
//         canvasAltColor,
//         canvasColor,
//     });
// };

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
