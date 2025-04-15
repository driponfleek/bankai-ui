/* eslint-disable import/prefer-default-export */
import {
    getNewColorByLightnessAdjustment,
    convertColorToRGBA,
} from '@driponfleek/bankai-lib-color-utils';
import { genConstToDotNotationMap } from '../dataGenUtils';

export const genFocusTokens = ({
    sourceColor = {},
    FOCUS_INNER_TOKEN,
    FOCUS_OUTER_TOKEN,
}) => {
    const { baseColor = {} } = sourceColor ?? {};
    const constTokenMap = genConstToDotNotationMap({
        [FOCUS_INNER_TOKEN]: FOCUS_INNER_TOKEN,
        [FOCUS_OUTER_TOKEN]: FOCUS_OUTER_TOKEN,
    });
    const darkColor = getNewColorByLightnessAdjustment(baseColor.hex, 30);
    const lightColor = convertColorToRGBA(
        getNewColorByLightnessAdjustment(baseColor.hex, 70),
        0.8,
        true,
    );
    const result = {
        [constTokenMap[FOCUS_INNER_TOKEN]]: darkColor,
        [constTokenMap[FOCUS_OUTER_TOKEN]]: lightColor,
    };

    return result;
};
