/* eslint-disable import/prefer-default-export */
import { getTextColor } from '../colorUtils';
import { getThemeAPIKeyFromName } from '../dataMassageUtils';
import { THEME_TOKEN_NAMES } from '../../const/themeTokensConst';

const { COLOR_AVATAR_BG, COLOR_AVATAR_BORDER, COLOR_AVATAR_TEXT } =
    THEME_TOKEN_NAMES;

export const getAvatarTheme = (sourceColorData = {}) => {
    const { base = {} } = sourceColorData;
    const textColor = getTextColor(base.hex);

    return {
        [getThemeAPIKeyFromName(COLOR_AVATAR_BG)]: base.hex,
        [getThemeAPIKeyFromName(COLOR_AVATAR_BORDER)]: textColor,
        [getThemeAPIKeyFromName(COLOR_AVATAR_TEXT)]: textColor,
    };
};
