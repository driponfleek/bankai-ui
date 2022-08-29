/* eslint-disable import/prefer-default-export */
import { BADGE_STYLE_TOKEN_NAMES } from '../badgeTokensConst';
import { CORE_STYLE_TOKEN_NAMES } from '../coreTokensConst';
import { CORE_STYLE_TOKEN_DEFAULTS } from './coreTokenDefaultsConst';

const { CORE_SYSTEM_SCALE } = CORE_STYLE_TOKEN_NAMES;

export const BADGE_STYLE_TOKEN_DEFAULTS = {
    [BADGE_STYLE_TOKEN_NAMES.BADGE_BORDER_RADIUS]:
        CORE_STYLE_TOKEN_DEFAULTS[CORE_SYSTEM_SCALE] * 4,
};
