export const TYPE_RATIO_NAMES = {
    MINOR_SECOND: 'MINOR_SECOND',
    MAJOR_SECOND: 'MAJOR_SECOND',
    MINOR_THIRD: 'MINOR_THIRD',
    MAJOR_THIRD: 'MAJOR_THIRD',
    PERFECT_FOURTH: 'PERFECT_FOURTH',
    AUGMENTED_FOURTH: 'AUGMENTED_FOURTH',
    PERFECT_FIFTH: 'PERFECT_FIFTH',
    GOLDEN_RATIO: 'GOLDEN_RATIO',
};

export const TYPE_RATIO_VALUES = {
    [TYPE_RATIO_NAMES.MINOR_SECOND]: 1.067,
    [TYPE_RATIO_NAMES.MAJOR_SECOND]: 1.125,
    [TYPE_RATIO_NAMES.MINOR_THIRD]: 1.2,
    [TYPE_RATIO_NAMES.MAJOR_THIRD]: 1.25,
    [TYPE_RATIO_NAMES.PERFECT_FOURTH]: 1.333,
    [TYPE_RATIO_NAMES.AUGMENTED_FOURTH]: 1.414,
    [TYPE_RATIO_NAMES.PERFECT_FIFTH]: 1.5,
    [TYPE_RATIO_NAMES.GOLDEN_RATIO]: 1.618,
};

const getReadableRatioNameMap = () => {
    const ratioNameKeys = Object.keys(TYPE_RATIO_NAMES);
    const NAME_MAP = {};

    for (let index = 0; index < ratioNameKeys.length; index += 1) {
        const ratioNameKey = ratioNameKeys[index];

        NAME_MAP[ratioNameKey] = ratioNameKey
            .replace('_', ' ')
            .toLocaleLowerCase();
    }

    return NAME_MAP;
};

export const READABLE_TYPE_RATIO_NAMES = getReadableRatioNameMap();
