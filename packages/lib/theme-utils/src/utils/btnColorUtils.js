import { getTextColor, getDecorativeHoverColor } from './helperUtils';

export const genFlatBtnColors = (sourceColor = {}) => {
    const {
        bgColor = {},
        preferred = {},
        recommendedColor = {},
        variants = [],
    } = sourceColor;
    const bgInteractionColor = getDecorativeHoverColor(
        recommendedColor,
        bgColor,
        [
            preferred,
            ...variants.filter(
                (variant) => variant.hex !== recommendedColor.hex,
            ),
        ],
    );
    const textColor = getTextColor(recommendedColor.hex);
    const textInteractionColor = getTextColor(bgInteractionColor?.hex);

    return {
        textColor,
        bgColor: recommendedColor.hex,
        borderColor: 'transparent',
        textInteractionColor,
        bgInteractionColor: bgInteractionColor?.hex,
        borderInteractionColor: 'transparent',
    };
};

export const genGhostBtnColors = (
    sourceColor = {},
    canvasColor = {},
    config = {},
) => {
    const { isDarkMode = false } = config;
    const {
        preferred = {},
        bgColor: sourceColorBgColor = {},
        recommendedColor = {},
        variants = [],
    } = sourceColor;
    // TODO: What if this lightness isn't in the variants because it's the preferred color?
    const hoverLightness = isDarkMode ? 20 : 80;
    const { hex: textColor } = recommendedColor;
    const { hex: bgColor } = canvasColor;
    const bgInteractionColor = variants.find(
        (variant) => variant.lightness === hoverLightness,
    );
    const textInteractionColor = getDecorativeHoverColor(
        recommendedColor,
        {
            ...bgInteractionColor,
            compatibleNonTextColors: sourceColorBgColor.compatibleNonTextColors,
        },
        [
            preferred,
            ...variants.filter(
                (variant) =>
                    variant.hex !== recommendedColor.hex ||
                    variant.hex !== bgInteractionColor.hex,
            ),
        ],
    );

    return {
        textColor,
        bgColor,
        borderColor: textColor,
        textInteractionColor: textInteractionColor?.hex,
        bgInteractionColor: bgInteractionColor?.hex,
        borderInteractionColor: textInteractionColor?.hex,
    };
};
