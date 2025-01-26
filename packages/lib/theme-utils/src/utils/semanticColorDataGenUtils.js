import {
    convertColorToLCH,
    convertColorToHex,
    genEvaluatedColorMetadata,
    getControlVsOptionsA11yEvals,
    getSanitizedHex,
    genColorAndVariantsWithMetadata,
    genColorMetadata,
} from '@driponfleek/bankai-lib-color-utils';
import { sanitizeDataForSemanticColorOnly } from './dataSanitizerUtils';
import { massageConstToDotNotation } from './dataMassageUtils';
import {
    finalizeColorMetadata,
    getPrioritizedAppTextColor,
} from './helperUtils';
import {
    SEMANTIC_COLOR_TOKEN_NAMES,
    STATUS_HUE_RANGES,
} from '../const/tokens/semantic/semanticColorsConst';

const {
    SEMANTIC_COLOR_ACCENT_PRIMARY,
    SEMANTIC_COLOR_ACCENT_SECONDARY,
    SEMANTIC_COLOR_ACCENT_TERTIARY,
    SEMANTIC_COLOR_AFFIRMATIVE,
    SEMANTIC_COLOR_BRAND,
    SEMANTIC_COLOR_CANVAS,
    SEMANTIC_COLOR_CANVAS_ALT,
    SEMANTIC_COLOR_CANVAS_BRAND,
    SEMANTIC_COLOR_CAUTIONARY,
    SEMANTIC_COLOR_DESTRUCTIVE,
    SEMANTIC_COLOR_ERROR,
    SEMANTIC_COLOR_INFO,
    SEMANTIC_COLOR_PRIMARY,
    SEMANTIC_COLOR_SECONDARY,
} = SEMANTIC_COLOR_TOKEN_NAMES;

/**
 * Use to pick the hue of status colors within reserved hue ranges that will compliment the brand color.
 * @param {number} baseHue
 * @param {number} rangeStart
 * @param {number} rangeEnd
 * @returns {number}
 */
const calculateStatusHue = (baseHue, hueRange) => {
    const { min, max } = hueRange ?? {};

    if (min === max) {
        return min;
    }

    const rangeWidth = max - min;
    const normalizedBaseHue = ((baseHue % 360) + 360) % 360;
    const wrappedHue =
        (((normalizedBaseHue - max) % rangeWidth) + rangeWidth) % rangeWidth;

    return min + wrappedHue;
};

const calculateLightnessShiftWithCaps = (baseLightness, min, max) => {
    if (baseLightness < min) {
        return min - baseLightness;
    }

    if (baseLightness > max) {
        return max - baseLightness;
    }

    return 0;
};

const calcStatusColorLightnessShift = (role, baseLightness) => {
    switch (role) {
        case SEMANTIC_COLOR_AFFIRMATIVE:
            return calculateLightnessShiftWithCaps(baseLightness, 50, 60);
        case SEMANTIC_COLOR_CAUTIONARY:
            return calculateLightnessShiftWithCaps(baseLightness, 60, 80);
        case SEMANTIC_COLOR_ERROR:
            return calculateLightnessShiftWithCaps(baseLightness, 40, 50);
        case SEMANTIC_COLOR_INFO:
            return calculateLightnessShiftWithCaps(baseLightness, 40, 45);
        default:
            return 0;
    }
};

const calcStatusColorChromaAdjustment = (role, baseChroma) => {
    switch (role) {
        case SEMANTIC_COLOR_AFFIRMATIVE:
            return baseChroma < 30 ? 10 : 5;
        case SEMANTIC_COLOR_CAUTIONARY:
            return baseChroma < 60 ? 60 - baseChroma : 0;
        case SEMANTIC_COLOR_ERROR:
            return baseChroma < 30 ? 30 : 10;
        case SEMANTIC_COLOR_INFO:
            return Math.max(baseChroma, 50);
        default:
            return 0;
    }
};

const getStatusColor = ({
    baseLightness,
    baseChroma,
    baseHue,
    hueRange,
    role,
}) => {
    const newHue = calculateStatusHue(baseHue, hueRange);
    const lightnessShift = calcStatusColorLightnessShift(role, baseLightness);
    const chromaAdjustment = calcStatusColorChromaAdjustment(role, baseChroma);
    const lightness = Math.max(
        10,
        Math.min(90, baseLightness + lightnessShift),
    );
    const chroma = Math.max(10, baseChroma + chromaAdjustment);

    return convertColorToHex({ l: lightness, c: chroma, h: newHue });
};

const getCompatibleDecorativeAccentVariants = (variants) => {
    const results = variants.filter(
        (variant) => variant.evalsAgainstBGColor.isA11yUICompatible,
    );

    if (results > 0) {
        return results;
    }

    // Fall back to wcag eval only if no results
    return variants.filter(
        (variant) => variant.evalsAgainstBGColor.wcagContrast >= 3,
    );
};

