import {
    getIsA11yReadable,
    getIsA11yForUI,
    convertColorToRGBA,
    // getNewColorByChangingLightness,
    // getRecommendedColorFromVariants,
    // genEvaluatedColorData,
    // getLighterDarkerVariants,
} from '@driponfleek/bankai-lib-color-utils';
// import { genConstToDotNotationMap } from './dataGenUtils';
// import {
//     SEMANTIC_COLOR_TOKEN_NAMES,
//     SEMANTIC_COLOR_TOKEN_DEFAULTS,
// } from '../const/tokens/semantic/semanticColorsConst';

export const getCorrectedLightnessAdjustment = (
    sourceLightness,
    threshold,
    isDarkMode,
) => {
    const lightnessModifier = isDarkMode ? threshold : threshold * -1;
    const lightness = sourceLightness + lightnessModifier;

    if (lightness >= 90) {
        return sourceLightness - threshold;
    }

    if (lightness <= 10) {
        return sourceLightness + threshold;
    }

    return lightness;
};

export const getAccessibleWhiteOrBlackColor = (baseHex, shouldEvalForText) => {
    const whiteHex = '#ffffff';
    const blackHex = '#000000';
    const validator = shouldEvalForText ? getIsA11yReadable : getIsA11yForUI;
    const isValidWithWhite = validator(whiteHex, baseHex);

    return isValidWithWhite ? whiteHex : blackHex;
};

export const getTextColor = (baseHex) => {
    return getAccessibleWhiteOrBlackColor(baseHex, true);
};

export const getFocusHaloRGBA = (colorHex) => {
    return convertColorToRGBA(colorHex, 0.4, true);
};

export const getDecorativeHoverColor = (
    restingColor = {},
    bgColor = {},
    variants = [],
) => {
    const { lightness: restingColorLightness, isDark: isRestingColorDark } =
        restingColor;
    const sanitizedVariantIds = bgColor.compatibleNonTextColors.filter(
        (id) => id !== restingColor.id,
    );
    const sanitizedVariants = variants.filter((variant) =>
        sanitizedVariantIds.includes(variant.id),
    );
    const hoverLighterColor = sanitizedVariants.find(
        (variant) => variant.lightness === restingColorLightness + 12,
    );
    const hoverDarkerColor = sanitizedVariants.find(
        (variant) => variant.lightness === restingColorLightness - 12,
    );
    const shouldUserDarker =
        (isRestingColorDark && !!hoverDarkerColor) ||
        (!isRestingColorDark && !hoverLighterColor && !!hoverDarkerColor);
    const shouldUserLighter =
        (!isRestingColorDark && !!hoverLighterColor) ||
        (isRestingColorDark && !hoverDarkerColor && !!hoverLighterColor);

    switch (true) {
        case shouldUserDarker:
            return hoverDarkerColor;
        case shouldUserLighter:
            return hoverLighterColor;

        default:
            return restingColor;
    }
};

// export const getHoverColor = (
//     restingColor = {},
//     bgColor = {},
//     variants = [],
// ) => {
//     const restingColorEvals = genEvaluatedColorData({ variants }, restingColor);
//     const bgColorA11yColorIds = (bgColor?.compatibleNonTextColors ?? []).filter(
//         (compatibleNonTextColor) => compatibleNonTextColor !== restingColor.id,
//     );
//     const restingColorA11yColorIds =
//         restingColorEvals?.bgColor?.compatibleNonTextColors ?? [];
//     const commonCompatibleColorIds = restingColorA11yColorIds.filter(
//         (colorId) => bgColorA11yColorIds.includes(colorId),
//     );
//     const commonCompatibleColors = variants.filter((op) =>
//         commonCompatibleColorIds.includes(op.id),
//     );
//     const canUsePreferred = commonCompatibleColorIds.includes('preferred');

//     if (canUsePreferred) {
//         return commonCompatibleColors.find((op) => op.id === 'preferred');
//     }

//     return getRecommendedColorFromVariants(
//         restingColor,
//         commonCompatibleColors,
//     );
// };

export const finalizeColorData = (
    colorData = {},
    shouldEvalForText = false,
    shouldAutoCorrectColors = true,
) => {
    const { recommendedTextColor, recommendedNonTextColor, ...rest } =
        colorData;
    let recommendedColor = { ...colorData.preferred, id: 'recommended' };

    if (!shouldAutoCorrectColors) {
        return {
            ...rest,
            recommendedColor,
        };
    }

    recommendedColor = shouldEvalForText
        ? recommendedTextColor
        : recommendedNonTextColor;

    return {
        ...rest,
        recommendedColor: {
            ...recommendedColor,
            id: 'recommended',
        },
    };
};
