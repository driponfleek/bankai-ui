import { getThemeAPIKeyFromName } from '../dataMassageUtils';
import {
    SPEC_TOKEN_NAMES,
    SPEC_TOKEN_DEFAULTS,
} from '../../const/specTokensConst';

const {
    TYPOGRAPHY_SIZE_BASE,
    TYPOGRAPHY_SIZE_RATIO,
    TYPOGRAPHY_H5_FONT_SIZE,
    TYPOGRAPHY_H4_FONT_SIZE,
    TYPOGRAPHY_H3_FONT_SIZE,
    TYPOGRAPHY_H2_FONT_SIZE,
    TYPOGRAPHY_H1_FONT_SIZE,
    TYPOGRAPHY_SUB_TEXT_FONT_SIZE,
    TYPOGRAPHY_FOOTNOTE_FONT_SIZE,
    STATE_DISABLED_OPACITY,
    LAYOUT_GRID_BASE,
    ...LOOPABLE_NAMES
} = SPEC_TOKEN_NAMES;

const getBorderRadiusDefaults = () => {
    const TOKEN_NAMES = Object.keys(SPEC_TOKEN_NAMES).filter((NAME) =>
        NAME.includes('BORDER_RADIUS'),
    );
    const defaults = {};

    for (let index = 0; index < TOKEN_NAMES.length; index += 1) {
        const NAME = TOKEN_NAMES[index];
        const API_KEY = getThemeAPIKeyFromName(NAME);
        const VALUE = SPEC_TOKEN_DEFAULTS[NAME];

        defaults[API_KEY] = VALUE;
    }

    return defaults;
};

export const getTypographyTheme = (data = {}) => {
    const typographyNameKeys = [
        TYPOGRAPHY_SIZE_BASE,
        TYPOGRAPHY_SIZE_RATIO,
        ...Object.keys(LOOPABLE_NAMES).filter((dataKey) =>
            dataKey.startsWith('TYPOGRAPHY'),
        ),
    ];
    const themeData = {};

    for (let index = 0; index < typographyNameKeys.length; index += 1) {
        const nameKey = typographyNameKeys[index];
        const apiKey = getThemeAPIKeyFromName(nameKey);
        const value =
            data[apiKey] !== undefined
                ? data[apiKey]
                : SPEC_TOKEN_DEFAULTS[nameKey];

        themeData[apiKey] = value;
    }
    const baseSize = themeData[getThemeAPIKeyFromName(TYPOGRAPHY_SIZE_BASE)];
    const sizeRatio = themeData[getThemeAPIKeyFromName(TYPOGRAPHY_SIZE_RATIO)];

    const H5_FONT_SIZE = Math.round(baseSize * sizeRatio);
    const H4_FONT_SIZE = Math.round(H5_FONT_SIZE * sizeRatio);
    const H3_FONT_SIZE = Math.round(H4_FONT_SIZE * sizeRatio);
    const H2_FONT_SIZE = Math.round(H3_FONT_SIZE * sizeRatio);
    const H1_FONT_SIZE = Math.round(H2_FONT_SIZE * sizeRatio);
    const SUB_TEXT_FONT_SIZE = Math.round(baseSize / sizeRatio);
    const FOOTNOTE_FONT_SIZE = Math.round(SUB_TEXT_FONT_SIZE / sizeRatio);
    themeData[getThemeAPIKeyFromName(TYPOGRAPHY_H1_FONT_SIZE)] = H1_FONT_SIZE;
    themeData[getThemeAPIKeyFromName(TYPOGRAPHY_H2_FONT_SIZE)] = H2_FONT_SIZE;
    themeData[getThemeAPIKeyFromName(TYPOGRAPHY_H3_FONT_SIZE)] = H3_FONT_SIZE;
    themeData[getThemeAPIKeyFromName(TYPOGRAPHY_H4_FONT_SIZE)] = H4_FONT_SIZE;
    themeData[getThemeAPIKeyFromName(TYPOGRAPHY_H5_FONT_SIZE)] = H5_FONT_SIZE;
    themeData[getThemeAPIKeyFromName(TYPOGRAPHY_SUB_TEXT_FONT_SIZE)] =
        SUB_TEXT_FONT_SIZE;
    themeData[getThemeAPIKeyFromName(TYPOGRAPHY_FOOTNOTE_FONT_SIZE)] =
        FOOTNOTE_FONT_SIZE;
    themeData[getThemeAPIKeyFromName(STATE_DISABLED_OPACITY)] =
        data[getThemeAPIKeyFromName(STATE_DISABLED_OPACITY)] ||
        SPEC_TOKEN_DEFAULTS[STATE_DISABLED_OPACITY];

    return themeData;
};

export const getBorderRadiusTheme = (data = {}, isRoundedUI) => {
    const dataClone = {
        ...getBorderRadiusDefaults(),
        ...data,
    };
    const borderRadiusKeys = Object.keys(dataClone).filter((dataKey) =>
        dataKey.includes('border.radius'),
    );
    const theme = {};

    for (let index = 0; index < borderRadiusKeys.length; index += 1) {
        const borderRadiusKey = borderRadiusKeys[index];
        const value = dataClone[borderRadiusKey];

        if (!isRoundedUI) {
            theme[borderRadiusKey] = 0;
        }

        if (isRoundedUI) {
            theme[borderRadiusKey] = value;
        }
    }

    const { FORM_INPUT_BORDER_RADIUS, FORM_PILL_BORDER_RADIUS } =
        SPEC_TOKEN_NAMES;

    let inputBorderRadius =
        data[getThemeAPIKeyFromName(FORM_INPUT_BORDER_RADIUS)];

    if (inputBorderRadius === undefined) {
        inputBorderRadius = SPEC_TOKEN_DEFAULTS[FORM_INPUT_BORDER_RADIUS];
    }

    return {
        ...theme,
        [getThemeAPIKeyFromName(FORM_PILL_BORDER_RADIUS)]: !isRoundedUI
            ? 0
            : Math.max(inputBorderRadius - 1, 0),
    };
};

export const getSpecTheme = (data = {}, isRoundedUI) => {
    const typographyTheme = getTypographyTheme(data);
    const borderRadiusTheme = getBorderRadiusTheme(data, isRoundedUI);
    const GRID_BASE_API_KEY = getThemeAPIKeyFromName(LAYOUT_GRID_BASE);
    let gridBaseValue = data[GRID_BASE_API_KEY];

    if (gridBaseValue === undefined) {
        gridBaseValue = SPEC_TOKEN_DEFAULTS[LAYOUT_GRID_BASE];
    }

    return {
        ...typographyTheme,
        ...borderRadiusTheme,
        [GRID_BASE_API_KEY]: gridBaseValue,
    };
};
