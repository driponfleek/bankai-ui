// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic
export const getARIALiveVal = (isPolite) => {
    switch (true) {
        case isPolite:
            return 'polite';
        case isPolite === false:
            return 'assertive';
        default:
            // Same as returning 'off'
            return undefined;
    }
};

export const getARIAExtantProps = (props) => {
    const { isAtomic, isPolite, ariaRelevant } = props ?? {};
    const ariaLive = getARIALiveVal(isPolite);

    return {
        ...(isAtomic !== undefined && { 'aria-atomic': isAtomic }),
        ...(ariaLive && { 'aria-live': ariaLive }),
        ...(ariaRelevant && { 'aria-relevant': ariaRelevant }),
    };
};
