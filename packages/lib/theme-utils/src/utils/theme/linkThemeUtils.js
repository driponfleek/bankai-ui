/* eslint-disable import/prefer-default-export */
import { getColorCorrelationsData } from '@epr0t0type/bankai-lib-color-utils';
import {
    getThemeAPIKeyFromName,
    getCommonColorCompatabilities,
    getCommonIds,
    getColorData,
} from '../dataUtils';
import { getFocusHaloRGBA } from '../helperUtils';
import { getThemeDefaults } from '../../const/tokens/defaults/coreTokenDefaultsConst';
import { LINK_TOKEN_NAMES } from '../../const/tokens/linkTokensConst';
import { LINK_STYLE_TOKEN_DEFAULTS } from '../../const/tokens/defaults/linkTokenDefaultsConst';

const {
    LINK_TEXT_COLOR,
    LINK_FOCUS_HALO_COLOR,
    LINK_TEXT_DECORATION,
    LINK_BORDER_RADIUS,
} = LINK_TOKEN_NAMES;

export const getLinkStyle = (data = {}) => {
    const apiKeyRadius = getThemeAPIKeyFromName(LINK_BORDER_RADIUS);
    const defaultRadius = LINK_STYLE_TOKEN_DEFAULTS[LINK_BORDER_RADIUS];
    const { [apiKeyRadius]: radius = defaultRadius } = data;

    return { [apiKeyRadius]: radius };
};

const getPossibleLinkColorsComparedToCanvases = (
    sourceColors = {},
    canvasColor = {},
    canvasAltColor = {},
) => {
    const { base = {}, variants = [] } = sourceColors;
    const canvasOptions = [base, ...variants];
    const evaluatedCanvasColor = getColorCorrelationsData(
        canvasColor,
        canvasOptions,
    );
    const evaluatedCanvasAltColor = getColorCorrelationsData(
        canvasAltColor,
        canvasOptions,
    );
    const { compatibleTextColors } = getCommonColorCompatabilities(
        evaluatedCanvasColor,
        evaluatedCanvasAltColor,
    );

    return compatibleTextColors;
};

const getPossibleColorsComparedToText = (sourceColors = {}, textColor = {}) => {
    const { base = {}, variants = [] } = sourceColors;
    const textOptions = [base, ...variants];
    const evaluatedTextColor = getColorCorrelationsData(textColor, textOptions);
    const { compatibleNonTextColors } = evaluatedTextColor;

    return compatibleNonTextColors;
};

