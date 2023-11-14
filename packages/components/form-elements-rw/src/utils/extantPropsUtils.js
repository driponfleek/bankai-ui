const getSanatizedId = (id) => id.replace(/_input/, '');

export const getComboboxExtantProps = (props) => {
    const {
        contextCls,
        id,
        hasError,
        disabledOptions,
        isBusy,
        isDefaultOpen,
        isDisabled,
        isOpen,
        isReadOnly,
        shouldAutoFocus,
        shouldAutoSelectMatches,
        shouldDropUp,
        shouldFocustFirstItem,
        shouldHideCaret,
        shouldHideEmptyPopup,
        onChange,
        onSelect,
        onToggle,
        renderBusySpinner,
        renderSelectIcon,
        ...rest
    } = props;

    return {
        ...rest,
        autoFocus: shouldAutoFocus,
        autoSelectMatches: shouldAutoSelectMatches,
        busy: isBusy,
        defaultOpen: isDefaultOpen,
        disabled: isDisabled || disabledOptions,
        focusFirstItem: shouldFocustFirstItem,
        hideCaret: shouldHideCaret,
        hideEmptyPopup: shouldHideEmptyPopup,
        ...(id && { id: getSanatizedId(id) }),
        open: !isDisabled && isOpen,
        readOnly: isReadOnly,
        dropUp: shouldDropUp,
    };
};

export const getDatePickerExtantProps = (props) => {
    const {
        contextCls,
        id,
        hasError,
        isDefaultOpen,
        isDisabled,
        isReadOnly,
        isOpen,
        shouldAutoFocus,
        shouldDropUp,
        shouldHideDropdownBtn,
        onBlur,
        onchange,
        onCurrentDateChange,
        onFocus,
        onKeyDown,
        onKeyPress,
        onSelect,
        onToggle,
        renderSelectIcon,
        ...rest
    } = props;

    return {
        ...rest,
        ...(id && { id: getSanatizedId(id) }),
        autoFocus: shouldAutoFocus,
        defaultOpen: isDefaultOpen,
        disabled: isDisabled,
        dropUp: shouldDropUp,
        open: !isDisabled && isOpen,
        readOnly: isReadOnly,
    };
};

export const getDropdownExtantProps = (props) => {
    const {
        contextCls,
        id,
        hasError,
        disabledOptions,
        isBusy,
        isDefaultOpen,
        isDisabled,
        isOpen,
        isReadOnly,
        shouldAutoFocus,
        shouldDropUp,
        onChange,
        onSelect,
        onToggle,
        renderBusySpinner,
        renderSelectIcon,
        ...rest
    } = props;

    return {
        ...rest,
        autoFocus: shouldAutoFocus,
        busy: isBusy,
        defaultOpen: isDefaultOpen,
        disabled: isDisabled,
        ...(id && { id: getSanatizedId(id) }),
        inputProps: { id },
        open: !isDisabled && isOpen,
        readOnly: isReadOnly,
        dropUp: shouldDropUp,
    };
};

export const getMultiselectExtantProps = (props) => {
    const {
        contextCls,
        hasError,
        id,
        isBusy,
        isDefaultOpen,
        isDisabled,
        isReadOnly,
        shouldAutoFocus,
        shouldDropUp,
        shouldFocustFirstItem,
        shouldShowPlaceholderWithValues,
        isOpen,
        onChange,
        onSearch,
        onSelect,
        renderBusySpinner,
        renderClearTagIcon,
        renderSelectIcon,
        ...rest
    } = props;

    return {
        ...rest,
        autoFocus: shouldAutoFocus,
        busy: isBusy,
        defaultOpen: isDefaultOpen,
        disabled: isDisabled,
        dropUp: shouldDropUp,
        focusFirstItem: shouldFocustFirstItem,
        ...(id && { id: getSanatizedId(id) }),
        open: !isDisabled && isOpen,
        readOnly: isReadOnly,
        showPlaceholderWithValues: shouldShowPlaceholderWithValues,
    };
};

export const getNumberPickerExtantProps = (props) => {
    const {
        contextCls,
        id,
        inputProps,
        hasError,
        isDisabled,
        isReadOnly,
        shouldAutoFocus,
        onBlur,
        onChange,
        onChangeComplete,
        onFocus,
        onKeyDown,
        onKeyPress,
        onKeyUp,
        renderDecrementIcon,
        renderIncrementIcon,
        ...rest
    } = props;

    return {
        ...rest,
        autoFocus: shouldAutoFocus,
        disabled: isDisabled,
        ...((inputProps || id) && {
            inputProps: { ...inputProps, id },
        }),
        readOnly: isReadOnly,
    };
};
