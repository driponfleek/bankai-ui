import { genArgType } from '../../../../utils/argTypesUtils';
import TYPE_RATIOS from '../guides/const/typeRatiosConst';

// Constants
import {
    CONTROL_TYPE_NAMES,
    CONTROL_TYPES,
    CONTROL_OP_NAMES,
    CONTROL_OPS,
} from '../../../../const/controlsConst';

const TYPE_RATIO_NAMES = Object.keys(TYPE_RATIOS);

export const args = {
    baseFont: 16,
    ratio: 'minor third (1.2)',
};

export const argTypes = {
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.RANGE],
        controlOps: {
            [CONTROL_OPS[CONTROL_OP_NAMES.MIN]]: 14,
            [CONTROL_OPS[CONTROL_OP_NAMES.MAX]]: 25,
            [CONTROL_OPS[CONTROL_OP_NAMES.STEP]]: 1,
        },
        propName: 'baseFont',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.RADIO],
        options: TYPE_RATIO_NAMES.map(
            (NAME) =>
                `${NAME.toLowerCase().replace('_', ' ')} (${
                    TYPE_RATIOS[NAME]
                })`,
        ),
        propName: 'ratio',
    }),
};
