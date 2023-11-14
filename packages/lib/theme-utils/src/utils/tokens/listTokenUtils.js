/* eslint-disable import/prefer-default-export */
import { genConstToDotNotationMap } from '../dataGenUtils';
import {
    LIST_TOKEN_NAMES,
    LIST_TOKEN_DEFAULTS,
} from '../../const/tokens/component/listConst';

export const genListTokens = (presets = {}) => {
    const listConstToTokenMap = genConstToDotNotationMap(LIST_TOKEN_NAMES);

    const { [listConstToTokenMap.LIST_BORDER_WIDTH]: borderWidth } = presets;

    return {
        [listConstToTokenMap.LIST_BORDER_WIDTH]:
            borderWidth ?? LIST_TOKEN_DEFAULTS.LIST_BORDER_WIDTH,
    };
};
