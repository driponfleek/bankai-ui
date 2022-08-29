import {
    getRecommendedColor,
    convertColorToRGBA,
    getNewColorByChangingLightness,
} from '@epr0t0type/bankai-lib-color-utils';
import {
    getCorrectedLightnessAdjustment,
    getTextColor,
    getAccessibleWhiteOrBlackColor,
    getAccessibleNeutralColor,
} from '../helperUtils';
import {
    getThemeAPIKeyFromName,
    getJuxtaposedColorAgainstCanvases,
} from '../dataUtils';
import { FORM_TOKEN_NAMES } from '../../const/tokens/formTokensConst';
import { FORM_STYLE_TOKEN_DEFAULTS } from '../../const/tokens/defaults/formTokenDefaultsConst';

const {
    FORM_CHECKBOX_BORDER_RADIUS,
    FORM_CHECKED_ACCENT_COLOR,
    FORM_CHECKED_ACCENT_COMPLIMENT_COLOR,
    FORM_CHECKED_FOCUS_HALO_COLOR,
    FORM_DATE_PICKER_OFF_RANGE_TEXT_COLOR,
    FORM_DND_FILE_UPLOADER_HOVER_BG_COLOR,
    FORM_DND_FILE_UPLOADER_HOVER_BORDER_COLOR,
    FORM_DND_FILE_UPLOADER_HOVER_TEXT_COLOR,
    FORM_DND_FILE_UPLOADER_REJECTED_BG_COLOR,
    FORM_DND_FILE_UPLOADER_REJECTED_BORDER_COLOR,
    FORM_DND_FILE_UPLOADER_REJECTED_TEXT_COLOR,
    FORM_INPUT_BG_COLOR,
    FORM_INPUT_BORDER_RADIUS,
    FORM_INPUT_BORDER_WIDTH,
    FORM_INPUT_TEXT_COLOR,
    FORM_INPUT_DISABLED_BG_COLOR,
    FORM_INPUT_DISABLED_PLACEHOLDER_TEXT_COLOR,
    FORM_INPUT_ERROR_BORDER_COLOR,
    FORM_INPUT_ERROR_BG_COLOR,
    FORM_INPUT_ERROR_PLACEHOLDER_TEXT_COLOR,
    FORM_INPUT_ERROR_FOCUS_HALO_COLOR,
    FORM_INPUT_FOCUS_BORDER_COLOR,
    FORM_INPUT_FOCUS_HALO_COLOR,
    FORM_INPUT_PLACEHOLDER_FONT_STYLE,
    FORM_INPUT_PLACEHOLDER_TEXT_COLOR,
    FORM_MENU_BORDER_RADIUS,
    FORM_MENU_SELECTED_BG_COLOR,
    FORM_MENU_SELECTED_FOCUS_BG_COLOR,
    FORM_MENU_SELECTED_FOCUS_TEXT_COLOR,
    FORM_MENU_SELECTED_TEXT_COLOR,
    FORM_PILL_BG_COLOR,
    FORM_PILL_BORDER_RADIUS,
    FORM_PILL_TEXT_COLOR,
    FORM_TOGGLE_SWITCH_KNOB_COLOR,
    FORM_TOGGLE_SWITCH_KNOB_BORDER_COLOR,
    FORM_TOGGLE_SWITCH_KNOB_BORDER_RADIUS,
    FORM_TOGGLE_SWITCH_TRACK_BORDER_RADIUS,
    FORM_TOGGLE_SWITCH_TRACK_COLOR,
    FORM_TOGGLE_SWITCH_TRACK_HOVER_COLOR,
    FORM_TOGGLE_SWITCH_ON_KNOB_COLOR,
    FORM_TOGGLE_SWITCH_ON_TRACK_COLOR,
    FORM_TOGGLE_SWITCH_ON_HOVER_TRACK_COLOR,
    FORM_TOGGLE_SWITCH_BUSY_ICON_COLOR,
    FORM_TOGGLE_SWITCH_ON_BUSY_ICON_COLOR,
    FORM_TOGGLE_SWITCH_ON_FOCUS_HALO_COLOR,
} = FORM_TOKEN_NAMES;

