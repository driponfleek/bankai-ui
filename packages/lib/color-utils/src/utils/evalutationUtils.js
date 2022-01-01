import tinycolor from 'tinycolor2';
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
export const getColorContrastRatio = (hex1, hex2) => {
    const isHex1Valid = isValidHexColor(hex1);
    const isHex2Valid = isValidHexColor(hex2);

    if (!isHex1Valid || !isHex2Valid) {
        return 0;
    }

    return tinycolor.readability(hex1, hex2);
};

/**
 * Get a user-friendly contrast ratio to display to end users.
 * @param {string} hex1 - 4 or 7 digit hex (must include hash)
 * @param {string} hex2 - 4 or 7 digit hex (must include hash)
 */
export const getUserFriendlyRatio = (hex1, hex2) => {
    const ratio = getColorContrastRatio(hex1, hex2);
    const ratioAsFloat = parseFloat(
        ratio.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0],
    );
    const isInteger = Number.isInteger(parseFloat(ratioAsFloat));

    return `${isInteger ? Math.floor(ratioAsFloat) : ratioAsFloat}:1`;
};

/**
 * Use to determine if colors have sufficient text
 * foreground/background contrast.
 * @param {string} hex1 - 4 or 7 digit hex (must include hash)
 * @param {string} hex2 - 4 or 7 digit hex (must include hash)
 * @param {object} config
 * @param {boolean} config.isTripleA - Change from `AA` to `AAA` compliance check
 * @param {boolean} config.isLargeText - Change from `small` to `large` text size
 */
export const getIsReadable = (
    hex1,
    hex2,
    config = { isTripleA: false, isLargeText: false },
) => {
    const { isTripleA, isLargeText } = config;
    const isHex1Valid = isValidHexColor(hex1);
    const isHex2Valid = isValidHexColor(hex2);
    const level = isTripleA ? 'AAA' : 'AA';
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
export const getIsValidNonTextContrast = (hex1, hex2) => {
    // Contrast ratio for non-text is the same as Large Text (3.0)
    return getIsReadable(hex1, hex2, { isLargeText: true });
};

/**
 * Evaluate a list of colors against a source color
 * @param {object} sourceColor
 * @param {array of objects} otherColors
 * @returns {object}
 * @returns {array} object.compatibleTextColors
 * @returns {array} object.compatibleNonTextColors
 */
export const evaluateColorCompatibilities = (sourceColor, otherColors) => {
    const compatibleTextColors = [];
    const compatibleNonTextColors = [];

    (otherColors || []).forEach((c) => {
        const canBeUsedForText = getIsReadable(c.hex, sourceColor.hex);
        const canBeUsedForNonText = getIsValidNonTextContrast(
            c.hex,
            sourceColor.hex,
        );

        // Check if color combination can be used for Text.
        // Any color that can be used for text can also be used for Non-Text.
        if (canBeUsedForText) {
            compatibleTextColors.push(c.id);
            compatibleNonTextColors.push(c.id);

            // Check if color combination can be used for Non
        } else if (canBeUsedForNonText) {
            compatibleNonTextColors.push(c.id);
        }
    });

    return {
        compatibleTextColors,
        compatibleNonTextColors,
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
