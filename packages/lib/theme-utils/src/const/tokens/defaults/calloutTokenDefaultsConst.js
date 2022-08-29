/* eslint-disable import/prefer-default-export */
import { CALLOUT_STYLE_TOKEN_NAMES } from '../calloutTokensConst';
import { CORE_STYLE_TOKEN_DEFAULTS } from './coreTokenDefaultsConst';
import { CORE_STYLE_TOKEN_NAMES } from '../coreTokensConst';

const { CORE_SYSTEM_SCALE } = CORE_STYLE_TOKEN_NAMES;

export const CALLOUT_STYLE_TOKEN_DEFAULTS = {
    [CALLOUT_STYLE_TOKEN_NAMES.CALLOUT_BANNER_BORDER_RADIUS]:
        CORE_STYLE_TOKEN_DEFAULTS[CORE_SYSTEM_SCALE],
};
