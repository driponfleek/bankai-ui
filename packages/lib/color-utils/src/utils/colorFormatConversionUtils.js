import chroma from 'chroma-js';

/**
 * Use to get the HSL format of a provided color.
 * @param {string, object} val
 * @param {boolean} isString - Use to return string instead of object
 */
export const convertColorToHSL = (val = '#000000', isString = false) => {
    const [h, s, l] = chroma(val).hsl() ?? [];

    return isString ? `hsl(${h}, ${s * 100}%, ${l * 100}%)` : { h, s, l };
};

export const convertColorToLCH = (val = '#000000', isString = false) => {
    const [l, c, h] = chroma(val).lch() ?? [];

    return isString ? `lch(${l}, ${c}, ${h})` : { l, c, h };
};

export const convertColorToHSB = (val = '#000000', isString = false) => {
    const [h, s, b] = chroma(val).lch() ?? [];

    return isString ? `hsb(${h}, ${s}, ${b})` : { h, s, b };
};

/**
 * Use to get the Hex format of a provided color.
 * @param {string, object} val
 */
export const convertColorToHex = (val = { r: 0, g: 0, b: 0 }) => {
    return chroma(val).hex();
};

/**
 * Use to get the RGB format of a provided color.
 * @param {string, object} val
 * @param {boolean} isString - Use to return string instead of object
 */
export const convertColorToRGB = (val = '#000000', isString = false) => {
    const [r, g, b, a] = chroma(val).rgba() ?? [];

    return isString
        ? `rgb${a < 1 ? 'a' : ''}(${r}, ${g}, ${b}${a < 1 ? `, ${a}` : ''})`
        : { r, g, b, ...(a < 1 && { a }) };
};

/**
 * Use to convert hex value that need alpha transperancy to RGBA
 * @param {*} val
 * @param {number} alpha - alpha transparency (0 - 1)
 * @param {boolean} isString - When true will return rgba string instead of object
 * @returns string if isString is true, otherwise object { r, g, b, a }
 */
export const convertColorToRGBA = (
    val = '#000000',
    alpha = 1,
    isString = false,
) => {
    return convertColorToRGB(chroma(val).alpha(alpha).hex(), isString);
};
