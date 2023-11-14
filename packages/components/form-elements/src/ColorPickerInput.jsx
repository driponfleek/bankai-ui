import { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
    convertColorToHex,
    fixHexMissingHash,
} from '@driponfleek/bankai-lib-color-utils';
import { debounce } from '@driponfleek/bankai-lib-helper-utils';
import TextInput from './TextInput';
import ColorPicker from './ColorPicker';
import ColorPickerInputTrigger from './ColorPickerInputTrigger';

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

// TODO: Rewrite as functional component
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

    static propTypes = {
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
