import {
    THEME_TOKEN_API_KEYS,
    THEME_TOKEN_NAMES,
} from '../const/themeTokensConst';
import { LIGHT_THEME_TOKEN_DEFAULTS } from '../const/colorLightThemeDefaultsConst';
import { mapThemeAPIKeysToDefaults } from '../utils/dataMassageUtils';

export default mapThemeAPIKeysToDefaults(
    THEME_TOKEN_NAMES,
    THEME_TOKEN_API_KEYS,
    LIGHT_THEME_TOKEN_DEFAULTS,
);
