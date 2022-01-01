import {
    getColorCorrelationsData,
    getRecommendedColor,
    getIsReadable,
    convertColorToRGBA,
} from '@epr0t0type/bankai-lib-color-utils';
import { LIGHT_THEME_TOKEN_DEFAULTS } from '../const/colorLightThemeDefaultsConst';
import { DARK_THEME_TOKEN_DEFAULTS } from '../const/colorDarkThemeDefaultsConst';

export const getCommonIds = (idList1 = [], idList2 = []) => {
    const isIdList1Shorter = idList2.length > idList1.length;
    const sourceArr = isIdList1Shorter ? idList1 : idList2;
    const testArr = isIdList1Shorter ? idList2 : idList1;

    return sourceArr.filter((id) => testArr.indexOf(id) > -1);
};

export const getCommonColorCompatabilities = (
    color1Data = {},
    color2Data = {},
) => {
    return {
        compatibleTextColors: getCommonIds(
            color1Data.compatibleTextColors,
            color2Data.compatibleTextColors,
        ),
        compatibleNonTextColors: getCommonIds(
            color1Data.compatibleNonTextColors,
            color2Data.compatibleNonTextColors,
        ),
    };
};

export const getJuxtaposedColorAgainstCanvases = (
    colors = {},
    shouldEvalForText,
) => {
    const {
        sourceColorData = {},
        canvasColor = {},
        canvasAltColor = {},
    } = colors;
    let { base = {} } = sourceColorData;
    const { variants = [] } = sourceColorData;
    const canvasOptions = [base, ...variants];
    const evaluatedCanvasColor = getColorCorrelationsData(
        canvasColor,
        canvasOptions,
    );
    const evaluatedCanvasAltColor = getColorCorrelationsData(
        canvasAltColor,
        canvasOptions,
    );
    const { compatibleNonTextColors, compatibleTextColors } =
        getCommonColorCompatabilities(
            evaluatedCanvasColor,
            evaluatedCanvasAltColor,
        );

    const compatColors = shouldEvalForText
        ? compatibleTextColors
        : compatibleNonTextColors;
    const canUseBase = compatColors.indexOf('base') > -1;

    if (!canUseBase) {
        base = getRecommendedColor(
            {
                ...evaluatedCanvasColor,
                compatibleNonTextColors: compatColors,
                compatibleTextColors: compatColors,
            },
            canvasOptions.filter(
                (canvasOption) => compatColors.indexOf(canvasOption.id) !== -1,
            ),
            shouldEvalForText,
        );
    }

    return base || {};
};

export const getCorrectedLightnessAdjustment = (
    sourceLightness,
    threshold,
    isDarkMode,
) => {
    const lightnessModifier = isDarkMode ? threshold : threshold * -1;
    const lightness = sourceLightness + lightnessModifier;

    if (lightness >= 90) {
        return sourceLightness - threshold;
    }

    if (lightness <= 10) {
        return sourceLightness + threshold;
    }

    return lightness;
};

export const getTextColor = (bgColor) => {
    const whiteHex = '#ffffff';
    const blackHex = '#000000';
    const isReadableWithWhite = getIsReadable(whiteHex, bgColor);

    return isReadableWithWhite ? whiteHex : blackHex;
};

export const getThemeDefaults = (isDarkMode) => {
    return isDarkMode ? DARK_THEME_TOKEN_DEFAULTS : LIGHT_THEME_TOKEN_DEFAULTS;
};

export const getFocusHaloRGBA = (colorHex) => {
    return convertColorToRGBA(colorHex, 0.4, true);
};
