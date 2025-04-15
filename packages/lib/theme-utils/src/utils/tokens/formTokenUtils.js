import {
    getNewColorByLightnessAdjustment,
    genColorAndVariantsWithMetadata,
    genEvaluatedColorMetadata,
} from '@driponfleek/bankai-lib-color-utils';
import {
    getPrioritizedAppTextColor,
    getDecorativeComplimentaryColor,
} from '../helperUtils';
import {
    genDisabledInputColorData,
    genErrorInputColorData,
    genToggleSwitchHoverColorsData,
} from '../formInputColorDataGenUtils';
import {
    genConstToDotNotationMap,
    genCoreNeutralColors,
} from '../dataGenUtils';
import { massageConstToDotNotation } from '../dataMassageUtils';
import { genFocusTokens } from './focusTokenUtils';
import {
    FORM_TOKEN_DEFAULTS,
    FORM_TOKEN_NAMES,
} from '../../const/tokens/component/formConst';
import { SEMANTIC_COLOR_TOKEN_NAMES } from '../../const/tokens/semantic/semanticColorsConst';
import { CORE_NEUTRAL_COLOR_TOKEN_NAMES } from '../../const/tokens/core/coreColorsConst';

const {
    FORM_CHECKED_ACCENT_COLOR,
    FORM_CHECKED_ACCENT_COMPLIMENT_COLOR,
    FORM_CHECKED_FOCUS_HALO_INNER_COLOR,
    FORM_CHECKED_FOCUS_HALO_OUTER_COLOR,
    FORM_CHECKBOX_BORDER_RADIUS,
    FORM_DATE_PICKER_OFF_RANGE_TEXT_COLOR,
    FORM_INPUT_BORDER_RADIUS,
    FORM_INPUT_BG_COLOR,
    FORM_INPUT_DISABLED_BG_COLOR,
    FORM_INPUT_DISABLED_PLACEHOLDER_TEXT_COLOR,
    FORM_INPUT_ERROR_BORDER_COLOR,
    FORM_INPUT_ERROR_BG_COLOR,
    FORM_INPUT_ERROR_FOCUS_HALO_INNER_COLOR,
    FORM_INPUT_ERROR_FOCUS_HALO_OUTER_COLOR,
    FORM_INPUT_ERROR_PLACEHOLDER_TEXT_COLOR,
    FORM_INPUT_FOCUS_HALO_INNER_COLOR,
    FORM_INPUT_FOCUS_HALO_OUTER_COLOR,
    FORM_INPUT_PLACEHOLDER_TEXT_COLOR,
    FORM_INPUT_TEXT_COLOR,
    FORM_MENU_BORDER_RADIUS,
    FORM_MENU_SELECTED_BG_COLOR,
    FORM_MENU_SELECTED_FOCUS_BG_COLOR,
    FORM_MENU_SELECTED_FOCUS_TEXT_COLOR,
    FORM_MENU_SELECTED_TEXT_COLOR,
    FORM_PILL_BG_COLOR,
    FORM_PILL_TEXT_COLOR,
    FORM_PILL_FOCUS_HALO_INNER_COLOR,
    FORM_PILL_FOCUS_HALO_OUTER_COLOR,
    FORM_TOGGLE_SWITCH_KNOB_BORDER_COLOR,
    FORM_TOGGLE_SWITCH_KNOB_COLOR,
    FORM_TOGGLE_SWITCH_TRACK_COLOR,
    FORM_TOGGLE_SWITCH_TRACK_HOVER_COLOR,
    FORM_TOGGLE_SWITCH_ON_KNOB_COLOR,
    FORM_TOGGLE_SWITCH_ON_TRACK_COLOR,
    FORM_TOGGLE_SWITCH_ON_TRACK_HOVER_COLOR,
    FORM_TOGGLE_SWITCH_BUSY_ICON_COLOR,
    FORM_TOGGLE_SWITCH_ON_BUSY_ICON_COLOR_COLOR,
    FORM_TOGGLE_SWITCH_ON_FOCUS_HALO_INNER_COLOR,
    FORM_TOGGLE_SWITCH_ON_FOCUS_HALO_OUTER_COLOR,
} = FORM_TOKEN_NAMES;

