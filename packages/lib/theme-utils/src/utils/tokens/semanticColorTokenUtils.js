import {
    genColorSeedData,
    genEvaluatedColorData,
    getNewColorByChangingLightness,
} from '@driponfleek/bankai-lib-color-utils';
import { genFocusTokens } from './focusTokenUtils';
import { genCoreNeutralColors } from '../dataGenUtils';
import { getTextColor } from '../helperUtils';
import {
    SEMANTIC_COLOR_TOKEN_NAMES,
    SEMANTIC_COLOR_TOKEN_DEFAULTS,
} from '../../const/tokens/semantic/semanticColorsConst';
import { CORE_NEUTRAL_COLOR_TOKEN_NAMES } from '../../const/tokens/core/coreColorsConst';

const {
    CORE_COLOR_NEUTRAL_10,
    CORE_COLOR_NEUTRAL_20,
    CORE_COLOR_NEUTRAL_80,
    CORE_COLOR_NEUTRAL_90,
} = CORE_NEUTRAL_COLOR_TOKEN_NAMES;
const {
    SEMANTIC_COLOR_CANVAS,
    SEMANTIC_COLOR_CANVAS_ALT,
    SEMANTIC_COLOR_CANVAS_BRAND,
    SEMANTIC_COLOR_CANVAS_BRAND_TEXT,
    SEMANTIC_COLOR_ERROR,
    SEMANTIC_COLOR_HEADINGS_TEXT,
    SEMANTIC_COLOR_TEXT,
    SEMANTIC_COLOR_TEXT_ALT,
    SEMANTIC_COLOR_TEXT_ERROR,
    SEMANTIC_COLOR_UNIVERSAL_ACCESSIBLE_BORDER,
    SEMANTIC_COLOR_UNIVERSAL_DECORATIVE_BORDER,
    SEMANTIC_COLOR_UNIVERSAL_FOCUS_HALO_INNER,
    SEMANTIC_COLOR_UNIVERSAL_FOCUS_HALO_OUTER,
    SEMANTIC_COLOR_UNIVERSAL_HOVER_BG,
} = SEMANTIC_COLOR_TOKEN_NAMES;

export const genSemanticTextBorderHoverColorTokens = (params) => {
    const {
        coreColorNeutralSeed,
        semanticColors = {},
        config = {},
        semanticColorsConstToTokenMap = {},
    } = params ?? {};
    const { isDarkMode } = config;
    const NEUTRAL_COLORS = genCoreNeutralColors(coreColorNeutralSeed, 2);

    const recommendedTextColor = isDarkMode
        ? NEUTRAL_COLORS[CORE_COLOR_NEUTRAL_90]
        : NEUTRAL_COLORS[CORE_COLOR_NEUTRAL_10];
    const {
        [semanticColorsConstToTokenMap[SEMANTIC_COLOR_CANVAS_ALT]]:
            semanticColorCanvasAlt,
        [semanticColorsConstToTokenMap[SEMANTIC_COLOR_ERROR]]:
            semanticColorError,
    } = semanticColors;
    const neutralColorsArr = Object.keys(NEUTRAL_COLORS).map(
        (neutralColorKey) => genColorSeedData(NEUTRAL_COLORS[neutralColorKey]),
    );
    const {
        recommendedTextColor: recommendedAltTextColor,
        recommendedNonTextColor: recommendedAccessibleBorderColor,
    } = genEvaluatedColorData(
        {
            preferred: {
                ...semanticColorCanvasAlt.preferred,
                id: 'preferred',
            },
            variants: neutralColorsArr.filter(
                (neutralColor) => neutralColor.lightness !== 90,
            ),
        },
        semanticColorCanvasAlt.preferred,
    );
    const result = {
        [semanticColorsConstToTokenMap[SEMANTIC_COLOR_HEADINGS_TEXT]]:
            recommendedTextColor,
        [semanticColorsConstToTokenMap[SEMANTIC_COLOR_TEXT]]:
            recommendedTextColor,
        [semanticColorsConstToTokenMap[SEMANTIC_COLOR_TEXT_ALT]]:
            recommendedAltTextColor?.hex,
        [semanticColorsConstToTokenMap[SEMANTIC_COLOR_TEXT_ERROR]]:
            semanticColorError?.recommendedColor?.hex,
        [semanticColorsConstToTokenMap[
            SEMANTIC_COLOR_UNIVERSAL_ACCESSIBLE_BORDER
        ]]: recommendedAccessibleBorderColor?.hex,
        [semanticColorsConstToTokenMap[
            SEMANTIC_COLOR_UNIVERSAL_DECORATIVE_BORDER
        ]]: isDarkMode
            ? NEUTRAL_COLORS[CORE_COLOR_NEUTRAL_20]
            : NEUTRAL_COLORS[CORE_COLOR_NEUTRAL_80],
        [semanticColorsConstToTokenMap[SEMANTIC_COLOR_UNIVERSAL_HOVER_BG]]:
            isDarkMode
                ? NEUTRAL_COLORS[CORE_COLOR_NEUTRAL_20]
                : NEUTRAL_COLORS[CORE_COLOR_NEUTRAL_80],
    };

    return result;
};

export const genSemanticCanvasColorsTokens = ({
    presets = {},
    CORE_NEUTRAL_COLORS = {},
    config = {},
    semanticColorsConstToTokenMap = {},
}) => {
    const { isDarkMode } = config;
    const {
        [semanticColorsConstToTokenMap[SEMANTIC_COLOR_CANVAS_BRAND]]:
            canvasBrandHex = SEMANTIC_COLOR_TOKEN_DEFAULTS[
                SEMANTIC_COLOR_CANVAS_BRAND
            ],
    } = presets;

    return {
        [semanticColorsConstToTokenMap[SEMANTIC_COLOR_CANVAS_BRAND]]:
            canvasBrandHex,
        [semanticColorsConstToTokenMap[SEMANTIC_COLOR_CANVAS_BRAND_TEXT]]:
            getTextColor(canvasBrandHex),
        [semanticColorsConstToTokenMap[SEMANTIC_COLOR_CANVAS]]: isDarkMode
            ? CORE_NEUTRAL_COLORS.CORE_COLOR_NEUTRAL_10
            : CORE_NEUTRAL_COLORS.CORE_COLOR_NEUTRAL_100,
        [semanticColorsConstToTokenMap[SEMANTIC_COLOR_CANVAS_ALT]]: isDarkMode
            ? getNewColorByChangingLightness(
                  CORE_NEUTRAL_COLORS.CORE_COLOR_NEUTRAL_10,
                  15,
              )
            : getNewColorByChangingLightness(
                  CORE_NEUTRAL_COLORS.CORE_COLOR_NEUTRAL_90,
                  95,
              ),
    };
};

export const genSemanticFocusColorTokens = (sourceColor) => {
    return genFocusTokens({
        sourceColor,
        FOCUS_INNER_TOKEN: SEMANTIC_COLOR_UNIVERSAL_FOCUS_HALO_INNER,
        FOCUS_OUTER_TOKEN: SEMANTIC_COLOR_UNIVERSAL_FOCUS_HALO_OUTER,
    });
};
