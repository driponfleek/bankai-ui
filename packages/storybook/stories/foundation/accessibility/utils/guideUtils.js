import {
    getSanitizedA11yColorVariants,
    getLighterDarkerVariants,
    genColorsData,
    getControlVsOptionsA11yEvals,
    getRecommendedColor,
} from '@driponfleek/bankai-lib-color-utils';
import { SEMANTIC_COLOR_TOKEN_DEFAULTS } from '@driponfleek/bankai-lib-theme-utils';
import {
    getMassagedColorData,
    getMassagedColorVariantData,
} from '@driponfleek/bankai-lib-storybook';

// Constants
import { BG_COLOR_NAME, TEXT_COLOR_NAME } from '../const/guideConst';

const { SEMANTIC_COLOR_CANVAS_ALT } = SEMANTIC_COLOR_TOKEN_DEFAULTS;

export const getColorData = (hex) => genColorsData({ hex, step: 5 });

export const getTextColorAndVariantsData = (textColor) => {
    return getColorData(textColor);
};

export const getBgColorData = (bgColor) => {
    return getColorData(bgColor)?.preferred;
};

export const getMassagedColorWithContrastRatio = (color, bgColor) => {
    const { contrast, metaList } = color;
    // console.log('bgColor: ', bgColor);

    return {
        ...color,
        metaList: [
            ...metaList,
            `Contrast Ratio - ${contrast}:1 ${bgColor?.color}`,
        ],
    };
};

export const getMassagedPreferredColorAndVariants = (colorData, colorName) => {
    const { preferred, variants } = colorData ?? {};

    return {
        preferred: getMassagedColorData(preferred, colorName),
        variants: getMassagedColorVariantData(variants, colorName),
    };
};

export const getHowWeGetAccessibleColorsData = (bgColor, textColor) => {
    // Get Text color and variant seed data
    const textColorAndVariantsData = getTextColorAndVariantsData(textColor);
    // Get Bg color seed data
    const bgColorData = getBgColorData(bgColor);
    // Prep text color and variants for a11y eval against the bg color
    const preferredColorOps = [
        textColorAndVariantsData.preferred,
        ...textColorAndVariantsData.variants,
    ];
    const bgVsPreferredA11yEvals = getControlVsOptionsA11yEvals(
        bgColorData,
        preferredColorOps,
    );
    // Prep evaluated colors for use
    const evaluatedBgColor = bgVsPreferredA11yEvals.controlColor;
    const evaluatedTextColor = bgVsPreferredA11yEvals.options.find(
        (op) => op.id === 'preferred',
    );
    const evaluatedTextColorVariants = bgVsPreferredA11yEvals.options.filter(
        (op) => op.id !== 'preferred',
    );
    // Get the contrast ratio between text and bg colors
    const contrastRatio = `${evaluatedTextColor.contrast}:1`;
    // Massage data for use with color swatches
    const bgColorDataMassaged = getMassagedColorData(
        evaluatedBgColor,
        BG_COLOR_NAME,
    );
    const textColorAndVariantsMassaged = getMassagedPreferredColorAndVariants(
        { preferred: evaluatedTextColor, variants: evaluatedTextColorVariants },
        TEXT_COLOR_NAME,
    );
    const textColorVariantsWithContrast =
        textColorAndVariantsMassaged.variants.map((variant) =>
            getMassagedColorWithContrastRatio(variant, bgColorDataMassaged),
        );
    const variantsSanitized = getSanitizedA11yColorVariants(
        textColorVariantsWithContrast,
        true,
    );
    const recommendedColor = getRecommendedColor(
        evaluatedTextColor,
        textColorVariantsWithContrast,
        true,
    );

    return {
        bgColorDataMassaged,
        contrastRatio,
        textColorAndVariantsMassaged,
        textColorVariantsWithContrast,
        variantsSanitized,
        recommendedColor,
    };
};

export const getStep3Data = (colorData = {}) => {
    const { preferred = {}, variants = [] } = colorData;
    const { lighterVariants, darkerVariants } = getLighterDarkerVariants(
        preferred.lightness,
        variants,
    );
    const hasLighterVariants = lighterVariants.length > 0;
    const hasDarkerVariants = darkerVariants.length > 0;
    const lighterVariantsLightnesses = hasLighterVariants
        ? lighterVariants.map((variant) => variant.lightness).join(', ')
        : 'none';
    const darkerVariantsLightnesses = hasDarkerVariants
        ? darkerVariants.map((variant) => variant.lightness).join(', ')
        : 'none';
    const shouldPickFromLighterVariantsB1 =
        !preferred.isDark && hasLighterVariants;
    const shouldPickFromLighterVariantsB2 =
        preferred.isDark && !hasDarkerVariants && hasLighterVariants;
    const shouldPickFromDarkerVariantsB1 =
        preferred.isDark && hasDarkerVariants;
    const shouldPickFromDarkerVariantsB2 =
        !preferred.isDark && !hasLighterVariants && hasDarkerVariants;

    return {
        hasLighterVariants,
        hasDarkerVariants,
        lighterVariantsLightnesses,
        darkerVariantsLightnesses,
        shouldPickFromLighterVariantsB1,
        shouldPickFromLighterVariantsB2,
        shouldPickFromDarkerVariantsB1,
        shouldPickFromDarkerVariantsB2,
    };
};

export const getColors = (isDarkMode) => {
    return {
        bgColor: isDarkMode ? '#0c0d0e' : SEMANTIC_COLOR_CANVAS_ALT,
        textColor: isDarkMode ? '#802a59' : '#b76cdf',
    };
};
