import { VARIANTS } from '../const/variantsConst';

const { PRIMARY, PRIMARY_DESTRUCTIVE, SECONDARY, SECONDARY_DESTRUCTIVE } =
    VARIANTS;

export const getBtnModCls = (variant, baseCls) => {
    return {
        [`${baseCls}--primary`]: variant === PRIMARY,
        [`${baseCls}--secondary`]: variant === SECONDARY,
        [`${baseCls}--primary-destructive`]: variant === PRIMARY_DESTRUCTIVE,
        [`${baseCls}--secondary-destructive`]:
            variant === SECONDARY_DESTRUCTIVE,
    };
};

export default {};
