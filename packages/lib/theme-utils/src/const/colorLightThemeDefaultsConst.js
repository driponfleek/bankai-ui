/* eslint-disable import/prefer-default-export */
import { getNewColorByChangingLightness } from '@epr0t0type/bankai-lib-color-utils';
import { COLOR_TOKEN_NAMES } from './colorTokensConst';
import { SPEC_TOKEN_DEFAULTS } from './specTokensConst';
import {
    COLOR_NEUTRAL_DEFAULTS,
    COLOR_BLACK,
    COLOR_WHITE,
} from './colorNeutralTokenDefaultsConst';

const COLOR_LT_BRAND = '#008bcc';
const COLOR_LT_PRIMARY = COLOR_LT_BRAND;
const COLOR_LT_SECONDARY = '#397a93';
const COLOR_LT_CANVAS = COLOR_WHITE;
const COLOR_LT_CANVAS_ALT = getNewColorByChangingLightness(
    COLOR_NEUTRAL_DEFAULTS.COLOR_NEUTRAL_90,
    95,
);
const COLOR_LT_UNIVERSAL_HOVER_BG = COLOR_NEUTRAL_DEFAULTS.COLOR_NEUTRAL_90;
const COLOR_LT_UNIVERSAL_BORDER = COLOR_NEUTRAL_DEFAULTS.COLOR_NEUTRAL_80;
const COLOR_LT_ACCENT = '#362a3c';
// const COLOR_LT_ACCENT = '#212845';
const COLOR_LT_AFFIRMATIVE = '#438946';
const COLOR_LT_CAUTIONARY = '#fccf03';
const COLOR_LT_ERROR = '#cc3333';
const COLOR_LT_DESTRUCTIVE = COLOR_LT_ERROR;
const COLOR_LT_INFO = '#1979e6';
const COLOR_LT_LINK = '#1461b8';
const COLOR_LT_TEXT = COLOR_BLACK;
const COLOR_LT_TEXT_ALT = COLOR_NEUTRAL_DEFAULTS.COLOR_NEUTRAL_30;

export const LIGHT_THEME_TOKEN_DEFAULTS = {
    ...SPEC_TOKEN_DEFAULTS,
    ...COLOR_NEUTRAL_DEFAULTS,
    [COLOR_TOKEN_NAMES.COLOR_BRAND]: COLOR_LT_BRAND,
    [COLOR_TOKEN_NAMES.COLOR_PRIMARY]: COLOR_LT_PRIMARY,
    [COLOR_TOKEN_NAMES.COLOR_SECONDARY]: COLOR_LT_SECONDARY,
    [COLOR_TOKEN_NAMES.COLOR_ACCENT]: COLOR_LT_ACCENT,
    [COLOR_TOKEN_NAMES.COLOR_UNIVERSAL_BORDER]: COLOR_LT_UNIVERSAL_BORDER,
    [COLOR_TOKEN_NAMES.COLOR_UNIVERSAL_HOVER_BG]: COLOR_LT_UNIVERSAL_HOVER_BG,
    [COLOR_TOKEN_NAMES.COLOR_CANVAS]: COLOR_LT_CANVAS,
    [COLOR_TOKEN_NAMES.COLOR_CANVAS_ALT]: COLOR_LT_CANVAS_ALT,
    [COLOR_TOKEN_NAMES.COLOR_AFFIRMATIVE]: COLOR_LT_AFFIRMATIVE,
    [COLOR_TOKEN_NAMES.COLOR_CAUTIONARY]: COLOR_LT_CAUTIONARY,
    [COLOR_TOKEN_NAMES.COLOR_ERROR]: COLOR_LT_ERROR,
    [COLOR_TOKEN_NAMES.COLOR_DESTRUCTIVE]: COLOR_LT_DESTRUCTIVE,
    [COLOR_TOKEN_NAMES.COLOR_INFO]: COLOR_LT_INFO,
    [COLOR_TOKEN_NAMES.COLOR_LINK]: COLOR_LT_LINK,
    [COLOR_TOKEN_NAMES.COLOR_TEXT]: COLOR_LT_TEXT,
    [COLOR_TOKEN_NAMES.COLOR_TEXT_ALT]: COLOR_LT_TEXT_ALT,
};
