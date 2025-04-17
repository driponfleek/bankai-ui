import {
    genBrewerColors,
    DATA_VIS_CATEGORY,
    BREWER_DIVERGING_PALETTE,
    BREWER_QUALITATIVE_PALETTE,
    BREWER_SEQUENTIAL_PALETTE,
    cartoColor,
} from '@driponfleek/bankai-lib-color-utils';
import { massageConstToDotNotation } from '../dataMassageUtils';
import { genConstToDotNotationMap } from '../dataGenUtils';
import {
    UTILITY_DATA_TOKEN_NAMES,
    UTILITY_DATA_BREWER_TOKEN_NAMES,
    UTILITY_DATA_CARTO_COLOR_TOKEN_NAMES,
} from '../../const/tokens/utility/utilityDataConst';
import { SEMANTIC_COLOR_TOKEN_NAMES } from '../../const/tokens/semantic/semanticColorsConst';

const DATA_COLOR_TOKEN_NAMES = {
    ...UTILITY_DATA_BREWER_TOKEN_NAMES,
    ...UTILITY_DATA_CARTO_COLOR_TOKEN_NAMES,
};

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
            DATA_COLOR_TOKEN_NAMES[
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
    const { DIVERGING } = DATA_VIS_CATEGORY;
    const { BRBG, PIYG, PRGN, PUOR, RDBU, RDYLBU } = BREWER_DIVERGING_PALETTE;
    const brbgColors = genBrewerColors(DIVERGING, BRBG);
    const piygColors = genBrewerColors(DIVERGING, PIYG);
    const prgnColors = genBrewerColors(DIVERGING, PRGN);
    const puorColors = genBrewerColors(DIVERGING, PUOR);
    const rdbuColors = genBrewerColors(DIVERGING, RDBU);
    const rdylbuColors = genBrewerColors(DIVERGING, RDYLBU);

    return {
        ...genFormattedTokenAndVals('BREWER_DIVERGING_BRBG', brbgColors),
        ...genFormattedTokenAndVals('BREWER_DIVERGING_PIYG', piygColors),
        ...genFormattedTokenAndVals('BREWER_DIVERGING_PRGN', prgnColors),
        ...genFormattedTokenAndVals('BREWER_DIVERGING_PUOR', puorColors),
        ...genFormattedTokenAndVals('BREWER_DIVERGING_RDBU', rdbuColors),
        ...genFormattedTokenAndVals('BREWER_DIVERGING_RDYLBU', rdylbuColors),
    };
};

export const genBrewerQualitativeTokens = () => {
    const { QUALITATIVE } = DATA_VIS_CATEGORY;
    const { DARK2, PAIRED, SET2 } = BREWER_QUALITATIVE_PALETTE;
    const dark2Colors = genBrewerColors(QUALITATIVE, DARK2);
    dark2Colors.splice(3, dark2Colors.length - 3);
    const pairedColors = genBrewerColors(QUALITATIVE, PAIRED);
    pairedColors.splice(4, pairedColors.length - 4);
    const set2Colors = genBrewerColors(QUALITATIVE, SET2);
    set2Colors.splice(3, set2Colors.length - 3);

    return {
        ...genFormattedTokenAndVals('BREWER_QUALITATIVE_DARK2', dark2Colors),
        ...genFormattedTokenAndVals('BREWER_QUALITATIVE_PAIRED', pairedColors),
        ...genFormattedTokenAndVals('BREWER_QUALITATIVE_SET2', set2Colors),
    };
};

export const genBrewerSequentialTokens = () => {
    const { SEQUENTIAL } = DATA_VIS_CATEGORY;
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
    } = BREWER_SEQUENTIAL_PALETTE;
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
        ...genFormattedTokenAndVals('BREWER_SEQUENTIAL_BLUES', bluesColors),
        ...genFormattedTokenAndVals('BREWER_SEQUENTIAL_BUGN', bugnColors),
        ...genFormattedTokenAndVals('BREWER_SEQUENTIAL_BUPU', bupuColors),
        ...genFormattedTokenAndVals('BREWER_SEQUENTIAL_GNBU', gnbuColors),
        ...genFormattedTokenAndVals('BREWER_SEQUENTIAL_GREENS', greensColors),
        ...genFormattedTokenAndVals('BREWER_SEQUENTIAL_GREYS', greysColors),
        ...genFormattedTokenAndVals('BREWER_SEQUENTIAL_ORANGES', orangesColors),
        ...genFormattedTokenAndVals('BREWER_SEQUENTIAL_ORRD', orrdColors),
        ...genFormattedTokenAndVals('BREWER_SEQUENTIAL_PUBU', pubuColors),
        ...genFormattedTokenAndVals('BREWER_SEQUENTIAL_PUBUGN', pubugnColors),
        ...genFormattedTokenAndVals('BREWER_SEQUENTIAL_PURD', purdColors),
        ...genFormattedTokenAndVals('BREWER_SEQUENTIAL_PURPLES', purplesColors),
        ...genFormattedTokenAndVals('BREWER_SEQUENTIAL_RDPU', rdpuColors),
        ...genFormattedTokenAndVals('BREWER_SEQUENTIAL_REDS', redsColors),
        ...genFormattedTokenAndVals('BREWER_SEQUENTIAL_YLGN', ylgnColors),
        ...genFormattedTokenAndVals('BREWER_SEQUENTIAL_YLGNBU', ylgnbuColors),
        ...genFormattedTokenAndVals('BREWER_SEQUENTIAL_YLORBR', ylorbrColors),
        ...genFormattedTokenAndVals('BREWER_SEQUENTIAL_YLORRD', ylorrdColors),
    };
};

