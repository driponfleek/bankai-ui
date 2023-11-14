/* eslint-disable import/prefer-default-export */
import { genConstToDotNotationMap } from '../dataGenUtils';
import {
    CALLOUT_AFFIRMATIVE_COLOR_TOKEN_NAMES,
    CALLOUT_CAUTIONARY_COLOR_TOKEN_NAMES,
    CALLOUT_DANGER_COLOR_TOKEN_NAMES,
    CALLOUT_INFO_COLOR_TOKEN_NAMES,
} from '../../const/tokens/component/calloutsConst';

const CALLOUT_VARIANT_TOKEN_NAMES = {
    CALLOUT_AFFIRMATIVE_COLOR_TOKEN_NAMES,
    CALLOUT_CAUTIONARY_COLOR_TOKEN_NAMES,
    CALLOUT_DANGER_COLOR_TOKEN_NAMES,
    CALLOUT_INFO_COLOR_TOKEN_NAMES,
};

export const genCalloutTokens = (sourceColor, variant) => {
    const { recommendedColor = {} } = sourceColor ?? {};
    const TOKEN_NAMES =
        CALLOUT_VARIANT_TOKEN_NAMES[`CALLOUT_${variant}_COLOR_TOKEN_NAMES`];
    const constToTokenMap = genConstToDotNotationMap(TOKEN_NAMES);

    return {
        [constToTokenMap[`CALLOUT_${variant}_ICON_COLOR`]]:
            recommendedColor.hex,
    };
};
