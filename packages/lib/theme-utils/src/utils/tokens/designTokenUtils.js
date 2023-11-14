import { VARIANTS as BTN_VARIANTS } from '@driponfleek/bankai-ui-buttons';
import { VARIANTS as CALLOUT_VARIANTS } from '@driponfleek/bankai-ui-callouts';
import { genCustomNeutralColors } from './coreNeutralColorTokenUtils';
import {
    genSemanticCanvasColorsTokens,
    genSemanticTextBorderHoverColorTokens,
    genSemanticFocusColorTokens,
} from './semanticColorTokenUtils';
import { genSemanticColorsData } from '../semanticColorDataGenUtils';
// Accordions
import { genAccordionTokens } from './accordionTokenUtils';
// Avatars
import { genAvatarTokens } from './avatarTokenUtils';
// Buttons
import { genBtnTokens, genBtnColorTokens } from './btnTokenUtils';
// Banners
import {
    genBannerTokens,
    genBannerColorTokens,
    genDefaultBannerColorTokens,
} from './bannerTokenUtils';
// Callouts
import { genCalloutTokens } from './calloutTokenUtils';
// Forms
import {
    genFormPresetTokens,
    genToggleInputTokens,
    genInputColorTokens,
    genMenuTokens,
    genMultiselectTokens,
    genToggleSwitchTokens,
} from './formTokenUtils';
// Lists
import { genListTokens } from './listTokenUtils';
// Links
import { genLinkTokens } from './linkTokenUtils';
// Loading
import {
    genLoadingSkeletonTokens,
    genLoadingIconAccentToken,
    genLoadingIconPrimaryToken,
    genLoadingIconSecondaryToken,
} from './loadingTokenUtils';
// Modals
import { genModalTokens } from './modalTokenUtils';
// Tabs
import { genTabsTokens } from './tabsTokenUtils';
// Tiles
import { genTileTokens } from './tileTokenUtils';
// Toasters
import { genToasterPresetTokens, genToasterTokens } from './toasterTokenUtils';
// Tooltips
import { genTooltipPresetTokens, genTooltipTokens } from './tooltipTokenUtils';
// Typography
import { genTypographyTokens } from './typographyTokensUtils';
import { genCSSVars, genConstToDotNotationMap } from '../dataGenUtils';
import {
    massageConstToDotNotation,
    sortDesignTokens,
} from '../dataMassageUtils';
import {
    getThemePresetDefaults,
    getShouldTokenA11yEvalForTextDefaults,
    getComponentConfigsDefaults,
} from '../configUtils';
import { CORE_COLOR_NEUTRAL_SEED } from '../../const/tokens/core/coreColorsConst';
import { SEMANTIC_COLOR_TOKEN_NAMES } from '../../const/tokens/semantic/semanticColorsConst';

const { SEMANTIC_COLOR_CANVAS, SEMANTIC_COLOR_CANVAS_ALT } =
    SEMANTIC_COLOR_TOKEN_NAMES;

const genDesignTokenConfigsWithFallbacks = (config = {}) => {
    return {
        ...config,
        shouldTokenA11yEvalForText: {
            ...getShouldTokenA11yEvalForTextDefaults(),
            ...config.shouldTokenA11yEvalForText,
        },
        componentConfigs: {
            ...getComponentConfigsDefaults(),
            ...config.componentConfigs,
        },
    };
};

