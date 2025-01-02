import { genFocusTokens } from './focusTokenUtils';
import { genFlatBtnColors, genGhostBtnColors } from '../btnColorUtils';
import { genConstToDotNotationMap } from '../dataGenUtils';
import { BUTTON_STYLES } from '../../const/btnStylesConst';
import {
    BUTTON_TOKEN_NAMES,
    BUTTON_PRIMARY_DESTRUCTIVE_TOKEN_NAMES,
    BUTTON_PRIMARY_TOKEN_NAMES,
    BUTTON_SECONDARY_DESTRUCTIVE_TOKEN_NAMES,
    BUTTON_SECONDARY_TOKEN_NAMES,
} from '../../const/tokens/component/buttonsConst';

const BUTTON_VARIANT_TOKEN_NAMES = {
    BUTTON_PRIMARY_DESTRUCTIVE_TOKEN_NAMES,
    BUTTON_PRIMARY_TOKEN_NAMES,
    BUTTON_SECONDARY_DESTRUCTIVE_TOKEN_NAMES,
    BUTTON_SECONDARY_TOKEN_NAMES,
};

export const genBtnTokens = (presets = {}) => {
    const constToTokenMap = genConstToDotNotationMap(BUTTON_TOKEN_NAMES);
    const { BUTTON_BORDER_RADIUS, BUTTON_BORDER_WIDTH, BUTTON_FONT_WEIGHT } =
        BUTTON_TOKEN_NAMES;
    const {
        [constToTokenMap[BUTTON_BORDER_RADIUS]]: borderRadii,
        [constToTokenMap[BUTTON_BORDER_WIDTH]]: borderWidth,
        [constToTokenMap[BUTTON_FONT_WEIGHT]]: fontWeight,
    } = presets;

    return {
        [constToTokenMap[BUTTON_BORDER_RADIUS]]: borderRadii,
        [constToTokenMap[BUTTON_BORDER_WIDTH]]: borderWidth,
        [constToTokenMap[BUTTON_FONT_WEIGHT]]: fontWeight,
    };
};

export const genBtnColorTokens = ({
    variant,
    canvasColor = {},
    canvasAltColor = {},
    config = {},
    sourceColors = {},
    preferredTextColors,
    style = BUTTON_STYLES.FLAT,
}) => {
    const { background } = sourceColors;
    const colorGenUtil =
        style === BUTTON_STYLES.GHOST ? genGhostBtnColors : genFlatBtnColors;
    const TOKEN_NAMES =
        BUTTON_VARIANT_TOKEN_NAMES[`BUTTON_${variant}_TOKEN_NAMES`];
    const isSecondary = variant.includes('SECONDARY');
    const constToTokenMap = genConstToDotNotationMap(TOKEN_NAMES);
    const {
        textColor,
        bgColor,
        borderColor,
        textInteractionColor,
        bgInteractionColor,
        borderInteractionColor,
    } = colorGenUtil({
        canvasAltColor,
        canvasColor,
        config,
        preferredTextColors,
        sourceColors,
    });

    return {
        [constToTokenMap[`BUTTON_${variant}_ACTIVE_BG_COLOR`]]:
            bgInteractionColor,
        [constToTokenMap[`BUTTON_${variant}_ACTIVE_BORDER_COLOR`]]:
            borderInteractionColor,
        [constToTokenMap[`BUTTON_${variant}_ACTIVE_TEXT_COLOR`]]:
            textInteractionColor,
        [constToTokenMap[`BUTTON_${variant}_BG_COLOR`]]: bgColor,
        [constToTokenMap[`BUTTON_${variant}_BORDER_COLOR`]]: borderColor,
        [constToTokenMap[`BUTTON_${variant}_TEXT_COLOR`]]: textColor,
        [constToTokenMap[`BUTTON_${variant}_HOVER_BG_COLOR`]]:
            bgInteractionColor,
        [constToTokenMap[`BUTTON_${variant}_HOVER_BORDER_COLOR`]]:
            borderInteractionColor,
        [constToTokenMap[`BUTTON_${variant}_HOVER_TEXT_COLOR`]]:
            textInteractionColor,
        [constToTokenMap[`BUTTON_SPLIT_${variant}_BORDER_COLOR`]]: isSecondary
            ? borderInteractionColor
            : bgInteractionColor,
        ...genFocusTokens({
            sourceColor: background,
            FOCUS_INNER_TOKEN: `BUTTON_${variant}_FOCUS_HALO_INNER_COLOR`,
            FOCUS_OUTER_TOKEN: `BUTTON_${variant}_FOCUS_HALO_OUTER_COLOR`,
        }),
    };
};
