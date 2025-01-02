import { genConstToDotNotationMap } from '../dataGenUtils';
import {
    TOOLTIP_TOKEN_DEFAULTS,
    TOOLTIP_TOKEN_NAMES,
} from '../../const/tokens/component/tooltipConst';

const tooltipConstToTokenMap = genConstToDotNotationMap(TOOLTIP_TOKEN_NAMES);

export const genTooltipPresetTokens = (presets = {}) => {
    const {
        [tooltipConstToTokenMap.TOOLTIP_BORDER_RADIUS]: tooltipBorderRadii,
    } = presets;

    return {
        [tooltipConstToTokenMap.TOOLTIP_BORDER_RADIUS]:
            tooltipBorderRadii ?? TOOLTIP_TOKEN_DEFAULTS.TOOLTIP_BORDER_RADIUS,
    };
};

export const genTooltipTokens = (sourceColor = {}) => {
    const { recommendedColor = {} } = sourceColor;

    return {
        [tooltipConstToTokenMap.TOOLTIP_ICON_COLOR]: recommendedColor.hex,
    };
};
