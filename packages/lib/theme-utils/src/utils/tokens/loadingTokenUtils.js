import { convertColorToRGB } from '@driponfleek/bankai-lib-color-utils';
import { genConstToDotNotationMap } from '../dataGenUtils';
import { LOADING_TOKEN_NAMES } from '../../const/tokens/component/loadingConst';

const loadingConstToTokenMap = genConstToDotNotationMap(LOADING_TOKEN_NAMES);

export const genLoadingSkeletonTokens = (
    CORE_NEUTRAL_COLORS = {},
    config = {},
) => {
    const { isDarkMode } = config;
    const { CORE_COLOR_NEUTRAL_20, CORE_COLOR_NEUTRAL_80 } =
        CORE_NEUTRAL_COLORS;
    const bgColor = isDarkMode ? CORE_COLOR_NEUTRAL_20 : CORE_COLOR_NEUTRAL_80;
    const { r, g, b } = convertColorToRGB('#ffffff');

    return {
        [loadingConstToTokenMap.LOADING_SKELETON_ANIMATION_COLOR]: `${r}, ${g}, ${b}`,
        [loadingConstToTokenMap.LOADING_SKELETON_BG_COLOR]: bgColor,
    };
};

const genLoadingIconToken = (iconTokenKey, sourceColor = {}) => {
    const { recommendedColor = {} } = sourceColor;

    return { [iconTokenKey]: recommendedColor.hex };
};

export const genLoadingIconAccentToken = (sourceColor) => {
    return genLoadingIconToken(
        loadingConstToTokenMap.LOADING_ICON_ACCENT_COLOR,
        sourceColor,
    );
};

export const genLoadingIconPrimaryToken = (sourceColor) => {
    return genLoadingIconToken(
        loadingConstToTokenMap.LOADING_ICON_PRIMARY_COLOR,
        sourceColor,
    );
};

export const genLoadingIconSecondaryToken = (sourceColor) => {
    return genLoadingIconToken(
        loadingConstToTokenMap.LOADING_ICON_SECONDARY_COLOR,
        sourceColor,
    );
};
