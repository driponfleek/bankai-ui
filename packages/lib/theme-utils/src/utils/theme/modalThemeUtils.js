import {
    convertColorToRGBA,
    convertColorToHex,
} from '@epr0t0type/bankai-lib-color-utils';
import { getThemeAPIKeyFromName } from '../dataUtils';
import { MODAL_TOKEN_NAMES } from '../../const/tokens/modalTokensConst';
import { MODAL_STYLE_TOKEN_DEFAULTS } from '../../const/tokens/defaults/modalTokenDefaultsConst';

const { MODAL_DIALOG_BORDER_RADIUS, MODAL_OVERLAY_BG_COLOR } =
    MODAL_TOKEN_NAMES;

export const getModalStyles = (data = {}) => {
    const apiKeyDialogBorderRadius = getThemeAPIKeyFromName(
        MODAL_DIALOG_BORDER_RADIUS,
    );
    const defaultDialogBorderRadius =
        MODAL_STYLE_TOKEN_DEFAULTS[MODAL_DIALOG_BORDER_RADIUS];

    const {
        [apiKeyDialogBorderRadius]:
            dialogBorderRadius = defaultDialogBorderRadius,
    } = data;

    return {
        [apiKeyDialogBorderRadius]: dialogBorderRadius,
    };
};

export const getModalTheme = (config = {}) => {
    const { isMobile } = config;
    const rgba = convertColorToRGBA('#000000', 0.7, true);

    return {
        [getThemeAPIKeyFromName(MODAL_OVERLAY_BG_COLOR)]: isMobile
            ? convertColorToHex(rgba)
            : rgba,
    };
};
