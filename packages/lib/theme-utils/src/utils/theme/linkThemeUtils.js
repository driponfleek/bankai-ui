/* eslint-disable import/prefer-default-export */
import { getColorCorrelationsData } from '@epr0t0type/bankai-lib-color-utils';
import { getThemeAPIKeyFromName } from '../dataMassageUtils';
import {
    getCommonColorCompatabilities,
    getCommonIds,
    getFocusHaloRGBA,
} from '../colorUtils';
import { THEME_TOKEN_NAMES } from '../../const/themeTokensConst';

const { COLOR_LINK, COLOR_LINK_FOCUS_HALO } = THEME_TOKEN_NAMES;

const getPossibleLinkColorsComparedToCanvases = (
    sourceColorData = {},
    canvasColor = {},
    canvasAltColor = {},
) => {
    const { base = {}, variants = [] } = sourceColorData;
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

const getPossibleColorsComparedToText = (
    sourceColorData = {},
    textColor = {},
) => {
    const { base = {}, variants = [] } = sourceColorData;
    const textOptions = [base, ...variants];
    const evaluatedTextColor = getColorCorrelationsData(textColor, textOptions);
    const { compatibleNonTextColors } = evaluatedTextColor;

    return compatibleNonTextColors;
};

const getLinkColor = (colors = {}, shouldAutoCorrectColors = true) => {
    const {
        sourceColorData = {},
        canvasColor = {},
        canvasAltColor = {},
        textColor = {},
    } = colors;
    const { base = {}, variants = [] } = sourceColorData;

    if (!shouldAutoCorrectColors) {
        return base.hex;
    }

    const { isDark } = sourceColorData;
    // Use `min` to get the darkest variant, `max` to get the lightest
    const mathMethod = isDark ? Math.min : Math.max;
    const possibleLinkColorIdsComparedToCanvases =
        getPossibleLinkColorsComparedToCanvases(
            sourceColorData,
            canvasColor,
            canvasAltColor,
        );
    const possibleLinkColorIdsComparedToText = getPossibleColorsComparedToText(
        sourceColorData,
        textColor,
    );
    const commonIds = getCommonIds(
        possibleLinkColorIdsComparedToCanvases,
        possibleLinkColorIdsComparedToText,
    );
    const shouldUseSource =
        commonIds.indexOf('base') > -1 || commonIds.length === 0;

    if (shouldUseSource) {
        return base.hex;
    }

    if (commonIds.length === 1) {
        return variants.find((variant) => variant.id === commonIds[0])?.hex;
    }

    return variants.find((variant) => variant.id === mathMethod(...commonIds));
};

export const getLinkTheme = (colors = {}, config = {}) => {
    const { shouldAutoCorrectColors } = config;
    const linkColor = getLinkColor(colors, shouldAutoCorrectColors);

    return {
        [getThemeAPIKeyFromName(COLOR_LINK)]: linkColor,
        [getThemeAPIKeyFromName(COLOR_LINK_FOCUS_HALO)]:
            getFocusHaloRGBA(linkColor),
    };
};
