import {
    convertColorToHex,
    convertColorToLCH,
    convertColorToHSL,
    convertColorToRGB,
} from './colorFormatConversionUtils';
import { getIsDarkWCAG } from './evalutationUtils';
import { getSanitizedHex } from './dataSanitizerUtils';

/**
 * Generate an array of numbers used to seed the lightness adjustments for a color's variants.
 * @param {number} step - Amount to increment lightness by
 * @returns {array}
 */
const createVariantLightnessesArray = (step = 2) => {
    if (!step || step === 0) {
        return [];
    }

    const adjustedStep = Math.min(step, 40);
    const results = [];

    for (let i = adjustedStep; i < 100; i += adjustedStep) {
        results.push(i);
    }

    return results.reverse();
};

/**
 *
 * @param {object} baseLCH
 * @param {number} adjustedLightness
 * @param {boolean} isLighter
 * @returns
 */
const getAdjustedChromaAndHueWithCaps = (
    baseLCH,
    adjustedLightness,
    isLighter = false,
) => {
    const { l: baseL, c: baseC, h: baseH } = baseLCH ?? {};
    let adjustedC = baseC;
    let adjustedH = baseH;
    const blueChromaReductionFactor =
        1 - (adjustedLightness - baseL) / (100 - baseL);
    const blueChromaScaleFactor = Math.max(
        1 - (baseL - adjustedLightness) / baseL,
        0,
    );

    switch (true) {
        case baseH >= 60 && baseH <= 90: // Yellow range
            if (isLighter) {
                adjustedH -= Math.abs(baseL - adjustedLightness) * 0.8; // Shift downward when darkening
            }
            adjustedC = Math.min(adjustedC, 90); // Cap Chroma for yellows
            adjustedH = Math.max(Math.min(adjustedH, 90), 50); // Cap Hue for yellows
            break;
        case baseH >= 180 && baseH <= 270: // Blue range
            // adjustedC = baseC * blueChromaScaleFactor;
            if (isLighter) {
                adjustedC = Math.max(
                    baseC * blueChromaReductionFactor,
                    baseC * 0.5,
                ); // Retain at least 50% of original Chroma
                adjustedH -= Math.min(
                    1,
                    Math.abs(adjustedLightness - baseL) * 0.05,
                ); // Small downward Hue shift for harmony
            }

            if (!isLighter) {
                adjustedC = baseC * blueChromaScaleFactor; // Aggressively reduce Chroma for darker variants
                adjustedH = adjustedC < 5 ? 250 : adjustedH;
                adjustedC =
                    adjustedC < 5
                        ? 0
                        : (adjustedC -= Math.min(
                              3,
                              Math.abs(baseL - adjustedLightness) * 0.1,
                          )); // Slight downward Hue shift;
            }
            adjustedC = Math.min(adjustedC, 70); // Avoid oversaturation
            break;
        case baseH <= 30 || baseH >= 330: // Red range
            adjustedC = Math.min(adjustedC, 80); // Prevent neon-like reds
            adjustedH = Math.max(Math.min(adjustedH, 30), 0); // Constrain to red
        default: // General case for other hues
            if (isLighter) {
                adjustedH += Math.min(
                    5,
                    Math.abs(baseL - adjustedLightness) * 0.1,
                );
            } else {
                adjustedH -= Math.min(
                    5,
                    Math.abs(baseL - adjustedLightness) * 0.1,
                );
            }
            break;
    }
    adjustedH = (adjustedH + 360) % 360; // Wrap Hue within 0-360

    return { l: adjustedLightness, c: adjustedC, h: adjustedH };
};

export const genColorMetadata = (hex) => {
    const sanitizedHex = getSanitizedHex(hex);
    const lch = convertColorToLCH(sanitizedHex);

    return {
        hex: sanitizedHex,
        // TODO: Get rid of HSL and RGB if no longer needed
        hsl: convertColorToHSL(sanitizedHex),
        hslString: convertColorToHSL(sanitizedHex, true),
        lch,
        lchString: convertColorToLCH(sanitizedHex, true),
        rgb: convertColorToRGB(sanitizedHex),
        rgbString: convertColorToRGB(sanitizedHex, true),
        isDark: getIsDarkWCAG(sanitizedHex),
    };
};

export const getNewColorByLightnessAdjustment = (hex, newLightness) => {
    const sanitizedHex = getSanitizedHex(hex);
    const baseLCH = convertColorToLCH(sanitizedHex);
    const { l: baseLightness } = baseLCH;
    const isLighter = newLightness > baseLightness;
    const adjustedLCH = getAdjustedChromaAndHueWithCaps(
        baseLCH,
        newLightness,
        isLighter,
    );

    let newHex = convertColorToHex(adjustedLCH);
    let newLCH = convertColorToLCH(newHex);

    // Attempt to correct color to bring closer to newLightness value
    // due to ChromaJS auto-correcting when exceeding RGB Gamut limits
    // for hex conversion
    if (newLCH.l !== newLightness) {
        newLCH = { ...newLCH, l: newLightness };
        newHex = convertColorToHex(newLCH);
    }

    return newHex;
};

export const genColorVariantsWithMetadata = ({
    hex,
    step = 2,
    tokenId,
    shouldRemoveBaseColor = false,
}) => {
    const sanitizedHex = getSanitizedHex(hex);
    const { l: baseLightness } = convertColorToLCH(sanitizedHex); // l = lightness, c = chroma, h = hue
    const lightnessValues = createVariantLightnessesArray(step);
    const variants = lightnessValues.map((adjustedLightness) => {
        if (adjustedLightness === baseLightness) {
            return genColorMetadata(sanitizedHex);
        }

        const newHex = getNewColorByLightnessAdjustment(hex, adjustedLightness);

        return {
            tokenId: tokenId
                ? `${tokenId}.${adjustedLightness}`
                : `${adjustedLightness}`,
            ...genColorMetadata(newHex),
        };
    });

    if (shouldRemoveBaseColor) {
        return variants.filter((variant) => variant.hex !== hex);
    }

    return variants;
};

export const genColorAndVariantsWithMetadata = ({
    hex,
    tokenId,
    step = 2,
    shouldRemoveBaseColorFromVariants = true,
}) => {
    const sanitizedHex = getSanitizedHex(hex);

    return {
        baseColor: {
            ...genColorMetadata(sanitizedHex),
            tokenId: tokenId ? `${tokenId}.base` : 'base',
        },
        variants: genColorVariantsWithMetadata({
            hex: sanitizedHex,
            step,
            tokenId,
            shouldRemoveBaseColor: shouldRemoveBaseColorFromVariants,
        }),
    };
};
