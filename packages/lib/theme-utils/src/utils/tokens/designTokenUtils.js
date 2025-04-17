import { genCustomNeutralColors } from './coreNeutralColorTokenUtils';
import {
    genSemanticCanvasColorsTokens,
    genSemanticTextBorderHoverColorTokens,
    genSemanticFocusColorTokens,
} from './semanticColorTokenUtils';
// Semantic Colors
import { genSemanticColorsMetadata } from '../semanticColorDataGenUtils';
// Data Vis
import {
    genDataVisTokens,
    genBrewerQualitativeTokens,
    genBrewerDivergingTokens,
    genBrewerSequentialTokens,
    genCartoColorDivergingTokens,
    genCartoColorQualitativeTokens,
    genCartoColorSequentialTokens,
} from './dataVisTokenUtils';
// Accordions
import { genAccordionTokens } from './accordionTokenUtils';
// Avatars
import { genAvatarTokens } from './avatarTokenUtils';
// Badges
import {
    genDefaultBadgeColorTokens,
    genBadgeTokens,
    genBadgeColorTokens,
} from './badgeTokenUtils';
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
// DND
import { genDNDTokens, genDNDDropzoneTokens } from './dndTokenUtils';
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
    getEvaluateForTextComplianceDefaults,
    getUIConfigsDefaults,
} from '../configUtils';
import { BUTTON_VARIANTS } from '../../const/tokens/component/buttonsConst';
import { CALLOUT_VARIANTS } from '../../const/tokens/component/calloutsConst';
import { BADGE_VARIANTS } from '../../const/tokens/component/badgeConst';
import {
    CORE_COLOR_NEUTRAL_SEED,
    CORE_NEUTRAL_COLOR_TOKEN_NAMES,
} from '../../const/tokens/core/coreColorsConst';
import { SEMANTIC_COLOR_TOKEN_NAMES } from '../../const/tokens/semantic/semanticColorsConst';

const { SEMANTIC_COLOR_CANVAS, SEMANTIC_COLOR_CANVAS_ALT } =
    SEMANTIC_COLOR_TOKEN_NAMES;