const getLinkColor = (colors = {}, config = {}) => {
    const {
        sourceColors = {},
        canvasColor = {},
        canvasAltColor = {},
        textColor = {},
    } = colors;
    const { shouldAutoCorrectColors = true, shouldUnderlineLink = false } =
        config;
    const {
        base = {},
        variants = [],
        recommendedTextColor = {},
    } = sourceColors;

    if (!shouldAutoCorrectColors) {
        return {
            textColor: base.hex,
            shouldUnderlineLink,
        };
    }

    if (shouldUnderlineLink) {
        return {
            textColor: recommendedTextColor.hex,
            shouldUnderlineLink,
        };
    }

    const { isDark } = base;

    // Get the IDs of accessible colors compared to
    // both canvas colors
    const possibleLinkColorIdsComparedToCanvases =
        getPossibleLinkColorsComparedToCanvases(
            sourceColors,
            canvasColor,
            canvasAltColor,
        );

    // Get the IDs of accessible colors compared to
    // the base text color
    const possibleLinkColorIdsComparedToText = getPossibleColorsComparedToText(
        sourceColors,
        textColor,
    );

    // Get the IDs of accessible color options that work
    // with both canvas colors and surrounding text color
    const commonIds = getCommonIds(
        possibleLinkColorIdsComparedToCanvases,
        possibleLinkColorIdsComparedToText,
    );

    // If an accessible color cannot be found,
    // we should underline the link...
    const shouldUnderline = commonIds.length === 0;
    // ...and fall back to ensuring the text is accessible
    // with botht he canvas colors
    const options = !shouldUnderline
        ? commonIds
        : possibleLinkColorIdsComparedToCanvases;

    // Always check to see if we can use
    // the base color provided...
    const shouldUseSource = options.indexOf('base') > -1;

    // If we can use the base color...
    if (shouldUseSource) {
        return {
            textColor: base.hex,
            shouldUnderline,
        };
    }

    // If there are no accessible options...
    if (options.length === 0) {
        return {
            textColor: recommendedTextColor.hex,
            shouldUnderline,
        };
    }

    // Use `min` to get the darkest variant, `max` to get the lightest
    let mathMethod = Math.min;
    let variantOps = options.map((op) => {
        const variant = variants.find((v) => v.id === op);

        return variant;
    });

    let hasDarkVariants = false;
    let hasLightVariants = false;

    for (let index = 0; index < variantOps.length; index += 1) {
        const variantOp = variantOps[index];

        if (variantOp.isDark ?? variantOp.isDark) {
            hasDarkVariants = true;
            break;
        }
    }

    for (let index = 0; index < variantOps.length; index += 1) {
        const variantOp = variantOps[index];

        if (variantOp.isDark ?? !variantOp.isDark) {
            hasLightVariants = true;
            break;
        }
    }

    // If the base color is perceived as dark
    // and there are dark variants:
    // - Filter out any light variants
    // - Pick the lightest of the dark variants
    if (isDark && hasDarkVariants) {
        variantOps = variantOps.filter((variantOp) => variantOp.isDark);
        mathMethod = Math.max;
    }

    // If the base color is perceived as dark
    // and there are no dark variants:
    // - Pick the darkest of the light variants
    // if (isDark && !hasDarkVariants) {
    //     // No need to filter, all variants are all the same perceived lightness
    //     // No need to change Math method, already set to min.
    //     // Nothing to do.
    // }

    // If the base color is perceived as light
    // and there are light variants:
    // - Filter out any dark variants
    // - Pick the darkest of the light variants
    if (!isDark && hasLightVariants) {
        variantOps = variantOps.filter((variantOp) => !variantOp.isDark);
        // No need to change Math method, already set to min.
    }

    // If the base color is perceived as light
    // and there are no light variants:
    // - Pick the lightest of the dark variants
    if (!isDark && !hasLightVariants) {
        // No need to filter, all variants are all the same perceived lightness
        mathMethod = Math.max;
    }

    const variantId = mathMethod(
        ...variantOps.map((variantOp) => variantOp.id),
    ).toString();

    return {
        textColor: variants.find((variant) => variant.id === variantId)?.hex,
        shouldUnderline,
    };
};

export const getLinkTheme = (data = {}, colors = {}, config = {}) => {
    const { canvasColor = {}, canvasAltColor = {} } = colors;
    const { isMobile, isDarkMode } = config;
    const DEFAULTS = getThemeDefaults(isDarkMode);
    const apiKeyLinkText = getThemeAPIKeyFromName(LINK_TEXT_COLOR);
    const { [apiKeyLinkText]: linkHex = DEFAULTS[LINK_TEXT_COLOR] } = data;
    const sourceColors = getColorData({
        hex: linkHex,
        step: 2,
        canvasColor,
        canvasAltColor,
    });
    const { textColor: linkTextColor, shouldUnderline } = getLinkColor(
        {
            sourceColors,
            ...colors,
        },
        config,
    );

    return {
        [apiKeyLinkText]: linkTextColor,
        [getThemeAPIKeyFromName(LINK_TEXT_DECORATION)]: shouldUnderline
            ? 'underline'
            : 'none',
        ...(!isMobile && {
            [getThemeAPIKeyFromName(LINK_FOCUS_HALO_COLOR)]:
                getFocusHaloRGBA(linkTextColor),
        }),
    };
};