export const genFormPresetTokens = (presets = {}) => {
    const formConstToTokenMap = genConstToDotNotationMap({
        FORM_CHECKBOX_BORDER_RADIUS,
        FORM_INPUT_BORDER_RADIUS,
        FORM_MENU_BORDER_RADIUS,
    });
    const {
        [formConstToTokenMap.FORM_CHECKBOX_BORDER_RADIUS]: checkboxBorderRadii,
        [formConstToTokenMap.FORM_INPUT_BORDER_RADIUS]: inputBorderRadii,
        [formConstToTokenMap.FORM_MENU_BORDER_RADIUS]: menuBorderRadii,
    } = presets;

    return {
        [formConstToTokenMap.FORM_CHECKBOX_BORDER_RADIUS]:
            checkboxBorderRadii ??
            FORM_TOKEN_DEFAULTS[FORM_CHECKBOX_BORDER_RADIUS],
        [formConstToTokenMap.FORM_INPUT_BORDER_RADIUS]:
            inputBorderRadii ?? FORM_TOKEN_DEFAULTS[FORM_INPUT_BORDER_RADIUS],
        [formConstToTokenMap.FORM_MENU_BORDER_RADIUS]:
            menuBorderRadii ?? FORM_TOKEN_DEFAULTS[FORM_MENU_BORDER_RADIUS],
    };
};

export const genToggleInputTokens = ({ sourceColor = {}, canvasColor }) => {
    const { recommendedColor = {} } = sourceColor;
    const toggleInputConstToTokenMap = genConstToDotNotationMap({
        FORM_CHECKED_ACCENT_COLOR,
        FORM_CHECKED_ACCENT_COMPLIMENT_COLOR,
    });

    return {
        [toggleInputConstToTokenMap.FORM_CHECKED_ACCENT_COLOR]:
            recommendedColor.hex,
        [toggleInputConstToTokenMap.FORM_CHECKED_ACCENT_COMPLIMENT_COLOR]:
            canvasColor?.hex,
        ...genFocusTokens({
            sourceColor,
            FOCUS_INNER_TOKEN: FORM_CHECKED_FOCUS_HALO_INNER_COLOR,
            FOCUS_OUTER_TOKEN: FORM_CHECKED_FOCUS_HALO_OUTER_COLOR,
        }),
    };
};

export const genInputColorTokens = ({
    sourceColor = {},
    semanticColors = {},
    semanticTokens = {},
    coreColorNeutralSeed,
    config = {},
}) => {
    const { isDarkMode } = config;
    const formConstToTokenMap = genConstToDotNotationMap({
        FORM_DATE_PICKER_OFF_RANGE_TEXT_COLOR,
        FORM_INPUT_BG_COLOR,
        FORM_INPUT_DISABLED_BG_COLOR,
        FORM_INPUT_DISABLED_PLACEHOLDER_TEXT_COLOR,
        FORM_INPUT_ERROR_BORDER_COLOR,
        FORM_INPUT_ERROR_BG_COLOR,
        FORM_INPUT_ERROR_FOCUS_HALO_INNER_COLOR,
        FORM_INPUT_ERROR_FOCUS_HALO_OUTER_COLOR,
        FORM_INPUT_ERROR_PLACEHOLDER_TEXT_COLOR,
        FORM_INPUT_FOCUS_HALO_INNER_COLOR,
        FORM_INPUT_FOCUS_HALO_OUTER_COLOR,
        FORM_INPUT_PLACEHOLDER_TEXT_COLOR,
        FORM_INPUT_TEXT_COLOR,
    });
    const NEUTRAL_COLORS = genCoreNeutralColors(coreColorNeutralSeed, 2);
    const {
        recommendedColor: errorColor = {},
        baseColor: errorBaseColor = {},
    } =
        semanticColors[
            massageConstToDotNotation(
                SEMANTIC_COLOR_TOKEN_NAMES.SEMANTIC_COLOR_ERROR,
            )
        ];
    const disabledBGColor = isDarkMode
        ? NEUTRAL_COLORS[
              massageConstToDotNotation(
                  CORE_NEUTRAL_COLOR_TOKEN_NAMES.CORE_COLOR_NEUTRAL_30,
              )
          ]
        : NEUTRAL_COLORS[
              massageConstToDotNotation(
                  CORE_NEUTRAL_COLOR_TOKEN_NAMES.CORE_COLOR_NEUTRAL_70,
              )
          ];

    const disabledInputColorData = genDisabledInputColorData(
        disabledBGColor,
        coreColorNeutralSeed,
    );
    const errorBGColor = getNewColorByLightnessAdjustment(
        errorBaseColor.hex,
        80,
    );
    const errorInputColorData = genErrorInputColorData(
        errorColor?.hex,
        errorBGColor,
    );

    return {
        [formConstToTokenMap.FORM_INPUT_BG_COLOR]:
            semanticTokens[
                massageConstToDotNotation(
                    SEMANTIC_COLOR_TOKEN_NAMES.SEMANTIC_COLOR_CANVAS,
                )
            ],
        [formConstToTokenMap.FORM_INPUT_DISABLED_BG_COLOR]: disabledBGColor,
        [formConstToTokenMap.FORM_INPUT_DISABLED_PLACEHOLDER_TEXT_COLOR]:
            disabledInputColorData?.hex,
        [formConstToTokenMap.FORM_INPUT_ERROR_BORDER_COLOR]:
            errorInputColorData?.hex,
        [formConstToTokenMap.FORM_INPUT_ERROR_PLACEHOLDER_TEXT_COLOR]:
            errorInputColorData?.hex,
        [formConstToTokenMap.FORM_INPUT_ERROR_BG_COLOR]: errorBGColor,
        ...genFocusTokens({
            sourceColor:
                semanticColors[
                    massageConstToDotNotation(
                        SEMANTIC_COLOR_TOKEN_NAMES.SEMANTIC_COLOR_ERROR,
                    )
                ],
            FOCUS_INNER_TOKEN: FORM_INPUT_ERROR_FOCUS_HALO_INNER_COLOR,
            FOCUS_OUTER_TOKEN: FORM_INPUT_ERROR_FOCUS_HALO_OUTER_COLOR,
        }),
        ...genFocusTokens({
            sourceColor,
            FOCUS_INNER_TOKEN: FORM_INPUT_FOCUS_HALO_INNER_COLOR,
            FOCUS_OUTER_TOKEN: FORM_INPUT_FOCUS_HALO_OUTER_COLOR,
        }),
        [formConstToTokenMap.FORM_INPUT_PLACEHOLDER_TEXT_COLOR]:
            semanticTokens[
                massageConstToDotNotation(
                    SEMANTIC_COLOR_TOKEN_NAMES.SEMANTIC_COLOR_TEXT_ALT,
                )
            ],
        [formConstToTokenMap.FORM_DATE_PICKER_OFF_RANGE_TEXT_COLOR]:
            semanticTokens[
                massageConstToDotNotation(
                    SEMANTIC_COLOR_TOKEN_NAMES.SEMANTIC_COLOR_TEXT_ALT,
                )
            ],
        [formConstToTokenMap.FORM_INPUT_TEXT_COLOR]:
            semanticTokens[
                massageConstToDotNotation(
                    SEMANTIC_COLOR_TOKEN_NAMES.SEMANTIC_COLOR_TEXT,
                )
            ],
    };
};

