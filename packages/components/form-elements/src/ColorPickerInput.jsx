import { useState, useEffect, useRef, useCallback } from 'react';
import cx from 'classnames';
import {
    convertColorToHex,
    fixHexMissingHash,
} from '@driponfleek/bankai-lib-color-utils';
import { debounce } from '@driponfleek/bankai-lib-helper-utils';
import TextInput from './TextInput';
import ColorPicker from './ColorPicker';
import ColorPickerInputTrigger from './components/color-picker/ColorPickerInputTrigger';

// Utils
import {
    addColorPickerInputEvtListeners,
    getColorPickerInputModCls,
    getColorPickerInputExtantProps,
    getColorPickerExtantProps,
    removeColorPickerInputEvtListeners,
} from './utils/colorPickerUtils';

// Styles
import './styles/color-picker-input.scss';

/**
 * @param {Object} props
 * @param {string} [props.color] - Current color value (hex string)
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {number} [props.changeCompleteThreshold] - Debounce delay in ms for the `onChangeComplete` callback
 * @param {boolean} [props.hasAlpha] - Whether to support alpha channel in the color picker
 * @param {boolean} [props.hasError] - Whether the input is in an error state
 * @param {boolean} [props.isDisabled] - Whether the input is disabled
 * @param {boolean} [props.isReadOnly] - Whether the input is read-only
 * @param {boolean} [props.shouldAlignPickerToRightEdge] - Whether to align the picker flyout to the right edge
 * @param {boolean} [props.shouldOpenUp] - Whether to open the picker flyout above the trigger
 * @param {Object} [props.triggerProps] - Additional props for the trigger button (supports `aria-label`)
 * @param {Function} [props.onChange] - Callback fired on every color change
 * @param {Function} [props.onChangeComplete] - Debounced callback fired after color change settles
 * @param {Function} [props.renderColorPicker] - Custom render function for the color picker flyout
 * @param {Function} [props.renderTriggerContent] - Custom render function for the trigger button content
 */
const ColorPickerInput = (props) => {
    const {
        contextCls,
        color,
        changeCompleteThreshold = 200,
        hasAlpha = false,
        // hasError = false,
        isDisabled = false,
        // isReadOnly = false,
        // shouldAlignPickerToRightEdge = false,
        // shouldOpenUp = false,
        // triggerProps = {},
        onChange = ColorPickerInput.onChange,
        onChangeComplete = ColorPickerInput.onChangeComplete,
        renderColorPicker = ColorPicker,
        renderTriggerContent,
    } = props;
    const [shouldShowPicker, setShouldShowPicker] = useState(false);
    const baseCls = 'bankai-color-picker-input';
    const modCls = getColorPickerInputModCls(props);
    const textInputProps = getColorPickerInputExtantProps(props);
    const containerRef = useRef();

    const handleColorPickerClose = () => {
        setShouldShowPicker(false);
    };
    const handleKeyDown = useCallback(
        (evt) => {
            if (
                shouldShowPicker &&
                (evt.key === 'Escape' ||
                    evt.key === 'Esc' ||
                    evt.keyCode === 27)
            ) {
                handleColorPickerClose();
            }
        },
        [shouldShowPicker],
    );
    const handleMouseUp = useCallback(
        (evt) => {
            const el = evt.srcElement || evt.target;

            if (
                shouldShowPicker &&
                !(containerRef.current && containerRef.current.contains(el))
            ) {
                handleColorPickerClose();
            }
        },
        [shouldShowPicker],
    );

    useEffect(() => {
        addColorPickerInputEvtListeners(handleKeyDown, handleMouseUp);

        return () => {
            removeColorPickerInputEvtListeners(handleKeyDown, handleMouseUp);
        };
    }, [handleKeyDown, handleMouseUp]);

    const handleChangeComplete = debounce((newColor) => {
        onChangeComplete(newColor);
    }, changeCompleteThreshold);
    const handleChange = (newColor) => {
        const fixedColor = fixHexMissingHash(newColor);
        onChange(fixedColor);
        handleChangeComplete(fixedColor);
    };
    const handlePickerChange = (newColor) => {
        handleChange(hasAlpha ? convertColorToHex(newColor) : newColor);
    };
    const handleInputChange = (evt) => {
        handleChange(evt?.target?.value);
    };
    const colorPickerProps = {
        ...getColorPickerExtantProps(props),
        onChangeComplete: handlePickerChange,
    };
    const handleTriggerClick = () => {
        setShouldShowPicker((prev) => !prev);
    };

    return (
        <div ref={containerRef} className={cx(baseCls, modCls, contextCls)}>
            <div className={`${baseCls}__input-container`}>
                <TextInput
                    {...textInputProps}
                    contextCls={`${baseCls}__input`}
                    value={color}
                    onChange={handleInputChange}
                />
            </div>
            <div className={`${baseCls}__trigger-container`}>
                <ColorPickerInputTrigger
                    {...props}
                    baseCls={baseCls}
                    renderTriggerContent={renderTriggerContent}
                    onClick={handleTriggerClick}
                />
            </div>
            <div className={`${baseCls}__picker-container`}>
                {shouldShowPicker &&
                    !isDisabled &&
                    renderColorPicker(colorPickerProps)}
            </div>
        </div>
    );
};

ColorPickerInput.onChange = () => Promise.resolve();
ColorPickerInput.onChangeComplete = () => Promise.resolve();

export default ColorPickerInput;
