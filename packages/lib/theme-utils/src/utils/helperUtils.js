import {
    getIsA11yReadable,
    getIsA11yForUI,
    convertColorToRGBA,
    // getIsAPCAReadable,
    // getIsAPCACompliantForUI,
    getAPCAContrast,
} from '@driponfleek/bankai-lib-color-utils';

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

export const getAccessibleWhiteOrBlackColor = (
    baseHex,
    shouldEvalForText,
    // shouldUseMinimumAPCATextCompliance,
) => {
    const whiteHex = '#ffffff';
    const blackHex = '#000000';
    const wcagValidator = shouldEvalForText
        ? getIsA11yReadable
        : getIsA11yForUI;
    // TODO: APCA is the future, revisit once it is the standard.
    // const apcaValidator = shouldEvalForText
    //     ? getIsAPCAReadable
    //     : getIsAPCACompliantForUI;
    const isValidWCAGWithWhite = wcagValidator(whiteHex, baseHex);
    // const isValidWCAGWithBlack = wcagValidator(blackHex, baseHex);
    // const isValidWithWhite =
    //     isValidWCAGWithWhite &&
    //     apcaValidator(whiteHex, baseHex, shouldUseMinimumAPCATextCompliance);
    // const isValidWithBlack =
    //     isValidWCAGWithBlack &&
    //     apcaValidator(blackHex, baseHex, shouldUseMinimumAPCATextCompliance);

    // if (!isValidWithWhite && !isValidWithBlack) {
    //     // Fall back to WCAG only validation
    //     return isValidWCAGWithWhite ? whiteHex : blackHex;
    // }

    return isValidWCAGWithWhite ? whiteHex : blackHex;
};

export const getTextColor = (
    baseHex,
    // shouldUseMinimumAPCATextCompliance,
) => {
    return getAccessibleWhiteOrBlackColor(
        baseHex,
        true,
        // TODO: APCA is the future, revisit once it is the standard.
        // shouldUseMinimumAPCATextCompliance,
    );
};

/**
 * Helper function used to prioritize returning the app text color (which may not always be black/white) color over the
 * evaluated color that is returned from getTextColor utility, which wiill be either black or white.
 * @param {string} baseHex
 * @param {string} preferredDarkTextColor
 * @param {string} preferredLightTextColor
 * @param {string} evalTextColor
 */
export const getPrioritizedAppTextColor = ({
    baseHex,
    preferredDarkTextColor,
    preferredLightTextColor,
    // shouldUseMinimumAPCATextCompliance,
}) => {
    const evalTextColor = getTextColor(
        baseHex,
        // shouldUseMinimumAPCATextCompliance,
    );

    if (
        (evalTextColor === '#ffffff' && !preferredLightTextColor) ||
        (evalTextColor === '#000000' && !preferredDarkTextColor)
    ) {
        return evalTextColor;
    }

    const preferredTextColor =
        evalTextColor === '#ffffff'
            ? preferredLightTextColor
            : preferredDarkTextColor;

    const isValidWCAGWithAppTextColor = getIsA11yReadable(
        preferredTextColor,
        baseHex,
    );
    // TODO: APCA is the future, revisit once it is the standard.
    // const isValidWithAppTextColor =
    //     isValidWCAGWithAppTextColor &&
    //     getIsAPCAReadable(
    //         preferredTextColor,
    //         baseHex,
    //         shouldUseMinimumAPCATextCompliance,
    //     );

    // return isValidWithAppTextColor || isValidWCAGWithAppTextColor
    //     ? preferredTextColor
    //     : evalTextColor;

    return isValidWCAGWithAppTextColor ? preferredTextColor : evalTextColor;
};

export const getFocusHaloRGBA = (colorHex) => {
    return convertColorToRGBA(colorHex, 0.4, true);
};

export const getDecorativeComplimentaryColor = (colorMetadata) => {
    const {
        baseColor = {},
        variants = [],
        recommendedColor = {},
        bgColor = {},
    } = colorMetadata ?? {};
    const { lch, isDark: isRecommendedColorDark } = recommendedColor;
    const { l: recommendedColorLightness } = lch ?? {};
    const sanitizedVariantIds =
        bgColor.compatibleNonTextColors?.filter(
            (tokenId) => tokenId !== recommendedColor.tokenId,
        ) ?? [];
    const ops = [
        ...(baseColor.hex !== recommendedColor.hex ? [baseColor] : []),
        ...variants.filter((variant) => variant.hex !== recommendedColor.hex),
    ].filter((variant) => sanitizedVariantIds.includes(variant.tokenId));
    const evaluatedVariants = ops.filter((op) => {
        const { hex: opHex } = op;
        let apcaContrast = getAPCAContrast(opHex, recommendedColor.hex);
        apcaContrast = apcaContrast < 0 ? apcaContrast * -1 : apcaContrast; // APCA Contrasts can be negative and still compliant.

        return apcaContrast >= 10;
    });
    const sanitizedVariants = evaluatedVariants.filter(
        (variant) => variant.evalsAgainstBGColor.isA11yUICompatible,
    );
    const { lighterVariants, darkerVariants } = sanitizedVariants.reduce(
        (acc, variant) => {
            const accClone = { ...acc };
            const { lch: variantLCH } = variant;
            const { l: variantLightness } = variantLCH ?? {};

            if (variantLightness > recommendedColorLightness) {
                accClone.lighterVariants.push(variant);
            }

            if (variantLightness < recommendedColorLightness) {
                accClone.darkerVariants.push(variant);
            }

            return accClone;
        },
        {
            lighterVariants: [],
            darkerVariants: [],
        },
    );
    const shouldGetFromDarker =
        (isRecommendedColorDark && darkerVariants.length > 0) ||
        (!isRecommendedColorDark && lighterVariants.length === 0);
    const shouldGetFromLighter =
        (!isRecommendedColorDark && lighterVariants.length > 0) ||
        (isRecommendedColorDark && darkerVariants.length === 0);

    let variantOps = sanitizedVariants;
    let mathOp = Math.max;

    if (shouldGetFromDarker) {
        variantOps = darkerVariants;
    }

    if (shouldGetFromLighter) {
        variantOps = lighterVariants;
        mathOp = Math.min;
    }

    const variantColorLightnesses = [
        ...new Set(variantOps.map((variant) => variant.lch.l)),
    ];
    const recommendedHoverColorLightness = mathOp(...variantColorLightnesses);
    let result = recommendedColor;

    if (recommendedHoverColorLightness === undefined) {
        return result;
    }

    result = variantOps.find(
        (variant) => variant.lch.l === recommendedHoverColorLightness,
    );

    return result;
};

export const finalizeColorMetadata = (
    colorMetadata = {},
    shouldEvalForText = false,
    shouldAutoCorrectColors = true,
) => {
    const {
        baseColor = {},
        recommendedColorForText,
        recommendedColorForNonText,
        ...rest
    } = colorMetadata;

    const commonMetadata = {
        baseColor,
        recommendedColorForText,
        recommendedColorForNonText,
    };
    const recommendedColorTokenId = baseColor.tokenId.replace(
        'base',
        'recommended',
    );
    let recommendedColor = { ...baseColor, tokenId: recommendedColorTokenId };

    if (!shouldAutoCorrectColors) {
        return {
            ...rest,
            ...commonMetadata,
            recommendedColor,
        };
    }

    recommendedColor = shouldEvalForText
        ? recommendedColorForText
        : recommendedColorForNonText;

    return {
        ...rest,
        ...commonMetadata,
        recommendedColor: {
            ...recommendedColor,
            tokenId: recommendedColorTokenId,
        },
    };
};