export const reservedStatusColorHues = [
    [
        STATUS_HUE_RANGES[SEMANTIC_COLOR_AFFIRMATIVE].min,
        STATUS_HUE_RANGES[SEMANTIC_COLOR_AFFIRMATIVE].max,
    ],
    [
        STATUS_HUE_RANGES[SEMANTIC_COLOR_CAUTIONARY].min,
        STATUS_HUE_RANGES[SEMANTIC_COLOR_CAUTIONARY].max,
    ],
    [
        STATUS_HUE_RANGES[SEMANTIC_COLOR_ERROR].min,
        STATUS_HUE_RANGES[SEMANTIC_COLOR_ERROR].max,
    ],
    [
        STATUS_HUE_RANGES[SEMANTIC_COLOR_INFO].min,
        STATUS_HUE_RANGES[SEMANTIC_COLOR_INFO].max,
    ],
].flatMap(([min, max]) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i),
);

const getSemanticDecorativeColors = (
    colorMetadata,
    preferredTextColors = {},
    shouldUseMinimumAPCATextCompliance = true,
) => {
    const { variants, recommendedColor } = colorMetadata ?? {};
    const { decorativeColor, remainingVariants } = variants.reduce(
        (acc, variant) => {
            const { tokenId } = variant;
            const accClone = { ...acc };

            if (tokenId.includes('84')) {
                accClone.decorativeColor = variant;

                return accClone;
            }

            accClone.remainingVariants.push(variant);

            return accClone;
        },
        {
            decorativeColor: {},
            remainingVariants: [],
        },
    );

    const decorativeTextColor = {
        hex: getPrioritizedAppTextColor({
            baseHex: decorativeColor.hex,
            preferredDarkTextColor: preferredTextColors.dark,
            preferredLightTextColor: preferredTextColors.light,
            shouldUseMinimumAPCATextCompliance,
        }),
    };

    const evaluatedColorMetadata = genEvaluatedColorMetadata(
        { baseColor: decorativeColor, variants: remainingVariants },
        decorativeColor,
    );
    const { variants: evaluatedDecorativeAccents } = evaluatedColorMetadata;

    let { recommendedColorForNonText: decorativeAccentColor } =
        evaluatedColorMetadata;

    if (!decorativeAccentColor.evalsAgainstBGColor.isA11yUICompatible) {
        const compatibleVariants = getCompatibleDecorativeAccentVariants(
            evaluatedDecorativeAccents,
        );
        const variantColorLightnesses = [
            ...new Set(compatibleVariants.map((variant) => variant.lch.l)),
        ];
        const recommendedColorLightness = Math.max(...variantColorLightnesses);

        decorativeAccentColor =
            compatibleVariants.find(
                (variant) => variant.lch.l === recommendedColorLightness,
            ) ?? decorativeAccentColor;
    }

    const decorativeAccentTextColor = {
        hex: getPrioritizedAppTextColor({
            baseHex: decorativeAccentColor.hex,
            preferredDarkTextColor: preferredTextColors.dark,
            preferredLightTextColor: preferredTextColors.light,
            shouldUseMinimumAPCATextCompliance,
        }),
    };

    const textColor = {
        hex: getPrioritizedAppTextColor({
            baseHex: recommendedColor.hex,
            preferredDarkTextColor: preferredTextColors.dark,
            preferredLightTextColor: preferredTextColors.light,
            shouldUseMinimumAPCATextCompliance,
        }),
    };

    return {
        decorativeColor,
        decorativeTextColor,
        decorativeAccentColor,
        decorativeAccentTextColor,
        textColor,
    };
};

