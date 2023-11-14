import {
    convertColorToHex,
    convertColorToLCH,
} from './colorFormatConversionUtils';
import { getSanitizedHex } from './dataSanitizerUtils';
import { COLOR_HARMONIES } from '../const/colorConst';

const adjustForUniqueHue = (
    hue,
    existingHues = [],
    increment = 15,
    tolerance = 1,
) => {
    let desiredHue = hue % 360;
    let isDuplicateHue = existingHues.some(
        (existingHue) => Math.abs(existingHue - desiredHue) < tolerance,
    );

    while (isDuplicateHue) {
        const adjustedHue = (desiredHue + increment) % 360; // Shift to resolve overlap
        desiredHue = adjustedHue;
        isDuplicateHue = existingHues.some(
            (existingHue) => Math.abs(existingHue - adjustedHue) < tolerance,
        );
    }

    return desiredHue;
};

// const getHueDistance = (newHue, baseHue) => {
//     return Math.abs(newHue - baseHue) % 180; // Max distance is 180 (opposite on the wheel)
// };

export const getHuesForExistingColors = (existingColors) => {
    if (!existingColors) {
        return [];
    }

    return existingColors.map((color) => {
        const { h: hue } = convertColorToLCH(color);

        return hue;
    });
};

const generateHueOffsets = (numberOfColors = 1, step = 30) => {
    const offsets = [];

    for (let index = 0; index < numberOfColors; index += 1) {
        const sign = index % 2 === 0 ? 1 : -1; // Alternat positive/negative
        offsets.push(sign * Math.ceil((index + 1) / 2) * step);
    }

    return offsets;
};

const generateAdjustments = (range, numberOfColors = 1) => {
    const { min, max } = range ?? {};
    const step = (max - min) / numberOfColors;
    const adjustments = [];

    for (let index = 0; index < numberOfColors; index += 1) {
        adjustments.push(min + index * step);
    }

    return adjustments;
};

export const generateAnalogousColor = ({
    offset,
    baseLCH,
    chromaAdjustment,
    lightnessAdjustment,
    existingHues,
}) => {
    const { l: baseLightness, c: baseChroma, h: baseHue } = baseLCH ?? {};
    const newHue = adjustForUniqueHue(baseHue + offset, existingHues, 30);
    const newLCH = {
        l: Math.max(10, Math.min(90, baseLightness + lightnessAdjustment)),
        c: Math.max(10, Math.min(80, baseChroma + chromaAdjustment)),
        h: newHue,
    };

    return {
        hex: convertColorToHex(newLCH),
        newHue,
    };
};

export const generateAnalogousPalette = ({
    baseHex,
    numberOfColors = 1,
    existingColors = [],
    reservedHues = [],
    adjustmentsRange = { min: -20, max: 20 },
}) => {
    const sanitizedHex = getSanitizedHex(baseHex);
    const baseLCH = convertColorToLCH(sanitizedHex);
    const { h: baseHue } = baseLCH;
    const existingHues = getHuesForExistingColors(existingColors);
    const generatedHues = [baseHue];
    const hueOffsets = generateHueOffsets(numberOfColors);
    const chromaAdjustments = generateAdjustments(
        adjustmentsRange,
        numberOfColors,
    );
    const lightnessAdjustments = generateAdjustments(
        adjustmentsRange,
        numberOfColors,
    );
    const palette = [];

    for (let index = 0; index < numberOfColors; index += 1) {
        const { hex, newHue } = generateAnalogousColor({
            offset: hueOffsets[index],
            baseLCH,
            existingHues: [...existingHues, ...generatedHues, ...reservedHues],
            chromaAdjustment: chromaAdjustments[index],
            lightnessAdjustment: lightnessAdjustments[index],
        });
        generatedHues.push(newHue);
        palette.push(hex);
    }

    return palette;
};

export const generateMonochromaticPalette = ({
    baseHex,
    numberOfColors = 1,
    chromaAdjustmentRange = { min: 10, max: 80 },
    lightnessAdjustmentRange = { min: 10, max: 90 },
}) => {
    const sanitizedHex = getSanitizedHex(baseHex);
    const baseLCH = convertColorToLCH(sanitizedHex);
    const { h: baseHue } = baseLCH ?? {};
    const chromaAdjustments = generateAdjustments(
        chromaAdjustmentRange,
        numberOfColors,
    );
    const lightnessAdjustments = generateAdjustments(
        lightnessAdjustmentRange,
        numberOfColors,
    );
    const palette = [];

    for (let index = 0; index < numberOfColors; index += 1) {
        palette.push(
            convertColorToHex({
                l: Math.max(10, Math.min(90, lightnessAdjustments[index])),
                c: Math.max(10, Math.min(80, chromaAdjustments[index])),
                h: baseHue,
            }),
        );
    }

    return palette;
};

