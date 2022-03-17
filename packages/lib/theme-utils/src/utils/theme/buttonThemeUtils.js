import {
    getColorLightness,
    getRecommendedColor,
    getIsReadable,
    getColorCorrelationsData,
    convertColorToRGBA,
} from '@epr0t0type/bankai-lib-color-utils';
import { getThemeAPIKeyFromName } from '../dataMassageUtils';
import { getJuxtaposedColorAgainstCanvases, getTextColor } from '../colorUtils';
import { THEME_TOKEN_NAMES } from '../../const/themeTokensConst';

const {
    COLOR_BTN_PRIMARY_DEFAULT_BG,
    COLOR_BTN_PRIMARY_DEFAULT_BORDER,
    COLOR_BTN_PRIMARY_DEFAULT_TEXT,
    COLOR_BTN_PRIMARY_HOVER_BG,
    COLOR_BTN_PRIMARY_HOVER_BORDER,
    COLOR_BTN_PRIMARY_HOVER_TEXT,
    COLOR_BTN_PRIMARY_FOCUS_HALO,
    COLOR_BTN_SPLIT_PRIMARY_BORDER,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_DEFAULT_BG,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_DEFAULT_BORDER,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_DEFAULT_TEXT,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_HOVER_BG,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_HOVER_BORDER,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_HOVER_TEXT,
    COLOR_BTN_PRIMARY_DESTRUCTIVE_FOCUS_HALO,
    COLOR_BTN_SPLIT_PRIMARY_DESTRUCTIVE_BORDER,
    COLOR_BTN_SECONDARY_DEFAULT_BG,
    COLOR_BTN_SECONDARY_DEFAULT_BORDER,
    COLOR_BTN_SECONDARY_DEFAULT_TEXT,
    COLOR_BTN_SECONDARY_HOVER_BG,
    COLOR_BTN_SECONDARY_HOVER_BORDER,
    COLOR_BTN_SECONDARY_HOVER_TEXT,
    COLOR_BTN_SECONDARY_FOCUS_HALO,
    COLOR_BTN_SPLIT_SECONDARY_BORDER,
    COLOR_BTN_SECONDARY_DESTRUCTIVE_DEFAULT_BG,
    COLOR_BTN_SECONDARY_DESTRUCTIVE_DEFAULT_BORDER,
    COLOR_BTN_SECONDARY_DESTRUCTIVE_DEFAULT_TEXT,
    COLOR_BTN_SECONDARY_DESTRUCTIVE_HOVER_BG,
    COLOR_BTN_SECONDARY_DESTRUCTIVE_HOVER_BORDER,
    COLOR_BTN_SECONDARY_DESTRUCTIVE_HOVER_TEXT,
    COLOR_BTN_SECONDARY_DESTRUCTIVE_FOCUS_HALO,
    COLOR_BTN_SPLIT_SECONDARY_DESTRUCTIVE_BORDER,
} = THEME_TOKEN_NAMES;

