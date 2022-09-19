/* eslint-disable import/prefer-default-export */
import { BTN_STYLE_TOKEN_NAMES } from '../btnTokensConst';
import { CORE_STYLE_TOKEN_DEFAULTS } from './coreTokenDefaultsConst';
import { CORE_STYLE_TOKEN_NAMES } from '../coreTokensConst';

const { CORE_SYSTEM_SCALE } = CORE_STYLE_TOKEN_NAMES;

const { BTN_BORDER_RADIUS, BTN_BORDER_WIDTH, BTN_FONT_WEIGHT } =
    BTN_STYLE_TOKEN_NAMES;

export const BTN_STYLE_TOKEN_DEFAULTS = {
    [BTN_BORDER_RADIUS]: CORE_STYLE_TOKEN_DEFAULTS[CORE_SYSTEM_SCALE] * 6,
    [BTN_BORDER_WIDTH]: 1,
    [BTN_FONT_WEIGHT]: 'normal',
};
