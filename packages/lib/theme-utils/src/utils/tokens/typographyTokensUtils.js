import { genConstToDotNotationMap } from '../dataGenUtils';
import {
    BASE_FONT_SIZE,
    FONT_SIZE_SCALE,
    MOBILE_FONT_SIZE_SCALE,
    getFontSizes,
} from '../typographyUtils';
import {
    SEMANTIC_TYPOGRAPHY_TOKEN_DEFAULTS,
    SEMANTIC_TYPOGRAPHY_TOKEN_NAMES,
    SEMANTIC_TYPOGRAPHY_RESPONSIVE_MOBILE_STYLE_TOKEN_NAMES,
} from '../../const/tokens/semantic/semanticTypographyConst';

// Web
const {
    SEMANTIC_TYPOGRAPHY_DISPLAY_FONT_WEIGHT,
    SEMANTIC_TYPOGRAPHY_DISPLAY_XLARGE_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_DISPLAY_LARGE_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_DISPLAY_MEDIUM_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_DISPLAY_SMALL_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_FONT_FAMILY,
    SEMANTIC_TYPOGRAPHY_FONT_FAMILY_FALLBACK,
    SEMANTIC_TYPOGRAPHY_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_FONT_SIZE_SCALE,
    SEMANTIC_TYPOGRAPHY_FONT_WEIGHT,
    SEMANTIC_TYPOGRAPHY_FOOTNOTE_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_FORM_INPUT_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_FAMILY,
    SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_FAMILY_FALLBACK,
    SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_STYLE,
    SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_WEIGHT,
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL1_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL2_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL3_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL4_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL5_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL6_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_HEADINGS_LINE_HEIGHT,
    SEMANTIC_TYPOGRAPHY_LINE_HEIGHT,
    SEMANTIC_TYPOGRAPHY_SUB_TEXT_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_SMALL_FONT_SIZE,
} = SEMANTIC_TYPOGRAPHY_TOKEN_NAMES;
// Mobile
const {
    SEMANTIC_TYPOGRAPHY_DISPLAY_XLARGE_MOBILE_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_DISPLAY_LARGE_MOBILE_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_DISPLAY_MEDIUM_MOBILE_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_DISPLAY_SMALL_MOBILE_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_FOOTNOTE_MOBILE_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_FORM_INPUT_MOBILE_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL1_MOBILE_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL2_MOBILE_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL3_MOBILE_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL4_MOBILE_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL5_MOBILE_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL6_MOBILE_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_MOBILE_FONT_SIZE_SCALE,
    SEMANTIC_TYPOGRAPHY_SUB_TEXT_MOBILE_FONT_SIZE,
    SEMANTIC_TYPOGRAPHY_SMALL_MOBILE_FONT_SIZE,
} = SEMANTIC_TYPOGRAPHY_RESPONSIVE_MOBILE_STYLE_TOKEN_NAMES;

export const genCommonTypographyTokens = (
    data = {},
    typographyConstToTokenMap = {},
) => {
    const {
        // Body Font Family
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_FONT_FAMILY]]:
            fontFamily = SEMANTIC_TYPOGRAPHY_TOKEN_DEFAULTS[
                SEMANTIC_TYPOGRAPHY_FONT_FAMILY
            ],
        // Body Font Family Fallback
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_FONT_FAMILY_FALLBACK]]:
            fontFamilyFallback = SEMANTIC_TYPOGRAPHY_TOKEN_DEFAULTS[
                SEMANTIC_TYPOGRAPHY_FONT_FAMILY_FALLBACK
            ],
        // Headings Font Family
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_FAMILY]]:
            headingsFontFamily = SEMANTIC_TYPOGRAPHY_TOKEN_DEFAULTS[
                SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_FAMILY
            ],
        // Headings Font Family Fallback
        [typographyConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_FAMILY_FALLBACK
        ]]: headingsFontFamilyFallback = SEMANTIC_TYPOGRAPHY_TOKEN_DEFAULTS[
            SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_FAMILY_FALLBACK
        ],
        // Headings Font Style
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_STYLE]]:
            headingsFontStyle = SEMANTIC_TYPOGRAPHY_TOKEN_DEFAULTS[
                SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_STYLE
            ],
        // Headings Font Weight
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_WEIGHT]]:
            headingsFontWeight = SEMANTIC_TYPOGRAPHY_TOKEN_DEFAULTS[
                SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_WEIGHT
            ],
        // Display Font Weight
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_DISPLAY_FONT_WEIGHT]]:
            displayFontWeight = SEMANTIC_TYPOGRAPHY_TOKEN_DEFAULTS[
                SEMANTIC_TYPOGRAPHY_DISPLAY_FONT_WEIGHT
            ],
    } = data;

    return {
        // Body Font Family
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_FONT_FAMILY]]:
            fontFamily,
        // Body Font Family Fallback
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_FONT_FAMILY_FALLBACK]]:
            fontFamilyFallback,
        // Body Font Weight
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_FONT_WEIGHT]]:
            SEMANTIC_TYPOGRAPHY_TOKEN_DEFAULTS[SEMANTIC_TYPOGRAPHY_FONT_WEIGHT],
        // Display Font Weight
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_DISPLAY_FONT_WEIGHT]]:
            displayFontWeight,
        // Headings Font Family
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_FAMILY]]:
            headingsFontFamily,
        // Headings Font Family Fallback
        [typographyConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_FAMILY_FALLBACK
        ]]: headingsFontFamilyFallback,
        // Headings Font Style
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_STYLE]]:
            headingsFontStyle,
        // Headings Font Weight
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_WEIGHT]]:
            headingsFontWeight,
        // Headings Line Height
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_HEADINGS_LINE_HEIGHT]]:
            SEMANTIC_TYPOGRAPHY_TOKEN_DEFAULTS[
                SEMANTIC_TYPOGRAPHY_HEADINGS_LINE_HEIGHT
            ],
        // Body Line Height
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_LINE_HEIGHT]]:
            SEMANTIC_TYPOGRAPHY_TOKEN_DEFAULTS[SEMANTIC_TYPOGRAPHY_LINE_HEIGHT],
    };
};

