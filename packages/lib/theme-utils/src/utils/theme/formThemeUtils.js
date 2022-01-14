import {
    getRecommendedColor,
    convertColorToRGBA,
    getNewColorByChangingLightness,
} from '@epr0t0type/bankai-lib-color-utils';
import {
    getJuxtaposedColorAgainstCanvases,
    getCorrectedLightnessAdjustment,
    getTextColor,
} from '../colorUtils';
import { getThemeAPIKeyFromName } from '../dataMassageUtils';
import { THEME_TOKEN_NAMES } from '../../const/themeTokensConst';

const {
    COLOR_FORM_CHECKED_STATE_BG,
    COLOR_FORM_CHECKED_STATE_ICON,
    COLOR_FORM_CHECKED_STATE_FOCUS_HALO,
    COLOR_FORM_DATE_PICKER_OFF_RANGE_TEXT,
    COLOR_FORM_DND_FILE_UPLOADER_HOVER_STATE_BG,
    COLOR_FORM_DND_FILE_UPLOADER_HOVER_STATE_BORDER,
    COLOR_FORM_DND_FILE_UPLOADER_HOVER_STATE_TEXT,
    COLOR_FORM_DND_FILE_UPLOADER_REJECTED_STATE_BG,
    COLOR_FORM_DND_FILE_UPLOADER_REJECTED_STATE_BORDER,
    COLOR_FORM_DND_FILE_UPLOADER_REJECTED_STATE_TEXT,
    COLOR_FORM_INLINE_ERROR_TEXT,
    COLOR_FORM_INPUT_BG,
    COLOR_FORM_INPUT_TEXT,
    COLOR_FORM_INPUT_DISABLED_BG,
    COLOR_FORM_INPUT_DISABLED_PLACEHOLDER_TEXT,
    COLOR_FORM_INPUT_ERROR_BORDER,
    COLOR_FORM_INPUT_ERROR_BG,
    COLOR_FORM_INPUT_ERROR_PLACEHOLDER_TEXT,
    COLOR_FORM_INPUT_ERROR_FOCUS_HALO,
    COLOR_FORM_INPUT_PLACHOLDER_TEXT,
    COLOR_FORM_MENU_SELECTED_STATE_BG,
    COLOR_FORM_MENU_SELECTED_STATE_FOCUS_BG,
    COLOR_FORM_MENU_SELECTED_STATE_FOCUS_TEXT,
    COLOR_FORM_MENU_SELECTED_STATE_TEXT,
    COLOR_FORM_PILL_BG,
    COLOR_FORM_PILL_TEXT,
    COLOR_FORM_TOGGLE_SWITCH_KNOB,
    COLOR_FORM_TOGGLE_SWITCH_KNOB_BORDER,
    COLOR_FORM_TOGGLE_SWITCH_TRACK,
    COLOR_FORM_TOGGLE_SWITCH_TRACK_HOVER,
    COLOR_FORM_TOGGLE_SWITCH_KNOB_ON_STATE,
    COLOR_FORM_TOGGLE_SWITCH_TRACK_ON_STATE,
    COLOR_FORM_TOGGLE_SWITCH_TRACK_HOVER_ON_STATE,
    COLOR_FORM_TOGGLE_SWITCH_BUSY_ICON,
    COLOR_FORM_TOGGLE_SWITCH_BUSY_ICON_ON_STATE,
    COLOR_FORM_TOGGLE_SWITCH_ON_STATE_FOCUS_HALO,
} = THEME_TOKEN_NAMES;

export const getFormToggleSwitchTheme = (colors = {}, config = {}) => {
    const {
        sourceColorData = {},
        canvasColor = {},
        canvasAltColor = {},
    } = colors;
    const { base = {} } = sourceColorData;
    const { isDarkMode, shouldAutoCorrectColors = true } = config;
    const formTrackOnStateColor = !shouldAutoCorrectColors
        ? base
        : getJuxtaposedColorAgainstCanvases({
              sourceColorData,
              canvasColor,
              canvasAltColor,
          });

    const trackLightnessThreshold = 10;
    const trackOnHoverLightness = getCorrectedLightnessAdjustment(
        formTrackOnStateColor.lightness,
        trackLightnessThreshold,
        isDarkMode,
    );

    const trackOnHoverColor = getNewColorByChangingLightness(
        formTrackOnStateColor.hex,
        trackOnHoverLightness,
    );
    const defaultTrackBGColor = getNewColorByChangingLightness(
        canvasColor.hex,
        30,
    );
    const knobColor = canvasColor.hex;

    return {
        [getThemeAPIKeyFromName(COLOR_FORM_TOGGLE_SWITCH_KNOB)]: knobColor,
        [getThemeAPIKeyFromName(COLOR_FORM_TOGGLE_SWITCH_TRACK)]:
            defaultTrackBGColor,
        [getThemeAPIKeyFromName(COLOR_FORM_TOGGLE_SWITCH_TRACK_HOVER)]:
            getNewColorByChangingLightness(
                canvasColor.hex,
                isDarkMode ? 40 : 20,
            ),
        [getThemeAPIKeyFromName(COLOR_FORM_TOGGLE_SWITCH_KNOB_BORDER)]:
            defaultTrackBGColor,
        [getThemeAPIKeyFromName(COLOR_FORM_TOGGLE_SWITCH_KNOB_ON_STATE)]:
            knobColor,
        [getThemeAPIKeyFromName(COLOR_FORM_TOGGLE_SWITCH_TRACK_ON_STATE)]:
            formTrackOnStateColor.hex,
        [getThemeAPIKeyFromName(COLOR_FORM_TOGGLE_SWITCH_TRACK_HOVER_ON_STATE)]:
            trackOnHoverColor,
        [getThemeAPIKeyFromName(COLOR_FORM_TOGGLE_SWITCH_ON_STATE_FOCUS_HALO)]:
            convertColorToRGBA(trackOnHoverColor, 0.4, true),
        [getThemeAPIKeyFromName(COLOR_FORM_TOGGLE_SWITCH_BUSY_ICON)]:
            getTextColor(defaultTrackBGColor),
        [getThemeAPIKeyFromName(COLOR_FORM_TOGGLE_SWITCH_BUSY_ICON_ON_STATE)]:
            getTextColor(formTrackOnStateColor.hex),
    };
};

