/* eslint-disable import/prefer-default-export */
import { getThemeAPIKeyFromName } from '../dataUtils';
import { getTextColor } from '../helperUtils';
import { AVATAR_TOKEN_NAMES } from '../../const/tokens/avatarTokensConst';

const { AVATAR_BG_COLOR, AVATAR_BORDER_COLOR, AVATAR_TEXT_COLOR } =
    AVATAR_TOKEN_NAMES;

export const getAvatarTheme = (colors = {}, config = {}) => {
    const { sourceColors = {} } = colors;
    const { shouldAutoCorrectColors = true } = config;
    const { base = {}, recommendedNonTextColor = {} } = sourceColors;
    const bgColorData = shouldAutoCorrectColors
        ? recommendedNonTextColor
        : base;
    const { hex: bgColor } = bgColorData;
    const textColor = getTextColor(bgColor);

    return {
        [getThemeAPIKeyFromName(AVATAR_BG_COLOR)]: bgColor,
        [getThemeAPIKeyFromName(AVATAR_BORDER_COLOR)]: textColor,
        [getThemeAPIKeyFromName(AVATAR_TEXT_COLOR)]: textColor,
    };
};
