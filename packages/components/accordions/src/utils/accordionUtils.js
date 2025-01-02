/* eslint-disable import/prefer-default-export */
export const getAccordionBtnStateModCls = (
    baseCls,
    contextCls,
    isExpanded,
) => ({
    [`${baseCls}--is-expanded`]: isExpanded,
    [`${baseCls}--is-collapsed`]: !isExpanded,
    ...(contextCls && {
        [`${contextCls}--is-expanded`]: isExpanded,
        [`${contextCls}--is-collapsed`]: !isExpanded,
    }),
});
