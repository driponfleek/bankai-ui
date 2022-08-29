/* eslint-disable import/prefer-default-export */
import { getThemeAPIKeyFromName } from '../dataUtils';
import { SECTION_TOKEN_NAMES } from '../../const/tokens/sectionTokensConst';
import { SECTION_STYLE_TOKEN_DEFAULTS } from '../../const/tokens/defaults/sectionTokenDefaultsConst';

const { SECTION_BORDER_RADIUS, SECTION_HEADING_BORDER_WIDTH } =
    SECTION_TOKEN_NAMES;

export const getSectionStyles = (data = {}) => {
    const apiKeyBorderRadius = getThemeAPIKeyFromName(SECTION_BORDER_RADIUS);
    const apiKeyHeadingBorderBottomWidth = getThemeAPIKeyFromName(
        SECTION_HEADING_BORDER_WIDTH,
    );
    const defaultBorderRadius =
        SECTION_STYLE_TOKEN_DEFAULTS[SECTION_BORDER_RADIUS];
    const defaultHeadingBorderBottomWidth =
        SECTION_STYLE_TOKEN_DEFAULTS[SECTION_HEADING_BORDER_WIDTH];
    const {
        [apiKeyBorderRadius]: borderRadius = defaultBorderRadius,
        [apiKeyHeadingBorderBottomWidth]:
            headingBorderBottomWidth = defaultHeadingBorderBottomWidth,
    } = data;

    return {
        [apiKeyBorderRadius]: borderRadius,
        [apiKeyHeadingBorderBottomWidth]: headingBorderBottomWidth,
    };
};
