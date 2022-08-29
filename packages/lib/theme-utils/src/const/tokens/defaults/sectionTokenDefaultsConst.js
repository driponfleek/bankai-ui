/* eslint-disable import/prefer-default-export */
import { CORE_STYLE_TOKEN_NAMES } from '../coreTokensConst';
import { CORE_STYLE_TOKEN_DEFAULTS } from './coreTokenDefaultsConst';
import { SECTION_STYLE_TOKEN_NAMES } from '../sectionTokensConst';

const { CORE_SYSTEM_SCALE } = CORE_STYLE_TOKEN_NAMES;
const systemScale = CORE_STYLE_TOKEN_DEFAULTS[CORE_SYSTEM_SCALE];

export const SECTION_STYLE_TOKEN_DEFAULTS = {
    [SECTION_STYLE_TOKEN_NAMES.SECTION_BORDER_RADIUS]: systemScale * 2,
    [SECTION_STYLE_TOKEN_NAMES.SECTION_HEADING_BORDER_WIDTH]: 1,
};
