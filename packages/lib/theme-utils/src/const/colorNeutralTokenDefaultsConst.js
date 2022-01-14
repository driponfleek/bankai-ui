import { getNewColorByChangingLightness } from '@epr0t0type/bankai-lib-color-utils';
import { COLOR_TOKEN_NAMES } from './colorTokensConst';

const COLOR_NEUTRAL_BASE = '#17191c';

export const COLOR_BLACK = '#000000';
export const COLOR_WHITE = '#ffffff';
export const COLOR_NEUTRAL_DEFAULTS = {
    [COLOR_TOKEN_NAMES.COLOR_NEUTRAL_10]: COLOR_NEUTRAL_BASE,
    [COLOR_TOKEN_NAMES.COLOR_NEUTRAL_20]: getNewColorByChangingLightness(
        COLOR_NEUTRAL_BASE,
        20,
    ),
    [COLOR_TOKEN_NAMES.COLOR_NEUTRAL_30]: getNewColorByChangingLightness(
        COLOR_NEUTRAL_BASE,
        30,
    ),
    [COLOR_TOKEN_NAMES.COLOR_NEUTRAL_40]: getNewColorByChangingLightness(
        COLOR_NEUTRAL_BASE,
        40,
    ),
    [COLOR_TOKEN_NAMES.COLOR_NEUTRAL_50]: getNewColorByChangingLightness(
        COLOR_NEUTRAL_BASE,
        50,
    ),
    [COLOR_TOKEN_NAMES.COLOR_NEUTRAL_60]: getNewColorByChangingLightness(
        COLOR_NEUTRAL_BASE,
        60,
    ),
    [COLOR_TOKEN_NAMES.COLOR_NEUTRAL_70]: getNewColorByChangingLightness(
        COLOR_NEUTRAL_BASE,
        70,
    ),
    [COLOR_TOKEN_NAMES.COLOR_NEUTRAL_80]: getNewColorByChangingLightness(
        COLOR_NEUTRAL_BASE,
        80,
    ),
    [COLOR_TOKEN_NAMES.COLOR_NEUTRAL_90]: getNewColorByChangingLightness(
        COLOR_NEUTRAL_BASE,
        90,
    ),
};
