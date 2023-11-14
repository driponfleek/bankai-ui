import generateArrUtil from './generateArrUtil';
import { LOADING_SQUARES_VARIANTS } from '../const/loadingConst';

const { FADE, FOLDING_QUADS, PULSE, PULSING_WAVE, PULSE_FADE } =
    LOADING_SQUARES_VARIANTS;

export const getArrayOfNumbers = (VARIANT) =>
    generateArrUtil(VARIANT === FOLDING_QUADS ? 4 : 9);

export const getModCls = (VARIANT, baseCls) => ({
    [`${baseCls}--fade`]: VARIANT === FADE,
    [`${baseCls}--folding-quads`]: VARIANT === FOLDING_QUADS,
    [`${baseCls}--pulse`]: VARIANT === PULSE,
    [`${baseCls}--pulsing-wave`]: VARIANT === PULSING_WAVE,
    [`${baseCls}--pulse-fade`]: VARIANT === PULSE_FADE,
});
