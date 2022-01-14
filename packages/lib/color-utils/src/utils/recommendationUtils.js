/**
 *
 * @param {object} base - The color to evaluate all variants against
 * @param {array} variants - An array of colors to evaluate against the base color
 * @param {boolean} shouldEvalForText - Used to determine the appropriate data to use for evaulation.
 */
export const getRecommendedColor = (
    base = {},
    options = [],
    shouldEvalForText = false,
) => {
    const {
        isDark,
        compatibleTextColors = [],
        compatibleNonTextColors = [],
    } = base;
    const compatibleColors = shouldEvalForText
        ? compatibleTextColors
        : compatibleNonTextColors;
    // Use `min` to get the darkest variant, `max` to get the lightest
    const mathMethod = isDark ? Math.min : Math.max;
    const canUseBase = compatibleColors.indexOf('base') > -1;

    if (canUseBase) {
        return options.find((variant) => variant.id === 'base');
    }

    const compatibleColorsData = options.filter(
        (variant) => compatibleColors.indexOf(variant.id) > -1,
    );
    const compatibleColorLightnesses = [
        ...new Set(
            compatibleColorsData.map((compatColor) => compatColor.lightness),
        ),
    ];

    if (compatibleColors.length === 0) {
        return undefined;
    }

    const variantLightness = mathMethod(...compatibleColorLightnesses);

    return (
        options.find((variant) => variant.lightness === variantLightness) || {}
    );
};

export default {};
