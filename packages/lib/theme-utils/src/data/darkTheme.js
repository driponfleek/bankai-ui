import {
    THEME_TOKEN_API_KEYS,
    THEME_TOKEN_NAMES,
} from '../const/themeTokensConst';
import { DARK_THEME_TOKEN_DEFAULTS } from '../const/colorDarkThemeDefaultsConst';
import { mapThemeAPIKeysToDefaults } from '../utils/dataMassageUtils';

export default mapThemeAPIKeysToDefaults(
    THEME_TOKEN_NAMES,
    THEME_TOKEN_API_KEYS,
    DARK_THEME_TOKEN_DEFAULTS,
);