export const genMenuTokens = ({ sourceColor = {}, preferredTextColors }) => {
    const { recommendedColor = {} } = sourceColor;
    const { dark: preferredDarkTextColor, light: preferredLightTextColor } =
        preferredTextColors ?? {};
    const formConstToTokenMap = genConstToDotNotationMap({
        FORM_MENU_SELECTED_BG_COLOR,
        FORM_MENU_SELECTED_FOCUS_BG_COLOR,
        FORM_MENU_SELECTED_FOCUS_TEXT_COLOR,
        FORM_MENU_SELECTED_TEXT_COLOR,
    });
    const interactionColor = getDecorativeComplimentaryColor(sourceColor);

    return {
        [formConstToTokenMap.FORM_MENU_SELECTED_BG_COLOR]: recommendedColor.hex,
        [formConstToTokenMap.FORM_MENU_SELECTED_TEXT_COLOR]:
            getPrioritizedAppTextColor({
                baseHex: recommendedColor.hex,
                preferredDarkTextColor,
                preferredLightTextColor,
            }),
        [formConstToTokenMap.FORM_MENU_SELECTED_FOCUS_BG_COLOR]:
            interactionColor.hex,
        [formConstToTokenMap.FORM_MENU_SELECTED_FOCUS_TEXT_COLOR]:
            getPrioritizedAppTextColor({
                baseHex: interactionColor.hex,
                preferredDarkTextColor,
                preferredLightTextColor,
            }),
    };
};

export const genMultiselectTokens = ({
    semanticTokens,
    preferredTextColors,
    coreColorNeutralSeed,
}) => {
    const {
        [massageConstToDotNotation(
            SEMANTIC_COLOR_TOKEN_NAMES.SEMANTIC_COLOR_TEXT_ALT,
        )]: textAltColor,
    } = semanticTokens ?? {};
    const { dark: preferredDarkTextColor, light: preferredLightTextColor } =
        preferredTextColors ?? {};
    const formConstToTokenMap = genConstToDotNotationMap({
        FORM_PILL_BG_COLOR,
        FORM_PILL_TEXT_COLOR,
        FORM_PILL_FOCUS_HALO_INNER_COLOR,
        FORM_PILL_FOCUS_HALO_OUTER_COLOR,
    });

    return {
        [formConstToTokenMap.FORM_PILL_BG_COLOR]: textAltColor,
        [formConstToTokenMap.FORM_PILL_TEXT_COLOR]: getPrioritizedAppTextColor({
            baseHex: textAltColor,
            preferredDarkTextColor,
            preferredLightTextColor,
        }),
        ...genFocusTokens({
            sourceColor: { baseColor: { hex: coreColorNeutralSeed } },
            FOCUS_INNER_TOKEN: FORM_PILL_FOCUS_HALO_INNER_COLOR,
            FOCUS_OUTER_TOKEN: FORM_PILL_FOCUS_HALO_OUTER_COLOR,
        }),
    };
};