const getPrimaryBtnHoverBGColor = (sourceColorData = {}) => {
    const { base = {}, variants = [] } = sourceColorData;
    const { hex, isDark } = base;
    const baseColorLightness = getColorLightness(hex);
    const variantsLightnessArr = variants.map((variant) => variant?.lightness);
    const variantA = variants[0];
    const variantB = variants[1];
    const isBaseAlsoVariant =
        variants.findIndex(
            (variant) => variant?.lightness === baseColorLightness,
        ) > -1;
    let isBaseColorOutsideVariantRange = false;
    let shouldReverseLogic = false;
    // Determine the step used for variants
    let variantsStep = variantA?.lightness - variantB?.lightness;
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

const getPrimaryBtnColors = (sourceColorData = {}) => {
    const { base = {} } = sourceColorData;
    const { hex } = base;
    const DEFAULT_TEXT = getTextColor(hex);
    const DEFAULT_BG = hex;

    const hoverBGColor = getPrimaryBtnHoverBGColor(sourceColorData);
    const HOVER_BG = hoverBGColor?.hex;
    const HOVER_TEXT = getTextColor(HOVER_BG);
    const FOCUS_HALO_COLOR = hex;
    const FOCUS_HALO = convertColorToRGBA(FOCUS_HALO_COLOR, 0.4, true);

    return {
        DEFAULT_TEXT,
        DEFAULT_BG,
        HOVER_TEXT,
        HOVER_BG,
        FOCUS_HALO,
    };
};

const getSecondaryDefaultTextColor = (
    sourceColorData = {},
    defaultBtnBGColor = {},
    shouldAutoCorrectColors = true,
) => {
    const { base = {}, variants = [] } = sourceColorData;
    const { hex: defaultBtnBGHex } = defaultBtnBGColor;
    const shouldUseBaseForDefaultColor = !shouldAutoCorrectColors
        ? true
        : getIsReadable(base.hex, defaultBtnBGHex);

    if (shouldUseBaseForDefaultColor) {
        return base.hex;
    }

    const bgColorData =
        getColorCorrelationsData(defaultBtnBGColor, [base, ...variants]) || {};
    const recommendedColor =
        getRecommendedColor(bgColorData, [base, ...variants], true) || {};

    return recommendedColor.hex;
};

const getSecondaryBtnColors = (
    sourceColorData = {},
    defaultBtnBGColor = {},
    config = {},
) => {
    const { variants = [] } = sourceColorData;
    const { isDarkMode = false, shouldAutoCorrectColors = true } = config;
    const defaultHex = getSecondaryDefaultTextColor(
        sourceColorData,
        defaultBtnBGColor,
        shouldAutoCorrectColors,
    );
    const hoverLightness = isDarkMode ? 20 : 80;
    const FOCUS_HALO_COLOR = defaultHex;
    const {
        hex: hoverBGHex,
        compatibleTextColors: hoverCompatibleTextColors = [],
    } =
        variants.find((variant) => variant.id === hoverLightness.toString()) ||
        {};
    const { hex: hoverTextColor } =
        variants.find((variant) => {
            const hasCompatColors = hoverCompatibleTextColors.length > 0;
            const lightestId = hasCompatColors
                ? Math.max(...hoverCompatibleTextColors).toString()
                : undefined;

            return variant.id === lightestId;
        }) || {};

    const DEFAULT_TEXT = defaultHex;
    const DEFAULT_BG = defaultBtnBGColor.hex;
    const DEFAULT_BORDER = defaultHex;
    const HOVER_TEXT = hoverTextColor;
    const HOVER_BG = hoverBGHex;
    const HOVER_BORDER = hoverTextColor;
    const FOCUS_HALO = convertColorToRGBA(FOCUS_HALO_COLOR, 0.4, true);

    return {
        DEFAULT_TEXT,
        DEFAULT_BG,
        DEFAULT_BORDER,
        HOVER_TEXT,
        HOVER_BG,
        HOVER_BORDER,
        FOCUS_HALO,
    };
};

export const getBtnSecondaryTheme = (colors = {}, config = {}) => {
    const { sourceColorData = {}, defaultBtnBGColor = {} } = colors;
    const {
        isDarkMode,
        shouldAutoCorrectColors = true,
        isDestructive = false,
    } = config;
    const {
        DEFAULT_TEXT,
        DEFAULT_BG,
        DEFAULT_BORDER,
        HOVER_TEXT,
        HOVER_BG,
        HOVER_BORDER,
        FOCUS_HALO,
    } = getSecondaryBtnColors(sourceColorData, defaultBtnBGColor, {
        isDarkMode,
        shouldAutoCorrectColors,
    });
    const BTN_DEFAULT_TEXT = isDestructive
        ? COLOR_BTN_SECONDARY_DESTRUCTIVE_DEFAULT_TEXT
        : COLOR_BTN_SECONDARY_DEFAULT_TEXT;
    const BTN_DEFAULT_BG = isDestructive
        ? COLOR_BTN_SECONDARY_DESTRUCTIVE_DEFAULT_BG
        : COLOR_BTN_SECONDARY_DEFAULT_BG;
    const BTN_DEFAULT_BORDER = isDestructive
        ? COLOR_BTN_SECONDARY_DESTRUCTIVE_DEFAULT_BORDER
        : COLOR_BTN_SECONDARY_DEFAULT_BORDER;
    const BTN_HOVER_TEXT = isDestructive
        ? COLOR_BTN_SECONDARY_DESTRUCTIVE_HOVER_TEXT
        : COLOR_BTN_SECONDARY_HOVER_TEXT;
    const BTN_HOVER_BG = isDestructive
        ? COLOR_BTN_SECONDARY_DESTRUCTIVE_HOVER_BG
        : COLOR_BTN_SECONDARY_HOVER_BG;
    const BTN_HOVER_BORDER = isDestructive
        ? COLOR_BTN_SECONDARY_DESTRUCTIVE_HOVER_BORDER
        : COLOR_BTN_SECONDARY_HOVER_BORDER;
    const BTN_FOCUS_HALO = isDestructive
        ? COLOR_BTN_SECONDARY_DESTRUCTIVE_FOCUS_HALO
        : COLOR_BTN_SECONDARY_FOCUS_HALO;
    const BTN_SPLIT_BORDER = isDestructive
        ? COLOR_BTN_SPLIT_SECONDARY_DESTRUCTIVE_BORDER
        : COLOR_BTN_SPLIT_SECONDARY_BORDER;

    return {
        [getThemeAPIKeyFromName(BTN_DEFAULT_TEXT)]: DEFAULT_TEXT,
        [getThemeAPIKeyFromName(BTN_DEFAULT_BG)]: DEFAULT_BG,
        [getThemeAPIKeyFromName(BTN_DEFAULT_BORDER)]: DEFAULT_BORDER,
        [getThemeAPIKeyFromName(BTN_HOVER_TEXT)]: HOVER_TEXT,
        [getThemeAPIKeyFromName(BTN_HOVER_BG)]: HOVER_BG,
        [getThemeAPIKeyFromName(BTN_HOVER_BORDER)]: HOVER_BORDER,
        [getThemeAPIKeyFromName(BTN_FOCUS_HALO)]: FOCUS_HALO,
        [getThemeAPIKeyFromName(BTN_SPLIT_BORDER)]: HOVER_TEXT,
    };
};

export const getBtnPrimaryTheme = (colors = {}, config = {}) => {
    const { sourceColorData = {} } = colors;
    const { shouldAutoCorrectColors = true, isDestructive = false } = config;
    const { base = {}, variants = [] } = sourceColorData;
    const evaluatedColorData = {
        base: shouldAutoCorrectColors
            ? getJuxtaposedColorAgainstCanvases(colors)
            : base,
        variants,
    };

    const { DEFAULT_TEXT, DEFAULT_BG, HOVER_TEXT, HOVER_BG, FOCUS_HALO } =
        getPrimaryBtnColors(evaluatedColorData);
    const BTN_DEFAULT_TEXT = isDestructive
        ? COLOR_BTN_PRIMARY_DESTRUCTIVE_DEFAULT_TEXT
        : COLOR_BTN_PRIMARY_DEFAULT_TEXT;
    const BTN_DEFAULT_BG = isDestructive
        ? COLOR_BTN_PRIMARY_DESTRUCTIVE_DEFAULT_BG
        : COLOR_BTN_PRIMARY_DEFAULT_BG;
    const BTN_DEFAULT_BORDER = isDestructive
        ? COLOR_BTN_PRIMARY_DESTRUCTIVE_DEFAULT_BORDER
        : COLOR_BTN_PRIMARY_DEFAULT_BORDER;
    const BTN_HOVER_TEXT = isDestructive
        ? COLOR_BTN_PRIMARY_DESTRUCTIVE_HOVER_TEXT
        : COLOR_BTN_PRIMARY_HOVER_TEXT;
    const BTN_HOVER_BG = isDestructive
        ? COLOR_BTN_PRIMARY_DESTRUCTIVE_HOVER_BG
        : COLOR_BTN_PRIMARY_HOVER_BG;
    const BTN_HOVER_BORDER = isDestructive
        ? COLOR_BTN_PRIMARY_DESTRUCTIVE_HOVER_BORDER
        : COLOR_BTN_PRIMARY_HOVER_BORDER;
    const BTN_FOCUS_HALO = isDestructive
        ? COLOR_BTN_PRIMARY_DESTRUCTIVE_FOCUS_HALO
        : COLOR_BTN_PRIMARY_FOCUS_HALO;
    const BTN_SPLIT_BORDER = isDestructive
        ? COLOR_BTN_SPLIT_PRIMARY_DESTRUCTIVE_BORDER
        : COLOR_BTN_SPLIT_PRIMARY_BORDER;

    return {
        [getThemeAPIKeyFromName(BTN_DEFAULT_TEXT)]: DEFAULT_TEXT,
        [getThemeAPIKeyFromName(BTN_DEFAULT_BG)]: DEFAULT_BG,
        [getThemeAPIKeyFromName(BTN_DEFAULT_BORDER)]: 'transparent',
        [getThemeAPIKeyFromName(BTN_HOVER_TEXT)]: HOVER_TEXT,
        [getThemeAPIKeyFromName(BTN_HOVER_BG)]: HOVER_BG,
        [getThemeAPIKeyFromName(BTN_HOVER_BORDER)]: 'transparent',
        [getThemeAPIKeyFromName(BTN_FOCUS_HALO)]: FOCUS_HALO,
        [getThemeAPIKeyFromName(BTN_SPLIT_BORDER)]: HOVER_TEXT,
    };
};
