/* eslint-disable import/prefer-default-export */
import { genConstToDotNotationMap } from '../dataGenUtils';
import { genFocusTokens } from './focusTokenUtils';
import { massageConstToDotNotation } from '../dataMassageUtils';
import { TABS_TOKEN_NAMES } from '../../const/tokens/component/tabsConst';
import { SEMANTIC_COLOR_TOKEN_NAMES } from '../../const/tokens/semantic/semanticColorsConst';

export const genTabsTokens = ({
    sourceColor = {},
    semanticColors = {},
    semanticTokens = {},
}) => {
    const { recommendedColor = {} } = sourceColor;
    const tabsConstToTokenMap = genConstToDotNotationMap(TABS_TOKEN_NAMES);
    const { baseColor: canvasColor = {} } =
        semanticColors[
            massageConstToDotNotation(
                SEMANTIC_COLOR_TOKEN_NAMES.SEMANTIC_COLOR_CANVAS,
            )
        ];
    const { baseColor: canvasAltColor = {} } =
        semanticColors[
            massageConstToDotNotation(
                SEMANTIC_COLOR_TOKEN_NAMES.SEMANTIC_COLOR_CANVAS_ALT,
            )
        ];
    const {
        TABS_ACTIVE_FOCUS_HALO_INNER_COLOR,
        TABS_ACTIVE_FOCUS_HALO_OUTER_COLOR,
    } = TABS_TOKEN_NAMES;

    return {
        [tabsConstToTokenMap.TABS_ACTIVE_ACCENT_COLOR]: recommendedColor.hex,
        [tabsConstToTokenMap.TABS_ACTIVE_TEXT_COLOR]: recommendedColor.hex,
        [tabsConstToTokenMap.TABS_ACTIVE_BG_COLOR]: canvasColor.hex,
        [tabsConstToTokenMap.TABS_PANEL_BG_COLOR]: canvasColor.hex,
        [tabsConstToTokenMap.TABS_BORDER_COLOR]:
            semanticTokens[
                massageConstToDotNotation(
                    SEMANTIC_COLOR_TOKEN_NAMES.SEMANTIC_COLOR_DECORATIVE_BORDER,
                )
            ],
        [tabsConstToTokenMap.TABS_INACTIVE_TEXT_COLOR]:
            semanticTokens[
                massageConstToDotNotation(
                    SEMANTIC_COLOR_TOKEN_NAMES.SEMANTIC_COLOR_TEXT_ALT,
                )
            ],
        [tabsConstToTokenMap.TABS_INACTIVE_HOVER_TEXT_COLOR]:
            semanticTokens[
                massageConstToDotNotation(
                    SEMANTIC_COLOR_TOKEN_NAMES.SEMANTIC_COLOR_TEXT,
                )
            ],
        [tabsConstToTokenMap.TABS_INACTIVE_HOVER_BG_COLOR]:
            semanticTokens[
                massageConstToDotNotation(
                    SEMANTIC_COLOR_TOKEN_NAMES.SEMANTIC_COLOR_HOVER_BG,
                )
            ],
        [tabsConstToTokenMap.TABS_INACTIVE_BG_COLOR]: canvasAltColor.hex,
        ...genFocusTokens({
            sourceColor,
            FOCUS_INNER_TOKEN: TABS_ACTIVE_FOCUS_HALO_INNER_COLOR,
            FOCUS_OUTER_TOKEN: TABS_ACTIVE_FOCUS_HALO_OUTER_COLOR,
        }),
    };
};
