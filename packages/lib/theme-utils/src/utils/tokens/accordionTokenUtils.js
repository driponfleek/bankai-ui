/* eslint-disable import/prefer-default-export */
import { genConstToDotNotationMap } from '../dataGenUtils';
import { massageConstToDotNotation } from '../dataMassageUtils';
// import { getTextColor } from '../helperUtils';
// import { SEMANTIC_COLOR_TOKEN_NAMES } from '../../const/tokens/semantic/semanticColorsConst';
import {
    ACCORDION_TOKEN_DEFAULTS,
    ACCORDION_TOKEN_NAMES,
} from '../../const/tokens/component/accordionConst';

const { ACCORDION_BORDER_RADIUS, ...COLOR_TOKEN_NAMES } = ACCORDION_TOKEN_NAMES;
// const { SEMANTIC_COLOR_CANVAS, SEMANTIC_COLOR_UNIVERSAL_HOVER_BG, SEMANTIC_COLOR_TEXT } = SEMANTIC_COLOR_TOKEN_NAMES;

const genAccordionPresetTokens = (presets = {}) => {
    const borderRadiusTokenKey = massageConstToDotNotation(
        ACCORDION_BORDER_RADIUS,
    );
    const { [borderRadiusTokenKey]: borderRadii } = presets;

    return {
        [borderRadiusTokenKey]:
            borderRadii ?? ACCORDION_TOKEN_DEFAULTS[ACCORDION_BORDER_RADIUS],
    };
};

const genAccordionColorTokens = (
    semanticTokens,
    semanticColorsConstToTokenMap,
) => {
    const TOKEN_NAMES = COLOR_TOKEN_NAMES;
    const accordionConstToTokenMap = genConstToDotNotationMap(TOKEN_NAMES);

    return {
        [accordionConstToTokenMap.ACCORDION_BG_COLOR]:
            semanticTokens[semanticColorsConstToTokenMap.SEMANTIC_COLOR_CANVAS],
        [accordionConstToTokenMap.ACCORDION_TRIGGER_TEXT_COLOR]:
            semanticTokens[semanticColorsConstToTokenMap.SEMANTIC_COLOR_TEXT],
        [accordionConstToTokenMap.ACCORDION_TRIGGER_HOVER_BG_COLOR]:
            semanticTokens[
                semanticColorsConstToTokenMap.SEMANTIC_COLOR_UNIVERSAL_HOVER_BG
            ],
        [accordionConstToTokenMap.ACCORDION_TRIGGER_HOVER_TEXT_COLOR]:
            semanticTokens[semanticColorsConstToTokenMap.SEMANTIC_COLOR_TEXT],
    };
};

export const genAccordionTokens = (
    presets,
    semanticTokens,
    semanticColorsConstToTokenMap,
) => {
    return {
        ...genAccordionPresetTokens(presets),
        ...genAccordionColorTokens(
            semanticTokens,
            semanticColorsConstToTokenMap,
        ),
    };
};