export const genSemanticColorsMetadata = ({
    presets = {},
    config = {},
    preferredTextColors,
}) => {
    const {
        evaluateForTextCompliance = {},
        shouldAutoCorrectColors = true,
        shouldUseMinimumAPCATextCompliance = true,
        variantsStep = 2,
    } = config;
    const canvasToken = massageConstToDotNotation(SEMANTIC_COLOR_CANVAS);
    const canvasAltToken = massageConstToDotNotation(SEMANTIC_COLOR_CANVAS_ALT);
    const {
        [canvasToken]: canvasHex,
        [canvasAltToken]: canvasAltHex,
        ...presetsRest
    } = sanitizeDataForSemanticColorOnly(presets);
    const canvasColorMetadata = {
        baseColor: {
            ...genColorMetadata(canvasHex),
            tokenId: canvasToken,
        },
    };
    const canvasAltColorMetadata = {
        baseColor: {
            ...genColorMetadata(canvasAltHex),
            tokenId: canvasAltToken,
        },
    };
    const semanticColors = {
        [canvasToken]: canvasColorMetadata,
        [canvasAltToken]: canvasAltColorMetadata,
    };
    const semanticTokens = {
        [canvasToken]: canvasHex,
        [canvasAltToken]: canvasAltHex,
    };
    const semanticColorTokens = [
        massageConstToDotNotation(SEMANTIC_COLOR_ACCENT_PRIMARY),
        massageConstToDotNotation(SEMANTIC_COLOR_ACCENT_SECONDARY),
        massageConstToDotNotation(SEMANTIC_COLOR_ACCENT_TERTIARY),
        massageConstToDotNotation(SEMANTIC_COLOR_AFFIRMATIVE),
        massageConstToDotNotation(SEMANTIC_COLOR_BRAND),
        massageConstToDotNotation(SEMANTIC_COLOR_CAUTIONARY),
        massageConstToDotNotation(SEMANTIC_COLOR_CANVAS_BRAND),
        massageConstToDotNotation(SEMANTIC_COLOR_DESTRUCTIVE),
        massageConstToDotNotation(SEMANTIC_COLOR_ERROR),
        massageConstToDotNotation(SEMANTIC_COLOR_INFO),
        massageConstToDotNotation(SEMANTIC_COLOR_PRIMARY),
        massageConstToDotNotation(SEMANTIC_COLOR_SECONDARY),
        ...Object.keys(presetsRest),
    ];

    for (let index = 0; index < semanticColorTokens.length; index += 1) {
        const colorToken = semanticColorTokens[index];
        // Generate the variants for the color and all color metadata
        const tokenMetadata = genColorAndVariantsWithMetadata({
            hex: presetsRest[colorToken],
            tokenId: colorToken,
            step: variantsStep,
        });
        // Evaluate tokenMetadata against canvas alt background
        const { evals } = getControlVsOptionsA11yEvals(
            canvasAltColorMetadata.baseColor,
            [tokenMetadata.baseColor, ...tokenMetadata.variants],
            shouldUseMinimumAPCATextCompliance,
        );
        // Separate base eval from variant evals
        const { [`${colorToken}.base`]: baseEval, ...variantEvals } = evals;
        tokenMetadata.baseColor.evalsAgainstBGColor = baseEval;
        tokenMetadata.variants = tokenMetadata.variants.map((variant) => ({
            ...variant,
            evalsAgainstBGColor: variantEvals[variant.tokenId],
        }));
        // Determine the recommended color based on config settings
        const finalizedMetadata = finalizeColorMetadata(
            genEvaluatedColorMetadata(
                tokenMetadata,
                canvasAltColorMetadata.baseColor,
            ),
            evaluateForTextCompliance[colorToken],
            shouldAutoCorrectColors,
        );

        semanticColors[colorToken] = finalizedMetadata;
        semanticTokens[colorToken] = finalizedMetadata.recommendedColor.hex;
        const decorativeToken = `${colorToken}.decorative`;
        const decorativeTextToken = `${decorativeToken}.text`;
        const decorativeAccentToken = `${decorativeToken}.accent`;
        const decorativeAccentTextToken = `${decorativeAccentToken}.text`;
        const colorTextToken = `${colorToken}.text`;
        const {
            decorativeColor,
            decorativeTextColor,
            decorativeAccentColor,
            decorativeAccentTextColor,
            textColor,
        } = getSemanticDecorativeColors(
            finalizedMetadata,
            preferredTextColors,
            shouldUseMinimumAPCATextCompliance,
        );
        semanticColors[decorativeToken] = decorativeColor;
        semanticTokens[decorativeToken] = decorativeColor.hex;
        semanticColors[decorativeTextToken] = decorativeTextColor;
        semanticTokens[decorativeTextToken] = decorativeTextColor.hex;
        semanticColors[decorativeAccentToken] = decorativeAccentColor;
        semanticTokens[decorativeAccentToken] = decorativeAccentColor.hex;
        semanticColors[decorativeAccentTextToken] = decorativeAccentTextColor;
        semanticTokens[decorativeAccentTextToken] =
            decorativeAccentTextColor.hex;
        semanticColors[colorTextToken] = textColor;
        semanticTokens[colorTextToken] = textColor.hex;
    }

    return {
        semanticColorsMetadata: semanticColors,
        semanticColorTokens: semanticTokens,
    };
};

export const generateStatusPalette = (baseHex) => {
    const sanitizedHex = getSanitizedHex(baseHex);
    const { l: baseL, c: baseC, h: baseH } = convertColorToLCH(sanitizedHex); // l = lightness, c = chroma, h = hue
    const sharedParams = {
        baseHue: baseH,
        baseLightness: baseL,
        baseChroma: baseC,
    };

    return {
        affirmative: getStatusColor({
            ...sharedParams,
            hueRange: STATUS_HUE_RANGES[SEMANTIC_COLOR_AFFIRMATIVE],
            role: SEMANTIC_COLOR_AFFIRMATIVE,
        }),
        cautionary: getStatusColor({
            ...sharedParams,
            hueRange: STATUS_HUE_RANGES[SEMANTIC_COLOR_CAUTIONARY],
            role: SEMANTIC_COLOR_CAUTIONARY,
        }),
        error: getStatusColor({
            ...sharedParams,
            hueRange: STATUS_HUE_RANGES[SEMANTIC_COLOR_ERROR],
            role: SEMANTIC_COLOR_ERROR,
        }),
        info: getStatusColor({
            ...sharedParams,
            hueRange: STATUS_HUE_RANGES[SEMANTIC_COLOR_INFO],
            role: SEMANTIC_COLOR_INFO,
        }),
    };
};