export const generateTriadicPalette = ({
    baseHex,
    numberOfColors = 1,
    existingColors = [],
    reservedHues = [],
    chromaAdjustmentRange = { min: 10, max: 50 },
    lightnessAdjustmentRange = { min: 30, max: 80 },
}) => {
    const sanitizedHex = getSanitizedHex(baseHex);
    const baseLCH = convertColorToLCH(sanitizedHex);
    const { l: baseLightness, c: baseChroma, h: baseHue } = baseLCH;
    const triadicHues = [120, -120].map(
        (offset) => (baseHue + offset + 360) % 360,
    );
    const chromaAdjustments = generateAdjustments(
        chromaAdjustmentRange,
        numberOfColors,
    );
    const lightnessAdjustments = generateAdjustments(
        lightnessAdjustmentRange,
        numberOfColors,
    );
    const existingHues = getHuesForExistingColors(existingColors);
    const generatedHues = [baseHue];
    const palette = [];

    for (let index = 0; index < numberOfColors; index += 1) {
        const triadicHue = triadicHues[index % triadicHues.length];
        const newHue = adjustForUniqueHue(triadicHue, [
            ...existingHues,
            ...generatedHues,
            ...reservedHues,
        ]);
        const newChroma = Math.max(
            10,
            Math.min(80, baseChroma + chromaAdjustments[index]),
        );
        const newLightness = Math.max(
            10,
            Math.min(90, baseLightness + lightnessAdjustments[index]),
        );

        palette.push(
            convertColorToHex({
                l: newLightness,
                c: newChroma,
                h: newHue,
            }),
        );
    }

    return palette;
};

export const generateComplementaryPalette = ({
    baseHex,
    numberOfColors = 1,
    existingColors = [],
    reservedHues = [],
}) => {
    const sanitizedHex = getSanitizedHex(baseHex);
    const baseLCH = convertColorToLCH(sanitizedHex);
    const { l: baseLightness, c: baseChroma, h: baseHue } = baseLCH;
    const hueStep = 180 / (numberOfColors - 1);
    const existingHues = getHuesForExistingColors(existingColors);
    const generatedHues = [baseHue];
    const palette = [];

    for (let index = 0; index < numberOfColors; index += 1) {
        const newHue = adjustForUniqueHue(
            (baseHue + 180 + index * hueStep) % 360,
            [...existingHues, ...generatedHues, ...reservedHues],
        );
        const newChroma = Math.max(
            10,
            Math.min(80, baseChroma + (index % 2 === 0 ? 10 : -10)),
        );
        const newLightness = Math.max(
            10,
            Math.min(90, baseLightness + index * 5),
        );

        palette.push(
            convertColorToHex({
                l: newLightness,
                c: newChroma,
                h: newHue,
            }),
        );

        generatedHues.push(newHue);
    }

    return palette;
};

export const generateSplitComplementaryPalette = ({
    baseHex,
    numberOfColors = 1,
    existingColors = [],
    reservedHues = [],
}) => {
    const sanitizedHex = getSanitizedHex(baseHex);
    const baseLCH = convertColorToLCH(sanitizedHex);
    const { l: baseLightness, c: baseChroma, h: baseHue } = baseLCH;
    const existingHues = getHuesForExistingColors(existingColors);
    const splitOffset = 30;
    const palette = [];
    const generatedHues = [baseHue];

    for (let index = 0; index < numberOfColors; index += 1) {
        const newHue = adjustForUniqueHue(
            index % 2 === 1
                ? (baseHue + 180 - splitOffset) % 360
                : (baseHue + 180 + splitOffset) % 360,
            [...existingHues, ...generatedHues, ...reservedHues],
        );
        const newChroma = Math.max(
            10,
            Math.min(80, baseChroma + (index % 2 === 0 ? 10 : -10)),
        );
        const newLightness = Math.max(
            10,
            Math.min(90, baseLightness + index * 5),
        );

        palette.push(
            convertColorToHex({
                l: newLightness,
                c: newChroma,
                h: newHue,
            }),
        );

        generatedHues.push(newHue);
    }

    return palette;
};

export const generateSquarePalette = ({
    baseHex,
    numberOfColors = 1,
    existingColors = [],
    reservedHues = [],
}) => {
    const sanitizedHex = getSanitizedHex(baseHex);
    const baseLCH = convertColorToLCH(sanitizedHex);
    const { l: baseLightness, c: baseChroma, h: baseHue } = baseLCH;
    const existingHues = getHuesForExistingColors(existingColors);
    const hueStep = 90;
    const generatedHues = [baseHue];
    const palette = [];

    for (let index = 0; index < numberOfColors; index += 1) {
        const newHue = adjustForUniqueHue((baseHue + index * hueStep) % 360, [
            ...existingHues,
            ...generatedHues,
            ...reservedHues,
        ]);
        const newChroma = Math.max(
            10,
            Math.min(80, baseChroma + (index % 2 === 0 ? 10 : -10)),
        );
        const newLightness = Math.max(
            10,
            Math.min(90, baseLightness + index * 5),
        );

        palette.push(
            convertColorToHex({
                l: newLightness,
                c: newChroma,
                h: newHue,
            }),
        );

        generatedHues.push(newHue);
    }

    return palette;
};

