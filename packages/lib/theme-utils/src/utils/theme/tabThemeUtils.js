/* eslint-disable import/prefer-default-export */
import {
    getNewColorByChangingLightness,
    getRecommendedColor,
    convertColorToRGBA,
    genColorsData,
} from '@epr0t0type/bankai-lib-color-utils';
import {
    getJuxtaposedColorAgainstCanvases,
    getCorrectedLightnessAdjustment,
} from '../colorUtils';
import { getThemeAPIKeyFromName } from '../dataMassageUtils';
import { THEME_TOKEN_NAMES } from '../../const/themeTokensConst';

const {
    COLOR_TABS_ACTIVE_ACCENT,
    COLOR_TABS_ACTIVE_BG,
    COLOR_TABS_ACTIVE_FOCUS_HALO,
    COLOR_TABS_ACTIVE_TEXT,
    COLOR_TABS_BORDER,
    COLOR_TABS_INACTIVE_TEXT,
    COLOR_TABS_INACTIVE_BG,
    COLOR_TABS_INACTIVE_HOVER_TEXT,
    COLOR_TABS_INACTIVE_HOVER_BG,
    COLOR_TABS_PANEL_BG,
} = THEME_TOKEN_NAMES;

const getAutoCorrectedColor = (
    colors = {},
    shouldAutoCorrectColors = true,
    shouldEvalForText = false,
) => {
    const { sourceColorData = {}, ...rest } = colors;

    return !shouldAutoCorrectColors
        ? sourceColorData.base
        : getJuxtaposedColorAgainstCanvases(
              {
                  ...rest,
                  sourceColorData,
              },
              shouldEvalForText,
          );
};

export const getTabsTheme = (colors = {}, config = {}) => {
    const {
        primaryColorData = {},
        canvasColorData = {},
        canvasAltColorData = {},
        universalBorderColor = {},
    } = colors;
    const { shouldAutoCorrectColors = true, isDarkMode } = config;
    const recommendedAccentColorData = getAutoCorrectedColor(
        {
            canvasColor: canvasColorData?.base,
            canvasAltColor: canvasAltColorData?.base,
            sourceColorData: primaryColorData,
        },
        shouldAutoCorrectColors,
        true,
    );
    const recommendedInactiveTextColor = getRecommendedColor(
        canvasAltColorData.base,
        canvasAltColorData.variants,
        true,
    );
    const inactiveHoverLightness = getCorrectedLightnessAdjustment(
        canvasAltColorData?.base?.lightness,
        10,
        isDarkMode,
    );
    const inactiveHoverBGColor = genColorsData(
        getNewColorByChangingLightness(
            canvasAltColorData?.base?.hex,
            inactiveHoverLightness,
        ),
    );
    const recommendedInactiveHoverTextColor = getRecommendedColor(
        inactiveHoverBGColor?.base,
        inactiveHoverBGColor?.variants,
        true,
    );

    return {
        [getThemeAPIKeyFromName(COLOR_TABS_ACTIVE_BG)]:
            canvasColorData?.base?.hex,
        [getThemeAPIKeyFromName(COLOR_TABS_PANEL_BG)]:
            canvasColorData?.base?.hex,
        [getThemeAPIKeyFromName(COLOR_TABS_ACTIVE_TEXT)]:
            recommendedAccentColorData?.hex,
        [getThemeAPIKeyFromName(COLOR_TABS_ACTIVE_ACCENT)]:
            recommendedAccentColorData?.hex,
        [getThemeAPIKeyFromName(COLOR_TABS_ACTIVE_FOCUS_HALO)]:
            convertColorToRGBA(recommendedAccentColorData?.hex, 0.4, true),
        [getThemeAPIKeyFromName(COLOR_TABS_INACTIVE_TEXT)]:
            recommendedInactiveTextColor?.hex,
        [getThemeAPIKeyFromName(COLOR_TABS_INACTIVE_BG)]:
            canvasAltColorData?.base?.hex,
        [getThemeAPIKeyFromName(COLOR_TABS_INACTIVE_HOVER_TEXT)]:
            recommendedInactiveHoverTextColor?.hex,
        [getThemeAPIKeyFromName(COLOR_TABS_INACTIVE_HOVER_BG)]:
            inactiveHoverBGColor?.base?.hex,
        [getThemeAPIKeyFromName(COLOR_TABS_BORDER)]: universalBorderColor?.hex,
    };
};
