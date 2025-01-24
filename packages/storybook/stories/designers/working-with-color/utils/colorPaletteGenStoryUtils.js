import {
    COLOR_HARMONIES,
    genColorMetadata,
} from '@driponfleek/bankai-lib-color-utils';
import { SEMANTIC_COLOR_TOKEN_NAMES } from '@driponfleek/bankai-lib-theme-utils';
import { getColorSwatchData } from './colorVariantsGenStoryUtils';

const {
    ANALOGOUS,
    COMPOUND,
    MONOCHROMATIC,
    SHADES,
    SPLIT_COMPLEMENTARY,
    TINTS,
    TONES,
} = COLOR_HARMONIES;
const {
    SEMANTIC_COLOR_ACCENT_PRIMARY,
    SEMANTIC_COLOR_ACCENT_SECONDARY,
    SEMANTIC_COLOR_ACCENT_TERTIARY,
    SEMANTIC_COLOR_AFFIRMATIVE,
    SEMANTIC_COLOR_BRAND,
    SEMANTIC_COLOR_CANVAS_BRAND,
    SEMANTIC_COLOR_CAUTIONARY,
    SEMANTIC_COLOR_DESTRUCTIVE,
    SEMANTIC_COLOR_ERROR,
    SEMANTIC_COLOR_INFO,
    SEMANTIC_COLOR_PRIMARY,
    SEMANTIC_COLOR_SECONDARY,
} = SEMANTIC_COLOR_TOKEN_NAMES;
const harmoniesWithOffset = [ANALOGOUS, COMPOUND, SPLIT_COMPLEMENTARY];
const harmoniesWithNumberOfColors = [MONOCHROMATIC, SHADES, TINTS, TONES];

export const convertScreamingSnakeToTitleCase = (str) =>
    (str ?? '')
        .toLowerCase()
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

export const initialState = {
    baseColor: '#006fa3',
    harmony: ANALOGOUS,
    numberOfColors: 5,
    offset: 30,
};

export const initialPaletteState = {
    [SEMANTIC_COLOR_ACCENT_PRIMARY]: undefined,
    [SEMANTIC_COLOR_ACCENT_SECONDARY]: undefined,
    [SEMANTIC_COLOR_ACCENT_TERTIARY]: undefined,
    [SEMANTIC_COLOR_AFFIRMATIVE]: undefined,
    [SEMANTIC_COLOR_BRAND]: undefined,
    [SEMANTIC_COLOR_CANVAS_BRAND]: undefined,
    [SEMANTIC_COLOR_CAUTIONARY]: undefined,
    [SEMANTIC_COLOR_DESTRUCTIVE]: undefined,
    [SEMANTIC_COLOR_ERROR]: undefined,
    [SEMANTIC_COLOR_INFO]: undefined,
    [SEMANTIC_COLOR_PRIMARY]: undefined,
    [SEMANTIC_COLOR_SECONDARY]: undefined,
    isDestructiveSameAsError: true,
    isPrimarySameAsBrand: true,
};

export const readableColorHarmoniesText = Object.keys(COLOR_HARMONIES).reduce(
    (acc, HARMONY) => {
        return {
            ...acc,
            [HARMONY]: convertScreamingSnakeToTitleCase(HARMONY),
        };
    },
    {},
);

export const harmonyDropdownOps = Object.keys(COLOR_HARMONIES).map(
    (HARMONY) => ({
        id: HARMONY,
        text: readableColorHarmoniesText[HARMONY],
    }),
);

export const getColorPaletteListData = (colors = []) =>
    colors.map((color) => getColorSwatchData(genColorMetadata(color)));

export const getShouldShowOffset = (harmony) =>
    harmoniesWithOffset.includes(harmony);

export const getShouldShowNumberOfColors = (harmony) =>
    harmoniesWithNumberOfColors.includes(harmony);
