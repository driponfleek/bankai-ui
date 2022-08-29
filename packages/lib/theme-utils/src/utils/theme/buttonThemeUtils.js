import {
    getColorLightness,
    getRecommendedColor,
    getIsReadable,
    getColorCorrelationsData,
    convertColorToRGBA,
} from '@epr0t0type/bankai-lib-color-utils';
import { getThemeAPIKeyFromName } from '../dataUtils';
import { getTextColor } from '../helperUtils';
import { BTN_TOKEN_NAMES } from '../../const/tokens/btnTokensConst';
import { BTN_STYLE_TOKEN_DEFAULTS } from '../../const/tokens/defaults/btnTokenDefaultsConst';
import { BTN_STYLES } from '../../const/btnStylesConst';

const { GHOST } = BTN_STYLES;
const { BTN_BORDER_RADIUS, BTN_BORDER_WIDTH, BTN_FONT_WEIGHT } =
    BTN_TOKEN_NAMES;

const getFlatBtnHoverBGColor = (sourceColors = {}) => {
    const { base = {}, variants = [] } = sourceColors;
    const { hex, isDark } = base;
    const baseColorLightness = getColorLightness(hex);
    const variantsLightnessArr = variants.map((variant) => variant?.lightness);
    const variantA = variants[0] ?? {};
    const variantB = variants[1] ?? {};
    const isBaseAlsoVariant =
        variants.findIndex(
            (variant) => variant?.lightness === baseColorLightness,
        ) > -1;
    let isBaseColorOutsideVariantRange = false;
    let shouldReverseLogic = false;
    // Determine the step used for variants
    let variantsStep = variantA.lightness - variantB.lightness;
    // In the event the sort order of the variants changes,
    // check for negative value and fix
    variantsStep = variantsStep < 0 ? variantsStep * -1 : variantsStep;

    let potentialHoverLightnesses = isDark
        ? variantsLightnessArr.filter(
              (variantLightness) => variantLightness < baseColorLightness,
          )
        : variantsLightnessArr.filter(
              (variantLightness) => variantLightness > baseColorLightness,
          );

    // If there are no options for potential hover lightness that means the baseColorLightness
    // is lighter/darker than the lights/darkest variants available and we should
    // pick a hover color from all the variants.
    if (potentialHoverLightnesses.length === 0) {
        isBaseColorOutsideVariantRange = true;
        shouldReverseLogic = true;
        potentialHoverLightnesses = [...variantsLightnessArr];
    }

    // If there are less than 2 options for potential hover lightness, that means
    // we don't have enough options to choose from for a hover color and
    // we should reverse our original filtering for light/dark check.
    if (potentialHoverLightnesses.length < 2) {
        shouldReverseLogic = true;
        potentialHoverLightnesses = isDark
            ? variantsLightnessArr.filter(
                  (variantLightness) => variantLightness > baseColorLightness,
              )
            : variantsLightnessArr.filter(
                  (variantLightness) => variantLightness < baseColorLightness,
              );
    }

    // If the baseColorLightness is also a variant
    // remove it from potential hover lightnesses.
    if (isBaseAlsoVariant) {
        potentialHoverLightnesses = potentialHoverLightnesses.filter(
            (potentialHoverLightness) =>
                potentialHoverLightness !== baseColorLightness,
        );
    }

    // Set closest lightness to lightest value by default
    let closestVariantLightness = Math.max(...potentialHoverLightnesses);

    // Handle scenarios where the closest variant lightness
    // should be the darkest variant
    if (
        // If the base color is outside the range of the variants
        // and is perceived as dark
        (isBaseColorOutsideVariantRange && isDark) ||
        // If the base color is not outside the range of the variants
        // and is perceived as dark
        // and did not have enough potential hover lightnesses on the first check
        (!isBaseColorOutsideVariantRange && isDark && shouldReverseLogic) ||
        // If the base color is not outside the range of the variants
        // and is not perceived as dark
        // and had enough potential hover lightnesses on the first check
        (!isBaseColorOutsideVariantRange && !isDark && !shouldReverseLogic) ||
        // If the base color is not outside the range of the variants
        // and is perceived as dark
        // and did not have enough potential hover lightnesses on the first check
        (!isBaseColorOutsideVariantRange && isDark && shouldReverseLogic)
    ) {
        closestVariantLightness = Math.min(...potentialHoverLightnesses);
    }

    const multiplier = isDark ? -1 : 1;
    const recommendedHoverLightness =
        closestVariantLightness +
        variantsStep * (shouldReverseLogic ? multiplier * -1 : multiplier);

    return variants.find(
        (variant) => variant?.lightness === recommendedHoverLightness,
    );
};

