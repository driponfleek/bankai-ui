/* eslint-disable import/prefer-default-export */
import {
    getNewColorByChangingLightness,
    convertColorToRGB,
} from '@epr0t0type/bankai-lib-color-utils';
import { getThemeAPIKeyFromName } from '../dataUtils';
import { LOADING_TOKEN_NAMES } from '../../const/tokens/loadingTokensConst';

const getAutoCorrectedColor = (
    base,
    recommended,
    shouldAutoCorrectColors = true,
) => {
    return (shouldAutoCorrectColors ? recommended : base).hex;
};

export const getLoadingTheme = (colors = {}, config = {}) => {
    const { primaryColors, secondaryColors, accentColors, canvasColor } =
        colors;
    const { shouldAutoCorrectColors = true, isDarkMode } = config;
    const {
        base: primaryBase,
        recommendedNonTextColor: recommendedPrimaryNonTextColor,
    } = primaryColors;
    const {
        base: secondaryBase,
        recommendedNonTextColor: recommendedSecondaryNonTextColor,
    } = secondaryColors;
    const {
        base: accentBase,
        recommendedNonTextColor: recommendedAccentNonTextColor,
    } = accentColors;
    const bg = getNewColorByChangingLightness(
        canvasColor.hex,
        isDarkMode ? 20 : 90,
    );
    const { r, g, b } = convertColorToRGB('#ffffff');

    return {
        [getThemeAPIKeyFromName(
            LOADING_TOKEN_NAMES.LOADING_ICON_PRIMARY_COLOR,
        )]: getAutoCorrectedColor(
            primaryBase,
            recommendedPrimaryNonTextColor,
            shouldAutoCorrectColors,
        ),
        [getThemeAPIKeyFromName(
            LOADING_TOKEN_NAMES.LOADING_ICON_SECONDARY_COLOR,
        )]: getAutoCorrectedColor(
            secondaryBase,
            recommendedSecondaryNonTextColor,
            shouldAutoCorrectColors,
        ),
        [getThemeAPIKeyFromName(LOADING_TOKEN_NAMES.LOADING_ICON_ACCENT_COLOR)]:
            getAutoCorrectedColor(
                accentBase,
                recommendedAccentNonTextColor,
                shouldAutoCorrectColors,
            ),
        [getThemeAPIKeyFromName(LOADING_TOKEN_NAMES.LOADING_SKELETON_BG_COLOR)]:
            bg,
        [getThemeAPIKeyFromName(
            LOADING_TOKEN_NAMES.LOADING_SKELETON_ANIMATION_COLOR,
        )]: `${r}, ${g}, ${b}`,
    };
};