export const generateTetradicPalette = ({
    baseHex,
    numberOfColors = 1,
    existingColors = [],
    reservedHues = [],
}) => {
    const sanitizedHex = getSanitizedHex(baseHex);
    const baseLCH = convertColorToLCH(sanitizedHex);
    const { l: baseLightness, c: baseChroma, h: baseHue } = baseLCH;
    const existingHues = getHuesForExistingColors(existingColors);
    const hueStep = 60;
    const generatedHues = [baseHue];
    const palette = [];

    for (let index = 0; index < numberOfColors; index += 1) {
        const newHue = adjustForUniqueHue((baseHue + index * hueStep) % 360, [
            ...existingHues,
            ...generatedHues,
            ...reservedHues,
        ]);
        const newChroma = Math.max(
            10,
            Math.min(80, baseChroma + (index % 2 === 0 ? 10 : -10)),
        );
        const newLightness = Math.max(
            10,
            Math.min(90, baseLightness + index * 5),
        );

        palette.push(
            convertColorToHex({
                l: newLightness,
                c: newChroma,
                h: newHue,
            }),
        );

        generatedHues.push(newHue);
    }

    return palette;
};

export const generateCompoundPalette = ({
    baseHex,
    numberOfColors = 1,
    existingColors = [],
    reservedHues = [],
}) => {
    const sanitizedHex = getSanitizedHex(baseHex);
    const baseLCH = convertColorToLCH(sanitizedHex);
    const { l: baseLightness, c: baseChroma, h: baseHue } = baseLCH;
    const existingHues = getHuesForExistingColors(existingColors);
    const hueOffsets = [-30, 30, 160, 200];
    const palette = [];
    const generatedHues = [baseHue];

    for (let index = 0; index < numberOfColors; index += 1) {
        const newHue = adjustForUniqueHue(
            (baseHue + hueOffsets[index % hueOffsets.length]) % 360,
            [...existingHues, ...generatedHues, ...reservedHues],
        );
        const newChroma = Math.max(
            10,
            Math.min(80, baseChroma + (index % 2 === 0 ? 10 : -10)),
        );
        const newLightness = Math.max(
            10,
            Math.min(90, baseLightness + index * 5),
        );

        palette.push(
            convertColorToHex({
                l: newLightness,
                c: newChroma,
                h: newHue,
            }),
        );

        generatedHues.push(newHue);
    }

    return palette;
};

export const generateShadesPalette = ({
    baseHex,
    numberOfColors = 1,
    lightnessRange = { min: 10, max: 90 },
}) => {
    const sanitizedHex = getSanitizedHex(baseHex);
    const baseLCH = convertColorToLCH(sanitizedHex);
    const { l: baseLightness, c: baseChroma, h: baseHue } = baseLCH;
    const step =
        (lightnessRange.max - lightnessRange.min) / (numberOfColors - 1);
    let lightnessRanges = Array.from(
        { length: numberOfColors },
        (_, i) => lightnessRange.min + i * step,
    ).filter((lightness) => Math.abs(lightness - baseLightness) > 1);

    let iterations = 0;
    const maxIterations = 100;
    while (
        lightnessRanges.length < numberOfColors &&
        iterations < maxIterations
    ) {
        iterations += 1;
        const iter = iterations;
        lightnessRanges = Array.from(
            { length: numberOfColors },
            (_, i) =>
                lightnessRange.min +
                i *
                    ((lightnessRange.max - lightnessRange.min) /
                        (numberOfColors + iter)),
        ).filter((lightness) => Math.abs(lightness - baseLightness) > 1);

        if (iterations >= maxIterations) {
            // eslint-disable-next-line no-console
            console.error(
                'Unable to generate a valid lightness range. Adjust constraints.',
            );
            break;
        }
    }
    const palette = [];

    for (let index = 0; index < numberOfColors; index += 1) {
        const lightness = lightnessRanges[index];

        palette.push(
            convertColorToHex({
                l: lightness,
                c: baseChroma,
                h: baseHue,
            }),
        );
    }

    return palette;
};

export const generateHarmonyPalette = (harmony, ops) => {
    switch (harmony) {
        case COLOR_HARMONIES.COMPLEMENTARY:
            return generateComplementaryPalette(ops);
        case COLOR_HARMONIES.MONOCHROMATIC:
            return generateMonochromaticPalette(ops);
        case COLOR_HARMONIES.SPLIT_COMPLEMENTARY:
            return generateSplitComplementaryPalette(ops);
        case COLOR_HARMONIES.TRIAD:
            return generateTriadicPalette(ops);
        case COLOR_HARMONIES.SQUARE:
            return generateSquarePalette(ops);
        case COLOR_HARMONIES.TETRADIC:
            return generateTetradicPalette(ops);
        case COLOR_HARMONIES.COMPOUND:
            return generateCompoundPalette(ops);
        case COLOR_HARMONIES.SHADES:
            return generateShadesPalette(ops);
        case COLOR_HARMONIES.ANALOGOUS:
        default:
            return generateAnalogousPalette(ops);
    }
};
