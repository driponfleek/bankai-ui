/* eslint-disable import/prefer-default-export */
import {
    genColorSeedData,
    genEvaluatedColorData,
    genColorsData,
} from '@driponfleek/bankai-lib-color-utils';
import { sanitizeDataForSemanticColorOnly } from './dataSanitizerUtils';
import { finalizeColorData } from './helperUtils';
import { SEMANTIC_COLOR_TOKEN_NAMES } from '../const/tokens/semantic/semanticColorsConst';

const {
    SEMANTIC_COLOR_ACCENT,
    SEMANTIC_COLOR_AFFIRMATIVE,
    SEMANTIC_COLOR_BRAND,
    SEMANTIC_COLOR_CANVAS,
    SEMANTIC_COLOR_CANVAS_ALT,
    SEMANTIC_COLOR_CANVAS_BRAND,
    SEMANTIC_COLOR_CANVAS_BRAND_TEXT,
    SEMANTIC_COLOR_CAUTIONARY,
    SEMANTIC_COLOR_DESTRUCTIVE,
    SEMANTIC_COLOR_ERROR,
    SEMANTIC_COLOR_INFO,
    SEMANTIC_COLOR_PRIMARY,
    SEMANTIC_COLOR_SECONDARY,
} = SEMANTIC_COLOR_TOKEN_NAMES;

export const genSemanticColorsData = ({
    presets = {},
    config = {},
    semanticColorsConstToTokenMap = {},
}) => {
    const { shouldTokenA11yEvalForText = {}, shouldAutoCorrectColors = true } =
        config;
    const {
        [semanticColorsConstToTokenMap[SEMANTIC_COLOR_CANVAS]]: canvasHex,
        [semanticColorsConstToTokenMap[SEMANTIC_COLOR_CANVAS_ALT]]:
            canvasAltHex,
        ...presetsRest
    } = sanitizeDataForSemanticColorOnly(presets);
    // Remove Canvas Brand colors
    delete presetsRest[
        semanticColorsConstToTokenMap[SEMANTIC_COLOR_CANVAS_BRAND]
    ];
    delete presetsRest[
        semanticColorsConstToTokenMap[SEMANTIC_COLOR_CANVAS_BRAND_TEXT]
    ];
    const canvasAltColorData = { preferred: genColorSeedData(canvasAltHex) };
    const semanticColors = {
        [semanticColorsConstToTokenMap[SEMANTIC_COLOR_CANVAS]]: {
            preferred: genColorSeedData(canvasHex),
        },
        [semanticColorsConstToTokenMap[SEMANTIC_COLOR_CANVAS_ALT]]:
            canvasAltColorData,
    };
    const semanticColorTokens = [
        semanticColorsConstToTokenMap[SEMANTIC_COLOR_ACCENT],
        semanticColorsConstToTokenMap[SEMANTIC_COLOR_AFFIRMATIVE],
        semanticColorsConstToTokenMap[SEMANTIC_COLOR_BRAND],
        semanticColorsConstToTokenMap[SEMANTIC_COLOR_CAUTIONARY],
        semanticColorsConstToTokenMap[SEMANTIC_COLOR_DESTRUCTIVE],
        semanticColorsConstToTokenMap[SEMANTIC_COLOR_ERROR],
        semanticColorsConstToTokenMap[SEMANTIC_COLOR_INFO],
        semanticColorsConstToTokenMap[SEMANTIC_COLOR_PRIMARY],
        semanticColorsConstToTokenMap[SEMANTIC_COLOR_SECONDARY],
        ...Object.keys(presetsRest),
    ];

    for (let index = 0; index < semanticColorTokens.length; index += 1) {
        const colorToken = semanticColorTokens[index];
        semanticColors[colorToken] = finalizeColorData(
            genEvaluatedColorData(
                genColorsData({
                    hex: presetsRest[colorToken],
                    tokenId: colorToken,
                }),
                canvasAltColorData.preferred,
            ),
            shouldTokenA11yEvalForText[colorToken],
            shouldAutoCorrectColors,
        );
    }

    return semanticColors;
};
