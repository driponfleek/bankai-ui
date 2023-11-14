/* eslint-disable import/prefer-default-export */
import { genConstToDotNotationMap } from '../dataGenUtils';
import {
    TILE_TOKEN_NAMES,
    TILE_TOKEN_DEFAULTS,
} from '../../const/tokens/component/tileConst';

export const genTileTokens = (presets = {}) => {
    const tileConstToTokenMap = genConstToDotNotationMap(TILE_TOKEN_NAMES);

    const {
        [tileConstToTokenMap.TILE_BORDER_RADIUS]: borderRadii,
        [tileConstToTokenMap.TILE_HEADING_FONT_WEIGHT]: fontWeight,
        [tileConstToTokenMap.TILE_HEADING_FONT_STYLE]: fontStyle,
    } = presets;

    return {
        [tileConstToTokenMap.TILE_BORDER_RADIUS]:
            borderRadii ?? TILE_TOKEN_DEFAULTS.TILE_BORDER_RADIUS,
        [tileConstToTokenMap.TILE_HEADING_FONT_WEIGHT]:
            fontWeight || TILE_TOKEN_DEFAULTS.TILE_HEADING_FONT_WEIGHT,
        [tileConstToTokenMap.TILE_HEADING_FONT_STYLE]:
            fontStyle || TILE_TOKEN_DEFAULTS.TILE_HEADING_FONT_STYLE,
    };
};
