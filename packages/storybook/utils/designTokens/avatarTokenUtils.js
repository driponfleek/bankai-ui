/* eslint-disable import/prefer-default-export */
import {
    getAvatarTheme,
    THEME_TOKEN_NAMES,
    getThemeCSSVarFromAPIKey,
    getThemeAPIKeyFromName,
} from '@epr0t0type/bankai-lib-theme-utils';
import { getCoreColors } from './coreTokenUtils';

const { COLOR_AVATAR_BG, COLOR_AVATAR_BORDER, COLOR_AVATAR_TEXT } =
    THEME_TOKEN_NAMES;

export const getAvatarTokenData = (isDarkMode) => {
    const { accentColorData } = getCoreColors(isDarkMode);
    const borderAPIKey = getThemeAPIKeyFromName(COLOR_AVATAR_BORDER);
    const bgAPIKey = getThemeAPIKeyFromName(COLOR_AVATAR_BG);
    const textAPIKey = getThemeAPIKeyFromName(COLOR_AVATAR_TEXT);
    const avatarTheme = getAvatarTheme(accentColorData);

    return [
        {
            description: getThemeCSSVarFromAPIKey(borderAPIKey),
            id: borderAPIKey,
            name: 'Border Color',
            value: avatarTheme[borderAPIKey],
        },
        {
            description: getThemeCSSVarFromAPIKey(textAPIKey),
            id: textAPIKey,
            name: 'Text Color',
            value: avatarTheme[textAPIKey],
            isAlt: true,
        },
        {
            description: getThemeCSSVarFromAPIKey(bgAPIKey),
            id: bgAPIKey,
            name: 'Background Color',
            value: avatarTheme[bgAPIKey],
            valueDesc: 'Accent Color',
        },
    ];
};
