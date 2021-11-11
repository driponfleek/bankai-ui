export const CONTROL_TYPE_NAMES = {
    BOOL: 'BOOL',
    NUM: 'NUM',
    RANGE: 'RANGE',
    OBJ: 'OBJ',
    FILE: 'FILE',
    RADIO: 'RADIO',
    INLINE_RADIO: 'INLINE_RADIO',
    CHECK: 'CHECK',
    INLINE_CHECK: 'INLINE_CHECK',
    SELECT: 'SELECT',
    MULTI_SELECT: 'MULTI_SELECT',
    TEXT: 'TEXT',
    COLOR: 'COLOR',
    DATE: 'DATE',
};

export const CONTROL_TYPES = {
    [CONTROL_TYPE_NAMES.BOOL]: 'boolean',
    [CONTROL_TYPE_NAMES.NUM]: 'number',
    [CONTROL_TYPE_NAMES.RANGE]: 'range',
    [CONTROL_TYPE_NAMES.OBJ]: 'object',
    [CONTROL_TYPE_NAMES.FILE]: 'file',
    [CONTROL_TYPE_NAMES.RADIO]: 'radio',
    [CONTROL_TYPE_NAMES.INLINE_RADIO]: 'inline-radio',
    [CONTROL_TYPE_NAMES.CHECK]: 'check',
    [CONTROL_TYPE_NAMES.INLINE_CHECK]: 'inline-check',
    [CONTROL_TYPE_NAMES.SELECT]: 'select',
    [CONTROL_TYPE_NAMES.MULTI_SELECT]: 'multi-select',
    [CONTROL_TYPE_NAMES.TEXT]: 'text',
    [CONTROL_TYPE_NAMES.COLOR]: 'color',
    [CONTROL_TYPE_NAMES.DATE]: 'date',
};

export const CONTROL_DATA_TYPE_NAMES = {
    BOOL: 'BOOL',
    NUM: 'NUM',
    OBJ: 'OBJ',
    ARR: 'ARR',
    ENUM: 'ENUM',
    STR: 'STR',
};

export const CONTROL_DATA_TYPES = {
    // ARRAY
    [CONTROL_DATA_TYPE_NAMES.ARR]: {
        [CONTROL_TYPE_NAMES.OBJ]: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJ],
        [CONTROL_TYPE_NAMES.FILE]: CONTROL_TYPES[CONTROL_TYPE_NAMES.FILE],
    },
    // BOOLEAN
    [CONTROL_DATA_TYPE_NAMES.BOOL]: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
    // ENUM
    [CONTROL_DATA_TYPE_NAMES.ENUM]: {
        [CONTROL_TYPE_NAMES.CHECK]: CONTROL_TYPES[CONTROL_TYPE_NAMES.CHECK],
        [CONTROL_TYPE_NAMES.INLINE_CHECK]:
            CONTROL_TYPES[CONTROL_TYPE_NAMES.INLINE_CHECK],
        [CONTROL_TYPE_NAMES.INLINE_RADIO]:
            CONTROL_TYPES[CONTROL_TYPE_NAMES.INLINE_RADIO],
        [CONTROL_TYPE_NAMES.MULTI_SELECT]:
            CONTROL_TYPES[CONTROL_TYPE_NAMES.MULTI_SELECT],
        [CONTROL_TYPE_NAMES.RADIO]: CONTROL_TYPES[CONTROL_TYPE_NAMES.RADIO],
        [CONTROL_TYPE_NAMES.SELECT]: CONTROL_TYPES[CONTROL_TYPE_NAMES.SELECT],
    },
    // NUMBER
    [CONTROL_DATA_TYPE_NAMES.NUM]: {
        [CONTROL_TYPE_NAMES.NUM]: CONTROL_TYPES[CONTROL_TYPE_NAMES.NUM],
        [CONTROL_TYPE_NAMES.RANGE]: CONTROL_TYPES[CONTROL_TYPE_NAMES.RANGE],
    },
    // OBJECT
    [CONTROL_DATA_TYPE_NAMES.OBJ]: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJ],
    // STRING
    [CONTROL_DATA_TYPE_NAMES.STR]: {
        [CONTROL_TYPE_NAMES.TEXT]: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        [CONTROL_TYPE_NAMES.COLOR]: CONTROL_TYPES[CONTROL_TYPE_NAMES.COLOR],
        [CONTROL_TYPE_NAMES.DATE]: CONTROL_TYPES[CONTROL_TYPE_NAMES.DATE],
    },
};

export const CONTROL_OP_NAMES = {
    ACCEPT: 'ACCEPT',
    MAX: 'MAX',
    MIN: 'MIN',
    PRESET_COLORS: 'PRESET_COLORS',
    STEP: 'STEP',
};

export const CONTROL_OPS = {
    [CONTROL_OP_NAMES.ACCEPT]: 'accept',
    [CONTROL_OP_NAMES.MAX]: 'max',
    [CONTROL_OP_NAMES.MIN]: 'min',
    [CONTROL_OP_NAMES.PRESET_COLORS]: 'presetColors',
    [CONTROL_OP_NAMES.STEP]: 'step',
};

export const CONTROL_TYPE_OPS = {
    [CONTROL_TYPE_NAMES.NUM]: {
        [CONTROL_OP_NAMES.MAX]: CONTROL_OPS[CONTROL_OP_NAMES.MAX],
        [CONTROL_OP_NAMES.MIN]: CONTROL_OPS[CONTROL_OP_NAMES.MIN],
        [CONTROL_OP_NAMES.STEP]: CONTROL_OPS[CONTROL_OP_NAMES.STEP],
    },
};
