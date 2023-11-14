/* eslint-disable import/prefer-default-export */
import { genCoreNeutralColors } from '../dataGenUtils';
import { CORE_NEUTRAL_COLOR_TOKEN_DEFAULTS } from '../../const/tokens/core/coreColorsConst';

export const genCustomNeutralColors = (coreColorNeutralSeed) => {
    if (!coreColorNeutralSeed) {
        return CORE_NEUTRAL_COLOR_TOKEN_DEFAULTS;
    }

    return genCoreNeutralColors(coreColorNeutralSeed);
};
