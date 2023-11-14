import tinycolor from 'tinycolor2';
import {
    convertColorToHex,
    convertColorToHSL,
    convertColorToRGB,
} from './colorFormatConversionUtils';

/**
 * Use to get the lightness of a HSL color
 * @param {string} color - Hex or rgb string
 * @returns {number} - Lightness of color (0 - 100)
 */
export const getColorLightness = (color) => {
    const { l } = convertColorToHSL(color);

    return Math.round(l * 100);
};

/**
 * Use to get foundation data for a color.
 * @param {string} hex - 4 or 7 digit hex (must include hash)
 */
export const genColorSeedData = (hex) => {
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
 * Generate an array of numbers used to seed the lightness of color variants.
 * @param {number} step - Lightness modifier (max 40). This will be used to increment lightness values for color variants between 0 and 100
 * @return {array}
 */
const getLightnessArray = (step = 2) => {
    if (!step || step === 0) {
        return [];
    }
    // 40 is the max the step can be to get a minimum of 2 variants.
    const safeStep = Math.min(step, 40);
    // Stick to whole numbers
    const numOfVariants = Math.round(100 / safeStep);

    return [...Array.from(Array(numOfVariants).keys())]
        .filter((k) => k !== 0 && k !== 100)
        .map((l) => l * safeStep)
        .reverse();
};

/**
 * Use to get the hex value of a new color by adjusting a starting color's lightness.
 * @param {string} hex - Starting color hex value.
 * @param {number} lightness - Lightness to adjust the starting color to.
 * @returns {string} - Hex value of new adjusted color
 */
export const getNewColorByChangingLightness = (hex, lightness) => {
    if (!hex || lightness === undefined) {
        return hex;
    }
    const { h, s } = convertColorToHSL(hex);
    // Need to convert to a range from 0 - 1.
    // https://github.com/bgrins/TinyColor/issues/200
    const l = lightness / 100;

    return convertColorToHex({ h, s, l });
};

/**
 * Use to get foundation data for an array of color variants for a given preferred color.
 * @param {string} hex - 4 or 7 digit hex (must include hash)
 * @param {number} step - Must be divisible by 100 or will default to 10
 * @return {array}
 */
export const getColorVariantsSeedData = ({ hex, step, tokenId }) => {
    if (!hex) {
        return [];
    }
    const lightnessArr = getLightnessArray(step);

    return lightnessArr.map((l) => ({
        ...genColorSeedData(getNewColorByChangingLightness(hex, l)),
        ...(tokenId && { tokenId: `${tokenId}_${l}` }),
        id: `${l}`,
    }));
};

/**
 * Use to generate color data for provided hex and returns
 * preferred color data, variant colors and compatibility results.
 * @param {string} Object.hex - 4 or 7 digit hex (must include hash)
 * @param {number} Object.step - must be divisible by 100 or will default to 10
 * @param {boolean} Object.shouldRemoveDups - Default `true`. When `true` will check variants for duplicates of the preferred color and remove them
 * @return {object}
 */
export const genColorsData = ({
    hex,
    step = 2,
    shouldRemoveDups = true,
    tokenId,
}) => {
    const preferred = {
        ...genColorSeedData(hex),
        id: 'preferred',
    };
    let variants = getColorVariantsSeedData({ hex, step, tokenId });

    if (shouldRemoveDups) {
        variants = variants.filter((variant) => variant.hex !== hex);
    }

    return { preferred, variants };
};
