/* eslint-disable import/prefer-default-export */
import {
    getAvatarTheme,
    AVATAR_TOKEN_NAMES,
    getThemeAPIKeyFromName,
} from '@epr0t0type/bankai-lib-theme-utils';
import { getCoreColors } from './coreTokenUtils';

const { AVATAR_BG_COLOR, AVATAR_BORDER_COLOR, AVATAR_TEXT_COLOR } =
    AVATAR_TOKEN_NAMES;

const getAvatarBGColorDesc = (bgColor, accentColors = {}) => {
    const { base = {}, variants = [] } = accentColors;
    const descBase = 'Accent Color';

    if (bgColor === base.hex) {
        return descBase;
    }

    const variantColor = variants.find((variant) => bgColor === variant.hex);

    return `${descBase} (Variant ${variantColor?.lightness})`;
};

export const getAvatarTokenData = (isDarkMode) => {
    const { accentColors } = getCoreColors(isDarkMode);
    const bgAPIKey = getThemeAPIKeyFromName(AVATAR_BG_COLOR);
    const borderAPIKey = getThemeAPIKeyFromName(AVATAR_BORDER_COLOR);
    const textAPIKey = getThemeAPIKeyFromName(AVATAR_TEXT_COLOR);
    const avatarTheme = getAvatarTheme({ sourceColors: accentColors });

    return [
        {
            description: getAvatarBGColorDesc(),
            id: AVATAR_BG_COLOR,
            name: 'Background Color',
            tokenName: AVATAR_BG_COLOR,
            value: avatarTheme[bgAPIKey],
        },
        {
            id: AVATAR_BORDER_COLOR,
            name: 'Border Color',
            tokenName: AVATAR_BORDER_COLOR,
            value: avatarTheme[borderAPIKey],
        },
        {
            id: AVATAR_TEXT_COLOR,
            name: 'Text Color',
            tokenName: AVATAR_TEXT_COLOR,
            value: avatarTheme[textAPIKey],
        },
    ];
};
