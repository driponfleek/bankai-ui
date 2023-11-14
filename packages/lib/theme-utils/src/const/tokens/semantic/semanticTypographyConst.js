import {
    BASE_FONT_SIZE,
    FONT_SIZE_SCALE,
    MOBILE_FONT_SIZE_SCALE,
    getFontSizes,
} from '../../../utils/typographyUtils';

const FONT_FAMILY_FALLBACK = 'sans-serif';
const webFontSizes = getFontSizes();
const mobileFontSizes = getFontSizes({ scale: MOBILE_FONT_SIZE_SCALE });

export const SEMANTIC_TYPOGRAPHY_TOKEN_NAMES = {
    // Body Font Family
    SEMANTIC_TYPOGRAPHY_FONT_FAMILY: 'SEMANTIC_TYPOGRAPHY_FONT_FAMILY',
    // Body Font Family Fallback
    SEMANTIC_TYPOGRAPHY_FONT_FAMILY_FALLBACK:
        'SEMANTIC_TYPOGRAPHY_FONT_FAMILY_FALLBACK',
    // Body Font Size
    SEMANTIC_TYPOGRAPHY_FONT_SIZE: 'SEMANTIC_TYPOGRAPHY_FONT_SIZE',
    // Font Size Scale
    SEMANTIC_TYPOGRAPHY_FONT_SIZE_SCALE: 'SEMANTIC_TYPOGRAPHY_FONT_SIZE_SCALE',
    // Body Font Weight
    SEMANTIC_TYPOGRAPHY_FONT_WEIGHT: 'SEMANTIC_TYPOGRAPHY_FONT_WEIGHT',
    // Footnotes
    SEMANTIC_TYPOGRAPHY_FOOTNOTE_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_FOOTNOTE_FONT_SIZE',
    // Form Inputs
    SEMANTIC_TYPOGRAPHY_FORM_INPUT_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_FORM_INPUT_FONT_SIZE',
    // Headings Font Family
    SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_FAMILY:
        'SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_FAMILY',
    // Headings Font Family Fallback
    SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_FAMILY_FALLBACK:
        'SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_FAMILY_FALLBACK',
    // Headings Font Style
    SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_STYLE:
        'SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_STYLE',
    // Headings Font Weight
    SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_WEIGHT:
        'SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_WEIGHT',
    // H1
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL1_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL1_FONT_SIZE',
    // H2
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL2_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL2_FONT_SIZE',
    // H3
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL3_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL3_FONT_SIZE',
    // H4
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL4_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL4_FONT_SIZE',
    // H5
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL5_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL5_FONT_SIZE',
    // H6
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL6_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL6_FONT_SIZE',
    // Headings Line Height
    SEMANTIC_TYPOGRAPHY_HEADINGS_LINE_HEIGHT:
        'SEMANTIC_TYPOGRAPHY_HEADINGS_LINE_HEIGHT',
    // Body Line Height
    SEMANTIC_TYPOGRAPHY_LINE_HEIGHT: 'SEMANTIC_TYPOGRAPHY_LINE_HEIGHT',
    // Small
    SEMANTIC_TYPOGRAPHY_SMALL_FONT_SIZE: 'SEMANTIC_TYPOGRAPHY_SMALL_FONT_SIZE',
    // Sub-Text
    SEMANTIC_TYPOGRAPHY_SUB_TEXT_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_SUB_TEXT_FONT_SIZE',
};

export const SEMANTIC_TYPOGRAPHY_RESPONSIVE_MOBILE_STYLE_TOKEN_NAMES = {
    // Footnotes
    SEMANTIC_TYPOGRAPHY_FOOTNOTE_MOBILE_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_FOOTNOTE_MOBILE_FONT_SIZE',
    // Form Inputs
    SEMANTIC_TYPOGRAPHY_FORM_INPUT_MOBILE_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_FORM_INPUT_MOBILE_FONT_SIZE',
    // H1
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL1_MOBILE_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL1_MOBILE_FONT_SIZE',
    // H2
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL2_MOBILE_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL2_MOBILE_FONT_SIZE',
    // H3
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL3_MOBILE_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL3_MOBILE_FONT_SIZE',
    // H4
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL4_MOBILE_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL4_MOBILE_FONT_SIZE',
    // H5
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL5_MOBILE_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL5_MOBILE_FONT_SIZE',
    // H6
    SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL6_MOBILE_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL6_MOBILE_FONT_SIZE',
    // Mobile Font Size Scale
    SEMANTIC_TYPOGRAPHY_MOBILE_FONT_SIZE_SCALE:
        'SEMANTIC_TYPOGRAPHY_MOBILE_FONT_SIZE_SCALE',
    // Small
    SEMANTIC_TYPOGRAPHY_SMALL_MOBILE_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_SMALL_MOBILE_FONT_SIZE',
    // Sub-Text
    SEMANTIC_TYPOGRAPHY_SUB_TEXT_MOBILE_FONT_SIZE:
        'SEMANTIC_TYPOGRAPHY_SUB_TEXT_MOBILE_FONT_SIZE',
};

