import { formatThemeDataForWeb } from './dataMassageUtils';

// This is used to convert an API key that uses dot notation
// to the corresponding CSS variable if applicable. If provided
// an API key of `color.text` this would return a string
// formatted for the CSS variable: `--bankai-color-text`.
export const getThemeCSSVarFromAPIKey = (key) => {
    if (!key) {
        return undefined;
    }
    const cssVarPrefix = '--bankai-';
    const formattedKey = key.replaceAll('.', '-');

    return `${cssVarPrefix}${formattedKey}`;
};

export const generateCSSVars = (themeData = {}, selector = ':root') => {
    const sanatizedThemeData = formatThemeDataForWeb(themeData);
    const themeKeys = Object.keys(sanatizedThemeData);

    if (themeKeys.length === 0) {
        return '';
    }

    return `${selector} {
        ${themeKeys
            .map((themeKey) => {
                const cssVar = getThemeCSSVarFromAPIKey(themeKey);
                const cssVarVal = sanatizedThemeData[themeKey];

                return `${cssVar}: ${cssVarVal};`;
            })
            .join('\r\n')}
    }`;
};
