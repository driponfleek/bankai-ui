/* eslint-disable import/prefer-default-export */
import {
    getNewColorByChangingLightness,
    convertColorToRGBA,
} from '@driponfleek/bankai-lib-color-utils';
import { genConstToDotNotationMap } from '../dataGenUtils';

export const genFocusTokens = ({
    sourceColor = {},
    FOCUS_INNER_TOKEN,
    FOCUS_OUTER_TOKEN,
}) => {
    const { recommendedColor = {} } = sourceColor ?? {};
    const constTokenMap = genConstToDotNotationMap({
        [FOCUS_INNER_TOKEN]: FOCUS_INNER_TOKEN,
        [FOCUS_OUTER_TOKEN]: FOCUS_OUTER_TOKEN,
    });
    const darkColor = getNewColorByChangingLightness(recommendedColor.hex, 30);
    const lightColor = convertColorToRGBA(
        getNewColorByChangingLightness(recommendedColor.hex, 70),
        0.8,
        true,
    );

    return {
        [constTokenMap[FOCUS_INNER_TOKEN]]: darkColor,
        [constTokenMap[FOCUS_OUTER_TOKEN]]: lightColor,
    };
};
