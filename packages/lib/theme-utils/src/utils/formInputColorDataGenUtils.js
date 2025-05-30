/* eslint-disable import/prefer-default-export */
import {
    genColorMetadata,
    genEvaluatedColorMetadata,
    // genColorAndVariantsWithMetadata,
    genColorAndVariantsWithMetadata,
    genColorVariantsWithMetadata,
} from '@driponfleek/bankai-lib-color-utils';
import {
    finalizeColorMetadata,
    getDecorativeComplimentaryColor,
} from './helperUtils';

export const genDisabledInputColorData = (
    disabledColor,
    coreColorNeutralSeed,
) => {
    // const neutralColorsKeys = Object.keys(NEUTRAL_COLORS);
    const variants = genColorVariantsWithMetadata({
        hex: coreColorNeutralSeed,
        step: 1,
        tokenId: 'disabled.color',
    });
    const disabledColorData = {
        ...genColorAndVariantsWithMetadata({
            hex: disabledColor,
            tokenId: 'disabled.color',
        }),
        variants,
    };
    const disabledColorEvalMetadata = finalizeColorMetadata(
        genEvaluatedColorMetadata(
            disabledColorData,
            genColorMetadata(disabledColor),
        ),
        true,
    );

    return disabledColorEvalMetadata?.recommendedColor;
};

export const genErrorInputColorData = (errorColor, bgColor) => {
    const colorData = genColorAndVariantsWithMetadata({
        hex: errorColor,
        tokenId: 'error-color',
    });
    const evalData = finalizeColorMetadata(
        genEvaluatedColorMetadata(colorData, genColorMetadata(bgColor)),
        true,
    );

    return evalData?.recommendedColor;
};

export const genToggleSwitchHoverColorsData = ({
    trackColor,
    evaluatedNeutrals = {},
    trackOnColor,
}) => {
    const { bgColor } = trackOnColor ?? {};
    const bgColorClone = { ...bgColor };
    delete bgColorClone.compatibleNonTextColors;
    delete bgColorClone.compatibleTextColors;
    const { variants: neutralVariants = [] } = evaluatedNeutrals;
    const sanitizedNeutralVariants = neutralVariants.filter((variant) => {
        const { evalsAgainstBGColor = {} } = variant;
        const { isA11yUICompatible = false } = evalsAgainstBGColor;

        if (variant.hex === trackColor) {
            return false;
        }

        return isA11yUICompatible;
    });
    const { baseColor: trackOffBaseColor } = genColorAndVariantsWithMetadata({
        hex: trackColor,
    });
    const trackOffColorMetadata = {
        baseColor: trackOffBaseColor,
        variants: sanitizedNeutralVariants,
    };
    const evalTrackData = finalizeColorMetadata(
        genEvaluatedColorMetadata(trackOffColorMetadata, bgColorClone),
    );
    const interactionColor = getDecorativeComplimentaryColor(evalTrackData);
    const interactionOnColor = getDecorativeComplimentaryColor(trackOnColor);

    return {
        hoverColor: interactionColor?.hex,
        hoverOnColor: interactionOnColor?.hex,
    };
};
