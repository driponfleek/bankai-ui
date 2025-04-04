import chroma from 'chroma-js';
import { getRecommendedColor } from './recommendationUtils';
import { isValidHexColor } from './validationUtils';
import { getSanitizedHex } from './dataSanitizerUtils';

/**
 *
 * @param {number} contrast
 * @returns {number} - sanitized contrast value
 */
export const getContrastAsFloat = (contrast) => {
    if (contrast === undefined) {
        return contrast;
    }

    return parseFloat(contrast.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
};

/**
 * Use to get contrast ratio between 2 colors.
 * @param {string} hex1 - 4 or 7 digit hex (must include hash)
 * @param {string} hex2 - 4 or 7 digit hex (must include hash)
 * @param {boolean} isSanatized
 * @returns {number} - contrast value
 */
export const getColorContrast = (hex1, hex2, isSanatized = false) => {
    const isHex1Valid = isValidHexColor(hex1);
    const isHex2Valid = isValidHexColor(hex2);

    if (!isHex1Valid || !isHex2Valid) {
        return 0;
    }

    if (isSanatized) {
        return getContrastAsFloat(chroma.contrast(hex1, hex2));
    }

    return chroma.contrast(hex1, hex2);
};

/**
 * Get a user-friendly contrast ratio to display to end users.
 * @param {string} hex1 - 4 or 7 digit hex (must include hash)
 * @param {string} hex2 - 4 or 7 digit hex (must include hash)
 */
export const getReadableContrastRatio = (hex1, hex2) => {
    const contrast = getColorContrast(hex1, hex2);
    const contrastAsFloat = getContrastAsFloat(contrast);
    const isInteger = Number.isInteger(parseFloat(contrastAsFloat));

    return `${isInteger ? Math.floor(contrastAsFloat) : contrastAsFloat}:1`;
};

/**
 * Use to determine if colors have sufficient text
 * foreground/background contrast.
 * @param {string} hex1 - 4 or 7 digit hex (must include hash)
 * @param {string} hex2 - 4 or 7 digit hex (must include hash)
 * @param {object} config
 * @param {boolean} config.isAAA - Change from `AA` to `AAA` compliance check
 * @param {boolean} config.isLargeText - Adjust passing contrast threshold based on text size
 * @returns {boolean}
 */
export const getIsA11yReadable = (
    hex1,
    hex2,
    config = { isAAA: false, isLargeText: false },
) => {
    const isHex1Valid = isValidHexColor(hex1);
    const isHex2Valid = isValidHexColor(hex2);

    if (!isHex1Valid || !isHex2Valid) {
        return false;
    }

    const { isAAA = false, isLargeText = false } = config;
    const colorContrast = getColorContrast(hex1, hex2);
    let passingContrast = isLargeText ? 3 : 4.5;

    if (isAAA) {
        passingContrast = isLargeText ? 4.5 : 7;
    }

    return colorContrast >= passingContrast;
};

export const getAPCAContrast = (hex1, hex2) => {
    const sanitizedHex1 = getSanitizedHex(hex1);
    const sanitizedHex2 = getSanitizedHex(hex2);

    return chroma.contrastAPCA(sanitizedHex1, sanitizedHex2);
};

export const getIsAPCAReadable = (hex1, hex2, isMinimumLC = false) => {
    // https://git.apcacontrast.com/documentation/WhyAPCA.html
    const passingLC = isMinimumLC ? 75 : 90;
    let apcaContrast = getAPCAContrast(hex1, hex2);
    apcaContrast = apcaContrast < 0 ? apcaContrast * -1 : apcaContrast; // APCA Contrasts can be negative and still compliant.

    return apcaContrast >= passingLC;
};

export const getIsAPCACompliantForUI = (hex1, hex2) => {
    let apcaContrast = getAPCAContrast(hex1, hex2);
    apcaContrast = apcaContrast < 0 ? apcaContrast * -1 : apcaContrast; // APCA Contrasts can be negative and still compliant.

    return apcaContrast >= 60;
};

export const getIsLinkAPCAReadable = ({
    linkHex,
    surroundingTextHex,
    backgroundColorHex,
    isMinimumLC = false,
}) => {
    // https://git.apcacontrast.com/documentation/WhyAPCA.html
    const isPassingAgainstBgColor = getIsAPCAReadable(
        linkHex,
        backgroundColorHex,
        isMinimumLC,
    );

    if (!isPassingAgainstBgColor) {
        return isPassingAgainstBgColor;
    }

    return getIsAPCACompliantForUI(linkHex, surroundingTextHex);
};

/**
 * Use to determine if colors have sufficient non-text
 * foreground/background contrast.
 * @param {string} hex1 - 4 or 7 digit hex (must include hash)
 * @param {string} hex2 - 4 or 7 digit hex (must include hash)
 * @returns {boolean}
 */
export const getIsA11yForUI = (hex1, hex2) => {
    // Contrast ratio for non-text is the same as Large Text (3.0)
    return getIsA11yReadable(hex1, hex2, { isLargeText: true });
};

/**
 * Use to evalute a control color against a list of options for accessible text/UI pairing compatabilities.
 * @param {object} controlColorData
 * @param {array} variants
 * @returns {object}
 * @returns {array} object.controlColor.compatibleTextColors
 * @returns {array} object.controlColor.compatibleNonTextColors
 * @returns {number} object.options[0].contrast
 * @returns {boolean} object.options[0].isReadable
 * @returns {boolean} object.options[0].isUIAccessible
 */
export const getControlVsOptionsA11yEvals = (
    controlColor = {},
    options = [],
    shouldUseMinimumAPCATextCompliance = true,
) => {
    const { hex: controlHex } = controlColor;
    const { compatibleTextColors, compatibleNonTextColors, evals } =
        options.reduce(
            (acc, op) => {
                const accClone = { ...acc };
                const { hex: opHex, tokenId } = op;
                // TODO: APCA is the future, revisit once it is the standard.
                const isAPCAReadable = getIsAPCAReadable(
                    opHex,
                    controlHex,
                    shouldUseMinimumAPCATextCompliance,
                );
                // TODO: APCA is the future, revisit once it is the standard.
                const isAPCAUICompatible =
                    isAPCAReadable ||
                    getIsAPCACompliantForUI(opHex, controlHex);
                const isA11yReadable = getIsA11yReadable(opHex, controlHex);
                const isA11yUICompatible =
                    isA11yReadable || getIsA11yForUI(opHex, controlHex);
                const wcagContrast = getColorContrast(opHex, controlHex, true);
                const apcaContrast = getAPCAContrast(opHex, controlHex);
                accClone.evals[tokenId] = {
                    isAPCAReadable,
                    isAPCAUICompatible,
                    isA11yReadable,
                    isA11yUICompatible,
                    wcagContrast,
                    apcaContrast,
                };

                if (isA11yReadable) {
                    accClone.compatibleTextColors.push(tokenId);
                    accClone.compatibleNonTextColors.push(tokenId);
                }

                if (!isA11yReadable && isA11yUICompatible) {
                    accClone.compatibleNonTextColors.push(tokenId);
                }

                return accClone;
            },
            {
                compatibleTextColors: [],
                compatibleNonTextColors: [],
                evals: {},
            },
        );

    return {
        controlColor: {
            ...controlColor,
            compatibleTextColors,
            compatibleNonTextColors,
        },
        evals,
    };
};

/**
 * Use to evaluate a list of colors against each other for accessible text/UI compatabilities.
 * @param {object} sourceColor
 * @param {array of objects} otherColors
 * @returns {object}
 * @returns {array} object.compatibleTextColors
 * @returns {array} object.compatibleNonTextColors
 */
export const getColorsA11yEvals = (colors = []) => {
    const opsLength = colors.length;
    // Clone the list and add compatibilities to each color
    const results = colors.map((colorOp) => {
        const compatibilities = {
            compatibleTextColors: [],
            compatibleNonTextColors: [],
        };

        return {
            ...colorOp,
            ...compatibilities,
        };
    });

    // Do the evals
    results.forEach((controlColor, idx) => {
        const { id: controlColorId } = controlColor;

        if (idx !== opsLength - 1) {
            for (let index = idx + 1; index < opsLength; index += 1) {
                const colorOp = results[index];
                const { id: colorOpId } = colorOp;

                switch (true) {
                    case getIsA11yReadable(controlColor.hex, colorOp.hex):
                        controlColor.compatibleTextColors.push(colorOpId);
                        controlColor.compatibleNonTextColors.push(colorOpId);
                        colorOp.compatibleTextColors.push(controlColorId);
                        colorOp.compatibleNonTextColors.push(controlColorId);
                        break;
                    case getIsA11yForUI(controlColor.hex, colorOp.hex):
                        controlColor.compatibleNonTextColors.push(colorOpId);
                        colorOp.compatibleNonTextColors.push(controlColorId);
                        break;
                    default:
                        break;
                }
            }
        }
    });

    return results;
};

/**
 * Use to evaluate a preferred color against a list of variants.
 * @param {object} preferredColorData
 * @param {array} options
 * @returns {object} - Evaulated preferred color data
 */
export const getColorCorrelations = (preferredColorData, options) => {
    return getControlVsOptionsA11yEvals(preferredColorData, options);
};

export const genEvaluatedColorMetadata = (
    colorMetadata = {},
    bgColorMetadata = {},
) => {
    const { baseColor, variants = [] } = colorMetadata;

    const { tokenId: baseColorTokenId } = baseColor ?? {};
    // Evaluate the color against the background color
    const { controlColor, evals } = getControlVsOptionsA11yEvals(
        bgColorMetadata,
        [
            // TODO: Check what is passing an empty object to this and remove Object.keys check once fixed.
            ...(baseColor ? [baseColor] : []),
            ...variants,
        ],
    );
    // Separate the base color eval from the variant colors
    const { [baseColorTokenId]: baseEval, ...variantEvals } = evals;
    // Update the base color to include the eval result against canvas alt
    const evaluatedBaseColor = { ...baseColor, evalsAgainstBGColor: baseEval };
    // Update all the variants to include the eval result against canvas alt
    const evaluatedVariants = [...variants].map((variant) => ({
        ...variant,
        evalsAgainstBGColor: variantEvals[variant.tokenId],
    }));

    const recommendedColorForText = getRecommendedColor(
        evaluatedBaseColor,
        evaluatedVariants,
        true,
    );

    const recommendedColorForNonText = getRecommendedColor(
        evaluatedBaseColor,
        evaluatedVariants,
    );

    return {
        baseColor: evaluatedBaseColor,
        variants: evaluatedVariants,
        recommendedColorForNonText,
        recommendedColorForText,
        bgColor: controlColor,
    };
};

export const getDarkerColor = (val1, val2) => {
    const color1 = chroma(val1);
    const color2 = chroma(val2);
    const color1Lum = color1.getLuminance();
    const color2Lum = color2.getLuminance();
    const isColor2Darker = color2Lum < color1Lum;

    return isColor2Darker ? val2 : val1;
};

export const getIsDarkWCAG = (color) => {
    const luminance = chroma(color).luminance();

    return luminance < 0.179;
};
