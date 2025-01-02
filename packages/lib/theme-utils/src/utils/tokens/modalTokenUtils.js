/* eslint-disable import/prefer-default-export */
import { convertColorToRGBA } from '@driponfleek/bankai-lib-color-utils';
import { genConstToDotNotationMap } from '../dataGenUtils';
import {
    MODAL_TOKEN_DEFAULTS,
    MODAL_TOKEN_NAMES,
} from '../../const/tokens/component/modalConst';

export const genModalTokens = (presets = {}) => {
    const modalConstToTokenMap = genConstToDotNotationMap(MODAL_TOKEN_NAMES);
    const {
        [modalConstToTokenMap.MODAL_DIALOG_BORDER_RADIUS]: dialogBorderRadii,
    } = presets;

    return {
        [modalConstToTokenMap.MODAL_DIALOG_BORDER_RADIUS]:
            dialogBorderRadii ??
            MODAL_TOKEN_DEFAULTS.MODAL_DIALOG_BORDER_RADIUS,
        [modalConstToTokenMap.MODAL_OVERLAY_BG_COLOR]: convertColorToRGBA(
            '#000000',
            0.7,
            true,
        ),
    };
};