export const genDesignTokens = (
    presets = {
        // semantic.color.primary: '#006fa3',
        // semantic.color.ff0000: '#ff0000',
    },
    config = {
        // isDark: false,
    },
) => {
    // const {
    //     isDarkMode = false,
    //     shouldAutoCorrectColors = true,
    //     shouldTokenA11yEvalForText = {},
    //     componentConfigs = {},
    // } = config;
    // Create Constant to Design Token mapping for semantic tokens
    // Rebuild config with fallbacks. Use this going forward
    const configWithFallbacks = genDesignTokenConfigsWithFallbacks(config);
    const { isDarkMode, componentConfigs = {} } = configWithFallbacks;
    const semanticColorsConstToTokenMap = genConstToDotNotationMap(
        SEMANTIC_COLOR_TOKEN_NAMES,
    );
    // Merge passed in presets with defaults to ensure none are left out
    const tokenPresetsWithFallbacks = {
        ...getThemePresetDefaults(isDarkMode),
        ...presets,
    };
    // Remove the neutral seed color so we don't have to handle everywhere else.
    const {
        [massageConstToDotNotation(CORE_COLOR_NEUTRAL_SEED)]:
            coreColorNeutralSeed,
        ...tokenPresets
    } = tokenPresetsWithFallbacks;
    // Give users the opportunity to seed their own Core Neutral colors
    // that will be aliased through semantic color tokens
    const CORE_NEUTRAL_COLORS = genCustomNeutralColors(coreColorNeutralSeed);
    // Generate Canvas design tokens
    const canvasTokens = genSemanticCanvasColorsTokens({
        tokenPresets,
        CORE_NEUTRAL_COLORS,
        config: configWithFallbacks,
        semanticColorsConstToTokenMap,
    });
    // Generate color data for semantic tokens
    const semanticColors = genSemanticColorsData({
        presets: {
            ...tokenPresets,
            ...canvasTokens,
        },
        config: configWithFallbacks,
        semanticColorsConstToTokenMap,
        CORE_NEUTRAL_COLORS,
    });
    const { preferred: canvasColor } =
        semanticColors[semanticColorsConstToTokenMap[SEMANTIC_COLOR_CANVAS]];
    const { preferred: canvasAltColor } =
        semanticColors[
            semanticColorsConstToTokenMap[SEMANTIC_COLOR_CANVAS_ALT]
        ];
    const textBorderHoverTokens = genSemanticTextBorderHoverColorTokens({
        coreColorNeutralSeed,
        semanticColors,
        config: configWithFallbacks,
        semanticColorsConstToTokenMap,
    });
    // Generate Universal Inner/Outer Focus design tokens
    const innerOuterFocusTokens = genSemanticFocusColorTokens(
        semanticColors[componentConfigs?.universalFocus?.sourceColorToken],
    );
    const results = {
        // Canvas Tokens
        ...canvasTokens,
        // Text and Border design tokens
        ...textBorderHoverTokens,
        // Focus Inner/Outer design tokens
        ...innerOuterFocusTokens,
        // Accordions
        ...genAccordionTokens(
            tokenPresets,
            {
                ...canvasTokens,
                ...textBorderHoverTokens,
            },
            semanticColorsConstToTokenMap,
        ),
        // Avatar Tokens
        ...genAvatarTokens(
            semanticColors[componentConfigs?.avatar?.sourceColorToken],
        ),
        // Button Tokens
        ...genBtnTokens(tokenPresets),
        // Primary Button Tokens
        ...genBtnColorTokens({
            canvasColor,
            config: configWithFallbacks,
            variant: BTN_VARIANTS.PRIMARY,
            sourceColor:
                semanticColors[componentConfigs?.btnPrimary?.sourceColorToken],
            style: componentConfigs?.btnPrimary?.style,
        }),
        // Primary Destructive Button Tokens
        ...genBtnColorTokens({
            canvasColor,
            config: configWithFallbacks,
            variant: BTN_VARIANTS.PRIMARY_DESTRUCTIVE,
            sourceColor:
                semanticColors[
                    componentConfigs?.btnPrimaryDestructive?.sourceColorToken
                ],
            style: componentConfigs?.btnPrimaryDestructive?.style,
        }),
        // Secondary Button Tokens
        ...genBtnColorTokens({
            canvasColor,
            config: configWithFallbacks,
            variant: BTN_VARIANTS.SECONDARY,
            sourceColor:
                semanticColors[
                    componentConfigs?.btnSecondary?.sourceColorToken
                ],
            style: componentConfigs?.btnSecondary?.style,
        }),
        // Secondary Destructive Button Tokens
        ...genBtnColorTokens({
            canvasColor,
            config: configWithFallbacks,
            variant: BTN_VARIANTS.SECONDARY_DESTRUCTIVE,
            sourceColor:
                semanticColors[
                    componentConfigs?.btnSecondaryDestructive?.sourceColorToken
                ],
            style: componentConfigs?.btnSecondaryDestructive?.style,
        }),
        // Banner Tokens
        ...genBannerTokens(tokenPresets),
        // Banner (Default) Tokens
        ...genDefaultBannerColorTokens(canvasAltColor, configWithFallbacks),
        // Banner (Affirmative) Tokens
        ...genBannerColorTokens(
            semanticColors[
                componentConfigs?.bannerAffirmative?.sourceColorToken
            ],
            CALLOUT_VARIANTS.AFFIRMATIVE,
        ),
        // Banner (Cautionary) Tokens
        ...genBannerColorTokens(
            semanticColors[
                componentConfigs?.bannerCautionary?.sourceColorToken
            ],
            CALLOUT_VARIANTS.CAUTIONARY,
        ),
        // Banner (Danger) Tokens
        ...genBannerColorTokens(
            semanticColors[componentConfigs?.bannerDanger?.sourceColorToken],
            CALLOUT_VARIANTS.DANGER,
        ),
        // Banner (Info) Tokens
        ...genBannerColorTokens(
            semanticColors[componentConfigs?.bannerInfo?.sourceColorToken],
            CALLOUT_VARIANTS.INFO,
        ),
        // Callout (Affirmative) Tokens
        ...genCalloutTokens(
            semanticColors[
                componentConfigs?.calloutAffirmative?.sourceColorToken
            ],
            CALLOUT_VARIANTS.AFFIRMATIVE,
        ),
        // Callout (Cautionary) Tokens
        ...genCalloutTokens(
            semanticColors[
                componentConfigs?.calloutCautionary?.sourceColorToken
            ],
            CALLOUT_VARIANTS.CAUTIONARY,
        ),
        // Callout (Danger) Tokens
        ...genCalloutTokens(
            semanticColors[componentConfigs?.calloutDanger?.sourceColorToken],
            CALLOUT_VARIANTS.DANGER,
        ),
        // Callout (Info) Tokens
        ...genCalloutTokens(
            semanticColors[componentConfigs?.calloutInfo?.sourceColorToken],
            CALLOUT_VARIANTS.INFO,
        ),
        // Forms
        ...genFormPresetTokens(tokenPresets),
        ...genInputColorTokens({
            sourceColor:
                semanticColors[componentConfigs?.formInputs?.sourceColorToken],
            config: configWithFallbacks,
            semanticColors,
            semanticTokens: textBorderHoverTokens,
            CORE_NEUTRAL_COLORS,
            semanticColorsConstToTokenMap,
        }),
        ...genMenuTokens({
            sourceColor:
                semanticColors[componentConfigs?.formMenus?.sourceColorToken],
            semanticColors,
            config: configWithFallbacks,
        }),
        ...genMultiselectTokens(
            semanticColors[componentConfigs?.multiselect?.sourceColorToken],
        ),
        ...genToggleSwitchTokens({
            sourceColor:
                semanticColors[
                    componentConfigs?.toggleSwitch?.sourceColorToken
                ],
            semanticColors,
            semanticColorsConstToTokenMap,
            CORE_NEUTRAL_COLORS,
        }),
        ...genToggleInputTokens({
            sourceColor:
                semanticColors[
                    componentConfigs?.toggleInputs?.sourceColorToken
                ],
            canvasColor,
            config: configWithFallbacks,
        }),
        // Lists
        ...genListTokens(tokenPresets),
        // Links
        ...genLinkTokens({
            sourceColor:
                semanticColors[componentConfigs?.link?.sourceColorToken],
            semanticTokens: textBorderHoverTokens,
            semanticColorsConstToTokenMap,
            config: configWithFallbacks,
        }),
        // Loading
        ...genLoadingSkeletonTokens(CORE_NEUTRAL_COLORS, configWithFallbacks),
        ...genLoadingIconAccentToken(
            semanticColors[
                componentConfigs?.loadingIconAccent?.sourceColorToken
            ],
        ),
        ...genLoadingIconPrimaryToken(
            semanticColors[
                componentConfigs?.loadingIconPrimary?.sourceColorToken
            ],
        ),
        ...genLoadingIconSecondaryToken(
            semanticColors[
                componentConfigs?.loadingIconSecondary?.sourceColorToken
            ],
        ),
        // Modals
        ...genModalTokens(tokenPresets),
        // Tabs
        ...genTabsTokens({
            sourceColor:
                semanticColors[componentConfigs?.tabs?.sourceColorToken],
            semanticColorsConstToTokenMap,
            config: configWithFallbacks,
            semanticColors,
            semanticTokens: textBorderHoverTokens,
            CORE_NEUTRAL_COLORS,
        }),
        // Tiles
        ...genTileTokens(tokenPresets),
        // Toasters
        ...genToasterPresetTokens(tokenPresets),
        ...genToasterTokens(
            semanticColors[
                componentConfigs?.toasterAffirmative?.sourceColorToken
            ],
            'AFFIRMATIVE',
        ),
        ...genToasterTokens(
            semanticColors[
                componentConfigs?.toasterCautionary?.sourceColorToken
            ],
            'CAUTIONARY',
        ),
        ...genToasterTokens(
            semanticColors[componentConfigs?.toasterError?.sourceColorToken],
            'ERROR',
        ),
        ...genToasterTokens(
            semanticColors[componentConfigs?.toasterInfo?.sourceColorToken],
            'INFO',
        ),
        // Tooltips
        ...genTooltipPresetTokens(tokenPresets),
        ...genTooltipTokens(
            semanticColors[componentConfigs?.tooltipIcon?.sourceColorToken],
        ),
        // Typography Tokens
        ...genTypographyTokens(tokenPresets),
    };
    console.groupCollapsed();
    // console.group();
    // console.log('semanticColors: ', semanticColors);
    // console.log('tokenPresets: ', tokenPresets);

    console.table(CORE_NEUTRAL_COLORS);
    console.table(sortDesignTokens(results));

    // console.log(
    //     'results: ',
    //     JSON.stringify(sortDesignTokens(results), undefined, 4),
    // );
    console.groupEnd();

    return results;
};

export const genDesignTokenCSS = (presets, config = {}) => {
    const { cssSelector = ':root', ...rest } = config;

    return genCSSVars(genDesignTokens(presets, { ...rest }), cssSelector);
};
