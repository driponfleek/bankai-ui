/* eslint-disable import/prefer-default-export */
import { MODAL_STYLE_TOKEN_NAMES } from '../modalTokensConst';
import { CORE_STYLE_TOKEN_NAMES } from '../coreTokensConst';
import { CORE_STYLE_TOKEN_DEFAULTS } from './coreTokenDefaultsConst';

const { CORE_SYSTEM_SCALE } = CORE_STYLE_TOKEN_NAMES;

export const MODAL_STYLE_TOKEN_DEFAULTS = {
    [MODAL_STYLE_TOKEN_NAMES.MODAL_DIALOG_BORDER_RADIUS]:
        CORE_STYLE_TOKEN_DEFAULTS[CORE_SYSTEM_SCALE] * 5,
};
