import chromajs from 'chroma-js';
import {
    convertColorToHex,
    convertColorToLCH,
    convertColorToHSL,
} from './colorFormatConversionUtils';
import { getSanitizedHex } from './dataSanitizerUtils';
import { COLOR_HARMONIES } from '../const/colorConst';
import {
    BREWER_CATEGORY,
    DIVERGING_PALETTE,
    QUALITATIVE_PALETTE,
    SEQUENTIAL_PALETTE,
} from '../const/brewerConst';

export const getShiftedHue = (baseHue, shiftAmount) => {
    let adjustedHue = (baseHue + shiftAmount) % 360;

    if (adjustedHue < 0) {
        adjustedHue += 360;
    }

    return adjustedHue;
};

export const genColorScale = (hex) => {
    const sanitizedHex = getSanitizedHex(hex);
    const baseLCH = convertColorToLCH(sanitizedHex); // l = lightness, c = chroma, h = hue
    const colorsForScale = [
        chromajs({
            ...baseLCH,
            l: 1,
        }).hex(),
        chromajs({
            ...baseLCH,
            l: 25,
        }).hex(),
        chromajs({
            ...baseLCH,
            l: 50,
        }).hex(),
        chromajs({
            ...baseLCH,
            l: 75,
        }).hex(),
        chromajs({
            ...baseLCH,
            l: 99,
        }).hex(),
    ];

    return chromajs
        .scale(colorsForScale)
        .domain([0, 100])
        .mode('lch')
        .correctLightness();
};

export const getHuesForExistingColors = (existingColors) => {
    if (!existingColors) {
        return [];
    }

    return existingColors.map((color) => {
        const { h: hue } = convertColorToLCH(color);

        return hue;
    });
};

const generateColorAdjustmentIncrements = (
    numberOfColors = 1,
    shouldReverse = true,
    min = 1,
    max = 99,
) => {
    const step = (max - min) / (numberOfColors + 1);
    const increments = Array.from({ length: numberOfColors }, (_, i) =>
        Math.round(min + (i + 1) * step),
    );

    if (!shouldReverse) {
        return increments;
    }

    return increments.reverse();
};

export const genAnalogousColors = (baseHex, offset = 30) => {
    const sanitizedHex = getSanitizedHex(baseHex);
    const chromaColor = chromajs(sanitizedHex);
    const baseHSL = convertColorToHSL(sanitizedHex);
    const { h: baseHue } = baseHSL;
    const color1Hue = getShiftedHue(baseHue, offset * -1);
    const color2Hue = getShiftedHue(baseHue, offset);

    return [
        chromaColor.set('hsl.h', color1Hue).hex(),
        chromaColor.set('hsl.h', color2Hue).hex(),
    ];
};

export const genMonochromaticColors = (baseHex, numberOfColors = 1) => {
    if (numberOfColors < 1) {
        return [];
    }

    const sanitizedHex = getSanitizedHex(baseHex);
    const chromaColor = chromajs(sanitizedHex);

    return generateColorAdjustmentIncrements(numberOfColors).map((lightness) =>
        chromaColor.set('hsl.l', lightness / 100).hex(),
    );
};

export const genTriadicColors = (baseHex) => {
    const sanitizedHex = getSanitizedHex(baseHex);
    const chromaColor = chromajs(sanitizedHex);
    const baseHSL = convertColorToHSL(sanitizedHex);
    const { h: baseHue } = baseHSL;
    const color1Hue = getShiftedHue(baseHue, -120);
    const color2Hue = getShiftedHue(baseHue, 120);

    return [
        chromaColor.set('hsl.h', color1Hue).hex(),
        chromaColor.set('hsl.h', color2Hue).hex(),
    ];
};

