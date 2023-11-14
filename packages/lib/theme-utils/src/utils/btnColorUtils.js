import {
    getPrioritizedAppTextColor,
    getDecorativeComplimentaryColor,
} from './helperUtils';

export const genFlatBtnColors = ({ sourceColors, preferredTextColors }) => {
    const { background, text = {} } = sourceColors;
    const { recommendedColor } = background ?? {};
    const { dark: preferredDarkTextColor, light: preferredLightTextColor } =
        preferredTextColors ?? {};
    const bgInteractionColor = getDecorativeComplimentaryColor(background);
    const textInteractionColor = getPrioritizedAppTextColor({
        baseHex: bgInteractionColor?.hex,
        preferredDarkTextColor,
        preferredLightTextColor,
    });

    return {
        textColor: text.hex,
        bgColor: recommendedColor.hex,
        borderColor: 'transparent',
        textInteractionColor,
        bgInteractionColor: bgInteractionColor?.hex,
        borderInteractionColor: 'transparent',
    };
};

export const genGhostBtnColors = ({
    sourceColors,
    canvasColor = {},
    config = {},
}) => {
    const { background } = sourceColors;
    const { recommendedColor, variants } = background ?? {};
    const { isDarkMode = false } = config;
    const hoverLightness = isDarkMode ? 20 : 80;
    const { hex: textColor } = recommendedColor;
    const { hex: backgroundColor } = canvasColor;
    const bgInteractionColor = variants.find((variant) =>
        variant.tokenId.includes(hoverLightness),
    );
    const textInteractionColor = getDecorativeComplimentaryColor(background);

    return {
        textColor,
        bgColor: backgroundColor,
        borderColor: textColor,
        textInteractionColor: textInteractionColor?.hex,
        bgInteractionColor: bgInteractionColor?.hex,
        borderInteractionColor: textInteractionColor?.hex,
    };
};