const getFlatBtnColors = (sourceColors = {}, config = {}) => {
    const {
        base = {},
        variants = [],
        recommendedNonTextColor = {},
    } = sourceColors;
    const { shouldAutoCorrectColors = true } = config;
    const evaluatedBaseColor = {
        base: shouldAutoCorrectColors ? recommendedNonTextColor : base,
        variants,
    };
    const { hex } = evaluatedBaseColor.base;
    const hoverBGColor = getFlatBtnHoverBGColor(sourceColors);
    const DEFAULT_TEXT = getTextColor(hex);
    const DEFAULT_BG = hex;
    const INTERACTION_BG = hoverBGColor?.hex;
    const INTERACTION_TEXT = getTextColor(INTERACTION_BG);
    const FOCUS_HALO_COLOR = hex;
    const FOCUS_HALO = convertColorToRGBA(FOCUS_HALO_COLOR, 0.4, true);

    return {
        DEFAULT_TEXT,
        DEFAULT_BG,
        INTERACTION_TEXT,
        INTERACTION_BG,
        FOCUS_HALO,
    };
};

const getGhostBtnTextColor = (
    sourceColors = {},
    canvasColor = {},
    shouldAutoCorrectColors = true,
) => {
    const { base = {}, variants = [] } = sourceColors;
    const { hex: btnBgHex } = canvasColor;
    const shouldUseBaseForDefaultColor = !shouldAutoCorrectColors
        ? true
        : getIsReadable(base.hex, btnBgHex);

    if (shouldUseBaseForDefaultColor) {
        return base?.hex;
    }

    const bgColorData =
        getColorCorrelationsData(canvasColor, [base, ...variants]) || {};
    const recommendedColor =
        getRecommendedColor(bgColorData, [base, ...variants], true) || {};

    return recommendedColor?.hex;
};

const getGhostBtnColors = (
    sourceColors = {},
    canvasColor = {},
    config = {},
) => {
    const { base = {}, variants = [] } = sourceColors;
    const {
        isDarkMode = false,
        shouldAutoCorrectColors = true,
        isMobile = false,
    } = config;
    const DEFAULT_TEXT = getGhostBtnTextColor(
        sourceColors,
        canvasColor,
        shouldAutoCorrectColors,
    );
    const hoverLightness = isDarkMode ? 20 : 80;
    const FOCUS_HALO_COLOR = DEFAULT_TEXT;
    const {
        hex: interactionBGColor,
        compatibleTextColors: hoverCompatibleTextColors = [],
    } =
        variants.find((variant) => variant.id === hoverLightness.toString()) ||
        {};

    const hasCompatColors = hoverCompatibleTextColors.length > 0;
    const canUseBaseForHover =
        DEFAULT_TEXT !== base?.hex &&
        hoverCompatibleTextColors.findIndex((colorId) => colorId === 'base') >
            -1;
    const interactionTextColor = canUseBaseForHover
        ? base?.hex
        : variants.find((variant) => {
              const lightestId = hasCompatColors
                  ? Math.max(
                        ...hoverCompatibleTextColors.filter(
                            (colorId) => colorId !== 'base',
                        ),
                    ).toString()
                  : undefined;

              return variant.id === lightestId;
          })?.hex;

    const DEFAULT_BG = canvasColor?.hex;
    const DEFAULT_BORDER = isMobile ? DEFAULT_TEXT : 'currentColor';
    const INTERACTION_TEXT = interactionTextColor;
    const INTERACTION_BG = interactionBGColor;
    const INTERACTION_BORDER = isMobile ? interactionTextColor : 'currentColor';
    const FOCUS_HALO = convertColorToRGBA(FOCUS_HALO_COLOR, 0.4, true);

    return {
        DEFAULT_TEXT,
        DEFAULT_BG,
        DEFAULT_BORDER,
        INTERACTION_TEXT,
        INTERACTION_BG,
        INTERACTION_BORDER,
        FOCUS_HALO,
    };
};

