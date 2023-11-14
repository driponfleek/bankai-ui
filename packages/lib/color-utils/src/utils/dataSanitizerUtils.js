/**
 * Use to get the color data object key that indicates if the color is A11y compliant
 * @param {boolean} shouldEvalForText - Defaults to 'false'. Used to determine the appropriate data to use for evaulation
 * @return {string} - 'isA11yReadable' if shouldEvalForText is true, otherwise 'isA11yUICompatible'
 */
export const getA11yColorVariantsSanitizerA11yKey = (
    shouldEvalForText = false,
) => (shouldEvalForText ? 'isA11yReadable' : 'isA11yUICompatible');

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
    const sanitizerKey =
        getA11yColorVariantsSanitizerA11yKey(shouldEvalForText);

    return variants.filter((variant) => variant[sanitizerKey]);
};

/**
 * Iterates through an array of variants and splits the list into ligther and darker variants of a preferred color.
 * @param {number} preferredColorLightness - The lightness of the preferred color, used to compare against variants for lighter/darker analysis
 * @param {array} variants - An array of the preferred color's variants
 * @return {object}
 * @return {array} object.lighterVariants
 * @return {array} object.darkerVariants
 */
export const getLighterDarkerVariants = (
    preferredColorLightness,
    variants = [],
) => {
    if (preferredColorLightness === undefined) {
        return undefined;
    }

    return {
        lighterVariants: variants.filter(
            (variant) => variant.lightness > preferredColorLightness,
        ),
        darkerVariants: variants.filter(
            (variant) => variant.lightness < preferredColorLightness,
        ),
    };
};
