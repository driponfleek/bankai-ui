import { ORDINAL_CHAR } from './sharedConst';

// See https://date-fns.org/v2.22.1/docs/format for formatting specs.

// See https://github.com/date-fns/date-fns/issues/1231 for
// difference between FORMATTING and STANDALONE.

export const MONTH_FORMATTING_CHAR = 'M';
export const MONTH_STANDALONE_CHAR = 'L';

// Formatting is the preferred pattern to pull from when
// dealing with Months in context of a full date.
export const MONTH_FORMATTING = {
    MONTH_ABBREVIATED: `${MONTH_FORMATTING_CHAR}${MONTH_FORMATTING_CHAR}${MONTH_FORMATTING_CHAR}`,
    MONTH_FULL: `${MONTH_FORMATTING_CHAR}${MONTH_FORMATTING_CHAR}${MONTH_FORMATTING_CHAR}${MONTH_FORMATTING_CHAR}`,
    MONTH_NUMBER: MONTH_FORMATTING_CHAR,
    MONTH_NUMBER_LEADING_ZERO: `${MONTH_FORMATTING_CHAR}${MONTH_FORMATTING_CHAR}`,
    MONTH_NUMBER_ORDINAL: `${MONTH_FORMATTING_CHAR}${ORDINAL_CHAR}`,
};

// Standalone is the preferred pattern to pull from when
// dealing with Months that do not have any context.
export const MONTH_STANDALONE = {
    MONTH_ABBREVIATED: `${MONTH_STANDALONE_CHAR}${MONTH_STANDALONE_CHAR}${MONTH_STANDALONE_CHAR}`,
    MONTH_FULL: `${MONTH_STANDALONE_CHAR}${MONTH_STANDALONE_CHAR}${MONTH_STANDALONE_CHAR}${MONTH_STANDALONE_CHAR}`,
    MONTH_NUMBER: MONTH_STANDALONE_CHAR,
    MONTH_NUMBER_LEADING_ZERO: `${MONTH_STANDALONE_CHAR}${MONTH_STANDALONE_CHAR}`,
    MONTH_NUMBER_ORDINAL: `${MONTH_STANDALONE_CHAR}${ORDINAL_CHAR}`,
};
