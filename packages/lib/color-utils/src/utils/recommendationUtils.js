import {
    getSanitizedA11yColorVariants,
    getEvalsA11yKey,
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
 * Use to get the recommended accessible color from a list of sanitized variants. Assumes variants have been sanitized for accessible options prior to passing here.
 * @param {object} baseColor - The base color metadata
 * @param {array} variants - An array of compliant color variants
 * @returns {object} - Returns the recommended accessible color if one can be determined, falls back to base color when an accessible color cannot be determined from variants provided
 */
export const getRecommendedColorFromVariants = (
    baseColor = {},
    variants = [],
) => {
    // TODO: Need to consider what to do when sent an empty array or see if we can prevent that
    if (variants.length === 0) {
        console.groupCollapsed(
            '%c %s',
            'background-color: red; color: white;',
            'getRecommendedColorFromVariants',
        );
        console.error('No variants found. Returning base color');
        console.log('baseColor: ', baseColor);
        console.log('variants: ', variants);
        // console.trace();
        console.groupEnd();

        return baseColor;
    }
    const { lch, isDark: isBaseColorDark } = baseColor;
    const { l: baseColorLightness } = lch;
    const { lighterVariants, darkerVariants } = getLighterDarkerVariants(
        baseColorLightness,
        variants,
    );
    const hasDarkerVariants = darkerVariants.length > 0;
    const hasLighterVariants = lighterVariants.length > 0;

    // If there are no accessible variants return the base color
    if (!hasDarkerVariants && !hasLighterVariants) {
        return baseColor;
    }

    let variantColorLightnesses;
    let recommendedColorLightness;
    // If the base color is perceived as dark and there are darker accessible variants
    // pick the lightest variant from the darker list
    // -- OR --
    // If the base color is perceived as light and there are no lighter accessible variants
    // and there are darker accessible variants pick the lightest variant from the darker list
    const shouldGetColorFromDarkerVariants =
        (isBaseColorDark && hasDarkerVariants) ||
        (!isBaseColorDark && !hasLighterVariants && hasDarkerVariants);
    // If the base color is perceived as light and there are ligther accessible variants
    // pick the darkest variant from the lighter list
    // -- OR --
    // If the base color is perceived as dark and there are no darker accessible variants
    // and there are lighter accessible variants pick the darkest variant from the lighter list
    const shouldGetColorFromLighterVariants =
        (!isBaseColorDark && hasLighterVariants) ||
        (isBaseColorDark && !hasDarkerVariants && hasLighterVariants);

    if (shouldGetColorFromDarkerVariants) {
        variantColorLightnesses = [
            ...new Set(darkerVariants.map((variant) => variant.lch.l)),
        ];
        recommendedColorLightness = Math.max(...variantColorLightnesses);
    } else if (shouldGetColorFromLighterVariants) {
        variantColorLightnesses = [
            ...new Set(lighterVariants.map((variant) => variant.lch.l)),
        ];
        recommendedColorLightness = Math.min(...variantColorLightnesses);
    }

    // If a lightness cannot be found return the preferred color
    if (recommendedColorLightness === undefined) {
        return baseColor;
    }

    return variants.find(
        (variant) => variant.lch.l === recommendedColorLightness,
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
    baseColor = {},
    variants = [],
    shouldEvalForText = false,
) => {
    const sanitizerKey = getEvalsA11yKey(shouldEvalForText);
    const canUseBaseColor = !!baseColor.evalsAgainstBGColor[sanitizerKey];

    // If you can use the base color then no more work is needed
    if (canUseBaseColor) {
        return baseColor;
    }

    const sanitizedVariants = getSanitizedA11yColorVariants(
        variants,
        shouldEvalForText,
    );

    return getRecommendedColorFromVariants(baseColor, sanitizedVariants);
};
