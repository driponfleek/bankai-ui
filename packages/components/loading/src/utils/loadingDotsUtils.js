import generateArrUtil from './generateArrUtil';
import { LOADING_DOTS_VARIANTS } from '../const/loadingConst';

const {
    BOUNCE,
    FADE,
    FADE_COMPACT,
    PULSE,
    PULSE_COMPACT,
    PULSE_FADE,
    PULSE_FADE_COMPACT,
    WORM,
} = LOADING_DOTS_VARIANTS;

export const getArrayOfNumbers = (VARIANT) => {
    let numberOfDots;

    switch (VARIANT) {
        case FADE:
        case PULSE:
        case PULSE_FADE:
            numberOfDots = 9;
            break;
        default:
            numberOfDots = 3;
            break;
    }

    return generateArrUtil(numberOfDots);
};

export const getModCls = (VARIANT, baseCls) => ({
    [`${baseCls}--bounce`]: VARIANT === BOUNCE,
    [`${baseCls}--fade`]: VARIANT === FADE,
    [`${baseCls}--fade-compact`]: VARIANT === FADE_COMPACT,
    [`${baseCls}--pulse`]: VARIANT === PULSE,
    [`${baseCls}--pulse-compact`]: VARIANT === PULSE_COMPACT,
    [`${baseCls}--pulse-fade`]: VARIANT === PULSE_FADE,
    [`${baseCls}--pulse-fade-compact`]: VARIANT === PULSE_FADE_COMPACT,
    [`${baseCls}--worm`]: VARIANT === WORM,
});
