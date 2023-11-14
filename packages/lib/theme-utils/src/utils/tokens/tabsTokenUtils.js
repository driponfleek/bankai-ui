/* eslint-disable import/prefer-default-export */
import { getNewColorByChangingLightness } from '@driponfleek/bankai-lib-color-utils';
import { genConstToDotNotationMap } from '../dataGenUtils';
import { genFocusTokens } from './focusTokenUtils';
import { TABS_TOKEN_NAMES } from '../../const/tokens/component/tabsConst';

export const genTabsTokens = ({
    sourceColor = {},
    semanticColors = {},
    semanticTokens = {},
    semanticColorsConstToTokenMap = {},
    config = {},
}) => {
    const { recommendedColor = {} } = sourceColor;
    const { isDarkMode = false } = config;
    const tabsConstToTokenMap = genConstToDotNotationMap(TABS_TOKEN_NAMES);
    const { preferred: canvasColor = {} } =
        semanticColors[semanticColorsConstToTokenMap.SEMANTIC_COLOR_CANVAS];
    const { preferred: canvasAltColor = {} } =
        semanticColors[semanticColorsConstToTokenMap.SEMANTIC_COLOR_CANVAS_ALT];
    const {
        TABS_ACTIVE_FOCUS_HALO_INNER_COLOR,
        TABS_ACTIVE_FOCUS_HALO_OUTER_COLOR,
    } = TABS_TOKEN_NAMES;
    const hoverLightness = isDarkMode
        ? canvasAltColor.lightness + 10
        : canvasAltColor.lightness - 10;

    return {
        [tabsConstToTokenMap.TABS_ACTIVE_ACCENT_COLOR]: recommendedColor.hex,
        [tabsConstToTokenMap.TABS_ACTIVE_TEXT_COLOR]: recommendedColor.hex,
        [tabsConstToTokenMap.TABS_ACTIVE_BG_COLOR]: canvasColor.hex,
        [tabsConstToTokenMap.TABS_PANEL_BG_COLOR]: canvasColor.hex,
        [tabsConstToTokenMap.TABS_BORDER_COLOR]:
            semanticTokens[
                semanticColorsConstToTokenMap
                    .SEMANTIC_COLOR_UNIVERSAL_DECORATIVE_BORDER
            ],
        [tabsConstToTokenMap.TABS_INACTIVE_TEXT_COLOR]:
            semanticTokens[
                semanticColorsConstToTokenMap.SEMANTIC_COLOR_TEXT_ALT
            ],
        [tabsConstToTokenMap.TABS_INACTIVE_HOVER_TEXT_COLOR]:
            semanticTokens[semanticColorsConstToTokenMap.SEMANTIC_COLOR_TEXT],
        [tabsConstToTokenMap.TABS_INACTIVE_HOVER_BG_COLOR]:
            getNewColorByChangingLightness(canvasAltColor.hex, hoverLightness),
        [tabsConstToTokenMap.TABS_INACTIVE_BG_COLOR]: canvasAltColor.hex,
        ...genFocusTokens({
            sourceColor,
            FOCUS_INNER_TOKEN: TABS_ACTIVE_FOCUS_HALO_INNER_COLOR,
            FOCUS_OUTER_TOKEN: TABS_ACTIVE_FOCUS_HALO_OUTER_COLOR,
        }),
    };
};
