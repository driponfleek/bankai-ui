/* eslint-disable import/prefer-default-export */
import {
    genColorSeedData,
    genEvaluatedColorData,
    genColorsData,
} from '@driponfleek/bankai-lib-color-utils';
import { finalizeColorData, getDecorativeHoverColor } from './helperUtils';

export const genDisabledInputColorData = (
    disabledColor,
    NEUTRAL_COLORS = {},
) => {
    const neutralColorsKeys = Object.keys(NEUTRAL_COLORS);
    const variants = neutralColorsKeys.map((NEUTRAL_COLOR) =>
        genColorSeedData(NEUTRAL_COLORS[NEUTRAL_COLOR]),
    );
    const disabledColorData = {
        ...genColorsData({
            hex: disabledColor,
            tokenId: 'disabled-color',
        }),
        variants,
    };
    const evalData = finalizeColorData(
        genEvaluatedColorData(
            disabledColorData,
            genColorSeedData(disabledColor),
        ),
        true,
    );

    return evalData?.recommendedColor;
};

export const genErrorInputColorData = (errorColor, bgColor) => {
    const colorData = genColorsData({
        hex: errorColor,
        tokenId: 'error-color',
    });
    const evalData = finalizeColorData(
        genEvaluatedColorData(colorData, genColorSeedData(bgColor)),
        true,
    );

    return evalData?.recommendedColor;
};

export const genToggleSwitchHoverColorsData = ({
    bgColor,
    trackColor,
    trackOnColor,
}) => {
    const trackColorData = genColorsData({ hex: trackColor });
    const trackOnColorData = genColorsData({ hex: trackOnColor });
    const { preferred = {}, variants = [] } = trackColorData ?? {};
    const interactionColor = getDecorativeHoverColor(
        preferred,
        bgColor,
        variants,
    );
    const interactionOnColor = getDecorativeHoverColor(
        trackOnColorData?.preferred,
        bgColor,
        trackOnColorData?.variants,
    );

    return {
        hoverColor: interactionColor?.hex,
        hoverOnColor: interactionOnColor?.hex,
    };
};
