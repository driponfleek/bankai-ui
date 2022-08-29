import {
    getIsReadable,
    getIsValidNonTextContrast,
    convertColorToRGBA,
} from '@epr0t0type/bankai-lib-color-utils';
import { getColorData } from './dataUtils';

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

export const testFunc = () => {};

export const getAccessibleWhiteOrBlackColor = (baseHex, shouldEvalForText) => {
    const whiteHex = '#ffffff';
    const blackHex = '#000000';
    const validator = shouldEvalForText
        ? getIsReadable
        : getIsValidNonTextContrast;
    const isValidWithWhite = validator(whiteHex, baseHex);

    return isValidWithWhite ? whiteHex : blackHex;
};

export const getTextColor = (baseHex) => {
    return getAccessibleWhiteOrBlackColor(baseHex, true);
};

export const getAccessibleNeutralColor = (
    canvasColorHex,
    canvasAltColorHex,
) => {
    const canvasColors = getColorData({
        hex: canvasColorHex,
    });
    const canvasAltColors = getColorData({
        hex: canvasAltColorHex,
    });

    const { recommendedNonTextColor } = getColorData({
        hex: canvasAltColorHex,
        canvasAltColor: canvasAltColors?.base,
        canvasColor: canvasColors?.base,
        step: 2,
    });

    return recommendedNonTextColor?.hex;
};

export const getFocusHaloRGBA = (colorHex) => {
    return convertColorToRGBA(colorHex, 0.4, true);
};
