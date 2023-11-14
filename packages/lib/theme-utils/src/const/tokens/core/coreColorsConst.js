import { genCoreNeutralColors } from '../../../utils/dataGenUtils';

export const CORE_COLOR_NEUTRAL_SEED = 'CORE_COLOR_NEUTRAL_SEED';

export const CORE_COLOR_NEUTRAL_SEED_DEFAULT = '#576375';

export const CORE_NEUTRAL_COLOR_TOKEN_NAMES = {
    CORE_COLOR_NEUTRAL_0: 'CORE_COLOR_NEUTRAL_0',
    CORE_COLOR_NEUTRAL_10: 'CORE_COLOR_NEUTRAL_10',
    CORE_COLOR_NEUTRAL_20: 'CORE_COLOR_NEUTRAL_20',
    CORE_COLOR_NEUTRAL_30: 'CORE_COLOR_NEUTRAL_30',
    CORE_COLOR_NEUTRAL_40: 'CORE_COLOR_NEUTRAL_40',
    CORE_COLOR_NEUTRAL_50: 'CORE_COLOR_NEUTRAL_50',
    CORE_COLOR_NEUTRAL_60: 'CORE_COLOR_NEUTRAL_60',
    CORE_COLOR_NEUTRAL_70: 'CORE_COLOR_NEUTRAL_70',
    CORE_COLOR_NEUTRAL_80: 'CORE_COLOR_NEUTRAL_80',
    CORE_COLOR_NEUTRAL_90: 'CORE_COLOR_NEUTRAL_90',
    CORE_COLOR_NEUTRAL_100: 'CORE_COLOR_NEUTRAL_100',
};

export const CORE_NEUTRAL_COLOR_TOKEN_DEFAULTS = {
    ...genCoreNeutralColors(),
};
