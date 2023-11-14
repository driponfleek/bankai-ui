import { isValidHexColor } from './validationUtils';
/**
 * Use to get the color metadata object key that indicates if the color is A11y compliant
 * @param {boolean} shouldEvalForText - Defaults to 'false'. Used to determine the appropriate data to use for evaulation
 * @return {string} - 'isA11yReadable' if shouldEvalForText is true, otherwise 'isA11yUICompatible'
 */
export const getEvalsA11yKey = (shouldEvalForText = false) =>
    shouldEvalForText ? 'isA11yReadable' : 'isA11yUICompatible';

/**
 * Filters the array of variants and reduces to only the options that are A11y compliant.
 * @param {array} variants - An array of colors to evaluate against the base color
 * @param {boolean} shouldEvalForText - Used to determine the appropriate data to use for evaulation
 * @return {array} - Returns array of sanitized variants that are A11y compliant
 */
export const getSanitizedA11yColorVariants = (
    variants = [],
    shouldEvalForText = false,
) => {
    const sanitizerKey = getEvalsA11yKey(shouldEvalForText);

    return variants.filter(
        (variant) => variant.evalsAgainstBGColor[sanitizerKey],
    );
};

/**
 * Iterates through an array of variants and splits the list into ligther and darker variants of a preferred color.
 * @param {number} preferredColorLightness - The lightness of the preferred color, used to compare against variants for lighter/darker analysis
 * @param {array} variants - An array of the preferred color's variants
 * @return {object}
 * @return {array} object.lighterVariants
 * @return {array} object.darkerVariants
 */
export const getLighterDarkerVariants = (baseColorLightness, variants = []) => {
    if (baseColorLightness === undefined) {
        return {
            lighterVariants: [],
            darkerVariants: [],
        };
    }

    return {
        lighterVariants: variants.filter(
            (variant) => variant.lch.l > baseColorLightness,
        ),
        darkerVariants: variants.filter(
            (variant) => variant.lch.l < baseColorLightness,
        ),
    };
};

/**
 * Provides a fallback hex value in the event the hex passed is not valid yet.
 * Useful for when users are entering values in to a form input to keep the app from crashing.
 * @param {string} hex
 */
export const getSanitizedHex = (hex) => {
    return isValidHexColor(hex) ? hex : '#000000';
};
