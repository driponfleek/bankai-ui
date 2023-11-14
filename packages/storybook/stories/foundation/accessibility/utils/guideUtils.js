import {
    getSanitizedA11yColorVariants,
    getLighterDarkerVariants,
    genColorAndVariantsWithMetadata,
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

export const getColorData = (hex) =>
    genColorAndVariantsWithMetadata({ hex, step: 5 });

export const getTextColorAndVariantsData = (textColor) => {
    return getColorData(textColor);
};

export const getBgColorData = (bgColor) => {
    return getColorData(bgColor)?.baseColor;
};

export const getMassagedColorWithContrastRatio = (color, bgColor) => {
    const { contrast, metaList } = color;

    return {
        ...color,
        metaList: [
            ...metaList,
            `Contrast Ratio - ${contrast}:1 ${bgColor?.color}`,
        ],
    };
};

export const getMassagedPreferredColorAndVariants = (colorData) => {
    const { baseColor, variants } = colorData ?? {};

    return {
        baseColor: getMassagedColorData(baseColor, baseColor.tokenId),
        variants: getMassagedColorVariantData(variants, baseColor.tokenId),
    };
};

export const getHowWeGetAccessibleColorsData = (bgColor, textColor) => {
    // Get Text color and variant seed data
    const textColorAndVariantsData = getTextColorAndVariantsData(textColor);
    // Get Bg color seed data
    const bgColorData = getBgColorData(bgColor);
    // Prep text color and variants for a11y eval against the bg color
    const preferredColorOps = [
        textColorAndVariantsData.baseColor,
        ...textColorAndVariantsData.variants,
    ];
    const {
        controlColor: evaluatedBgColor,
        evals: evaluatedPreferredColorOps,
    } = getControlVsOptionsA11yEvals(bgColorData, preferredColorOps);
    textColorAndVariantsData.baseColor.evalsAgainstBGColor =
        evaluatedPreferredColorOps.base;
    textColorAndVariantsData.variants = textColorAndVariantsData.variants.map(
        (variant) => {
            return {
                ...variant,
                evalsAgainstBGColor:
                    evaluatedPreferredColorOps[variant.tokenId],
            };
        },
    );
    // Prep evaluated colors for use
    // const evaluatedBgColor = bgVsPreferredA11yEvals.controlColor;
    const evaluatedTextColor = textColorAndVariantsData.baseColor;
    // Get the contrast ratio between text and bg colors
    const contrastRatio = `${evaluatedTextColor.evalsAgainstBGColor.wcagContrast}:1`;
    // Massage data for use with color swatches
    const bgColorDataMassaged = getMassagedColorData(
        evaluatedBgColor,
        BG_COLOR_NAME,
    );
    const textColorAndVariantsMassaged = getMassagedPreferredColorAndVariants(
        textColorAndVariantsData,
        TEXT_COLOR_NAME,
    );
    const textColorVariantsWithContrast =
        textColorAndVariantsMassaged.variants.map((variant) =>
            getMassagedColorWithContrastRatio(variant, bgColorDataMassaged),
        );
    const variantsSanitized = getSanitizedA11yColorVariants(
        textColorAndVariantsData.variants,
        true,
    ).map((variant) =>
        getMassagedColorWithContrastRatio(getMassagedColorData(variant)),
    );
    const recommendedColor = getMassagedColorData(
        getRecommendedColor(
            evaluatedTextColor,
            textColorAndVariantsData.variants,
            true,
        ),
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
