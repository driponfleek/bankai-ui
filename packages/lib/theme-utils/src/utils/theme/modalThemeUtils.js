/* eslint-disable import/prefer-default-export */
import { convertColorToRGBA } from '@epr0t0type/bankai-lib-color-utils';
import { getThemeAPIKeyFromName } from '../dataMassageUtils';
import { THEME_TOKEN_NAMES } from '../../const/themeTokensConst';

export const getModalTheme = () => {
    return {
        [getThemeAPIKeyFromName(THEME_TOKEN_NAMES.COLOR_MODAL_OVERLAY_BG)]:
            convertColorToRGBA('#000000', 0.7, true),
    };
};