export const genComplementaryColor = (baseHex) => {
    const sanitizedHex = getSanitizedHex(baseHex);
    // TODO: Move this comment where LCH is being used. I'm switching
    // to HSL to get more diverse color options for color palettes.
    // Turns out that chroma is giving different lch values due to
    // working with the D65 reference white point. This white point is
    // more tailored for web and will be the standard in CSS 4 when it
    // is finialized. Currently most generators and browser work in
    // the legacy white point of D50, which is more tailored for print.
    // https://gka.github.io/chroma.js/#chroma-setlabwhitepoint
    // chromajs.setLabWhitePoint('D50');
    const chromaColor = chromajs(sanitizedHex);
    const baseHSL = convertColorToHSL(sanitizedHex);
    const { h: baseHue } = baseHSL;

    return chromaColor.set('hsl.h', getShiftedHue(baseHue, 180)).hex();
};

export const genSplitComplementaryColors = (baseHex, offset = 30) => {
    const sanitizedHex = getSanitizedHex(baseHex);
    const complimentaryColor = genComplementaryColor(sanitizedHex);

    return genAnalogousColors(complimentaryColor, offset);
};

export const genSquareColors = (baseHex) => {
    const sanitizedHex = getSanitizedHex(baseHex);
    const chromaColor = chromajs(sanitizedHex);
    const baseHSL = convertColorToHSL(sanitizedHex);
    const { h: baseHue } = baseHSL;
    const color1Hue = getShiftedHue(baseHue, 90);
    const color2Hue = getShiftedHue(baseHue, 180);
    const color3Hue = getShiftedHue(baseHue, 270);

    return [
        chromaColor.set('hsl.h', color1Hue).hex(),
        chromaColor.set('hsl.h', color2Hue).hex(),
        chromaColor.set('hsl.h', color3Hue).hex(),
    ];
};

export const genTetradicColors = (baseHex) => {
    const sanitizedHex = getSanitizedHex(baseHex);
    const analogousColors = genAnalogousColors(sanitizedHex);

    return [
        ...analogousColors,
        genComplementaryColor(analogousColors[0]),
        genComplementaryColor(analogousColors[1]),
    ];
};

export const genCompoundColors = (baseHex, offset = 30) => {
    const sanitizedHex = getSanitizedHex(baseHex);
    const complimentaryColor = genComplementaryColor(sanitizedHex);
    const analogousColors = genAnalogousColors(sanitizedHex, offset);

    return [complimentaryColor, ...analogousColors];
};

const genTintsShadesTones = (
    baseHex,
    numberOfColors = 5,
    mode = COLOR_HARMONIES.SHADES,
) => {
    if (numberOfColors < 1) {
        return [];
    }

    const sanitizedHex = getSanitizedHex(baseHex);
    const chromaColor = chromajs(sanitizedHex);
    const baseLCH = convertColorToLCH(sanitizedHex);
    const grayColor = convertColorToHex({ ...baseLCH, c: 0 });
    const adjustmentIncrements =
        generateColorAdjustmentIncrements(numberOfColors);

    switch (mode) {
        case COLOR_HARMONIES.SHADES:
            return adjustmentIncrements.map((amount) =>
                chromaColor.shade(amount / 100, 'hsl').hex(),
            );
        case COLOR_HARMONIES.TONES:
            return adjustmentIncrements.map((amount) =>
                chromaColor.mix(grayColor, amount / 100, 'hsl').hex(),
            );
        case COLOR_HARMONIES.TINTS:
        default:
            return adjustmentIncrements.map((amount) =>
                chromaColor.tint(amount / 100, 'hsl').hex(),
            );
    }
};

export const genColorShades = (baseHex, numberOfColors = 5) => {
    return genTintsShadesTones(baseHex, numberOfColors, COLOR_HARMONIES.SHADES);
};

export const genColorTints = (baseHex, numberOfColors = 5) => {
    return genTintsShadesTones(baseHex, numberOfColors, COLOR_HARMONIES.TINTS);
};

export const genColorTones = (baseHex, numberOfColors = 5) => {
    return genTintsShadesTones(baseHex, numberOfColors, COLOR_HARMONIES.TONES);
};

