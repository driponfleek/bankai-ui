import { LOADING_SPINNERS_VARIANTS } from '../const/loadingConst';

const {
    ARCS,
    CIRCULAR,
    CIRCULAR_DOTTED,
    CIRCULAR_DUAL,
    CUBE,
    CYBER,
    PIXIES,
    ORBIT,
    TRI_CUBE,
} = LOADING_SPINNERS_VARIANTS;

export const getShouldRenderInner = (VARIANT) =>
    VARIANT === ORBIT || VARIANT === TRI_CUBE;

export const getModCls = (VARIANT, baseCls) => ({
    [`${baseCls}--arcs`]: VARIANT === ARCS,
    [`${baseCls}--circular`]: VARIANT === CIRCULAR,
    [`${baseCls}--circular-dotted`]: VARIANT === CIRCULAR_DOTTED,
    [`${baseCls}--circular-dual`]: VARIANT === CIRCULAR_DUAL,
    [`${baseCls}--cube`]: VARIANT === CUBE,
    [`${baseCls}--cyber`]: VARIANT === CYBER,
    [`${baseCls}--pixies`]: VARIANT === PIXIES,
    [`${baseCls}--orbit`]: VARIANT === ORBIT,
    [`${baseCls}--tri-cube`]: VARIANT === TRI_CUBE,
});
