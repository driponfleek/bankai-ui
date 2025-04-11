import {
    genBrewerColors,
    BREWER_CATEGORY,
    DIVERGING_PALETTE,
    QUALITATIVE_PALETTE,
    SEQUENTIAL_PALETTE,
} from '@driponfleek/bankai-lib-color-utils';
import { massageConstToDotNotation } from '../dataMassageUtils';
import { genConstToDotNotationMap } from '../dataGenUtils';
import { UTILITY_DATA_TOKEN_NAMES } from '../../const/tokens/utility/utilityDataConst';
import { SEMANTIC_COLOR_TOKEN_NAMES } from '../../const/tokens/semantic/semanticColorsConst';

export const genDataVisTokens = (semanticTokens) => {
    const {
        UTILITY_COLOR_DATA_AXIS,
        UTILITY_COLOR_DATA_CANVAS,
        UTILITY_COLOR_DATA_GRID,
    } = UTILITY_DATA_TOKEN_NAMES;
    const {
        [massageConstToDotNotation(
            SEMANTIC_COLOR_TOKEN_NAMES.SEMANTIC_COLOR_CANVAS,
        )]: canvasColor,
        [massageConstToDotNotation(
            SEMANTIC_COLOR_TOKEN_NAMES.SEMANTIC_COLOR_TEXT_ALT,
        )]: textAltColor,
        [massageConstToDotNotation(
            SEMANTIC_COLOR_TOKEN_NAMES.SEMANTIC_COLOR_DECORATIVE_BORDER,
        )]: decorativeBorderColor,
    } = semanticTokens ?? {};
    const constToTokenMap = genConstToDotNotationMap({
        UTILITY_COLOR_DATA_AXIS,
        UTILITY_COLOR_DATA_CANVAS,
        UTILITY_COLOR_DATA_GRID,
    });

    return {
        [constToTokenMap.UTILITY_COLOR_DATA_AXIS]: textAltColor,
        [constToTokenMap.UTILITY_COLOR_DATA_CANVAS]: canvasColor,
        [constToTokenMap.UTILITY_COLOR_DATA_GRID]: decorativeBorderColor,
    };
};

const genFormattedTokenAndVals = (baseTokenName, values = []) => {
    const tokenNames = values.reduce((acc, val, index) => {
        const accClone = { ...acc };
        const tokenName =
            UTILITY_DATA_TOKEN_NAMES[
                `UTILITY_COLOR_DATA_${baseTokenName}_${index < 9 ? '0' : ''}${
                    index + 1
                }`
            ];
        accClone[tokenName] = tokenName;

        return accClone;
    }, {});
    const constToTokenMap = genConstToDotNotationMap(tokenNames);

    return values.reduce((acc, val, index) => {
        const accClone = { ...acc };
        const tokenName = `UTILITY_COLOR_DATA_${baseTokenName}_${
            index < 9 ? '0' : ''
        }${index + 1}`;
        accClone[constToTokenMap[tokenName]] = val;

        return accClone;
    }, {});
};

export const genBrewerDivergingTokens = () => {
    const { DIVERGING } = BREWER_CATEGORY;
    const { BRBG, PIYG, PRGN, PUOR, RDBU, RDYLBU } = DIVERGING_PALETTE;
    const brbgColors = genBrewerColors(DIVERGING, BRBG);
    const piygColors = genBrewerColors(DIVERGING, PIYG);
    const prgnColors = genBrewerColors(DIVERGING, PRGN);
    const puorColors = genBrewerColors(DIVERGING, PUOR);
    const rdbuColors = genBrewerColors(DIVERGING, RDBU);
    const rdylbuColors = genBrewerColors(DIVERGING, RDYLBU);

    return {
        ...genFormattedTokenAndVals('DIVERGING_BRBG', brbgColors),
        ...genFormattedTokenAndVals('DIVERGING_PIYG', piygColors),
        ...genFormattedTokenAndVals('DIVERGING_PRGN', prgnColors),
        ...genFormattedTokenAndVals('DIVERGING_PUOR', puorColors),
        ...genFormattedTokenAndVals('DIVERGING_RDBU', rdbuColors),
        ...genFormattedTokenAndVals('DIVERGING_RDYLBU', rdylbuColors),
    };
};

