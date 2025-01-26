export const CONTRAST_RATIO_TEXT = {
    AA: 4.5,
    AAA: 7,
};
export const CONTRAST_RATIO_NON_TEXT = 3;

// In order to be valid, a hex must:
// 1. Start with a hash symbol
// 2. Have 3 or 6 characters following the hash when not using alpha
// 3. Have 4 or 8 characters following the hash when using alpha
// 4. Have each character range between 0 - 9 or A - F
export const VALID_HEX_REGEX = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
export const VALID_HEX_WITH_ALPHA_REGEX = /^#([0-9a-f]{4}|[0-9a-f]{8})$/i;

export const COLOR_HARMONIES = {
    ANALOGOUS: 'ANALOGOUS',
    COMPLEMENTARY: 'COMPLEMENTARY',
    COMPOUND: 'COMPOUND',
    MONOCHROMATIC: 'MONOCHROMATIC',
    SHADES: 'SHADES',
    SPLIT_COMPLEMENTARY: 'SPLIT_COMPLEMENTARY',
    SQUARE: 'SQUARE',
    TETRADIC: 'TETRADIC', // AKA RECTANGLE
    TINTS: 'TINTS',
    TONES: 'TONES',
    TRIAD: 'TRIAD',
};

// 70, 50, 60, #ea985d