export const genCartoColorDivergingTokens = () => {
    const { ArmyRose, Earth, Geyser } = cartoColor;

    return {
        ...genFormattedTokenAndVals(
            'CARTO_COLOR_DIVERGING_ARMYROSE',
            ArmyRose[7],
        ),
        ...genFormattedTokenAndVals('CARTO_COLOR_DIVERGING_EARTH', Earth[7]),
        ...genFormattedTokenAndVals('CARTO_COLOR_DIVERGING_GEYSER', Geyser[7]),
    };
};

export const genCartoColorQualitativeTokens = () => {
    const { Safe } = cartoColor;

    return {
        ...genFormattedTokenAndVals('CARTO_COLOR_QUALITATIVE_SAFE', Safe[11]),
    };
};

export const genCartoColorSequentialTokens = () => {
    const {
        BluGrn,
        BluYl,
        BrwnYl,
        Burg,
        BurgYl,
        DarkMint,
        Emrld,
        Magenta,
        Mint,
        OrYel,
        Peach,
        PinkYl,
        Purp,
        PurpOr,
        RedOr,
        Sunset,
        SunsetDark,
        Teal,
        TealGrn,
    } = cartoColor;

    return {
        ...genFormattedTokenAndVals('CARTO_COLOR_SEQUENTIAL_BLUGRN', BluGrn[7]),
        ...genFormattedTokenAndVals('CARTO_COLOR_SEQUENTIAL_BLUYL', BluYl[7]),
        ...genFormattedTokenAndVals('CARTO_COLOR_SEQUENTIAL_BRWNYL', BrwnYl[7]),
        ...genFormattedTokenAndVals('CARTO_COLOR_SEQUENTIAL_BURG', Burg[7]),
        ...genFormattedTokenAndVals('CARTO_COLOR_SEQUENTIAL_BURGYL', BurgYl[7]),
        ...genFormattedTokenAndVals(
            'CARTO_COLOR_SEQUENTIAL_DARKMINT',
            DarkMint[7],
        ),
        ...genFormattedTokenAndVals('CARTO_COLOR_SEQUENTIAL_EMRLD', Emrld[7]),
        ...genFormattedTokenAndVals(
            'CARTO_COLOR_SEQUENTIAL_MAGENTA',
            Magenta[7],
        ),
        ...genFormattedTokenAndVals('CARTO_COLOR_SEQUENTIAL_MINT', Mint[7]),
        ...genFormattedTokenAndVals('CARTO_COLOR_SEQUENTIAL_ORYEL', OrYel[7]),
        ...genFormattedTokenAndVals('CARTO_COLOR_SEQUENTIAL_PEACH', Peach[7]),
        ...genFormattedTokenAndVals('CARTO_COLOR_SEQUENTIAL_PINKYL', PinkYl[7]),
        ...genFormattedTokenAndVals('CARTO_COLOR_SEQUENTIAL_PURP', Purp[7]),
        ...genFormattedTokenAndVals('CARTO_COLOR_SEQUENTIAL_PURPOR', PurpOr[7]),
        ...genFormattedTokenAndVals('CARTO_COLOR_SEQUENTIAL_REDOR', RedOr[7]),
        ...genFormattedTokenAndVals('CARTO_COLOR_SEQUENTIAL_SUNSET', Sunset[7]),
        ...genFormattedTokenAndVals(
            'CARTO_COLOR_SEQUENTIAL_SUNSETDARK',
            SunsetDark[7],
        ),
        ...genFormattedTokenAndVals('CARTO_COLOR_SEQUENTIAL_TEAL', Teal[7]),
        ...genFormattedTokenAndVals(
            'CARTO_COLOR_SEQUENTIAL_TEALGRN',
            TealGrn[7],
        ),
    };
};
