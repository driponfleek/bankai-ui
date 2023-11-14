/* eslint-disable import/prefer-default-export */
import { convertColorToRGBA } from '@driponfleek/bankai-lib-color-utils';
import { genConstToDotNotationMap } from '../dataGenUtils';
import {
    TOASTER_TOKEN_DEFAULTS,
    TOASTER_TOKEN_NAMES,
} from '../../const/tokens/component/toasterConst';

const toasterConstToTokenMap = genConstToDotNotationMap(TOASTER_TOKEN_NAMES);

export const genToasterPresetTokens = (presets = {}) => {
    const {
        [toasterConstToTokenMap.TOASTER_BORDER_RADIUS]: toasterBorderRadii,
    } = presets;

    return {
        [toasterConstToTokenMap.TOASTER_BORDER_RADIUS]:
            toasterBorderRadii ?? TOASTER_TOKEN_DEFAULTS.TOASTER_BORDER_RADIUS,
    };
};

export const genToasterTokens = ({ sourceColors, variant }) => {
    const { background, text = {} } = sourceColors ?? {};
    const { recommendedColor = {} } = background ?? {};

    return {
        [toasterConstToTokenMap[`TOASTER_${variant}_BG_COLOR`]]:
            recommendedColor.hex,
        [toasterConstToTokenMap[`TOASTER_${variant}_TEXT_COLOR`]]: text.hex,
        [toasterConstToTokenMap[`TOASTER_${variant}_PROGRESS_BAR_COLOR`]]:
            convertColorToRGBA('#000000', 0.5, true),
    };
};
