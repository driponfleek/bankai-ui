/* eslint-disable import/prefer-default-export */
import { CORE_STYLE_TOKEN_DEFAULTS } from './coreTokenDefaultsConst';
import { CORE_STYLE_TOKEN_NAMES } from '../coreTokensConst';
import { FORM_STYLE_TOKEN_NAMES } from '../formTokensConst';

const { CORE_SYSTEM_SCALE } = CORE_STYLE_TOKEN_NAMES;
const systemScale = CORE_STYLE_TOKEN_DEFAULTS[CORE_SYSTEM_SCALE];
const inputBorderRadius = systemScale;
const inputBorderWidth = 1;
const toggleTrackBorderRadius = systemScale;

export const FORM_STYLE_TOKEN_DEFAULTS = {
    [FORM_STYLE_TOKEN_NAMES.FORM_CHECKBOX_BORDER_RADIUS]: systemScale,
    [FORM_STYLE_TOKEN_NAMES.FORM_INPUT_BORDER_RADIUS]: inputBorderRadius,
    [FORM_STYLE_TOKEN_NAMES.FORM_INPUT_BORDER_WIDTH]: inputBorderWidth,
    [FORM_STYLE_TOKEN_NAMES.FORM_INPUT_PLACEHOLDER_FONT_STYLE]: 'normal',
    [FORM_STYLE_TOKEN_NAMES.FORM_MENU_BORDER_RADIUS]: systemScale,
    [FORM_STYLE_TOKEN_NAMES.FORM_PILL_BORDER_RADIUS]: Math.max(
        inputBorderRadius - inputBorderWidth,
        0,
    ),
    [FORM_STYLE_TOKEN_NAMES.FORM_TOGGLE_SWITCH_KNOB_BORDER_RADIUS]:
        toggleTrackBorderRadius - 2,
    [FORM_STYLE_TOKEN_NAMES.FORM_TOGGLE_SWITCH_TRACK_BORDER_RADIUS]:
        toggleTrackBorderRadius,
};
