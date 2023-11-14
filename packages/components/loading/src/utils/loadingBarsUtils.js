import generateArrUtil from './generateArrUtil';
import { LOADING_BARS_VARIANTS } from '../const/loadingConst';

const {
    BOUNCE,
    FADE,
    // DRAW_THE_LINE,
    PULSE,
    PULSE_FADE,
    FREQUENCY,
} = LOADING_BARS_VARIANTS;

export const getArrayOfNumbers = (VARIANT) =>
    generateArrUtil(VARIANT === FREQUENCY ? 8 : 4);

export const getModCls = (VARIANT, baseCls) => ({
    [`${baseCls}--bounce`]: VARIANT === BOUNCE,
    [`${baseCls}--fade`]: VARIANT === FADE,
    // [`${baseCls}--draw-the-line`]: VARIANT === DRAW_THE_LINE,
    [`${baseCls}--pulse`]: VARIANT === PULSE,
    [`${baseCls}--pulse-fade`]: VARIANT === PULSE_FADE,
    [`${baseCls}--frequency`]: VARIANT === FREQUENCY,
});