export const genResponsiveMobileTypographyTokens = (
    data = {},
    baseSize = BASE_FONT_SIZE,
) => {
    const typographyMobileConstToTokenMap = genConstToDotNotationMap(
        SEMANTIC_TYPOGRAPHY_RESPONSIVE_MOBILE_STYLE_TOKEN_NAMES,
    );
    const {
        // Mobile Font Size Scale
        [typographyMobileConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_MOBILE_FONT_SIZE_SCALE
        ]]: mobileScale = MOBILE_FONT_SIZE_SCALE,
    } = data;
    const {
        displayXLarge,
        displayLarge,
        displayMedium,
        displaySmall,
        footnote,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        formInput,
        small,
        subText,
    } = getFontSizes({ scale: mobileScale, baseSize });

    return {
        // Mobile Font Size Scale
        [typographyMobileConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_MOBILE_FONT_SIZE_SCALE
        ]]: mobileScale,
        // Display
        [typographyMobileConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_DISPLAY_XLARGE_MOBILE_FONT_SIZE
        ]]: displayXLarge,
        [typographyMobileConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_DISPLAY_LARGE_MOBILE_FONT_SIZE
        ]]: displayLarge,
        [typographyMobileConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_DISPLAY_MEDIUM_MOBILE_FONT_SIZE
        ]]: displayMedium,
        [typographyMobileConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_DISPLAY_SMALL_MOBILE_FONT_SIZE
        ]]: displaySmall,
        // Footnotes
        [typographyMobileConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_FOOTNOTE_MOBILE_FONT_SIZE
        ]]: footnote,
        // Form Inputs
        [typographyMobileConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_FORM_INPUT_MOBILE_FONT_SIZE
        ]]: formInput,
        // H1
        [typographyMobileConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL1_MOBILE_FONT_SIZE
        ]]: h1,
        // H2
        [typographyMobileConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL2_MOBILE_FONT_SIZE
        ]]: h2,
        // H3
        [typographyMobileConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL3_MOBILE_FONT_SIZE
        ]]: h3,
        // H4
        [typographyMobileConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL4_MOBILE_FONT_SIZE
        ]]: h4,
        // H5
        [typographyMobileConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL5_MOBILE_FONT_SIZE
        ]]: h5,
        // H6
        [typographyMobileConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL6_MOBILE_FONT_SIZE
        ]]: h6,
        // Small
        [typographyMobileConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_SMALL_MOBILE_FONT_SIZE
        ]]: small,
        // Sub-Text
        [typographyMobileConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_SUB_TEXT_MOBILE_FONT_SIZE
        ]]: subText,
    };
};

export const genTypographyTokens = (data = {}) => {
    const typographyConstToTokenMap = genConstToDotNotationMap(
        SEMANTIC_TYPOGRAPHY_TOKEN_NAMES,
    );
    const {
        // Body Font Size
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_FONT_SIZE]]:
            baseSize = BASE_FONT_SIZE,
        // Font Size Scale
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_FONT_SIZE_SCALE]]:
            baseScale = FONT_SIZE_SCALE,
    } = data;
    const {
        displayXLarge,
        displayLarge,
        displayMedium,
        displaySmall,
        footnote,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        formInput,
        small,
        subText,
    } = getFontSizes({ scale: baseScale, baseSize });

    return {
        // Common Tokens
        ...genCommonTypographyTokens(data, typographyConstToTokenMap),
        // Body Font Size
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_FONT_SIZE]]: baseSize,
        // Display
        [typographyConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_DISPLAY_XLARGE_FONT_SIZE
        ]]: displayXLarge,
        [typographyConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_DISPLAY_LARGE_FONT_SIZE
        ]]: displayLarge,
        [typographyConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_DISPLAY_MEDIUM_FONT_SIZE
        ]]: displayMedium,
        [typographyConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_DISPLAY_SMALL_FONT_SIZE
        ]]: displaySmall,
        // Font Size Scale
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_FONT_SIZE_SCALE]]:
            baseScale,
        // Footnotes
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_FOOTNOTE_FONT_SIZE]]:
            footnote,
        // Form Inputs
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_FORM_INPUT_FONT_SIZE]]:
            formInput,
        // H1
        [typographyConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL1_FONT_SIZE
        ]]: h1,
        // H2
        [typographyConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL2_FONT_SIZE
        ]]: h2,
        // H3
        [typographyConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL3_FONT_SIZE
        ]]: h3,
        // H4
        [typographyConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL4_FONT_SIZE
        ]]: h4,
        // H5
        [typographyConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL5_FONT_SIZE
        ]]: h5,
        // H6
        [typographyConstToTokenMap[
            SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL6_FONT_SIZE
        ]]: h6,
        // Sub-Text
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_SUB_TEXT_FONT_SIZE]]:
            subText,
        // Small
        [typographyConstToTokenMap[SEMANTIC_TYPOGRAPHY_SMALL_FONT_SIZE]]: small,
        // Mobile Tokens
        ...genResponsiveMobileTypographyTokens(data, baseSize),
    };
};
