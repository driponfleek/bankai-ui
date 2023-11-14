import { VARIANTS } from '../const/variantsConst';

const { PRIMARY, PRIMARY_DESTRUCTIVE, SECONDARY, SECONDARY_DESTRUCTIVE } =
    VARIANTS;

export const getBtnVariantModCls = (variant, baseCls) => {
    return {
        // [`${baseCls}--default`]: variant === undefined,
        [`${baseCls}--primary`]: variant === PRIMARY,
        [`${baseCls}--secondary`]: variant === SECONDARY,
        [`${baseCls}--primary-destructive`]: variant === PRIMARY_DESTRUCTIVE,
        [`${baseCls}--secondary-destructive`]:
            variant === SECONDARY_DESTRUCTIVE,
    };
};

export const getBtnDisabledModCls = (baseCls, isDisabled = false) => ({
    [`${baseCls}--disabled`]: isDisabled,
});

export const getBtnStateModCls = (
    { isDisabled = false, isBusy = false },
    baseCls,
) => ({
    [`${baseCls}--busy`]: isBusy,
    ...getBtnDisabledModCls(baseCls, isBusy || isDisabled),
});

export const getLinkBtnExtantProps = (props) => {
    const { contextCls, text, data, onClick, renderIcon, children, ...rest } =
        props;
    const sanitizedProps = { ...rest };
    delete sanitizedProps.disabled;

    // To enforce button text being properly written and prevent scenario where text and
    // aria label exist, delete the aria-label prop if props.text is present
    if (text) {
        delete sanitizedProps['aria-label'];
    }

    return props;
};

export const getBtnExtantProps = (props) => {
    const {
        'aria-label': ariaLabel,
        contextCls,
        text,
        type,
        variant,
        isBusy,
        isDisabled,
        isDynamicText,
        data,
        onClick,
        renderIcon,
        renderBusyIcon,
        children,
        ...rest
    } = props;

    // TODO: Add aria-disabled attribute for disabled/busy states
    return {
        ...rest,
        ...(!text && ariaLabel && { 'aria-label': ariaLabel }),
        'aria-disabled': isBusy || isDisabled,
    };
};

export const getMenuBtnExtantProps = (props) => {
    const {
        'aria-label': ariaLabel,
        btnContextCls,
        contextCls,
        text,
        variant,
        isDisabled,
        shouldCloseOnBlur,
        shouldCloseOnSelection,
        wrapperProps,
        menuProps,
        menuOptions,
        onSelection,
        onMenuToggle,
        renderIcon,
        renderMenuOption,
        children,
        ...rest
    } = props;

    return {
        ...rest,
        ...(!text && ariaLabel && { 'aria-label': ariaLabel }),
        'aria-disabled': isDisabled,
        ...(isDisabled && { onclick: () => Promise.resolve() }),
    };
};

export const getShouldRenderBtnIcon = ({ isBusy = false, renderIcon }) =>
    !isBusy && !!renderIcon;
