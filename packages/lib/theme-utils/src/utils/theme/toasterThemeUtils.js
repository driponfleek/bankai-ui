import { convertColorToRGBA } from '@epr0t0type/bankai-lib-color-utils';
import { getTextColor } from '../helperUtils';
import { getThemeAPIKeyFromName } from '../dataUtils';
import { TOASTER_TOKEN_NAMES } from '../../const/tokens/toasterTokensConst';
import { TOASTER_STYLE_TOKEN_DEFAULTS } from '../../const/tokens/defaults/toasterTokenDefaultsConst';

const {
    TOASTER_BG_COLOR,
    TOASTER_BORDER_RADIUS,
    TOASTER_TEXT_COLOR,
    TOASTER_PROGRESS_BAR_COLOR,
    TOASTER_ERROR_BG_COLOR,
    TOASTER_ERROR_TEXT_COLOR,
    TOASTER_ERROR_PROGRESS_BAR_COLOR,
    TOASTER_INFO_BG_COLOR,
    TOASTER_INFO_TEXT_COLOR,
    TOASTER_INFO_PROGRESS_BAR_COLOR,
    TOASTER_SUCCESS_BG_COLOR,
    TOASTER_SUCCESS_TEXT_COLOR,
    TOASTER_SUCCESS_PROGRESS_BAR_COLOR,
    TOASTER_WARNING_BG_COLOR,
    TOASTER_WARNING_TEXT_COLOR,
    TOASTER_WARNING_PROGRESS_BAR_COLOR,
} = TOASTER_TOKEN_NAMES;

export const getToasterStyles = (data = {}) => {
    const apiKeyBorderRadius = getThemeAPIKeyFromName(TOASTER_BORDER_RADIUS);
    const defaultBorderRadius =
        TOASTER_STYLE_TOKEN_DEFAULTS[TOASTER_BORDER_RADIUS];

    const { [apiKeyBorderRadius]: borderRadius = defaultBorderRadius } = data;

    return {
        [apiKeyBorderRadius]: borderRadius,
    };
};

export const getToasterColors = (colors = {}) => {
    const { sourceColors = {} } = colors;
    const { base = {} } = sourceColors;
    const TEXT = getTextColor(base.hex);
    const PROGRESS = convertColorToRGBA(TEXT, 0.3, true);

    return {
        TEXT,
        PROGRESS,
    };
};

export const getToasterAffirmativeTheme = (colors = {}) => {
    const { sourceColors = {} } = colors;
    const { base = {} } = sourceColors;
    const { TEXT, PROGRESS } = getToasterColors(sourceColors);

    return {
        [getThemeAPIKeyFromName(TOASTER_SUCCESS_PROGRESS_BAR_COLOR)]: PROGRESS,
        [getThemeAPIKeyFromName(TOASTER_SUCCESS_TEXT_COLOR)]: TEXT,
        [getThemeAPIKeyFromName(TOASTER_SUCCESS_BG_COLOR)]: base.hex,
    };
};

export const getToasterCautionaryTheme = (colors = {}) => {
    const { sourceColors = {} } = colors;
    const { base = {} } = sourceColors;
    const { TEXT, PROGRESS } = getToasterColors(sourceColors);

    return {
        [getThemeAPIKeyFromName(TOASTER_WARNING_PROGRESS_BAR_COLOR)]: PROGRESS,
        [getThemeAPIKeyFromName(TOASTER_WARNING_TEXT_COLOR)]: TEXT,
        [getThemeAPIKeyFromName(TOASTER_WARNING_BG_COLOR)]: base.hex,
    };
};

export const getToasterErrorTheme = (colors = {}) => {
    const { sourceColors = {} } = colors;
    const { base = {} } = sourceColors;
    const { TEXT, PROGRESS } = getToasterColors(sourceColors);

    return {
        [getThemeAPIKeyFromName(TOASTER_ERROR_PROGRESS_BAR_COLOR)]: PROGRESS,
        [getThemeAPIKeyFromName(TOASTER_ERROR_TEXT_COLOR)]: TEXT,
        [getThemeAPIKeyFromName(TOASTER_ERROR_BG_COLOR)]: base.hex,
    };
};

export const getToasterInfoTheme = (colors = {}) => {
    const { sourceColors = {} } = colors;
    const { base = {} } = sourceColors;
    const { TEXT, PROGRESS } = getToasterColors(sourceColors);

    return {
        [getThemeAPIKeyFromName(TOASTER_INFO_PROGRESS_BAR_COLOR)]: PROGRESS,
        [getThemeAPIKeyFromName(TOASTER_INFO_TEXT_COLOR)]: TEXT,
        [getThemeAPIKeyFromName(TOASTER_INFO_BG_COLOR)]: base.hex,
    };
};

export const getToasterTheme = (colors = {}) => {
    const { sourceColors = {} } = colors;
    const { base = {} } = sourceColors;
    const { TEXT, PROGRESS } = getToasterColors(sourceColors);

    return {
        [getThemeAPIKeyFromName(TOASTER_PROGRESS_BAR_COLOR)]: PROGRESS,
        [getThemeAPIKeyFromName(TOASTER_TEXT_COLOR)]: TEXT,
        [getThemeAPIKeyFromName(TOASTER_BG_COLOR)]: base.hex,
    };
};