export const genHarmonyColors = (harmony, ops) => {
    const { baseHex, numberOfColors, offset } = ops ?? {};

    switch (harmony) {
        case COLOR_HARMONIES.COMPLEMENTARY:
            return [genComplementaryColor(baseHex)];
        case COLOR_HARMONIES.COMPOUND:
            return genCompoundColors(baseHex, offset);
        case COLOR_HARMONIES.MONOCHROMATIC:
            return genMonochromaticColors(baseHex, numberOfColors);
        case COLOR_HARMONIES.SHADES:
            return genColorShades(baseHex, numberOfColors);
        case COLOR_HARMONIES.SPLIT_COMPLEMENTARY:
            return genSplitComplementaryColors(baseHex, offset);
        case COLOR_HARMONIES.SQUARE:
            return genSquareColors(baseHex);
        case COLOR_HARMONIES.TETRADIC:
            return genTetradicColors(baseHex);
        case COLOR_HARMONIES.TINTS:
            return genColorTints(baseHex, numberOfColors);
        case COLOR_HARMONIES.TONES:
            return genColorTones(baseHex, numberOfColors);
        case COLOR_HARMONIES.TRIAD:
            return genTriadicColors(baseHex);
        case COLOR_HARMONIES.ANALOGOUS:
        default:
            return genAnalogousColors(baseHex, offset);
    }
};

const genBrewerDivergingColors = (palette) => {
    const { BRBG, PIYG, PRGN, PUOR, RDBU, RDYLBU } = DIVERGING_PALETTE;
    const { BrBG, PiYG, PRGn, PuOr, RdBu, RdYlBu } = chromajs.brewer;

    switch (palette) {
        case BRBG:
            return BrBG;
        case PIYG:
            return PiYG;
        case PRGN:
            return PRGn;
        case PUOR:
            return PuOr;
        case RDYLBU:
            return RdYlBu;
        case RDBU:
        default:
            return RdBu;
    }
};

const genBrewerQualitativeColors = (palette) => {
    const { DARK2, PAIRED, SET2 } = QUALITATIVE_PALETTE;
    const { Dark2, Paired, Set2 } = chromajs.brewer;

    switch (palette) {
        case DARK2:
            return Dark2;
        case PAIRED:
            return Paired;
        case SET2:
        default:
            return Set2;
    }
};

const genBrewerSequentialColors = (palette) => {
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
    const {
        Blues,
        BuGn,
        BuPu,
        GnBu,
        Greens,
        Greys,
        Oranges,
        OrRd,
        PuBu,
        PuBuGn,
        PuRd,
        Purples,
        RdPu,
        Reds,
        YlGn,
        YlGnBu,
        YlOrBr,
        YlOrRd,
    } = chromajs.brewer;

    switch (palette) {
        case BUGN:
            return BuGn;
        case BUPU:
            return BuPu;
        case GNBU:
            return GnBu;
        case GREENS:
            return Greens;
        case GREYS:
            return Greys;
        case ORANGES:
            return Oranges;
        case ORRD:
            return OrRd;
        case PUBU:
            return PuBu;
        case PUBUGN:
            return PuBuGn;
        case PURD:
            return PuRd;
        case PURPLES:
            return Purples;
        case RDPU:
            return RdPu;
        case REDS:
            return Reds;
        case YLGN:
            return YlGn;
        case YLGNBU:
            return YlGnBu;
        case YLORBR:
            return YlOrBr;
        case YLORRD:
            return YlOrRd;
        case BLUES:
        default:
            return Blues;
    }
};

export const genBrewerColors = (category, palette) => {
    const { DIVERGING, QUALITATIVE, SEQUENTIAL } = BREWER_CATEGORY;

    switch (category) {
        case DIVERGING:
            return genBrewerDivergingColors(palette);
        case QUALITATIVE:
            return genBrewerQualitativeColors(palette);
        case SEQUENTIAL:
            return genBrewerSequentialColors(palette);
        default:
            return [];
    }
};
