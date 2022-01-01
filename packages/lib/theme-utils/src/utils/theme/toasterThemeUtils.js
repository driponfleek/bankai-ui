import { convertColorToRGBA } from '@epr0t0type/bankai-lib-color-utils';
import { getTextColor } from '../colorUtils';
import { getThemeAPIKeyFromName } from '../dataMassageUtils';
import { THEME_TOKEN_NAMES } from '../../const/themeTokensConst';

const {
    COLOR_TOASTER_BG,
    COLOR_TOASTER_TEXT,
    COLOR_TOASTER_PROGRESS_BAR,
    COLOR_TOASTER_ERROR_BG,
    COLOR_TOASTER_ERROR_TEXT,
    COLOR_TOASTER_ERROR_PROGRESS_BAR,
    COLOR_TOASTER_INFO_BG,
    COLOR_TOASTER_INFO_TEXT,
    COLOR_TOASTER_INFO_PROGRESS_BAR,
    COLOR_TOASTER_SUCCESS_BG,
    COLOR_TOASTER_SUCCESS_TEXT,
    COLOR_TOASTER_SUCCESS_PROGRESS_BAR,
    COLOR_TOASTER_WARNING_BG,
    COLOR_TOASTER_WARNING_TEXT,
    COLOR_TOASTER_WARNING_PROGRESS_BAR,
} = THEME_TOKEN_NAMES;

export const getToasterColors = (sourceColorData = {}) => {
    const { base = {} } = sourceColorData;
    const TEXT = getTextColor(base.hex);
    const PROGRESS = convertColorToRGBA(TEXT, 0.3, true);

    return {
        TEXT,
        PROGRESS,
    };
};

export const getToasterAffirmativeTheme = (sourceColorData = {}) => {
    const { base = {} } = sourceColorData;
    const { TEXT, PROGRESS } = getToasterColors(sourceColorData);

    return {
        [getThemeAPIKeyFromName(COLOR_TOASTER_SUCCESS_PROGRESS_BAR)]: PROGRESS,
        [getThemeAPIKeyFromName(COLOR_TOASTER_SUCCESS_TEXT)]: TEXT,
        [getThemeAPIKeyFromName(COLOR_TOASTER_SUCCESS_BG)]: base.hex,
    };
};

export const getToasterCautionaryTheme = (sourceColorData = {}) => {
    const { base = {} } = sourceColorData;
    const { TEXT, PROGRESS } = getToasterColors(sourceColorData);

    return {
        [getThemeAPIKeyFromName(COLOR_TOASTER_WARNING_PROGRESS_BAR)]: PROGRESS,
        [getThemeAPIKeyFromName(COLOR_TOASTER_WARNING_TEXT)]: TEXT,
        [getThemeAPIKeyFromName(COLOR_TOASTER_WARNING_BG)]: base.hex,
    };
};

export const getToasterErrorTheme = (sourceColorData = {}) => {
    const { base = {} } = sourceColorData;
    const { TEXT, PROGRESS } = getToasterColors(sourceColorData);

    return {
        [getThemeAPIKeyFromName(COLOR_TOASTER_ERROR_PROGRESS_BAR)]: PROGRESS,
        [getThemeAPIKeyFromName(COLOR_TOASTER_ERROR_TEXT)]: TEXT,
        [getThemeAPIKeyFromName(COLOR_TOASTER_ERROR_BG)]: base.hex,
    };
};

export const getToasterInfoTheme = (sourceColorData = {}) => {
    const { base = {} } = sourceColorData;
    const { TEXT, PROGRESS } = getToasterColors(sourceColorData);

    return {
        [getThemeAPIKeyFromName(COLOR_TOASTER_INFO_PROGRESS_BAR)]: PROGRESS,
        [getThemeAPIKeyFromName(COLOR_TOASTER_INFO_TEXT)]: TEXT,
        [getThemeAPIKeyFromName(COLOR_TOASTER_INFO_BG)]: base.hex,
    };
};

export const getToasterTheme = (sourceColorData = {}) => {
    const { base = {} } = sourceColorData;
    const { TEXT, PROGRESS } = getToasterColors(sourceColorData);

    return {
        [getThemeAPIKeyFromName(COLOR_TOASTER_PROGRESS_BAR)]: PROGRESS,
        [getThemeAPIKeyFromName(COLOR_TOASTER_TEXT)]: TEXT,
        [getThemeAPIKeyFromName(COLOR_TOASTER_BG)]: base.hex,
    };
};
