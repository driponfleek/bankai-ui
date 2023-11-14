import {
    getControlVsOptionsA11yEvals,
    getClosestVariantColorId,
} from '@driponfleek/bankai-lib-color-utils';

/**
 * Used to compare two arrays of ID strings and find identical values
 * @param {array} idArr1
 * @param {array} idArr2
 * @returns {array} - New array of identical IDs found in both idArr1 and idArr2
 */
export const getIdenticalIds = (idArr1 = [], idArr2 = []) => {
    const isidArr1Shorter = idArr2.length > idArr1.length;
    const sourceArr = isidArr1Shorter ? idArr1 : idArr2;
    const testArr = isidArr1Shorter ? idArr2 : idArr1;

    return sourceArr.filter((id) => testArr.indexOf(id) > -1);
};

/**
 * Used to compare two colors data to find identical compatible text and non-text color IDs.
 * @param {object} color1Data
 * @param {object} color2Data
 * @returns {object} - Object containing identical compatible text and non-text color IDs found in both color1Data and color2Data
 */
export const getIdenticalCompatibleColorIds = (
    color1Data = {},
    color2Data = {},
) => {
    return {
        compatibleTextColors: getIdenticalIds(
            color1Data.compatibleTextColors,
            color2Data.compatibleTextColors,
        ),
        compatibleNonTextColors: getIdenticalIds(
            color1Data.compatibleNonTextColors,
            color2Data.compatibleNonTextColors,
        ),
    };
};

/**
 * Used to get the recommended accessible color when comparing the preferred color against two other colors
 * @param {object} colors
 * @param {object} colors.preferredColorData - Object containing the necessary data about the preferred color.
 * @param {object} colors.testColor1Data - Object containing the necessary data about the first test color.
 * @param {object} colors.testColor2Data - Object containing the necessary data about the second test color.
 * @param {boolean} shouldEvalForText - Used to determine if color will be evaluated for text (4.5:1) or non-text (3:1).
 * returns {object} - Object for the recommened accessible color data to use with the two test colors
 */
export const getJuxtaposedColorRec = (colors, shouldEvalForText = false) => {
    const { sourceColor = {}, testColor1 = {}, testColor2 = {} } = colors ?? {};
    // const compatColorsKey = shouldEvalForText ? 'compatibleTextColors' : 'compatibleNonTextColors';
    const {
        recommendedColor: sourceColorRecommended = {},
        variants: sourceColorVariants = [],
    } = sourceColor;
    const { lightness: sourceColorRecommendedLightness } =
        sourceColorRecommended;
    let recommendedColor;
    const testOptions = [
        sourceColorRecommended,
        ...sourceColorVariants.filter(
            (scv) => scv.hex !== sourceColorRecommended.hex,
        ),
    ];
    const { controlColor: evaluatedTestColor1 = {} } =
        getControlVsOptionsA11yEvals(testColor1, testOptions);
    const { controlColor: evaluatedTestColor2 = {} } =
        getControlVsOptionsA11yEvals(testColor2, testOptions);
    const { compatibleNonTextColors, compatibleTextColors } =
        getIdenticalCompatibleColorIds(
            evaluatedTestColor1,
            evaluatedTestColor2,
        );
    // TODO: Change compatibleTextColors and compatibleNonTextColors to
    // compatibleTextColorIds and compatibleNonTextColorIds
    const compatibleColorIds = shouldEvalForText
        ? compatibleTextColors
        : compatibleNonTextColors;
    // TODO: Change 'base' to 'preferred' in color IDs
    const canUseRecommended = compatibleColorIds.indexOf('preferred') > -1;

    if (!canUseRecommended && compatibleColorIds.length > 0) {
        const variantLightness = getClosestVariantColorId(
            sourceColorRecommendedLightness,
            compatibleColorIds,
        );

        recommendedColor = testOptions.find(
            (testOp) => testOp.lightness === variantLightness,
        );
    }

    return recommendedColor;
};

/**
 * Used to get update color data with recommended Text and Non-Text colors
 * @param {object} colors
 * @param {object} colors.sourceColors  - Object containing the necessary data about the preferred color and its variants.
 * @param {object} colors.canvasColor - Object containing the necessary data about the canvas (aka background) color.
 * @param {object} colors.canvasAltColor - (OPTIONAL) Object containing the necessary data about an alternative canvas (aka background) color, in the event there are 2 possible background colors you want to check against.
 * returns {object} - Returns updated source color data with recommended Text and Non-Text color to use against
 */
// export const withRecommendedTextAndNonTextColors = (colors) => {
//     const { sourceColors, canvasColor, canvasAltColor } = colors ?? {};
//     const params = {
//         sourceColors,
//         testColor1: canvasColor,
//         testColor2: canvasAltColor || canvasColor,
//     };
//     const recommendedTextColor = getJuxtaposedColorRec(params, true);
//     const recommendedNonTextColor = getJuxtaposedColorRec(params);

//     return {
//         ...sourceColors,
//         recommendedTextColor,
//         recommendedNonTextColor,
//     };
// };