export const getFormDnDFileUploaderTheme = (colors = {}, config = {}) => {
    const { affirmativeColorData, errorColorData, ...rest } = colors;
    const { shouldAutoCorrectColors = true, isDarkMode } = config;
    const lightnessThreshold = 30;
    const hoverColor = !shouldAutoCorrectColors
        ? affirmativeColorData?.base
        : getJuxtaposedColorAgainstCanvases({
              ...rest,
              sourceColorData: affirmativeColorData,
          });
    const hoverBorderLightness = getCorrectedLightnessAdjustment(
        hoverColor.lightness,
        lightnessThreshold,
        isDarkMode,
    );
    const hoverBorderColor = getNewColorByChangingLightness(
        hoverColor.hex,
        hoverBorderLightness,
    );
    const hoverTextColor = getTextColor(hoverColor.hex);
    const rejectColor = !shouldAutoCorrectColors
        ? errorColorData?.base
        : getJuxtaposedColorAgainstCanvases({
              ...rest,
              sourceColorData: errorColorData,
          });
    const rejectBorderLightness = getCorrectedLightnessAdjustment(
        rejectColor.lightness,
        lightnessThreshold,
        isDarkMode,
    );

    const rejectBorderColor = getNewColorByChangingLightness(
        rejectColor.hex,
        rejectBorderLightness,
    );
    const rejectTextColor = getTextColor(rejectColor.hex);

    return {
        [getThemeAPIKeyFromName(COLOR_FORM_DND_FILE_UPLOADER_HOVER_STATE_BG)]:
            hoverColor.hex,
        [getThemeAPIKeyFromName(COLOR_FORM_DND_FILE_UPLOADER_HOVER_STATE_TEXT)]:
            hoverTextColor,
        [getThemeAPIKeyFromName(
            COLOR_FORM_DND_FILE_UPLOADER_HOVER_STATE_BORDER,
        )]: hoverBorderColor,
        [getThemeAPIKeyFromName(
            COLOR_FORM_DND_FILE_UPLOADER_REJECTED_STATE_BG,
        )]: rejectColor.hex,
        [getThemeAPIKeyFromName(
            COLOR_FORM_DND_FILE_UPLOADER_REJECTED_STATE_BORDER,
        )]: rejectBorderColor,
        [getThemeAPIKeyFromName(
            COLOR_FORM_DND_FILE_UPLOADER_REJECTED_STATE_TEXT,
        )]: rejectTextColor,
    };
};

export const getFormErrorsTheme = (colors = {}, config = {}) => {
    const { sourceColorData = {}, ...rest } = colors;
    const { isDarkMode, shouldAutoCorrectColors = true } = config;
    const { base = {}, variants = [] } = sourceColorData;
    const FORM_INLINE_ERROR_TEXT_API_KEY = getThemeAPIKeyFromName(
        COLOR_FORM_INLINE_ERROR_TEXT,
    );
    const FORM_INPUT_ERROR_BG_API_KEY = getThemeAPIKeyFromName(
        COLOR_FORM_INPUT_ERROR_BG,
    );
    const FORM_INPUT_ERROR_PLACEHOLDER_TEXT_API_KEY = getThemeAPIKeyFromName(
        COLOR_FORM_INPUT_ERROR_PLACEHOLDER_TEXT,
    );
    const FORM_INPUT_ERROR_BORDER_API_KEY = getThemeAPIKeyFromName(
        COLOR_FORM_INPUT_ERROR_BORDER,
    );
    const FORM_INPUT_ERROR_FOCUS_HALO_API_KEY = getThemeAPIKeyFromName(
        COLOR_FORM_INPUT_ERROR_FOCUS_HALO,
    );

    const errorTextColor = !shouldAutoCorrectColors
        ? base.hex
        : getJuxtaposedColorAgainstCanvases(
              {
                  ...rest,
                  sourceColorData,
              },
              true,
          ).hex;
    const bgLightness = isDarkMode ? 20 : 80;
    const inputErrorBgColor =
        variants.find((variant) => variant.lightness === bgLightness) || {};
    const inputErrorPlaceholderTextColor = getRecommendedColor(
        inputErrorBgColor,
        [base, ...variants],
        true,
    )?.hex;

    return {
        [FORM_INLINE_ERROR_TEXT_API_KEY]: errorTextColor,
        [FORM_INPUT_ERROR_BG_API_KEY]: inputErrorBgColor.hex,
        [FORM_INPUT_ERROR_PLACEHOLDER_TEXT_API_KEY]:
            inputErrorPlaceholderTextColor,
        [FORM_INPUT_ERROR_BORDER_API_KEY]: inputErrorPlaceholderTextColor,
        [FORM_INPUT_ERROR_FOCUS_HALO_API_KEY]: convertColorToRGBA(
            inputErrorPlaceholderTextColor,
            0.4,
            true,
        ),
    };
};