export const genBrewerQualitativeTokens = () => {
    const { QUALITATIVE } = BREWER_CATEGORY;
    const { DARK2, PAIRED, SET2 } = QUALITATIVE_PALETTE;
    const dark2Colors = genBrewerColors(QUALITATIVE, DARK2);
    dark2Colors.splice(3, dark2Colors.length - 3);
    const pairedColors = genBrewerColors(QUALITATIVE, PAIRED);
    pairedColors.splice(4, pairedColors.length - 4);
    const set2Colors = genBrewerColors(QUALITATIVE, SET2);
    set2Colors.splice(3, set2Colors.length - 3);

    return {
        ...genFormattedTokenAndVals('QUALITATIVE_DARK2', dark2Colors),
        ...genFormattedTokenAndVals('QUALITATIVE_PAIRED', pairedColors),
        ...genFormattedTokenAndVals('QUALITATIVE_SET2', set2Colors),
    };
};

export const genBrewerSequentialTokens = () => {
    const { SEQUENTIAL } = BREWER_CATEGORY;
    const {
        BLUES,
        BUGN,
        BUPU,
        GNBU,
        GREENS,
        GREYS,
        ORANGES,
        ORRD,
        PUBU,
        PUBUGN,
        PURD,
        PURPLES,
        RDPU,
        REDS,
        YLGN,
        YLGNBU,
        YLORBR,
        YLORRD,
    } = SEQUENTIAL_PALETTE;
    const bluesColors = genBrewerColors(SEQUENTIAL, BLUES);
    const bugnColors = genBrewerColors(SEQUENTIAL, BUGN);
    const bupuColors = genBrewerColors(SEQUENTIAL, BUPU);
    const gnbuColors = genBrewerColors(SEQUENTIAL, GNBU);
    const greensColors = genBrewerColors(SEQUENTIAL, GREENS);
    const greysColors = genBrewerColors(SEQUENTIAL, GREYS);
    const orangesColors = genBrewerColors(SEQUENTIAL, ORANGES);
    const orrdColors = genBrewerColors(SEQUENTIAL, ORRD);
    const pubuColors = genBrewerColors(SEQUENTIAL, PUBU);
    const pubugnColors = genBrewerColors(SEQUENTIAL, PUBUGN);
    const purdColors = genBrewerColors(SEQUENTIAL, PURD);
    const purplesColors = genBrewerColors(SEQUENTIAL, PURPLES);
    const rdpuColors = genBrewerColors(SEQUENTIAL, RDPU);
    const redsColors = genBrewerColors(SEQUENTIAL, REDS);
    const ylgnColors = genBrewerColors(SEQUENTIAL, YLGN);
    const ylgnbuColors = genBrewerColors(SEQUENTIAL, YLGNBU);
    const ylorbrColors = genBrewerColors(SEQUENTIAL, YLORBR);
    const ylorrdColors = genBrewerColors(SEQUENTIAL, YLORRD);

    return {
        ...genFormattedTokenAndVals('SEQUENTIAL_BLUES', bluesColors),
        ...genFormattedTokenAndVals('SEQUENTIAL_BUGN', bugnColors),
        ...genFormattedTokenAndVals('SEQUENTIAL_BUPU', bupuColors),
        ...genFormattedTokenAndVals('SEQUENTIAL_GNBU', gnbuColors),
        ...genFormattedTokenAndVals('SEQUENTIAL_GREENS', greensColors),
        ...genFormattedTokenAndVals('SEQUENTIAL_GREYS', greysColors),
        ...genFormattedTokenAndVals('SEQUENTIAL_ORANGES', orangesColors),
        ...genFormattedTokenAndVals('SEQUENTIAL_ORRD', orrdColors),
        ...genFormattedTokenAndVals('SEQUENTIAL_PUBU', pubuColors),
        ...genFormattedTokenAndVals('SEQUENTIAL_PUBUGN', pubugnColors),
        ...genFormattedTokenAndVals('SEQUENTIAL_PURD', purdColors),
        ...genFormattedTokenAndVals('SEQUENTIAL_PURPLES', purplesColors),
        ...genFormattedTokenAndVals('SEQUENTIAL_RDPU', rdpuColors),
        ...genFormattedTokenAndVals('SEQUENTIAL_REDS', redsColors),
        ...genFormattedTokenAndVals('SEQUENTIAL_YLGN', ylgnColors),
        ...genFormattedTokenAndVals('SEQUENTIAL_YLGNBU', ylgnbuColors),
        ...genFormattedTokenAndVals('SEQUENTIAL_YLORBR', ylorbrColors),
        ...genFormattedTokenAndVals('SEQUENTIAL_YLORRD', ylorrdColors),
    };
};
