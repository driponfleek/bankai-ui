/* eslint-disable import/prefer-default-export */
import { LINK_STYLE_TOKEN_NAMES } from '../linkTokensConst';
import { CORE_STYLE_TOKEN_NAMES } from '../coreTokensConst';
import { CORE_STYLE_TOKEN_DEFAULTS } from './coreTokenDefaultsConst';

const { CORE_SYSTEM_SCALE } = CORE_STYLE_TOKEN_NAMES;

export const LINK_STYLE_TOKEN_DEFAULTS = {
    [LINK_STYLE_TOKEN_NAMES.LINK_BORDER_RADIUS]:
        CORE_STYLE_TOKEN_DEFAULTS[CORE_SYSTEM_SCALE],
};
