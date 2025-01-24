import { genEvaluatedColorMetadata } from '@driponfleek/bankai-lib-color-utils';
import { genFocusTokens } from './focusTokenUtils';
import { genCoreNeutralColors } from '../dataGenUtils';
import { massageConstToDotNotation } from '../dataMassageUtils';
import { SEMANTIC_COLOR_TOKEN_NAMES } from '../../const/tokens/semantic/semanticColorsConst';
import { CORE_NEUTRAL_COLOR_TOKEN_NAMES } from '../../const/tokens/core/coreColorsConst';

const { CORE_COLOR_NEUTRAL_20, CORE_COLOR_NEUTRAL_80 } =
    CORE_NEUTRAL_COLOR_TOKEN_NAMES;
const {
    SEMANTIC_COLOR_CANVAS,
    SEMANTIC_COLOR_CANVAS_ALT,
    SEMANTIC_COLOR_ERROR,
    SEMANTIC_COLOR_TEXT_HEADINGS,
    SEMANTIC_COLOR_TEXT,
    SEMANTIC_COLOR_TEXT_ALT,
    SEMANTIC_COLOR_TEXT_ERROR,
    SEMANTIC_COLOR_ACCESSIBLE_BORDER,
    SEMANTIC_COLOR_DECORATIVE_BORDER,
    SEMANTIC_COLOR_FOCUS_HALO_INNER,
    SEMANTIC_COLOR_FOCUS_HALO_OUTER,
    SEMANTIC_COLOR_HOVER_BG,
} = SEMANTIC_COLOR_TOKEN_NAMES;

export const genSemanticTextBorderHoverColorTokens = (params) => {
    const {
        coreColorNeutralSeed,
        semanticColors = {},
        config = {},
        preferredTextColors = {},
    } = params ?? {};
    const { isDarkMode } = config;
    const NEUTRAL_COLORS = genCoreNeutralColors(coreColorNeutralSeed, 2);

    const recommendedTextColor = isDarkMode
        ? preferredTextColors.light
        : preferredTextColors.dark;
    const {
        [massageConstToDotNotation(SEMANTIC_COLOR_CANVAS_ALT)]:
            semanticColorCanvasAlt,
        [massageConstToDotNotation(SEMANTIC_COLOR_ERROR)]: semanticColorError,
    } = semanticColors;
    const neutralColorsArr = genCoreNeutralColors(
        coreColorNeutralSeed,
        2,
        true,
    );
    const evaluatedNeutrals = genEvaluatedColorMetadata(
        {
            baseColor: {
                ...semanticColorCanvasAlt.baseColor,
            },
            variants: neutralColorsArr.filter(
                (neutralColor) =>
                    neutralColor.tokenId.hex !== recommendedTextColor,
            ),
        },
        semanticColorCanvasAlt.baseColor,
    );
    const {
        recommendedColorForText: recommendedAltTextColor,
        recommendedColorForNonText: recommendedAccessibleBorderColor,
    } = evaluatedNeutrals;

    const result = {
        [massageConstToDotNotation(SEMANTIC_COLOR_TEXT_HEADINGS)]:
            recommendedTextColor,
        [massageConstToDotNotation(SEMANTIC_COLOR_TEXT)]: recommendedTextColor,
        [massageConstToDotNotation(SEMANTIC_COLOR_TEXT_ALT)]:
            recommendedAltTextColor?.hex,
        [massageConstToDotNotation(SEMANTIC_COLOR_TEXT_ERROR)]:
            semanticColorError?.recommendedColorForText?.hex,
        [massageConstToDotNotation(SEMANTIC_COLOR_ACCESSIBLE_BORDER)]:
            recommendedAccessibleBorderColor?.hex,
        [massageConstToDotNotation(SEMANTIC_COLOR_DECORATIVE_BORDER)]:
            isDarkMode
                ? NEUTRAL_COLORS[
                      massageConstToDotNotation(CORE_COLOR_NEUTRAL_20)
                  ]
                : NEUTRAL_COLORS[
                      massageConstToDotNotation(CORE_COLOR_NEUTRAL_80)
                  ],
        [massageConstToDotNotation(SEMANTIC_COLOR_HOVER_BG)]: isDarkMode
            ? NEUTRAL_COLORS[massageConstToDotNotation(CORE_COLOR_NEUTRAL_20)]
            : NEUTRAL_COLORS[massageConstToDotNotation(CORE_COLOR_NEUTRAL_80)],
    };

    return result;
};

export const genSemanticCanvasColorsTokens = ({
    coreColorNeutralSeed: NEUTRAL_SEED,
    config,
}) => {
    const { isDarkMode = false } = config ?? {};
    const NEUTRAL_COLORS = genCoreNeutralColors(NEUTRAL_SEED, 1);

    return {
        [massageConstToDotNotation(SEMANTIC_COLOR_CANVAS)]: isDarkMode
            ? NEUTRAL_COLORS['core.color.neutral.10']
            : NEUTRAL_COLORS[
                  massageConstToDotNotation(
                      CORE_NEUTRAL_COLOR_TOKEN_NAMES.CORE_COLOR_NEUTRAL_100,
                  )
              ],
        [massageConstToDotNotation(SEMANTIC_COLOR_CANVAS_ALT)]: isDarkMode
            ? NEUTRAL_COLORS['core.color.neutral.15']
            : NEUTRAL_COLORS['core.color.neutral.95'],
    };
};

export const genSemanticFocusColorTokens = (sourceColor) => {
    return genFocusTokens({
        sourceColor,
        FOCUS_INNER_TOKEN: SEMANTIC_COLOR_FOCUS_HALO_INNER,
        FOCUS_OUTER_TOKEN: SEMANTIC_COLOR_FOCUS_HALO_OUTER,
    });
};
