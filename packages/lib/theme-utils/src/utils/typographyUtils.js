/* eslint-disable import/prefer-default-export */

/**
 * This is used to generate core font sizes for the
 * design system.
 * @param {object} params
 * @param {object} [params.baseSize] The base font size from which all other font sizes will be created from. Default value is 16. (See object.formInput note for special considerations)
 * @param {object} [params.scale] The font scale that will be used to generate all font sizes in conjunction with the baseSize. Default value is 1.2
 * @returns {object} with evaluated font sizes
 * @returns {object} [object.baseSize] The base font size that was used to generate all font sizes. (See object.formInput note for special considerations)
 * @returns {object} [object.footnote] Footnote font size
 * @returns {object} [object.formInput] Form Input font size (minimum of 16 required due to accessibility specs). In the event this number is bigger than the baseSize, formInput will be used to scale all heading sizes to ensure they are bigger than form input text
 * @returns {object} [object.h1] Heading level 1 font size
 * @returns {object} [object.h2] Heading level 2 font size
 * @returns {object} [object.h3] Heading level 3 font size
 * @returns {object} [object.h4] Heading level 4 font size
 * @returns {object} [object.h5] Heading level 5 font size
 * @returns {object} [object.subText] Sub-text font size
 */
export const getCoreFontSizes = (params) => {
    const { baseSize = 16, scale = 1.2 } = params ?? {};
    // Form inputs should not be sized below 16px in font size
    // due to accessibility requirements
    const formInput = Math.max(baseSize, 16);
    const headingsBase = baseSize >= formInput ? baseSize : formInput;

    const footnote = Math.round(baseSize / scale ** 2);
    const h1 = Math.round(headingsBase * scale ** 6);
    const h2 = Math.round(headingsBase * scale ** 5);
    const h3 = Math.round(headingsBase * scale ** 4);
    const h4 = Math.round(headingsBase * scale ** 3);
    const h5 = Math.round(headingsBase * scale ** 2);
    const subText = Math.round(baseSize / scale);

    return {
        baseSize,
        footnote,
        h1,
        h2,
        h3,
        h4,
        h5,
        formInput,
        subText,
    };
};
