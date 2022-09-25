import { genArgType } from '../../../../utils/argTypesUtils';
import {
    TYPE_RATIO_VALUES,
    TYPE_RATIO_NAMES,
    READABLE_TYPE_RATIO_NAMES,
} from '../guides/const/typeRatiosConst';

// Constants
import {
    CONTROL_TYPE_NAMES,
    CONTROL_TYPES,
    CONTROL_OP_NAMES,
    CONTROL_OPS,
} from '../../../../const/controlsConst';

const { MINOR_THIRD } = TYPE_RATIO_NAMES;
const READABLE_RATIO_NAME = READABLE_TYPE_RATIO_NAMES;
const typeRatioNameKeys = Object.keys(TYPE_RATIO_NAMES);

export const args = {
    baseSize: 16,
    scale: `${READABLE_RATIO_NAME[MINOR_THIRD]} (${TYPE_RATIO_VALUES[MINOR_THIRD]})`,
};

export const argTypes = {
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.RANGE],
        controlOps: {
            [CONTROL_OPS[CONTROL_OP_NAMES.MIN]]: 14,
            [CONTROL_OPS[CONTROL_OP_NAMES.MAX]]: 25,
            [CONTROL_OPS[CONTROL_OP_NAMES.STEP]]: 1,
        },
        propName: 'baseSize',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.RADIO],
        options: typeRatioNameKeys.map(
            (NAME) =>
                `${READABLE_RATIO_NAME[NAME]} (${TYPE_RATIO_VALUES[NAME]})`,
        ),
        propName: 'scale',
    }),
};