export const getFormStyles = (data = {}) => {
    const apiKeyCheckboxBorderRadius = getThemeAPIKeyFromName(
        FORM_CHECKBOX_BORDER_RADIUS,
    );
    const apiKeyInputBorderRadius = getThemeAPIKeyFromName(
        FORM_INPUT_BORDER_RADIUS,
    );
    const apiKeyInputBorderWidth = getThemeAPIKeyFromName(
        FORM_INPUT_BORDER_WIDTH,
    );
    const apiKeyInputPlaceholderFontStyle = getThemeAPIKeyFromName(
        FORM_INPUT_PLACEHOLDER_FONT_STYLE,
    );
    const apiKeyMenuBorderRadius = getThemeAPIKeyFromName(
        FORM_MENU_BORDER_RADIUS,
    );
    const apiKeyPillBorderRadius = getThemeAPIKeyFromName(
        FORM_PILL_BORDER_RADIUS,
    );
    const apiKeyToggleSwitchTrackBorderRadius = getThemeAPIKeyFromName(
        FORM_TOGGLE_SWITCH_TRACK_BORDER_RADIUS,
    );
    const apiKeyToggleSwitchKnobBorderRadius = getThemeAPIKeyFromName(
        FORM_TOGGLE_SWITCH_KNOB_BORDER_RADIUS,
    );
    const checkboxBorderRadiusDefault =
        FORM_STYLE_TOKEN_DEFAULTS[FORM_CHECKBOX_BORDER_RADIUS];
    const inputBorderRadiusDefault =
        FORM_STYLE_TOKEN_DEFAULTS[FORM_INPUT_BORDER_RADIUS];
    const inputBorderWidthDefault =
        FORM_STYLE_TOKEN_DEFAULTS[FORM_INPUT_BORDER_WIDTH];
    const inputPlaceholderFontStyleDefault =
        FORM_STYLE_TOKEN_DEFAULTS[FORM_INPUT_PLACEHOLDER_FONT_STYLE];
    const menuBorderRadiusDefault =
        FORM_STYLE_TOKEN_DEFAULTS[FORM_MENU_BORDER_RADIUS];
    const pillBorderRadiusDefault =
        FORM_STYLE_TOKEN_DEFAULTS[FORM_PILL_BORDER_RADIUS];
    const toggleSwitchTrackBorderRadiusDefault =
        FORM_STYLE_TOKEN_DEFAULTS[FORM_TOGGLE_SWITCH_TRACK_BORDER_RADIUS];
    const {
        [apiKeyCheckboxBorderRadius]:
            checkboxBorderRadius = checkboxBorderRadiusDefault,
        [apiKeyInputBorderRadius]: inputBorderRadius = inputBorderRadiusDefault,
        [apiKeyInputBorderWidth]: inputBorderWidth = inputBorderWidthDefault,
        [apiKeyInputPlaceholderFontStyle]:
            inputPlaceholderFontStyle = inputPlaceholderFontStyleDefault,
        [apiKeyMenuBorderRadius]: menuBorderRadius = menuBorderRadiusDefault,
        [apiKeyPillBorderRadius]: pillBorderRadius = pillBorderRadiusDefault,
        [apiKeyToggleSwitchTrackBorderRadius]:
            toggleSwitchTrackBorderRadius = toggleSwitchTrackBorderRadiusDefault,
    } = data;

    return {
        [apiKeyCheckboxBorderRadius]: checkboxBorderRadius,
        [apiKeyInputBorderRadius]: inputBorderRadius,
        [apiKeyInputBorderWidth]: inputBorderWidth,
        [apiKeyInputPlaceholderFontStyle]: inputPlaceholderFontStyle,
        [apiKeyMenuBorderRadius]: menuBorderRadius,
        [apiKeyPillBorderRadius]: pillBorderRadius,
        [apiKeyToggleSwitchTrackBorderRadius]: toggleSwitchTrackBorderRadius,
        [apiKeyToggleSwitchKnobBorderRadius]: Math.max(
            toggleSwitchTrackBorderRadius - 1,
            0,
        ),
    };
};