const genDesignTokenConfigsWithFallbacks = (config = {}) => {
    return {
        variantsStep: 2,
        shouldAutoCorrectColors: true,
        // shouldUseMinimumAPCATextCompliance: true,
        ...config,
        evaluateForTextCompliance: {
            ...getEvaluateForTextComplianceDefaults(),
            ...config.evaluateForTextCompliance,
        },
        componentConfigs: {
            ...getUIConfigsDefaults(),
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
        // isDarkMode: false,
        // shouldAutoCorrectColors: true,
        // shouldUseMinimumAPCATextCompliance: true,
        // evaluateForTextCompliance: {},
        // componentConfigs: {},
        // variantsStep: 2,
    },
) => {
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
    const preferredTextColors = {
        dark: CORE_NEUTRAL_COLORS[
            massageConstToDotNotation(
                CORE_NEUTRAL_COLOR_TOKEN_NAMES.CORE_COLOR_NEUTRAL_10,
            )
        ],
        light: CORE_NEUTRAL_COLORS[
            massageConstToDotNotation(
                CORE_NEUTRAL_COLOR_TOKEN_NAMES.CORE_COLOR_NEUTRAL_90,
            )
        ],
    };
    // Generate Canvas design tokens
    const canvasBaseTokens = genSemanticCanvasColorsTokens({
        coreColorNeutralSeed,
        config: configWithFallbacks,
    });
    // Generate semantic color metadata and semantic tokens
    const { semanticColorsMetadata: semanticColors, semanticColorTokens } =
        genSemanticColorsMetadata({
            presets: {
                ...tokenPresets,
                ...canvasBaseTokens,
            },
            config: configWithFallbacks,
            preferredTextColors,
        });
    // Generate Text, Borders and Hover Tokens
    const textBorderHoverTokens = genSemanticTextBorderHoverColorTokens({
        config: configWithFallbacks,
        coreColorNeutralSeed,
        semanticColors,
        preferredTextColors,
    });

    const { baseColor: canvasColorMetadata } =
        semanticColors[semanticColorsConstToTokenMap[SEMANTIC_COLOR_CANVAS]];
    const { baseColor: canvasAltColorMetadata } =
        semanticColors[
            semanticColorsConstToTokenMap[SEMANTIC_COLOR_CANVAS_ALT]
        ];
    // Generate Universal Inner/Outer Focus design tokens
    const innerOuterFocusTokens = genSemanticFocusColorTokens(
        semanticColors[componentConfigs?.universalFocus?.sourceColorToken],
    );

    const results = sortDesignTokens({
        // Semantic Tokens
        ...semanticColorTokens,
        // Data Vis Tokens
        ...genDataVisTokens({
            ...semanticColorTokens,
            ...textBorderHoverTokens,
        }),
        ...genBrewerDivergingTokens(),
        ...genBrewerQualitativeTokens(),
        ...genBrewerSequentialTokens(),
        ...genCartoColorDivergingTokens(),
        ...genCartoColorQualitativeTokens(),
        ...genCartoColorSequentialTokens(),
        // Text and Border design tokens
        ...textBorderHoverTokens,
        // Focus Inner/Outer design tokens
        ...innerOuterFocusTokens,
        // Accordions
        ...genAccordionTokens(
            tokenPresets,
            {
                ...canvasBaseTokens,
                ...textBorderHoverTokens,
            },
            semanticColorsConstToTokenMap,
        ),
        // Avatar Tokens
        ...genAvatarTokens({
            sourceColors: {
                background:
                    semanticColors[componentConfigs?.avatar?.sourceColorToken],
                text: semanticColors[
                    `${componentConfigs?.avatar?.sourceColorToken}.text`
                ],
            },
        }),
        // Badge Tokens
        ...genBadgeTokens(tokenPresets),
        // Badge (Default) Tokens
        ...genDefaultBadgeColorTokens({
            config: configWithFallbacks,
            coreColorNeutralSeed,
            preferredTextColors,
        }),
        // Badge (Affirmative) Tokens
        ...genBadgeColorTokens({
            sourceColors: {
                background:
                    semanticColors[
                        `${componentConfigs?.badgeAffirmative?.sourceColorToken}.decorative`
                    ],
                text: semanticColors[
                    `${componentConfigs?.badgeAffirmative?.sourceColorToken}.decorative.text`
                ],
                icon: semanticColors[
                    `${componentConfigs?.badgeAffirmative?.sourceColorToken}.decorative.accent`
                ],
            },
            variant: BADGE_VARIANTS.AFFIRMATIVE,
        }),
        // Badge (Cautionary) Tokens
        ...genBadgeColorTokens({
            sourceColors: {
                background:
                    semanticColors[
                        `${componentConfigs?.badgeCautionary?.sourceColorToken}.decorative`
                    ],
                text: semanticColors[
                    `${componentConfigs?.badgeCautionary?.sourceColorToken}.decorative.text`
                ],
                icon: semanticColors[
                    `${componentConfigs?.badgeCautionary?.sourceColorToken}.decorative.accent`
                ],
            },
            variant: BADGE_VARIANTS.CAUTIONARY,
        }),
        // Badge (Danger) Tokens
        ...genBadgeColorTokens({
            sourceColors: {
                background:
                    semanticColors[
                        `${componentConfigs?.badgeDanger?.sourceColorToken}.decorative`
                    ],
                text: semanticColors[
                    `${componentConfigs?.badgeDanger?.sourceColorToken}.decorative.text`
                ],
                icon: semanticColors[
                    `${componentConfigs?.badgeDanger?.sourceColorToken}.decorative.accent`
                ],
            },
            variant: BADGE_VARIANTS.DANGER,
        }),
        // Badge (Info) Tokens
        ...genBadgeColorTokens({
            sourceColors: {
                background:
                    semanticColors[
                        `${componentConfigs?.badgeInfo?.sourceColorToken}.decorative`
                    ],
                text: semanticColors[
                    `${componentConfigs?.badgeInfo?.sourceColorToken}.decorative.text`
                ],
                icon: semanticColors[
                    `${componentConfigs?.badgeInfo?.sourceColorToken}.decorative.accent`
                ],
            },
            variant: BADGE_VARIANTS.INFO,
        }),
        // Banner Tokens
        ...genBannerTokens(tokenPresets),
        // Banner (Default) Tokens
        ...genDefaultBannerColorTokens({
            config: configWithFallbacks,
            coreColorNeutralSeed,
            preferredTextColors,
        }),
        // Banner (Affirmative) Tokens
        ...genBannerColorTokens({
            sourceColors: {
                background:
                    semanticColors[
                        `${componentConfigs?.bannerAffirmative?.sourceColorToken}.decorative`
                    ],
                text: semanticColors[
                    `${componentConfigs?.bannerAffirmative?.sourceColorToken}.decorative.text`
                ],
                icon: semanticColors[
                    `${componentConfigs?.bannerAffirmative?.sourceColorToken}.decorative.accent`
                ],
            },
            variant: CALLOUT_VARIANTS.AFFIRMATIVE,
        }),
        // Banner (Cautionary) Tokens
        ...genBannerColorTokens({
            sourceColors: {
                background:
                    semanticColors[
                        `${componentConfigs?.bannerCautionary?.sourceColorToken}.decorative`
                    ],
                text: semanticColors[
                    `${componentConfigs?.bannerCautionary?.sourceColorToken}.decorative.text`
                ],
                icon: semanticColors[
                    `${componentConfigs?.bannerCautionary?.sourceColorToken}.decorative.accent`
                ],
            },
            variant: CALLOUT_VARIANTS.CAUTIONARY,
        }),
        // Banner (Danger) Tokens
        ...genBannerColorTokens({
            sourceColors: {
                background:
                    semanticColors[
                        `${componentConfigs?.bannerDanger?.sourceColorToken}.decorative`
                    ],
                text: semanticColors[
                    `${componentConfigs?.bannerDanger?.sourceColorToken}.decorative.text`
                ],
                icon: semanticColors[
                    `${componentConfigs?.bannerDanger?.sourceColorToken}.decorative.accent`
                ],
            },
            variant: CALLOUT_VARIANTS.DANGER,
        }),
        // Banner (Info) Tokens
        ...genBannerColorTokens({
            sourceColors: {
                background:
                    semanticColors[
                        `${componentConfigs?.bannerInfo?.sourceColorToken}.decorative`
                    ],
                text: semanticColors[
                    `${componentConfigs?.bannerInfo?.sourceColorToken}.decorative.text`
                ],
                icon: semanticColors[
                    `${componentConfigs?.bannerInfo?.sourceColorToken}.decorative.accent`
                ],
            },
            variant: CALLOUT_VARIANTS.INFO,
        }),
        // Button Tokens
        ...genBtnTokens(tokenPresets),
        // Primary Button Tokens
        ...genBtnColorTokens({
            sourceColors: {
                background:
                    semanticColors[
                        componentConfigs?.btnPrimary?.sourceColorToken
                    ],
                text: semanticColors[
                    `${componentConfigs?.btnPrimary?.sourceColorToken}.text`
                ],
            },
            canvasColor: canvasColorMetadata,
            config: configWithFallbacks,
            preferredTextColors,
            style: componentConfigs?.btnPrimary?.style,
            variant: BUTTON_VARIANTS.PRIMARY,
        }),
        // Primary Destructive Button Tokens
        ...genBtnColorTokens({
            sourceColors: {
                background:
                    semanticColors[
                        componentConfigs?.btnPrimaryDestructive
                            ?.sourceColorToken
                    ],
                text: semanticColors[
                    `${componentConfigs?.btnPrimaryDestructive?.sourceColorToken}.text`
                ],
            },
            canvasColor: canvasColorMetadata,
            config: configWithFallbacks,
            preferredTextColors,
            style: componentConfigs?.btnPrimaryDestructive?.style,
            variant: BUTTON_VARIANTS.PRIMARY_DESTRUCTIVE,
        }),
        // Secondary Button Tokens
        ...genBtnColorTokens({
            sourceColors: {
                background:
                    semanticColors[
                        componentConfigs?.btnSecondary?.sourceColorToken
                    ],
                text: semanticColors[
                    `${componentConfigs?.btnSecondary?.sourceColorToken}.text`
                ],
            },
            canvasColor: canvasColorMetadata,
            config: configWithFallbacks,
            preferredTextColors,
            style: componentConfigs?.btnSecondary?.style,
            variant: BUTTON_VARIANTS.SECONDARY,
        }),
        // Secondary Destructive Button Tokens
        ...genBtnColorTokens({
            sourceColors: {
                background:
                    semanticColors[
                        componentConfigs?.btnSecondaryDestructive
                            ?.sourceColorToken
                    ],
                text: semanticColors[
                    `${componentConfigs?.btnSecondaryDestructive?.sourceColorToken}.text`
                ],
            },
            canvasColor: canvasColorMetadata,
            config: configWithFallbacks,
            preferredTextColors,
            style: componentConfigs?.btnSecondaryDestructive?.style,
            variant: BUTTON_VARIANTS.SECONDARY_DESTRUCTIVE,
        }),
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
        // DND
        ...genDNDTokens(tokenPresets),
        ...genDNDDropzoneTokens({
            sourceColors: {
                background:
                    semanticColors[
                        `${componentConfigs?.dnd?.sourceColorToken}.decorative`
                    ],
                border: semanticColors[
                    `${componentConfigs?.dnd?.sourceColorToken}.decorative.accent`
                ],
                text: semanticColors[
                    `${componentConfigs?.dnd?.sourceColorToken}.decorative.text`
                ],
            },
        }),
        ...genDNDDropzoneTokens({
            sourceColors: {
                background:
                    semanticColors[
                        `${componentConfigs?.dndDenied?.sourceColorToken}.decorative`
                    ],
                border: semanticColors[
                    `${componentConfigs?.dndDenied?.sourceColorToken}.decorative.accent`
                ],
                text: semanticColors[
                    `${componentConfigs?.dndDenied?.sourceColorToken}.decorative.text`
                ],
            },
            isDenied: true,
        }),
        // Forms
        ...genFormPresetTokens(tokenPresets),
        ...genInputColorTokens({
            sourceColor:
                semanticColors[componentConfigs?.formInputs?.sourceColorToken],
            config: configWithFallbacks,
            semanticColors,
            semanticTokens: {
                ...semanticColorTokens,
                ...textBorderHoverTokens,
            },
            coreColorNeutralSeed,
        }),
        ...genToggleInputTokens({
            sourceColor:
                semanticColors[
                    componentConfigs?.toggleInputs?.sourceColorToken
                ],
            canvasColor: canvasColorMetadata,
            config: configWithFallbacks,
        }),
        ...genMenuTokens({
            sourceColor:
                semanticColors[componentConfigs?.formMenus?.sourceColorToken],
            semanticColors,
            preferredTextColors,
            config: configWithFallbacks,
        }),
        ...genMultiselectTokens({
            preferredTextColors,
            semanticTokens: {
                ...semanticColorTokens,
                ...textBorderHoverTokens,
            },
            coreColorNeutralSeed,
        }),
        ...genToggleSwitchTokens({
            sourceColor:
                semanticColors[
                    componentConfigs?.toggleSwitch?.sourceColorToken
                ],
            semanticColors,
            canvasAltColor: canvasAltColorMetadata,
            coreColorNeutralSeed,
            config: configWithFallbacks,
        }),
        // Lists
        ...genListTokens(tokenPresets),
        // Links
        ...genLinkTokens({
            sourceColor:
                semanticColors[componentConfigs?.link?.sourceColorToken],
            semanticTokens: textBorderHoverTokens,
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
            semanticColors,
            semanticTokens: textBorderHoverTokens,
        }),
        // Tiles
        ...genTileTokens(tokenPresets),
        // Toasters
        ...genToasterPresetTokens(tokenPresets),
        ...genToasterTokens({
            sourceColors: {
                background:
                    semanticColors[
                        componentConfigs?.toasterAffirmative?.sourceColorToken
                    ],
                text: semanticColors[
                    `${componentConfigs?.toasterAffirmative?.sourceColorToken}.text`
                ],
            },
            variant: 'AFFIRMATIVE',
        }),
        ...genToasterTokens({
            sourceColors: {
                background:
                    semanticColors[
                        componentConfigs?.toasterCautionary?.sourceColorToken
                    ],
                text: semanticColors[
                    `${componentConfigs?.toasterCautionary?.sourceColorToken}.text`
                ],
            },
            variant: 'CAUTIONARY',
        }),
        ...genToasterTokens({
            sourceColors: {
                background:
                    semanticColors[
                        componentConfigs?.toasterError?.sourceColorToken
                    ],
                text: semanticColors[
                    `${componentConfigs?.toasterError?.sourceColorToken}.text`
                ],
            },
            variant: 'ERROR',
        }),
        ...genToasterTokens({
            sourceColors: {
                background:
                    semanticColors[
                        componentConfigs?.toasterInfo?.sourceColorToken
                    ],
                text: semanticColors[
                    `${componentConfigs?.toasterInfo?.sourceColorToken}.text`
                ],
            },
            variant: 'INFO',
        }),
        // Tooltips
        ...genTooltipPresetTokens(tokenPresets),
        ...genTooltipTokens(
            semanticColors[componentConfigs?.tooltipIcon?.sourceColorToken],
        ),
        // Typography Tokens
        ...genTypographyTokens(tokenPresets),
    });
    console.groupCollapsed(
        '%c %s',
        'background-color: white; color: black;',
        'Design Token Generator',
    );
    // console.log('Semantic Colors: ', semanticColors);
    console.log('Core Neutral Colors:');
    // console.table(CORE_NEUTRAL_COLORS);
    // console.table(results);

    console.log(
        'results: ',
        JSON.stringify(sortDesignTokens(results), undefined, 4),
    );
    console.groupEnd();

    return results;
};

export const genDesignTokenCSS = (presets, config = {}) => {
    const { cssSelector = ':root', ...rest } = config;

    return genCSSVars(genDesignTokens(presets, { ...rest }), cssSelector);
};
