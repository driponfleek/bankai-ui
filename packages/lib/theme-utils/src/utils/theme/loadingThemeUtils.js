/* eslint-disable import/prefer-default-export */
import {
    getNewColorByChangingLightness,
    convertColorToRGB,
} from '@epr0t0type/bankai-lib-color-utils';
import { getJuxtaposedColorAgainstCanvases } from '../colorUtils';
import { getThemeAPIKeyFromName } from '../dataMassageUtils';
import { THEME_TOKEN_NAMES } from '../../const/themeTokensConst';

const getAutoCorrectedColor = (colors = {}, shouldAutoCorrectColors = true) => {
    const { sourceColorData, ...rest } = colors;

    return !shouldAutoCorrectColors
        ? sourceColorData.base
        : getJuxtaposedColorAgainstCanvases({
              ...rest,
              sourceColorData,
          });
};

export const getLoadingTheme = (colors = {}, config = {}) => {
    const {
        primaryColorData,
        secondaryColorData,
        accentColorData,
        canvasColor,
        ...rest
    } = colors;
    const { shouldAutoCorrectColors = true, isDarkMode } = config;
    const recommendedPrimaryColorData = getAutoCorrectedColor(
        {
            ...rest,
            canvasColor,
            sourceColorData: primaryColorData,
        },
        shouldAutoCorrectColors,
    );
    const recommendedSecondaryColorData = getAutoCorrectedColor(
        {
            ...rest,
            canvasColor,
            sourceColorData: secondaryColorData,
        },
        shouldAutoCorrectColors,
    );
    const recommendedAccentColorData = getAutoCorrectedColor(
        {
            ...rest,
            canvasColor,
            sourceColorData: accentColorData,
        },
        shouldAutoCorrectColors,
    );
    const bg = getNewColorByChangingLightness(
        canvasColor.hex,
        isDarkMode ? 20 : 90,
    );
    const { r, g, b } = convertColorToRGB('#ffffff');

    return {
        [getThemeAPIKeyFromName(THEME_TOKEN_NAMES.COLOR_LOADING_ICON_PRIMARY)]:
            recommendedPrimaryColorData.hex,
        [getThemeAPIKeyFromName(
            THEME_TOKEN_NAMES.COLOR_LOADING_ICON_SECONDARY,
        )]: recommendedSecondaryColorData.hex,
        [getThemeAPIKeyFromName(THEME_TOKEN_NAMES.COLOR_LOADING_ICON_ACCENT)]:
            recommendedAccentColorData.hex,
        [getThemeAPIKeyFromName(THEME_TOKEN_NAMES.COLOR_LOADING_SKELETON_BG)]:
            bg,
        [getThemeAPIKeyFromName(
            THEME_TOKEN_NAMES.COLOR_LOADING_SKELETON_ANIMATION,
        )]: `${r}, ${g}, ${b}`,
    };
};
