import VARIANTS from '../const/variantsConst';

const { AFFIRMATIVE, CAUTIONARY, DANGER, INFO } = VARIANTS;

export const getBannerVariantModCls = (variant, baseCls) => ({
    [`${baseCls}--affirmative`]: variant === AFFIRMATIVE,
    [`${baseCls}--cautionary`]: variant === CAUTIONARY,
    [`${baseCls}--danger`]: variant === DANGER,
    [`${baseCls}--info`]: variant === INFO,
});

export const getBannerHasTitleModCls = (title, baseCls) => ({
    [`${baseCls}--has-title`]: !!title,
});