export const getGhostBtnTheme = (colors = {}, config = {}) => {
    const { sourceColors = {}, canvasColor = {} } = colors;
    const {
        VARIANT,
        isDarkMode,
        shouldAutoCorrectColors = true,
        isMobile = false,
    } = config;
    const {
        DEFAULT_TEXT,
        DEFAULT_BG,
        DEFAULT_BORDER,
        INTERACTION_TEXT,
        INTERACTION_BG,
        INTERACTION_BORDER,
        FOCUS_HALO,
    } = getGhostBtnColors(sourceColors, canvasColor, {
        isDarkMode,
        shouldAutoCorrectColors,
    });
    const BTN_DEFAULT_TEXT = `BTN_${VARIANT}_TEXT_COLOR`;
    const BTN_DEFAULT_BG = `BTN_${VARIANT}_BG_COLOR`;
    const BTN_DEFAULT_BORDER = `BTN_${VARIANT}_BORDER_COLOR`;
    const BTN_HOVER_TEXT = `BTN_${VARIANT}_HOVER_TEXT_COLOR`;
    const BTN_HOVER_BG = `BTN_${VARIANT}_HOVER_BG_COLOR`;
    const BTN_HOVER_BORDER = `BTN_${VARIANT}_HOVER_BORDER_COLOR`;
    const BTN_ACTIVE_TEXT = `BTN_${VARIANT}_ACTIVE_TEXT_COLOR`;
    const BTN_ACTIVE_BG = `BTN_${VARIANT}_ACTIVE_BG_COLOR`;
    const BTN_ACTIVE_BORDER = `BTN_${VARIANT}_ACTIVE_BORDER_COLOR`;
    const BTN_FOCUS_HALO = `BTN_${VARIANT}_FOCUS_HALO_COLOR`;
    const BTN_SPLIT_BORDER = `BTN_SPLIT_${VARIANT}_BORDER_COLOR`;

    return {
        [getThemeAPIKeyFromName(BTN_DEFAULT_TEXT)]: DEFAULT_TEXT,
        [getThemeAPIKeyFromName(BTN_DEFAULT_BG)]: DEFAULT_BG,
        [getThemeAPIKeyFromName(BTN_DEFAULT_BORDER)]: DEFAULT_BORDER,
        ...(!isMobile && {
            [getThemeAPIKeyFromName(BTN_HOVER_TEXT)]: INTERACTION_TEXT,
            [getThemeAPIKeyFromName(BTN_HOVER_BG)]: INTERACTION_BG,
            [getThemeAPIKeyFromName(BTN_HOVER_BORDER)]: INTERACTION_BORDER,
        }),
        [getThemeAPIKeyFromName(BTN_ACTIVE_TEXT)]: INTERACTION_TEXT,
        [getThemeAPIKeyFromName(BTN_ACTIVE_BG)]: INTERACTION_BG,
        [getThemeAPIKeyFromName(BTN_ACTIVE_BORDER)]: INTERACTION_BORDER,
        [getThemeAPIKeyFromName(BTN_FOCUS_HALO)]: FOCUS_HALO,
        [getThemeAPIKeyFromName(BTN_SPLIT_BORDER)]: INTERACTION_TEXT,
    };
};

