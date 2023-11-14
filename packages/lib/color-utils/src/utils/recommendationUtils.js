import {
    getSanitizedA11yColorVariants,
    getA11yColorVariantsSanitizerA11yKey,
    getLighterDarkerVariants,
} from './dataSanitizerUtils';

/**
 * Use to get the closest variant color ID to the preferred color
 * @param {number} preferredColorLightness
 * @param {array} variantColorsIds - Array of numbers representing alternative color lightnesses and IDs
 */
// TODO: This probably is no longer needed
export const getClosestVariantColorId = (
    preferredColorLightness,
    variantColorsIds = [],
) => {
    // When looking at variant colors, if the list is darker than
    // the preferred color, we should pick the lightest one, and
    // if the list is lighter than the preferred color, I should pick
    // the darkest one.
    const shouldPickDarkest = variantColorsIds.includes(
        (id) => id > preferredColorLightness,
    );
    // Use `min` to get the darkest variant, `max` to get the lightest
    const mathMethod = shouldPickDarkest ? Math.min : Math.max;
    const compatibleColorLightnesses = [
        ...new Set(
            variantColorsIds.map((compatColor) => compatColor.lightness),
        ),
    ];

    return mathMethod(...compatibleColorLightnesses);
};

/**
 * Use to get the recommended accessible color from a list of sanitized variants. Assumes variants have been sanitized prior to passing here.
 * @param {object} preferred - The preferred color data
 * @param {*} variants - An array of preferred color variants
 * @returns {object} - Returns the recommended accessible color if one can be determined, falls back to preferred when an accessible color cannot be determined from variants provided
 */
export const getRecommendedColorFromVariants = (
    preferred = {},
    variants = [],
) => {
    const { lightness: preferredLightness, isDark: isPreferredDark } =
        preferred;
    const { lighterVariants, darkerVariants } = getLighterDarkerVariants(
        preferredLightness,
        variants,
    );
    const hasDarkerVariants = darkerVariants.length > 0;
    const hasLighterVariants = lighterVariants.length > 0;

    // If there are no accessible variants
    // return the preferred color
    if (!hasDarkerVariants && !hasLighterVariants) {
        return preferred;
    }

    let variantColorLightnesses;
    let recommendedColorLightness;
    // If the preferred color is perceived as dark and there are darker accessible variants
    // pick the lightest variant from the darker list
    // OR
    // If the preferred color is perceived as light and there are no lighter accessible variants
    // and there are darker accessible variants pick the lightest variant from the darker list
    const shouldGetColorFromDarkerVariants =
        (isPreferredDark && hasDarkerVariants) ||
        (!isPreferredDark && !hasLighterVariants && hasDarkerVariants);
    // If the preferred color is perceived as light and there are ligther accessible variants
    // pick the darkest variant from the lighter list
    // OR
    // If the preferred color is perceived as dark and there are no darker accessible variants
    // and there are lighter accessible variants pick the darkest variant from the lighter list
    const shouldGetColorFromLighterVariants =
        (!isPreferredDark && hasLighterVariants) ||
        (isPreferredDark && !hasDarkerVariants && hasLighterVariants);

    if (shouldGetColorFromDarkerVariants) {
        variantColorLightnesses = [
            ...new Set(darkerVariants.map((variant) => variant.lightness)),
        ];
        recommendedColorLightness = Math.max(...variantColorLightnesses);
    } else if (shouldGetColorFromLighterVariants) {
        variantColorLightnesses = [
            ...new Set(lighterVariants.map((variant) => variant.lightness)),
        ];
        recommendedColorLightness = Math.min(...variantColorLightnesses);
    }

    // If a lightness cannot be found return the preferred color
    if (recommendedColorLightness === undefined) {
        return preferred;
    }

    return variants.find(
        (variant) => variant.lightness === recommendedColorLightness,
    );
};

/**
 * Use to get the recommended accessible color to use. Prioritizes the preferred color and falls back to variants when the preferred color cannot be used.
 * @param {object} preferred - The preferred color data
 * @param {array} variants - An array of preferred color variants
 * @param {boolean} shouldEvalForText - Used to determine the appropriate data to use for evaulation
 * @return {object} - Returns the recommended accessible color if one can be determined
 */
export const getRecommendedColor = (
    preferred = {},
    variants = [],
    shouldEvalForText = false,
) => {
    const sanitizerKey =
        getA11yColorVariantsSanitizerA11yKey(shouldEvalForText);
    const canUsePreferred = !!preferred[sanitizerKey];

    // If you can use the preferred color then no more work is needed
    if (canUsePreferred) {
        return preferred;
    }

    const sanitizedVariants = getSanitizedA11yColorVariants(
        variants,
        shouldEvalForText,
    );

    return getRecommendedColorFromVariants(preferred, sanitizedVariants);
};
