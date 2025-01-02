/* eslint-disable import/prefer-default-export */
import { genFocusTokens } from './focusTokenUtils';
import { genConstToDotNotationMap } from '../dataGenUtils';
import { genLinkData } from '../linkDataGenUtils';
import { massageConstToDotNotation } from '../dataMassageUtils';
import { SEMANTIC_COLOR_TOKEN_NAMES } from '../../const/tokens/semantic/semanticColorsConst';
import {
    LINK_TOKEN_DEFAULTS,
    LINK_TOKEN_NAMES,
} from '../../const/tokens/component/linkConst';

export const genLinkTokens = ({
    sourceColor = {},
    semanticTokens = {},
    config = {},
}) => {
    const { LINK_FOCUS_HALO_INNER_COLOR, LINK_FOCUS_HALO_OUTER_COLOR } =
        LINK_TOKEN_NAMES;
    const linkConstToTokenMap = genConstToDotNotationMap(LINK_TOKEN_NAMES);
    const {
        [massageConstToDotNotation(
            SEMANTIC_COLOR_TOKEN_NAMES.SEMANTIC_COLOR_TEXT,
        )]: textColor,
    } = semanticTokens;
    const { linkColor, shouldUnderline } = genLinkData({
        sourceColor,
        textColor,
        config,
    });

    return {
        [linkConstToTokenMap.LINK_BORDER_RADIUS]:
            LINK_TOKEN_DEFAULTS.LINK_BORDER_RADIUS,
        [linkConstToTokenMap.LINK_TEXT_DECORATION]: shouldUnderline
            ? 'underline'
            : 'none',
        [linkConstToTokenMap.LINK_TEXT_COLOR]: linkColor?.hex,
        ...genFocusTokens({
            sourceColor,
            FOCUS_INNER_TOKEN: LINK_FOCUS_HALO_INNER_COLOR,
            FOCUS_OUTER_TOKEN: LINK_FOCUS_HALO_OUTER_COLOR,
        }),
    };
};
