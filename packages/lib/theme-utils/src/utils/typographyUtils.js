import { CORE_SCALES_TOKEN_DEFAULTS } from '../const/tokens/core/coreScalesConst';

const { CORE_TYPOGRAPHY_SCALE_MAJOR_SECOND } = CORE_SCALES_TOKEN_DEFAULTS;

export const BASE_FONT_SIZE = 16;

export const FONT_SIZE_SCALE = CORE_TYPOGRAPHY_SCALE_MAJOR_SECOND;

export const MOBILE_FONT_SIZE_SCALE = CORE_TYPOGRAPHY_SCALE_MAJOR_SECOND;

/**
 * Used to generate core font sizes for the design system
 * @param {object} params
 * @param {object} [params.baseSize] - The base font size from which all other font sizes will be created from. Default value is 16. (See object.formInput note for special considerations).
 * @param {object} [params.scale] - The font scale that will be used to generate all font sizes in conjunction with the baseSize. Default value is 1.2.
 * @returns {object}
 * @returns {object} [object.baseSize] - The base font size that was used to generate all font sizes. (See object.formInput note for special considerations)
 * @returns {object} [object.footnote] - Footnote font size
 * @returns {object} [object.formInput] - Form Input font size (minimum of 16 required due to accessibility specs). In the event this number is bigger than the baseSize, formInput will be used to scale all heading sizes to ensure they are bigger than form input text
 * @returns {object} [object.h1] - Heading level 1 font size
 * @returns {object} [object.h2] - Heading level 2 font size
 * @returns {object} [object.h3] - Heading level 3 font size
 * @returns {object} [object.h4] - Heading level 4 font size
 * @returns {object} [object.h5] - Heading level 5 font size
 * @returns {object} [object.h6] - Heading level 6 font size
 * @returns {object} [object.subText] - Sub-text font size
 */
export const getFontSizes = (params) => {
    const { baseSize = BASE_FONT_SIZE, scale = FONT_SIZE_SCALE } = params ?? {};
    // Form inputs should not be sized below 16px in font size due to accessibility requirements
    const formInput = Math.max(baseSize, 16);
    const headingsBase = baseSize >= formInput ? baseSize : formInput;

    const marketingXLarge = Math.round(headingsBase * scale ** 12);
    const marketingLarge = Math.round(headingsBase * scale ** 11);
    const displayXLarge = Math.round(headingsBase * scale ** 10);
    const displayLarge = Math.round(headingsBase * scale ** 9);
    const displayMedium = Math.round(headingsBase * scale ** 8);
    const displaySmall = Math.round(headingsBase * scale ** 7);
    const h1 = Math.round(headingsBase * scale ** 6);
    const h2 = Math.round(headingsBase * scale ** 5);
    const h3 = Math.round(headingsBase * scale ** 4);
    const h4 = Math.round(headingsBase * scale ** 3);
    const h5 = Math.round(headingsBase * scale ** 2);
    const h6 = Math.round(headingsBase * scale);
    const small = Math.round(baseSize / scale);
    const subText = Math.round(baseSize / scale ** 2);
    const footnote = Math.round(baseSize / scale ** 3);

    return {
        baseSize,
        displayXLarge,
        displayLarge,
        displayMedium,
        displaySmall,
        footnote,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        formInput,
        marketingLarge,
        marketingXLarge,
        small,
        subText,
    };
};
