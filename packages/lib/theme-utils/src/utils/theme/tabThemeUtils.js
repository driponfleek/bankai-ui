/* eslint-disable import/prefer-default-export */
import {
    getNewColorByChangingLightness,
    getRecommendedColor,
    convertColorToRGBA,
    genColorsData,
} from '@epr0t0type/bankai-lib-color-utils';
import { getCorrectedLightnessAdjustment } from '../helperUtils';
import { getThemeAPIKeyFromName } from '../dataUtils';
import { TABS_TOKEN_NAMES } from '../../const/tokens/tabTokensConst';

const {
    TABS_ACTIVE_ACCENT_COLOR,
    TABS_ACTIVE_BG_COLOR,
    TABS_ACTIVE_FOCUS_HALO_COLOR,
    TABS_ACTIVE_TEXT_COLOR,
    TABS_BORDER_COLOR,
    TABS_INACTIVE_TEXT_COLOR,
    TABS_INACTIVE_BG_COLOR,
    TABS_INACTIVE_HOVER_TEXT_COLOR,
    TABS_INACTIVE_HOVER_BG_COLOR,
    TABS_PANEL_BG_COLOR,
} = TABS_TOKEN_NAMES;

const getAutoCorrectedColor = (
    baseColor = {},
    accessibleColor = {},
    shouldAutoCorrectColors = true,
) => {
    return shouldAutoCorrectColors ? accessibleColor?.hex : baseColor?.hex;
};

export const getTabsTheme = (colors = {}, config = {}) => {
    const {
        borderColor = {},
        canvasAltColors = {},
        canvasColors = {},
        sourceColors = {},
    } = colors;
    const { isDarkMode, shouldAutoCorrectColors = true } = config;
    const { base = {}, recommendedTextColor = {} } = sourceColors;
    const recommendedAccentColorData = getAutoCorrectedColor(
        base,
        recommendedTextColor,
        shouldAutoCorrectColors,
    );
    const recommendedInactiveTextColor = getRecommendedColor(
        canvasAltColors.base,
        canvasAltColors.variants,
        true,
    );
    const inactiveHoverLightness = getCorrectedLightnessAdjustment(
        canvasAltColors?.base?.lightness,
        10,
        isDarkMode,
    );
    const inactiveHoverBGColor = genColorsData({
        hex: getNewColorByChangingLightness(
            canvasAltColors?.base?.hex,
            inactiveHoverLightness,
        ),
    });
    const recommendedInactiveHoverTextColor = getRecommendedColor(
        inactiveHoverBGColor?.base,
        inactiveHoverBGColor?.variants,
        true,
    );

    return {
        [getThemeAPIKeyFromName(TABS_ACTIVE_BG_COLOR)]: canvasColors?.base?.hex,
        [getThemeAPIKeyFromName(TABS_PANEL_BG_COLOR)]: canvasColors?.base?.hex,
        [getThemeAPIKeyFromName(TABS_ACTIVE_TEXT_COLOR)]:
            recommendedAccentColorData,
        [getThemeAPIKeyFromName(TABS_ACTIVE_ACCENT_COLOR)]:
            recommendedAccentColorData,
        [getThemeAPIKeyFromName(TABS_ACTIVE_FOCUS_HALO_COLOR)]:
            convertColorToRGBA(recommendedAccentColorData, 0.4, true),
        [getThemeAPIKeyFromName(TABS_INACTIVE_TEXT_COLOR)]:
            recommendedInactiveTextColor?.hex,
        [getThemeAPIKeyFromName(TABS_INACTIVE_BG_COLOR)]:
            canvasAltColors?.base?.hex,
        [getThemeAPIKeyFromName(TABS_INACTIVE_HOVER_TEXT_COLOR)]:
            recommendedInactiveHoverTextColor?.hex,
        [getThemeAPIKeyFromName(TABS_INACTIVE_HOVER_BG_COLOR)]:
            inactiveHoverBGColor?.base?.hex,
        [getThemeAPIKeyFromName(TABS_BORDER_COLOR)]: borderColor?.hex,
    };
};
