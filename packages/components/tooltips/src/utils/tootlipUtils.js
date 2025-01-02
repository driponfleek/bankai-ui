import { sticky as stickyPlugin } from 'tippy.js';

export const getTooltipPlugins = (props) => {
    const { sticky } = props ?? {};

    return sticky ? [stickyPlugin] : undefined;
};

export const getSanatizedProps = (props) => {
    const {
        ariaLabel,
        contextCls,
        ttContextCls,
        sticky,
        position: placement,
        isDisabled: disabled,
        isInteractive: interactive,
        isOpen: visible,
        shouldEnableInertia: inertia,
        shouldEnableInlinePositioning: inlinePositioning,
        shouldHideOnClick: hideOnClick,
        shouldShowOnCreate: showOnCreate,
        ...rest
    } = props ?? {};
    const plugins = getTooltipPlugins(props);

    return {
        ...rest,
        placement,
        disabled,
        hideOnClick,
        inertia,
        ...(inlinePositioning && { inlinePositioning }),
        interactive,
        showOnCreate,
        visible,
        ...(sticky && { sticky }),
        ...(plugins && { plugins }),
    };
};
