export const getTextInputExtantProps = (props) => {
    const {
        hasError = false,
        isDisabled = false,
        isReadOnly = false,
        isTextarea = false,
        shouldAutoFocus = false,
        shouldSpellCheck = false,
        ...rest
    } = props ?? {};

    return {
        ...rest,
        ...(hasError && { 'aria-invalid': hasError }),
        ...(isDisabled && { disabled: isDisabled }),
        ...(isReadOnly && { readOnly: isReadOnly }),
        ...(shouldAutoFocus && { autoFocus: shouldAutoFocus }),
        ...(shouldSpellCheck && { spellCheck: shouldSpellCheck }),
        ...(!isTextarea && { type: 'text' }),
    };
};

export const getProtectedInputExtantProps = (props) => {
    const { autoComplete, isProtected = true, ...rest } = props ?? {};
    const isAutoCompleteValid =
        autoComplete === 'off' ||
        autoComplete === 'current-password' ||
        autoComplete === 'new-password';

    return {
        ...getTextInputExtantProps(rest),
        autoComplete: isAutoCompleteValid ? autoComplete : 'off',
        type: isProtected ? 'password' : 'text',
        spellCheck: false,
    };
};

export const getToggleInputExtantProps = (props) => {
    const {
        contextCls,
        isChecked,
        isDisabled,
        isRadio,
        data,
        onChange,
        renderCheckedIcon,
        ...rest
    } = props ?? {};

    return {
        ...rest,
        disabled: isDisabled,
        checked: isChecked,
    };
};

export const getToggleSwitchExtantProps = (props) => {
    const {
        contextCls,
        isBusy,
        isChecked,
        isDefaultChecked,
        isDisabled,
        icons,
        onChange,
        renderBusyIcon,
        ...rest
    } = props;

    return {
        ...rest,
        checked: isChecked,
        defaultChecked: isDefaultChecked,
        disabled: isBusy || isDisabled,
        icons: isBusy && icons !== undefined ? false : icons,
    };
};
