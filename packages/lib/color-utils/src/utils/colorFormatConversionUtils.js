import tinycolor from 'tinycolor2';

/**
 * Use to get the HSL format of a provided color.
 * @param {string, object} val
 * @param {boolean} isString - Use to return string instead of object
 */
export const convertColorToHSL = (val = '#000000', isString = false) => {
    const color = tinycolor(val);

    return isString ? color.toHslString() : color.toHsl();
};

/**
 * Use to get the Hex format of a provided color.
 * @param {string, object} val
 */
export const convertColorToHex = (val = { r: 0, g: 0, b: 0 }) => {
    const color = tinycolor(val);
    const alpha = color.getAlpha();
    const hex = alpha < 1 ? color.toHex8String() : color.toHexString();

    return hex;
};

/**
 * Use to get the RGB format of a provided color.
 * @param {string, object} val
 * @param {boolean} isString - Use to return string instead of object
 */
export const convertColorToRGB = (val = '#000000', isString = false) => {
    const color = tinycolor(val);

    return isString ? color.toRgbString() : color.toRgb();
};

/**
 * Use to convert hex value that need alpha transperancy to RGBA
 * @param {*} val
 * @param {*} alpha - alpha transparency (0 - 1)
 * @param {*} isString - When true will return rgba string instead of object
 * @returns string if isString is true, otherwise object { r, g, b, a }
 */
export const convertColorToRGBA = (
    val = '#000000',
    alpha = 1,
    isString = false,
) => {
    const color = tinycolor(val);
    color.setAlpha(alpha);

    return isString ? color.toRgbString() : color.toRgb();
};
