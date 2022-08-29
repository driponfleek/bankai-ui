/* eslint-disable import/prefer-default-export */
import { CORE_STYLE_TOKEN_NAMES } from '../coreTokensConst';
import { CORE_STYLE_TOKEN_DEFAULTS } from './coreTokenDefaultsConst';
import { TOASTER_STYLE_TOKEN_NAMES } from '../toasterTokensConst';

const { CORE_SYSTEM_SCALE } = CORE_STYLE_TOKEN_NAMES;
const systemScale = CORE_STYLE_TOKEN_DEFAULTS[CORE_SYSTEM_SCALE];

export const TOASTER_STYLE_TOKEN_DEFAULTS = {
    [TOASTER_STYLE_TOKEN_NAMES.TOASTER_BORDER_RADIUS]: systemScale * 2,
};
