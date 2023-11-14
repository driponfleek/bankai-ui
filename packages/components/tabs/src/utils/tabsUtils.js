import VARIANTS from '../const/variantsConst';

export const getTabs = (panels) => {
    return (panels || []).map((panel) => {
        const { props } = panel || {};
        const { tabProps } = props || {};

        return tabProps;
    });
};

export const getModCls = (props, baseCls) => {
    const { hasMicrointeractions, isVerticalTabs, variant } = props;
    const variantModCls = {};
    const VARIANT_KEYS = Object.keys(VARIANTS);

    for (let index = 0; index < VARIANT_KEYS.length; index += 1) {
        const VARIANT_KEY = VARIANT_KEYS[index];
        variantModCls[
            `${baseCls}--${VARIANT_KEY.replace(/(_)/, '-').toLowerCase()}`
        ] = variant === VARIANT_KEY;
    }

    return {
        ...variantModCls,
        [`${baseCls}--has-microinteractions`]: hasMicrointeractions,
        [`${baseCls}--is-vertical-tabs`]: isVerticalTabs,
    };
};