export const getFormGeneralTheme = (canvasColorData = {}, config = {}) => {
    const { isDarkMode } = config;
    const { base = {}, variants = [] } = canvasColorData;
    const defaultBg = base.hex;
    const recommendedPlaceholderTextColor =
        getRecommendedColor(base, variants, true) || {};
    const disabledBgColor = isDarkMode
        ? variants.find((variant) => variant.lightness === 30)
        : variants.find((variant) => variant.lightness === 70);
    const disabledPlaceholderTextColor =
        getRecommendedColor(disabledBgColor, [base, ...variants], true) || {};

    const themeData = {
        [getThemeAPIKeyFromName(COLOR_FORM_INPUT_BG)]: defaultBg,
        [getThemeAPIKeyFromName(COLOR_FORM_INPUT_TEXT)]:
            getTextColor(defaultBg),
        [getThemeAPIKeyFromName(COLOR_FORM_INPUT_PLACHOLDER_TEXT)]:
            recommendedPlaceholderTextColor.hex,
        [getThemeAPIKeyFromName(COLOR_FORM_INPUT_DISABLED_BG)]:
            disabledBgColor?.hex,
        [getThemeAPIKeyFromName(COLOR_FORM_INPUT_DISABLED_PLACEHOLDER_TEXT)]:
            disabledPlaceholderTextColor.hex,
        [getThemeAPIKeyFromName(COLOR_FORM_DATE_PICKER_OFF_RANGE_TEXT)]:
            recommendedPlaceholderTextColor.hex,
    };

    return themeData;
};

export const getFormPrimaryColorTheme = (colors = {}, config = {}) => {
    const { sourceColorData, ...rest } = colors;
    const { shouldAutoCorrectColors = true, isDarkMode } = config;
    const recommendedColorData = !shouldAutoCorrectColors
        ? sourceColorData.base
        : getJuxtaposedColorAgainstCanvases({
              ...rest,
              sourceColorData,
          });
    const textColor = getTextColor(recommendedColorData?.hex);
    const { lightness: recommendedColorLightness } = recommendedColorData || {};
    const lightnessThreshold = 20;
    const menuItemSelectedLightness = getCorrectedLightnessAdjustment(
        recommendedColorLightness,
        lightnessThreshold,
        isDarkMode,
    );
    const formMenuSelectedStateFocusBGColor = getNewColorByChangingLightness(
        recommendedColorData?.hex,
        menuItemSelectedLightness,
    );

    return {
        [getThemeAPIKeyFromName(COLOR_FORM_CHECKED_STATE_BG)]:
            recommendedColorData?.hex,
        [getThemeAPIKeyFromName(COLOR_FORM_CHECKED_STATE_ICON)]: textColor,
        [getThemeAPIKeyFromName(COLOR_FORM_CHECKED_STATE_FOCUS_HALO)]:
            convertColorToRGBA(recommendedColorData?.hex, 0.4, true),
        [getThemeAPIKeyFromName(COLOR_FORM_PILL_BG)]: recommendedColorData?.hex,
        [getThemeAPIKeyFromName(COLOR_FORM_PILL_TEXT)]: textColor,
        [getThemeAPIKeyFromName(COLOR_FORM_MENU_SELECTED_STATE_FOCUS_BG)]:
            formMenuSelectedStateFocusBGColor,
        [getThemeAPIKeyFromName(COLOR_FORM_MENU_SELECTED_STATE_FOCUS_TEXT)]:
            getTextColor(formMenuSelectedStateFocusBGColor),
        [getThemeAPIKeyFromName(COLOR_FORM_MENU_SELECTED_STATE_BG)]:
            recommendedColorData?.hex,
        [getThemeAPIKeyFromName(COLOR_FORM_MENU_SELECTED_STATE_TEXT)]:
            textColor,
    };
};
