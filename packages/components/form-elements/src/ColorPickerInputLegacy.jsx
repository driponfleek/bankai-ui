/* eslint-disable */
import { Component } from 'react';
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

// TODO: Delete if no longer needed
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
class ColorPickerInput extends Component {
    static defaultProps = {
        changeCompleteThreshold: 200,
        hasAlpha: false,
        hasError: false,
        isDisabled: false,
        isReadOnly: false,
        shouldAlignPickerToRightEdge: false,
        shouldOpenUp: false,
        triggerProps: {},
        onChange: () => Promise.resolve(),
        onChangeComplete: () => Promise.resolve(),
        renderColorPicker: ColorPicker,
    };

    state = {
        shouldShowPicker: false,
    };

    render() {
        const {
            contextCls,
            color,
            isDisabled,
            renderColorPicker,
            renderTriggerContent,
        } = this.props;
        const { shouldShowPicker } = this.state;
        const modCls = getColorPickerInputModCls(this.props);
        const textInputProps = getColorPickerInputExtantProps(this.props);
        const colorPickerProps = {
            ...getColorPickerExtantProps(this.props),
            onChangeComplete: this.handlePickerChange,
        };

        return (
            <div
                ref={this.handleSetRef}
                className={cx(this.baseCls, modCls, contextCls)}
            >
                <div className={`${this.baseCls}__input-container`}>
                    <TextInput
                        {...textInputProps}
                        value={color}
                        contextCls={`${this.baseCls}__input`}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className={`${this.baseCls}__trigger-container`}>
                    <ColorPickerInputTrigger
                        {...this.props}
                        baseCls={this.baseCls}
                        renderTriggerContent={renderTriggerContent}
                        onClick={this.handleTriggerClick}
                    />
                </div>
                <div className={`${this.baseCls}__picker-container`}>
                    {shouldShowPicker &&
                        !isDisabled &&
                        renderColorPicker(colorPickerProps)}
                </div>
            </div>
        );
    }

    componentDidMount() {
        addColorPickerInputEvtListeners(this.handleKeyDown, this.handleMouseUp);
    }

    componentWillUnmount() {
        removeColorPickerInputEvtListeners(
            this.handleKeyDown,
            this.handleMouseUp,
        );
    }

    handleSetRef = (el) => {
        if (el) {
            this.containerRef = el;
        }
    };

    handleTriggerClick = () => {
        const { shouldShowPicker } = this.state;

        this.setState({
            shouldShowPicker: !shouldShowPicker,
        });
    };

    handlePickerChange = (color) => {
        const { hasAlpha } = this.props;

        this.handleChange(hasAlpha ? convertColorToHex(color) : color);
    };

    handleInputChange = (evt) => {
        this.handleChange(evt?.target?.value);
    };

    handleChange = (color) => {
        const { onChange } = this.props;
        const checkedColor = fixHexMissingHash(color);
        onChange(checkedColor);
        this.handleChangeComplete(checkedColor);
    };

    handleChangeComplete = debounce((newColor) => {
        const { onChangeComplete } = this.props;

        onChangeComplete(newColor);
    }, this.props.changeCompleteThreshold);

    handleKeyDown = (evt) => {
        const { shouldShowPicker } = this.state;

        if (
            shouldShowPicker &&
            (evt.key === 'Escape' || evt.key === 'Esc' || evt.keyCode === 27)
        ) {
            this.closeColorPicker();
        }
    };

    handleMouseUp = (evt) => {
        const { shouldShowPicker } = this.state;
        const el = evt.srcElement || evt.target;

        if (
            shouldShowPicker &&
            !(this.containerRef && this.containerRef.contains(el))
        ) {
            this.closeColorPicker();
        }
    };

    closeColorPicker = () => {
        this.setState({ shouldShowPicker: false });
    };

    baseCls = 'bankai-color-picker-input';
}

export default ColorPickerInput;