export const genToggleSwitchTokens = ({
    canvasAltColor = {},
    coreColorNeutralSeed,
    sourceColor = {},
    semanticColors = {},
    config = {},
}) => {
    const { isDarkMode = false } = config;
    const { recommendedColor = {} } = sourceColor;
    const formConstToTokenMap = genConstToDotNotationMap({
        FORM_TOGGLE_SWITCH_KNOB_BORDER_COLOR,
        FORM_TOGGLE_SWITCH_KNOB_COLOR,
        FORM_TOGGLE_SWITCH_TRACK_COLOR,
        FORM_TOGGLE_SWITCH_TRACK_HOVER_COLOR,
        FORM_TOGGLE_SWITCH_ON_KNOB_COLOR,
        FORM_TOGGLE_SWITCH_ON_TRACK_COLOR,
        FORM_TOGGLE_SWITCH_ON_TRACK_HOVER_COLOR,
        FORM_TOGGLE_SWITCH_BUSY_ICON_COLOR,
        FORM_TOGGLE_SWITCH_ON_BUSY_ICON_COLOR_COLOR,
        FORM_TOGGLE_SWITCH_ON_FOCUS_HALO_INNER_COLOR,
        FORM_TOGGLE_SWITCH_ON_FOCUS_HALO_OUTER_COLOR,
    });
    const { recommendedColorForNonText: trackColorMetadata, ...rest } =
        genEvaluatedColorMetadata(
            genColorAndVariantsWithMetadata({
                hex: coreColorNeutralSeed,
                step: 1,
            }),
            canvasAltColor,
        );
    let trackColor = trackColorMetadata.hex;

    if (trackColor === coreColorNeutralSeed) {
        const compliantVariants =
            rest?.variants?.filter(
                (variant) => variant.evalsAgainstBGColor.isA11yUICompatible,
            ) || [];

        trackColor =
            compliantVariants[isDarkMode ? compliantVariants.length - 1 : 0]
                ?.hex;
    }
    const { baseColor: canvasColor = {} } =
        semanticColors[
            massageConstToDotNotation(
                SEMANTIC_COLOR_TOKEN_NAMES.SEMANTIC_COLOR_CANVAS,
            )
        ];
    const { hoverColor, hoverOnColor } = genToggleSwitchHoverColorsData({
        trackColor,
        evaluatedNeutrals: {
            recommendedColorForNonText: trackColorMetadata,
            ...rest,
        },
        trackOnColor: sourceColor,
    });

    return {
        [formConstToTokenMap.FORM_TOGGLE_SWITCH_KNOB_BORDER_COLOR]: trackColor,
        [formConstToTokenMap.FORM_TOGGLE_SWITCH_KNOB_COLOR]: canvasColor.hex,
        [formConstToTokenMap.FORM_TOGGLE_SWITCH_ON_KNOB_COLOR]: canvasColor.hex,
        [formConstToTokenMap.FORM_TOGGLE_SWITCH_TRACK_COLOR]: trackColor,
        [formConstToTokenMap.FORM_TOGGLE_SWITCH_TRACK_HOVER_COLOR]: hoverColor,
        [formConstToTokenMap.FORM_TOGGLE_SWITCH_BUSY_ICON_COLOR]:
            canvasColor.hex,
        [formConstToTokenMap.FORM_TOGGLE_SWITCH_ON_BUSY_ICON_COLOR_COLOR]:
            canvasColor.hex,
        [formConstToTokenMap.FORM_TOGGLE_SWITCH_ON_TRACK_HOVER_COLOR]:
            hoverOnColor,
        [formConstToTokenMap.FORM_TOGGLE_SWITCH_ON_TRACK_COLOR]:
            recommendedColor.hex,
        ...genFocusTokens({
            sourceColor,
            FOCUS_INNER_TOKEN: FORM_TOGGLE_SWITCH_ON_FOCUS_HALO_INNER_COLOR,
            FOCUS_OUTER_TOKEN: FORM_TOGGLE_SWITCH_ON_FOCUS_HALO_OUTER_COLOR,
        }),
    };
};