export const getFormToggleSwitchTheme = (colors = {}, config = {}) => {
    const { sourceColors = {}, canvasColor = {}, canvasAltColor = {} } = colors;
    const {
        isDarkMode,
        isMobile = false,
        shouldAutoCorrectColors = true,
    } = config;
    const { base = {}, recommendedNonTextColor = {} } = sourceColors;
    const { hex: canvasHex } = canvasColor;
    const formTrackOnStateColor = !shouldAutoCorrectColors
        ? base
        : recommendedNonTextColor;
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
    const defaultTrackBGColor = getAccessibleNeutralColor(
        canvasColor?.hex,
        canvasAltColor?.hex,
    );
    const knobColor = canvasHex;

    return {
        [getThemeAPIKeyFromName(FORM_TOGGLE_SWITCH_KNOB_COLOR)]: knobColor,
        [getThemeAPIKeyFromName(FORM_TOGGLE_SWITCH_TRACK_COLOR)]:
            defaultTrackBGColor,
        [getThemeAPIKeyFromName(FORM_TOGGLE_SWITCH_KNOB_BORDER_COLOR)]:
            defaultTrackBGColor,
        [getThemeAPIKeyFromName(FORM_TOGGLE_SWITCH_ON_KNOB_COLOR)]: knobColor,
        [getThemeAPIKeyFromName(FORM_TOGGLE_SWITCH_ON_TRACK_COLOR)]:
            formTrackOnStateColor.hex,
        [getThemeAPIKeyFromName(FORM_TOGGLE_SWITCH_BUSY_ICON_COLOR)]:
            getAccessibleWhiteOrBlackColor(defaultTrackBGColor),
        [getThemeAPIKeyFromName(FORM_TOGGLE_SWITCH_ON_BUSY_ICON_COLOR)]:
            getAccessibleWhiteOrBlackColor(formTrackOnStateColor.hex),
        ...(!isMobile && {
            [getThemeAPIKeyFromName(FORM_TOGGLE_SWITCH_TRACK_HOVER_COLOR)]:
                getNewColorByChangingLightness(canvasHex, isDarkMode ? 40 : 20),
            [getThemeAPIKeyFromName(FORM_TOGGLE_SWITCH_ON_HOVER_TRACK_COLOR)]:
                trackOnHoverColor,
            [getThemeAPIKeyFromName(FORM_TOGGLE_SWITCH_ON_FOCUS_HALO_COLOR)]:
                convertColorToRGBA(trackOnHoverColor, 0.4, true),
        }),
    };
};

