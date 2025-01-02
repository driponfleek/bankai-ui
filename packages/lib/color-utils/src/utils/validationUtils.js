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
    if (!val) {
        return val;
    }

    const isMissingHash = !val.startsWith('#');

    return isMissingHash ? `#${val}` : val;
};