export const getFlatBtnTheme = (colors = {}, config = {}) => {
    const { sourceColors = {} } = colors;
    const { VARIANT, isMobile = false } = config;

    const {
        DEFAULT_TEXT,
        DEFAULT_BG,
        INTERACTION_TEXT,
        INTERACTION_BG,
        FOCUS_HALO,
    } = getFlatBtnColors(sourceColors, config);
    const BTN_DEFAULT_TEXT = `BTN_${VARIANT}_TEXT_COLOR`;
    const BTN_DEFAULT_BG = `BTN_${VARIANT}_BG_COLOR`;
    const BTN_DEFAULT_BORDER = `BTN_${VARIANT}_BORDER_COLOR`;
    const BTN_ACTIVE_TEXT = `BTN_${VARIANT}_ACTIVE_TEXT_COLOR`;
    const BTN_ACTIVE_BG = `BTN_${VARIANT}_ACTIVE_BG_COLOR`;
    const BTN_ACTIVE_BORDER = `BTN_${VARIANT}_ACTIVE_BORDER_COLOR`;
    const BTN_HOVER_TEXT = `BTN_${VARIANT}_HOVER_TEXT_COLOR`;
    const BTN_HOVER_BG = `BTN_${VARIANT}_HOVER_BG_COLOR`;
    const BTN_HOVER_BORDER = `BTN_${VARIANT}_HOVER_BORDER_COLOR`;
    const BTN_FOCUS_HALO = `BTN_${VARIANT}_FOCUS_HALO_COLOR`;
    const BTN_SPLIT_BORDER = `BTN_SPLIT_${VARIANT}_BORDER_COLOR`;

    return {
        [getThemeAPIKeyFromName(BTN_DEFAULT_TEXT)]: DEFAULT_TEXT,
        [getThemeAPIKeyFromName(BTN_DEFAULT_BG)]: DEFAULT_BG,
        [getThemeAPIKeyFromName(BTN_DEFAULT_BORDER)]: 'transparent',
        ...(!isMobile && {
            [getThemeAPIKeyFromName(BTN_HOVER_TEXT)]: INTERACTION_TEXT,
            [getThemeAPIKeyFromName(BTN_HOVER_BG)]: INTERACTION_BG,
            [getThemeAPIKeyFromName(BTN_HOVER_BORDER)]: 'transparent',
        }),
        [getThemeAPIKeyFromName(BTN_ACTIVE_TEXT)]: INTERACTION_TEXT,
        [getThemeAPIKeyFromName(BTN_ACTIVE_BG)]: INTERACTION_BG,
        [getThemeAPIKeyFromName(BTN_ACTIVE_BORDER)]: 'transparent',
        [getThemeAPIKeyFromName(BTN_FOCUS_HALO)]: FOCUS_HALO,
        [getThemeAPIKeyFromName(BTN_SPLIT_BORDER)]: INTERACTION_TEXT,
    };
};

export const getBtnTheme = (colors, config = {}) => {
    const { btnStyle, ...rest } = config;

    if (btnStyle === GHOST) {
        return getGhostBtnTheme(colors, { ...rest });
    }

    return getFlatBtnTheme(colors, { ...rest });
};

export const getBtnStyles = (data = {}) => {
    const apiKeyBorderRadius = getThemeAPIKeyFromName(BTN_BORDER_RADIUS);
    const apiKeyBorderWidth = getThemeAPIKeyFromName(BTN_BORDER_WIDTH);
    const apiKeyFontWeight = getThemeAPIKeyFromName(BTN_FONT_WEIGHT);
    const defaultBorderRadius = BTN_STYLE_TOKEN_DEFAULTS[BTN_BORDER_RADIUS];
    const defaultBorderWidth = BTN_STYLE_TOKEN_DEFAULTS[BTN_BORDER_WIDTH];
    const defaultFontWeight = BTN_STYLE_TOKEN_DEFAULTS[BTN_FONT_WEIGHT];
    const {
        [apiKeyBorderRadius]: borderRadius = defaultBorderRadius,
        [apiKeyBorderWidth]: borderWidth = defaultBorderWidth,
        [apiKeyFontWeight]: fontWeight = defaultFontWeight,
    } = data;

    return {
        [apiKeyBorderRadius]: borderRadius,
        [apiKeyBorderWidth]: borderWidth,
        [apiKeyFontWeight]: fontWeight,
    };
};
