import {
    getNewColorByChangingLightness,
    genEvaluatedColorData,
    getIsA11yForUI,
    genColorsData,
} from '@driponfleek/bankai-lib-color-utils';
import { genConstToDotNotationMap } from '../dataGenUtils';
import { getTextColor, finalizeColorData } from '../helperUtils';
import {
    BANNER_TOKEN_NAMES,
    BANNER_AFFIRMATIVE_COLOR_TOKEN_NAMES,
    BANNER_CAUTIONARY_COLOR_TOKEN_NAMES,
    BANNER_DANGER_COLOR_TOKEN_NAMES,
    BANNER_DEFAULT_COLOR_TOKEN_NAMES,
    BANNER_INFO_COLOR_TOKEN_NAMES,
} from '../../const/tokens/component/calloutsConst';

const { BANNER_BORDER_RADIUS } = BANNER_TOKEN_NAMES;
const BANNER_VARIANT_TOKEN_NAMES = {
    BANNER_AFFIRMATIVE_COLOR_TOKEN_NAMES,
    BANNER_CAUTIONARY_COLOR_TOKEN_NAMES,
    BANNER_DANGER_COLOR_TOKEN_NAMES,
    BANNER_DEFAULT_COLOR_TOKEN_NAMES,
    BANNER_INFO_COLOR_TOKEN_NAMES,
};

export const genBannerTokens = (presets = {}) => {
    const constToTokenMap = genConstToDotNotationMap(BANNER_TOKEN_NAMES);
    const { [constToTokenMap[BANNER_BORDER_RADIUS]]: borderRadii } = presets;

    return { [constToTokenMap[BANNER_BORDER_RADIUS]]: borderRadii };
};

export const genBannerColorTokens = (sourceColor, variant) => {
    const formattedVariant = variant ? `${variant}_` : '';
    const { recommendedColor = {}, variants = [] } = sourceColor ?? {};
    const bgColor = variants.find((op) => op.lightness === 80);
    const TOKEN_NAMES =
        BANNER_VARIANT_TOKEN_NAMES[
            `BANNER_${variant || 'DEFAULT'}_COLOR_TOKEN_NAMES`
        ];
    const constToTokenMap = genConstToDotNotationMap(TOKEN_NAMES);
    const canUseRecommended = getIsA11yForUI(recommendedColor.hex, bgColor.hex);
    let iconColor = recommendedColor.hex;

    if (!canUseRecommended) {
        const { recommendedNonTextColor: recommendedIconColor } =
            genEvaluatedColorData(
                {
                    ...sourceColor,
                    variants: variants.filter(
                        (op) => op.lightness !== bgColor.lightness,
                    ),
                },
                bgColor,
            );
        iconColor = recommendedIconColor?.hex ?? recommendedColor.hex;
    }

    return {
        [constToTokenMap[`BANNER_${formattedVariant}BG_COLOR`]]: bgColor.hex,
        [constToTokenMap[`BANNER_${formattedVariant}ICON_COLOR`]]: iconColor,
        [constToTokenMap[`BANNER_${formattedVariant}TEXT_COLOR`]]: getTextColor(
            bgColor.hex,
        ),
    };
};

export const genDefaultBannerColorTokens = (
    canvasAltColor = {},
    config = {},
) => {
    const { isDarkMode } = config;
    const { lightness: canvasAltLightness } = canvasAltColor;
    const TOKEN_NAMES =
        BANNER_VARIANT_TOKEN_NAMES.BANNER_DEFAULT_COLOR_TOKEN_NAMES;
    const constToTokenMap = genConstToDotNotationMap(TOKEN_NAMES);
    const bgColor = getNewColorByChangingLightness(
        canvasAltColor.hex,
        isDarkMode ? canvasAltLightness + 5 : canvasAltLightness - 5,
    );
    const { recommendedColor: recommendedIconColor } = finalizeColorData(
        genEvaluatedColorData(
            genColorsData({
                hex: bgColor,
                tokenId: 'semantic.color.canvas.alt',
            }),
            canvasAltColor,
        ),
    );

    return {
        [constToTokenMap[BANNER_DEFAULT_COLOR_TOKEN_NAMES.BANNER_BG_COLOR]]:
            bgColor,
        [constToTokenMap[BANNER_DEFAULT_COLOR_TOKEN_NAMES.BANNER_ICON_COLOR]]:
            recommendedIconColor?.hex,
        [constToTokenMap[BANNER_DEFAULT_COLOR_TOKEN_NAMES.BANNER_TEXT_COLOR]]:
            getTextColor(bgColor),
    };
};
