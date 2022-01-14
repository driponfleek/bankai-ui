/* eslint-disable import/prefer-default-export */
import { getTextColor } from '../colorUtils';
import { getThemeAPIKeyFromName } from '../dataMassageUtils';
import { THEME_TOKEN_NAMES } from '../../const/themeTokensConst';

const {
    COLOR_ACCORDION_BORDER,
    COLOR_ACCORDION_BG,
    COLOR_ACCORDION_TRIGGER_TEXT,
    COLOR_ACCORDION_TRIGGER_HOVER_BG,
    COLOR_ACCORDION_TRIGGER_HOVER_TEXT,
} = THEME_TOKEN_NAMES;

export const getAccordionTheme = (colors = {}) => {
    const {
        canvasColor = {},
        universalHoverColor = {},
        universalBorderColor = {},
    } = colors;

    return {
        [getThemeAPIKeyFromName(COLOR_ACCORDION_BORDER)]:
            universalBorderColor.hex,
        [getThemeAPIKeyFromName(COLOR_ACCORDION_BG)]: canvasColor.hex,
        [getThemeAPIKeyFromName(COLOR_ACCORDION_TRIGGER_TEXT)]: getTextColor(
            canvasColor.hex,
        ),
        [getThemeAPIKeyFromName(COLOR_ACCORDION_TRIGGER_HOVER_BG)]:
            universalHoverColor.hex,
        [getThemeAPIKeyFromName(COLOR_ACCORDION_TRIGGER_HOVER_TEXT)]:
            getTextColor(universalHoverColor.hex),
    };
};