export const getFormDnDFileUploaderTheme = (colors = {}, config = {}) => {
    const { affirmativeColors, errorColors, ...rest } = colors;
    const { shouldAutoCorrectColors = true, isDarkMode } = config;
    const lightnessThreshold = 30;
    const hoverColor = !shouldAutoCorrectColors
        ? affirmativeColors?.base
        : getJuxtaposedColorAgainstCanvases({
              ...rest,
              sourceColors: affirmativeColors,
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
        ? errorColors?.base
        : getJuxtaposedColorAgainstCanvases({
              ...rest,
              sourceColors: errorColors,
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
        [getThemeAPIKeyFromName(FORM_DND_FILE_UPLOADER_HOVER_BG_COLOR)]:
            hoverColor.hex,
        [getThemeAPIKeyFromName(FORM_DND_FILE_UPLOADER_HOVER_TEXT_COLOR)]:
            hoverTextColor,
        [getThemeAPIKeyFromName(FORM_DND_FILE_UPLOADER_HOVER_BORDER_COLOR)]:
            hoverBorderColor,
        [getThemeAPIKeyFromName(FORM_DND_FILE_UPLOADER_REJECTED_BG_COLOR)]:
            rejectColor.hex,
        [getThemeAPIKeyFromName(FORM_DND_FILE_UPLOADER_REJECTED_BORDER_COLOR)]:
            rejectBorderColor,
        [getThemeAPIKeyFromName(FORM_DND_FILE_UPLOADER_REJECTED_TEXT_COLOR)]:
            rejectTextColor,
    };
};

export const getFormErrorsTheme = (colors = {}, config = {}) => {
    const { sourceColors = {} } = colors;
    const { isDarkMode, isMobile } = config;
    const { base = {}, variants = [] } = sourceColors;
    const FORM_INPUT_ERROR_BG_API_KEY = getThemeAPIKeyFromName(
        FORM_INPUT_ERROR_BG_COLOR,
    );
    const FORM_INPUT_ERROR_PLACEHOLDER_TEXT_API_KEY = getThemeAPIKeyFromName(
        FORM_INPUT_ERROR_PLACEHOLDER_TEXT_COLOR,
    );
    const FORM_INPUT_ERROR_BORDER_API_KEY = getThemeAPIKeyFromName(
        FORM_INPUT_ERROR_BORDER_COLOR,
    );
    const FORM_INPUT_ERROR_FOCUS_HALO_API_KEY = getThemeAPIKeyFromName(
        FORM_INPUT_ERROR_FOCUS_HALO_COLOR,
    );
    const bgLightness = isDarkMode ? 20 : 80;
    const inputErrorBgColor =
        variants.find((variant) => variant.lightness === bgLightness) || {};
    const inputErrorPlaceholderTextColor = getRecommendedColor(
        inputErrorBgColor,
        [base, ...variants],
        true,
    )?.hex;

    return {
        [FORM_INPUT_ERROR_BG_API_KEY]: inputErrorBgColor.hex,
        [FORM_INPUT_ERROR_PLACEHOLDER_TEXT_API_KEY]:
            inputErrorPlaceholderTextColor,
        [FORM_INPUT_ERROR_BORDER_API_KEY]: inputErrorPlaceholderTextColor,
        [FORM_INPUT_ERROR_FOCUS_HALO_API_KEY]: isMobile
            ? `${inputErrorPlaceholderTextColor}66`
            : convertColorToRGBA(inputErrorPlaceholderTextColor, 0.4, true),
    };
};

export const getFormGeneralTheme = (colors = {}, config = {}) => {
    const { canvasColors = {} } = colors;
    const { isDarkMode } = config;
    const { base = {}, variants = [] } = canvasColors;
    const { hex: defaultBg } = base;
    const recommendedPlaceholderTextColor =
        getRecommendedColor(base, variants, true) || {};
    const disabledBgColor = isDarkMode
        ? variants.find((variant) => variant.lightness === 30)
        : variants.find((variant) => variant.lightness === 70);
    const disabledPlaceholderTextColor =
        getRecommendedColor(disabledBgColor, [base, ...variants], true) || {};

    const themeData = {
        [getThemeAPIKeyFromName(FORM_INPUT_BG_COLOR)]: defaultBg,
        [getThemeAPIKeyFromName(FORM_INPUT_TEXT_COLOR)]:
            getTextColor(defaultBg),
        [getThemeAPIKeyFromName(FORM_INPUT_PLACEHOLDER_TEXT_COLOR)]:
            recommendedPlaceholderTextColor?.hex,
        [getThemeAPIKeyFromName(FORM_INPUT_DISABLED_BG_COLOR)]:
            disabledBgColor?.hex,
        [getThemeAPIKeyFromName(FORM_INPUT_DISABLED_PLACEHOLDER_TEXT_COLOR)]:
            disabledPlaceholderTextColor?.hex,
        [getThemeAPIKeyFromName(FORM_DATE_PICKER_OFF_RANGE_TEXT_COLOR)]:
            recommendedPlaceholderTextColor?.hex,
    };

    return themeData;
};

export const getFormCheckedAccentColorTheme = (colors = {}, config = {}) => {
    const { sourceColors = {} } = colors;
    const { isMobile, shouldAutoCorrectColors = true } = config;
    const { base = {}, recommendedNonTextColor = {} } = sourceColors;
    const accentColor = shouldAutoCorrectColors
        ? recommendedNonTextColor.hex
        : base.hex;

    return {
        [getThemeAPIKeyFromName(FORM_CHECKED_ACCENT_COLOR)]: accentColor,
        [getThemeAPIKeyFromName(FORM_CHECKED_ACCENT_COMPLIMENT_COLOR)]:
            getAccessibleWhiteOrBlackColor(accentColor),
        [getThemeAPIKeyFromName(FORM_CHECKED_FOCUS_HALO_COLOR)]: isMobile
            ? `${accentColor}66`
            : convertColorToRGBA(accentColor, 0.4, true),
    };
};

export const getFormMultiselectTheme = (colors = {}, config = {}) => {
    const { sourceColors = {} } = colors;
    const { shouldAutoCorrectColors = true } = config;
    const { base = {}, recommendedNonTextColor = {} } = sourceColors;
    const pillBGHex = shouldAutoCorrectColors
        ? recommendedNonTextColor.hex
        : base.hex;
    const textColor = getTextColor(pillBGHex);

    return {
        [getThemeAPIKeyFromName(FORM_PILL_BG_COLOR)]: pillBGHex,
        [getThemeAPIKeyFromName(FORM_PILL_TEXT_COLOR)]: textColor,
    };
};

export const getFormMenuTheme = (colors = {}, config = {}) => {
    const { sourceColors = {} } = colors;
    const { shouldAutoCorrectColors, isMobile, isDarkMode } = config;
    const { base = {}, recommendedNonTextColor = {} } = sourceColors;
    const selectedBGHex = shouldAutoCorrectColors
        ? recommendedNonTextColor.hex
        : base.hex;
    const { lightness: recommendedColorLightness } = shouldAutoCorrectColors
        ? recommendedNonTextColor
        : base;
    const selectedTextHex = getTextColor(selectedBGHex);
    const menuItemSelectedLightness = getCorrectedLightnessAdjustment(
        recommendedColorLightness,
        20,
        isDarkMode,
    );
    const formMenuSelectedStateFocusBGColor = getNewColorByChangingLightness(
        selectedBGHex,
        menuItemSelectedLightness,
    );

    return {
        [getThemeAPIKeyFromName(FORM_MENU_SELECTED_BG_COLOR)]: selectedBGHex,
        [getThemeAPIKeyFromName(FORM_MENU_SELECTED_TEXT_COLOR)]:
            selectedTextHex,
        ...(!isMobile && {
            [getThemeAPIKeyFromName(FORM_MENU_SELECTED_FOCUS_BG_COLOR)]:
                formMenuSelectedStateFocusBGColor,
            [getThemeAPIKeyFromName(FORM_MENU_SELECTED_FOCUS_TEXT_COLOR)]:
                getTextColor(formMenuSelectedStateFocusBGColor),
        }),
    };
};

export const getFormFocusColorTheme = (colors = {}, config = {}) => {
    const { sourceColors = {} } = colors;
    const { shouldAutoCorrectColors = true, isMobile } = config;
    const { base = {}, recommendedNonTextColor = {} } = sourceColors;
    const sourceColor = shouldAutoCorrectColors
        ? recommendedNonTextColor.hex
        : base.hex;

    return {
        [getThemeAPIKeyFromName(FORM_INPUT_FOCUS_BORDER_COLOR)]: sourceColor,
        [getThemeAPIKeyFromName(FORM_INPUT_FOCUS_HALO_COLOR)]: isMobile
            ? `${sourceColor}66`
            : convertColorToRGBA(sourceColor, 0.4, true),
    };
};
