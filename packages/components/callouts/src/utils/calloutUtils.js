/* eslint-disable import/prefer-default-export */
import VARIANTS from '../const/variantsConst';

const { AFFIRMATIVE, CAUTIONARY, DANGER, INFO } = VARIANTS;

export const getCalloutVariantModCls = (variant, baseCls) => ({
    [`${baseCls}--affirmative`]: variant === AFFIRMATIVE,
    [`${baseCls}--cautionary`]: variant === CAUTIONARY,
    [`${baseCls}--danger`]: variant === DANGER,
    [`${baseCls}--info`]: variant === INFO,
});
