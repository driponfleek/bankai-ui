import tinycolor from 'tinycolor2';
import {
    convertColorToHex,
    convertColorToHSL,
    convertColorToRGB,
} from './colorFormatConversionUtils';
import { evaluateColorCompatibilities } from './evalutationUtils';

/**
 *
 * @param {string} color - hex or rgb string
 * @returns {number} lightness of color
 */
export const getColorLightness = (color) => {
    const { l } = convertColorToHSL(color);

    return Math.round(l * 100);
};

/**
 * Use to get foundation data for a color.
 * @param {string} hex - 4 or 7 digit hex (must include hash)
 */
export const getColorSeedData = (hex) => {
    const color = tinycolor(hex);
    const hsl = convertColorToHSL(hex);

    return {
        hex,
        hsl,
        hslString: convertColorToHSL(hex, true),
        rgb: convertColorToRGB(hex),
        rgbString: convertColorToRGB(hex, true),
        isDark: color.isDark(),
        lightness: getColorLightness(hex),
    };
};

/**
 * Use to generate an array of numbers used to seed the
 * lightness of variant colors.
 * @param {number} step - how much to modify the lightness of a color by per variant. This will used to generate variants between 0 and 100
 * @return {array}
 */
const getLightnessArray = (step = 5) => {
    if (!step || step === 0) {
        return [];
    }
    // 40 is the max the step can be to get a minimum of 2 variants.
    const safeStep = Math.min(step, 40);
    // Stick to whole numbers
    const numOfVariants = Math.round(100 / safeStep);

    return [...Array.from(Array(numOfVariants).keys())]
        .filter((k) => k !== 0)
        .map((l) => l * safeStep)
        .reverse();
};

export const getNewColorByChangingLightness = (hex, lightness) => {
    if (!hex || lightness === undefined) {
        return hex;
    }
    const { h, s } = convertColorToHSL(hex);

    return convertColorToHex({ h, s, l: lightness });
};

/**
 * Use to get foundation data for an array of color variants for a given base color.
 * @param {string} hex - 4 or 7 digit hex (must include hash)
 * @param {number} step - must be divisible by 100 or will default to 10
 * @return {array}
 */
export const getColorVariantsSeedData = ({ hex, step, tokenId }) => {
    if (!hex) {
        return [];
    }
    const lightnessArr = getLightnessArray(step);

    return lightnessArr.map((l) => ({
        ...getColorSeedData(getNewColorByChangingLightness(hex, l)),
        tokenId: `${tokenId}_${l}`,
        id: `${l}`,
    }));
};

/**
 * Use to evaluate a base color against a list of options.
 * @param {object} baseColorData
 * @param {array} options
 * @returns {object} evaulated base color
 */
export const getColorCorrelationsData = (baseColorData, options) => {
    return {
        ...baseColorData,
        ...evaluateColorCompatibilities(baseColorData, options),
    };
};

/**
 * Use to evalute a base color as well as
 * a list of options against each other
 * @param {object} baseColorData
 * @param {array} options
 * @returns {object} evaluated base and options
 */
export const getColorAndVariantCorrelationsData = (
    baseColorData,
    options = [],
) => {
    return {
        base: getColorCorrelationsData(baseColorData, options),
        variants: options.map((variant) => {
            const otherColors = options.filter((v) => v.id !== variant.id);
            otherColors.unshift(baseColorData);

            return getColorCorrelationsData(variant, otherColors);
        }),
    };
};

/**
 * Use to generate color data for provided hex and returns
 * base color data, variant colors and compatibility results.
 * @param {string} hex - 4 or 7 digit hex (must include hash)
 * @param {number} step - must be divisible by 100 or will default to 10
 * @return {object}
 */
export const genColorsData = ({ hex, step, tokenId }) => {
    const baseColor = {
        ...getColorSeedData(hex),
        id: 'base',
    };
    const variantColors = getColorVariantsSeedData({ hex, step, tokenId });

    return getColorAndVariantCorrelationsData(baseColor, variantColors);
};
