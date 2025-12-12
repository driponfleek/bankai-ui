import { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
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

ColorPickerInput.propTypes = {
    color: PropTypes.string,
    contextCls: PropTypes.string,
    changeCompleteThreshold: PropTypes.number,
    hasAlpha: PropTypes.bool,
    hasError: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    shouldAlignPickerToRightEdge: PropTypes.bool,
    shouldOpenUp: PropTypes.bool,
    triggerProps: PropTypes.shape({
        'aria-label': PropTypes.string,
    }),
    onChange: PropTypes.func,
    onChangeComplete: PropTypes.func,
    renderColorPicker: PropTypes.func,
    renderTriggerContent: PropTypes.func,
};

ColorPickerInput.onChange = () => Promise.resolve();
ColorPickerInput.onChangeComplete = () => Promise.resolve();

export default ColorPickerInput;
