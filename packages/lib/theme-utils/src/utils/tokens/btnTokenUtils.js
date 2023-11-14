import { genFocusTokens } from './focusTokenUtils';
import { genFlatBtnColors, genGhostBtnColors } from '../btnColorUtils';
import { genConstToDotNotationMap } from '../dataGenUtils';
import { BTN_STYLES } from '../../const/btnStylesConst';
import {
    BTN_TOKEN_NAMES,
    BTN_PRIMARY_DESTRUCTIVE_TOKEN_NAMES,
    BTN_PRIMARY_TOKEN_NAMES,
    BTN_SECONDARY_DESTRUCTIVE_TOKEN_NAMES,
    BTN_SECONDARY_TOKEN_NAMES,
} from '../../const/tokens/component/buttonsConst';

const BTN_VARIANT_TOKEN_NAMES = {
    BTN_PRIMARY_DESTRUCTIVE_TOKEN_NAMES,
    BTN_PRIMARY_TOKEN_NAMES,
    BTN_SECONDARY_DESTRUCTIVE_TOKEN_NAMES,
    BTN_SECONDARY_TOKEN_NAMES,
};

export const genBtnTokens = (presets = {}) => {
    const constToTokenMap = genConstToDotNotationMap(BTN_TOKEN_NAMES);
    const { BTN_BORDER_RADIUS, BTN_BORDER_WIDTH, BTN_FONT_WEIGHT } =
        BTN_TOKEN_NAMES;
    const {
        [constToTokenMap[BTN_BORDER_RADIUS]]: borderRadii,
        [constToTokenMap[BTN_BORDER_WIDTH]]: borderWidth,
        [constToTokenMap[BTN_FONT_WEIGHT]]: fontWeight,
    } = presets;

    return {
        [constToTokenMap[BTN_BORDER_RADIUS]]: borderRadii,
        [constToTokenMap[BTN_BORDER_WIDTH]]: borderWidth,
        [constToTokenMap[BTN_FONT_WEIGHT]]: fontWeight,
    };
};

export const genBtnColorTokens = ({
    variant,
    canvasColor = {},
    config = {},
    sourceColor = {},
    style = BTN_STYLES.FLAT,
}) => {
    const colorGenUtil =
        style === BTN_STYLES.GHOST ? genGhostBtnColors : genFlatBtnColors;
    const TOKEN_NAMES = BTN_VARIANT_TOKEN_NAMES[`BTN_${variant}_TOKEN_NAMES`];
    const isSecondary = variant.includes('SECONDARY');
    const constToTokenMap = genConstToDotNotationMap(TOKEN_NAMES);
    const {
        textColor,
        bgColor,
        borderColor,
        textInteractionColor,
        bgInteractionColor,
        borderInteractionColor,
    } = colorGenUtil(sourceColor, canvasColor, config);

    return {
        [constToTokenMap[`BTN_${variant}_ACTIVE_BG_COLOR`]]: bgInteractionColor,
        [constToTokenMap[`BTN_${variant}_ACTIVE_BORDER_COLOR`]]:
            borderInteractionColor,
        [constToTokenMap[`BTN_${variant}_ACTIVE_TEXT_COLOR`]]:
            textInteractionColor,
        [constToTokenMap[`BTN_${variant}_BG_COLOR`]]: bgColor,
        [constToTokenMap[`BTN_${variant}_BORDER_COLOR`]]: borderColor,
        [constToTokenMap[`BTN_${variant}_TEXT_COLOR`]]: textColor,
        [constToTokenMap[`BTN_${variant}_HOVER_BG_COLOR`]]: bgInteractionColor,
        [constToTokenMap[`BTN_${variant}_HOVER_BORDER_COLOR`]]:
            borderInteractionColor,
        [constToTokenMap[`BTN_${variant}_HOVER_TEXT_COLOR`]]:
            textInteractionColor,
        [constToTokenMap[`BTN_SPLIT_${variant}_BORDER_COLOR`]]: isSecondary
            ? borderInteractionColor
            : bgInteractionColor,
        ...genFocusTokens({
            sourceColor,
            FOCUS_INNER_TOKEN: `BTN_${variant}_FOCUS_HALO_INNER_COLOR`,
            FOCUS_OUTER_TOKEN: `BTN_${variant}_FOCUS_HALO_OUTER_COLOR`,
        }),
    };
};