export const SEMANTIC_TYPOGRAPHY_TOKEN_DEFAULTS = {
    // Font Family
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_FONT_FAMILY]:
        'Bankai UI Body',
    // Font Family Fallback
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_FONT_FAMILY_FALLBACK]:
        FONT_FAMILY_FALLBACK,
    // Font Size
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_FONT_SIZE]:
        BASE_FONT_SIZE,
    // Font Size Scale
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_FONT_SIZE_SCALE]:
        FONT_SIZE_SCALE,
    // Font Weight
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_FONT_WEIGHT]: 'normal',
    // Footnotes
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_FOOTNOTE_FONT_SIZE]:
        webFontSizes.footnote,
    // Form Inputs
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_FORM_INPUT_FONT_SIZE]:
        webFontSizes.formInput,
    // Headings Font Family
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_FAMILY]:
        'Bankai UI Headings',
    // Headings Font Family Fallback
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_FAMILY_FALLBACK]:
        FONT_FAMILY_FALLBACK,
    // Headings Font Style
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_STYLE]:
        'normal',
    // Headings Font Weight
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_HEADINGS_FONT_WEIGHT]:
        'bold',
    // H1
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL1_FONT_SIZE]:
        webFontSizes.h1,
    // H2
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL2_FONT_SIZE]:
        webFontSizes.h2,
    // H3
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL3_FONT_SIZE]:
        webFontSizes.h3,
    // H4
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL4_FONT_SIZE]:
        webFontSizes.h4,
    // H5
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL5_FONT_SIZE]:
        webFontSizes.h5,
    // H6
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL6_FONT_SIZE]:
        webFontSizes.h6,
    // Headings Line Height
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_HEADINGS_LINE_HEIGHT]: 1.2,
    // Body Line Height
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_LINE_HEIGHT]: 1.4,
    // Small
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_SUB_TEXT_FONT_SIZE]:
        webFontSizes.small,
    // Sub-Text
    [SEMANTIC_TYPOGRAPHY_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_SUB_TEXT_FONT_SIZE]:
        webFontSizes.subText,
};

export const SEMANTIC_TYPOGRAPHY_RESPONSIVE_MOBILE_STYLE_TOKEN_DEFAULTS = {
    // Footnotes
    [SEMANTIC_TYPOGRAPHY_RESPONSIVE_MOBILE_STYLE_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_FOOTNOTE_MOBILE_FONT_SIZE]:
        mobileFontSizes.footnote,
    // Form Inputs
    [SEMANTIC_TYPOGRAPHY_RESPONSIVE_MOBILE_STYLE_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_FORM_INPUT_MOBILE_FONT_SIZE]:
        webFontSizes.formInput,
    // H1
    [SEMANTIC_TYPOGRAPHY_RESPONSIVE_MOBILE_STYLE_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL1_MOBILE_FONT_SIZE]:
        mobileFontSizes.h1,
    // H2
    [SEMANTIC_TYPOGRAPHY_RESPONSIVE_MOBILE_STYLE_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL2_MOBILE_FONT_SIZE]:
        mobileFontSizes.h2,
    // H3
    [SEMANTIC_TYPOGRAPHY_RESPONSIVE_MOBILE_STYLE_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL3_MOBILE_FONT_SIZE]:
        mobileFontSizes.h3,
    // H4
    [SEMANTIC_TYPOGRAPHY_RESPONSIVE_MOBILE_STYLE_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL4_MOBILE_FONT_SIZE]:
        mobileFontSizes.h4,
    // H5
    [SEMANTIC_TYPOGRAPHY_RESPONSIVE_MOBILE_STYLE_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL5_MOBILE_FONT_SIZE]:
        mobileFontSizes.h5,
    // H6
    [SEMANTIC_TYPOGRAPHY_RESPONSIVE_MOBILE_STYLE_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_HEADINGS_LEVEL6_MOBILE_FONT_SIZE]:
        mobileFontSizes.h6,
    // Mobile Font Size Scale
    [SEMANTIC_TYPOGRAPHY_RESPONSIVE_MOBILE_STYLE_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_MOBILE_FONT_SIZE_SCALE]:
        MOBILE_FONT_SIZE_SCALE,
    // Small
    [SEMANTIC_TYPOGRAPHY_RESPONSIVE_MOBILE_STYLE_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_SMALL_MOBILE_FONT_SIZE]:
        mobileFontSizes.small,
    // Sub-Text
    [SEMANTIC_TYPOGRAPHY_RESPONSIVE_MOBILE_STYLE_TOKEN_NAMES.SEMANTIC_TYPOGRAPHY_SUB_TEXT_MOBILE_FONT_SIZE]:
        mobileFontSizes.subText,
};
