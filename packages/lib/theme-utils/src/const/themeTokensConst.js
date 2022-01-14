import { COLOR_TOKEN_NAMES } from './colorTokensConst';
import { SPEC_TOKEN_NAMES } from './specTokensConst';
import { getThemeAPIKeysFromNames } from '../utils/dataMassageUtils';

export const THEME_TOKEN_NAMES = {
    ...COLOR_TOKEN_NAMES,
    ...SPEC_TOKEN_NAMES,
};

export const THEME_TOKEN_API_KEYS = getThemeAPIKeysFromNames(THEME_TOKEN_NAMES);
