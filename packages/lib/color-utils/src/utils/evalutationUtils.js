import tinycolor from 'tinycolor2';
import { getRecommendedColor } from './recommendationUtils';
import {
    VALID_HEX_REGEX,
    VALID_HEX_WITH_ALPHA_REGEX,
} from '../const/colorConst';

/**
 * Used to validate hex
 * @param {string} hex - 4/7 digit hex (must include hash) or
 * 6/9 digit hex (with alpha, must include hash)
 */
export const isValidHexColor = (hex, hasAlpha) => {
    const regexPattern = hasAlpha
        ? VALID_HEX_WITH_ALPHA_REGEX
        : VALID_HEX_REGEX;

    return hex ? !!hex.match(regexPattern) : false;
};

/**
 * Used to check for missing hex on value provided
 * @param {string} hex - 4 or 7 digit hex (must include hash)
 */
export const fixHexMissingHash = (val) => {
    // const regex = /^([0-9a-f]{3}|[0-9a-f]{6})$/i;
    // const isMissingHash = !!val.match(regex);
    if (!val) {
        return val;
    }
    const isMissingHash = !val.startsWith('#');

    return isMissingHash ? `#${val}` : val;
};

/**
 * Use to get contrast ratio between 2 colors.
 * @param {string} hex1 - 4 or 7 digit hex (must include hash)
 * @param {string} hex2 - 4 or 7 digit hex (must include hash)
 */
export const getColorContrast = (hex1, hex2) => {
    const isHex1Valid = isValidHexColor(hex1);
    const isHex2Valid = isValidHexColor(hex2);

    if (!isHex1Valid || !isHex2Valid) {
        return 0;
    }

    return tinycolor.readability(hex1, hex2);
};

export const getContrastAsFloat = (contrast) => {
    if (contrast === undefined) {
        return contrast;
    }

    return parseFloat(contrast.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
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
 * @param {boolean} config.isLargeText - Change from `small` to `large` text size
 */
export const getIsA11yReadable = (
    hex1,
    hex2,
    config = { isAAA: false, isLargeText: false },
) => {
    const { isAAA, isLargeText } = config;
    const isHex1Valid = isValidHexColor(hex1);
    const isHex2Valid = isValidHexColor(hex2);
    const level = isAAA ? 'AAA' : 'AA';
    const size = isLargeText ? 'large' : 'small';

    if (!isHex1Valid || !isHex2Valid) {
        return false;
    }

    return tinycolor.isReadable(hex1, hex2, { level, size });
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
) => {
    const controlColorCompatibilities = {
        compatibleTextColors: [],
        compatibleNonTextColors: [],
    };

    const updatedOps = options.map((colorOp) => {
        const contrast = getColorContrast(colorOp.hex, controlColor.hex);
        const opClone = {
            ...colorOp,
            contrast: getContrastAsFloat(contrast),
        };

        switch (true) {
            // Check if colors can be used for Text.
            // Any color that can be used for text can also be used for Non-Text.
            case getIsA11yReadable(colorOp.hex, controlColor.hex):
                controlColorCompatibilities.compatibleTextColors.push(
                    colorOp.id,
                );
                controlColorCompatibilities.compatibleNonTextColors.push(
                    colorOp.id,
                );
                opClone.isA11yReadable = true;
                opClone.isA11yUICompatible = true;
                break;
            // Check if colors can be UI
            case getIsA11yForUI(colorOp.hex, controlColor.hex):
                controlColorCompatibilities.compatibleNonTextColors.push(
                    colorOp.id,
                );
                opClone.isA11yReadable = false;
                opClone.isA11yUICompatible = true;
                break;
            default:
                opClone.isA11yReadable = false;
                opClone.isA11yUICompatible = false;
                break;
        }

        return opClone;
    });

    return {
        controlColor: {
            ...controlColor,
            ...controlColorCompatibilities,
        },
        options: updatedOps,
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
    // const { controlColor, options: evalOps } = getControlVsOptionsA11yEvals(
    //     preferredColorData,
    //     options,
    // );
    // console.group('getColorCorrelations');
    // console.log('preferredColorData: ', preferredColorData);
    // console.log('options: ', options);
    // console.log('controlColor: ', controlColor);
    // console.log('evalOps: ', evalOps);
    // console.groupEnd();
    // return getControlVsOptionsA11yEvals(preferredColorData, options);
    // return {
    //     ...preferredColorData,
    //     ...getColorsA11yEvals(preferredColorData, options),
    // };
};

/**
 * Use to evalute a preferred color as well as
 * a list of variants against each other
 * @param {object} preferredColorData
 * @param {array} variants
 * @returns {object} - Evaluated preferred color and variants
 */
export const getPreferredColorAndVariantsCorrelations = (
    preferredColor,
    variants = [],
) => {
    return {
        preferred: getColorCorrelations(preferredColor, variants),
        variants: variants.map((variant) => {
            const otherColors = variants.filter((v) => v.id !== variant.id);
            otherColors.unshift(preferredColor);

            return getColorCorrelations(variant, otherColors);
        }),
    };
};

export const genEvaluatedColorData = (colorData = {}, bgColorData = {}) => {
    const { preferred, variants } = colorData;
    const { controlColor, options } = getControlVsOptionsA11yEvals(
        bgColorData,
        [...(preferred ? [preferred] : []), ...variants],
    );

    const evaluatedPreferred = options.find((op) => op.id === 'preferred');
    const evaluatedVariants = options.filter((op) => op.id !== 'preferred');
    const recommendedTextColor = getRecommendedColor(
        evaluatedPreferred,
        evaluatedVariants,
        true,
    );

    const recommendedNonTextColor = getRecommendedColor(
        evaluatedPreferred,
        evaluatedVariants,
    );

    return {
        preferred: evaluatedPreferred,
        variants: evaluatedVariants,
        recommendedNonTextColor,
        recommendedTextColor,
        bgColor: controlColor,
    };
};

export const getDarkerColor = (val1, val2) => {
    const color1 = tinycolor(val1);
    const color2 = tinycolor(val2);
    const color1Lum = color1.getLuminance();
    const color2Lum = color2.getLuminance();
    const isColor2Darker = color2Lum < color1Lum;

    return isColor2Darker ? val2 : val1;
};
