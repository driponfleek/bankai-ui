/* eslint-disable import/prefer-default-export */
import { getTextColor } from '../helperUtils';
import { getThemeAPIKeyFromName } from '../dataUtils';
import { ACCORDION_COLOR_TOKEN_NAMES } from '../../const/tokens/accordionTokensConst';

const {
    ACCORDION_BORDER_COLOR,
    ACCORDION_BG_COLOR,
    ACCORDION_TRIGGER_TEXT_COLOR,
    ACCORDION_TRIGGER_HOVER_BG_COLOR,
    ACCORDION_TRIGGER_HOVER_TEXT_COLOR,
} = ACCORDION_COLOR_TOKEN_NAMES;

export const getAccordionTheme = (colors = {}, config = {}) => {
    const {
        canvasColor = {},
        universalHoverColor = {},
        borderColor = {},
    } = colors;
    const { isMobile } = config;

    return {
        [getThemeAPIKeyFromName(ACCORDION_BORDER_COLOR)]: borderColor.hex,
        [getThemeAPIKeyFromName(ACCORDION_BG_COLOR)]: canvasColor.hex,
        [getThemeAPIKeyFromName(ACCORDION_TRIGGER_TEXT_COLOR)]: getTextColor(
            canvasColor.hex,
        ),
        ...(!isMobile && {
            [getThemeAPIKeyFromName(ACCORDION_TRIGGER_HOVER_BG_COLOR)]:
                universalHoverColor.hex,
            [getThemeAPIKeyFromName(ACCORDION_TRIGGER_HOVER_TEXT_COLOR)]:
                getTextColor(universalHoverColor.hex),
        }),
    };
};
