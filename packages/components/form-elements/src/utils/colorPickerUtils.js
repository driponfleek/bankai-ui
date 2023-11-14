import { convertColorToRGB } from '@driponfleek/bankai-lib-color-utils';

export const getColorPickerInputModCls = (props, baseCls) => {
    const {
        hasError,
        isDisabled,
        isReadOnly,
        shouldAlignPickerToRightEdge,
        shouldOpenUp,
    } = props ?? {};

    return {
        [`${baseCls}--disabled`]: isDisabled,
        [`${baseCls}--has-error`]: hasError,
        [`${baseCls}--read-only`]: isReadOnly,
        [`${baseCls}--should-align-picker-to-right-edge`]:
            shouldAlignPickerToRightEdge,
        [`${baseCls}--should-open-up`]: shouldOpenUp,
    };
};

export const getColorPickerInputExtantProps = (props) => {
    const {
        color,
        contextCls,
        changeCompleteThreshold,
        hasAlpha,
        hasError,
        shouldAlignPickerToRightEdge,
        shouldOpenUp,
        triggerProps,
        onChange,
        onChangeComplete,
        renderColorPicker,
        renderTriggerContent,
        ...rest
    } = props ?? {};

    return {
        ...rest,
        ...(hasError && { 'aria-invalid': true }),
        maxLength: hasAlpha ? 9 : 7,
    };
};

export const getColorPickerExtantProps = (props) => {
    const {
        color,
        changeCompleteThreshold,
        hasAlpha,
        onChange,
        onChangeComplete,
    } = props ?? {};

    return {
        color,
        changeCompleteThreshold,
        hasAlpha,
        onChange,
        onChangeComplete,
    };
};

export const getColorPickerInputTriggerExtantProps = (props) => {
    const {
        isDisabled = false,
        isReadOnly = false,
        triggerProps,
        onClick,
    } = props ?? {};

    return {
        ...(!isReadOnly && {
            ...triggerProps,
            disabled: isDisabled,
            type: 'button',
            onClick,
        }),
    };
};

export const addColorPickerInputEvtListeners = (onKeyDown, onMouseUp) => {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mouseup', onMouseUp);
};

export const removeColorPickerInputEvtListeners = (onKeyDown, onMouseUp) => {
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('mouseup', onMouseUp);
};

export const getColorPickerSanatizedColor = (color) => {
    if (!color) {
        return undefined;
    }

    return convertColorToRGB(color);
};
