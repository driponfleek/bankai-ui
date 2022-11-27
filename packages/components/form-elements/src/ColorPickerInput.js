import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
    convertColorToHex,
    fixHexMissingHash,
    isValidHexColor,
} from '@epr0t0type/bankai-lib-color-utils';
import { debounce } from '@epr0t0type/bankai-lib-helper-utils';
import TextInput from './TextInput';
import ColorPicker from './ColorPicker';

// Styles
import './styles/color-picker-input.scss';

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
        const { contextCls, isDisabled, renderColorPicker } = this.props;
        const { shouldShowPicker } = this.state;
        const modCls = this.getModCls();
        const colorPickerRenderer = renderColorPicker || this.renderColorPicker;
        const colorPickerProps = this.getExtantPickerProps();

        return (
            <div
                ref={this.handleSetRef}
                className={cx(this.baseCls, modCls, contextCls)}
            >
                <div className={`${this.baseCls}__input-container`}>
                    {this.renderInput()}
                </div>
                <div className={`${this.baseCls}__trigger-container`}>
                    {this.renderTrigger()}
                </div>
                <div className={`${this.baseCls}__picker-container`}>
                    {shouldShowPicker &&
                        !isDisabled &&
                        colorPickerRenderer(colorPickerProps)}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.addListeners();
    }

    componentWillUnmount() {
        this.removeListeners();
    }

    renderInput = () => {
        const { hasAlpha, color } = this.props;
        const props = this.getExtantInputProps();
        const maxChars = hasAlpha ? 9 : 7;

        return (
            <TextInput
                {...props}
                value={color}
                contextCls={`${this.baseCls}__input`}
                maxLength={maxChars}
                onChange={this.handleInputChange}
            />
        );
    };

    renderTrigger = () => {
        const { renderTriggerContent, isReadOnly } = this.props;
        const props = this.getExtantTriggerProps();
        const triggerContentRenderer =
            renderTriggerContent || this.renderTriggerContent;
        const TriggerEl = isReadOnly ? 'span' : 'button';

        return (
            <TriggerEl {...props} className={`${this.baseCls}__trigger`}>
                {triggerContentRenderer()}
            </TriggerEl>
        );
    };

    renderTriggerContent = () => {
        const { color } = this.props;
        const isValid = isValidHexColor(color);
        const style = {
            backgroundColor: !isValid ? 'transparent' : color,
        };

        return (
            <span className={`${this.baseCls}__trigger-swatch`} style={style} />
        );
    };

    renderColorPicker = (props) => {
        return (
            <ColorPicker
                {...props}
                onChangeComplete={this.handlePickerChange}
            />
        );
    };

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
        this.handleChangeCompleteDebounce(checkedColor);
    };

    handleChangeCompleteDebounce = debounce((color) => {
        this.handleChangeComplete(color);
    }, this.props.changeCompleteThreshold);

    handleChangeComplete = (color) => {
        const { onChangeComplete } = this.props;

        onChangeComplete(color);
    };

    handleDocumentKeyDown = (e) => {
        const { shouldShowPicker } = this.state;

        if (
            shouldShowPicker &&
            (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27)
        ) {
            this.closeColorPicker();
        }
    };

    handleMouseClick = (e) => {
        const { shouldShowPicker } = this.state;
        const el = e.srcElement || e.target;

        if (
            shouldShowPicker &&
            !(this.containerRef && this.containerRef.contains(el))
        ) {
            this.closeColorPicker();
        }
    };

    getModCls = () => {
        const {
            hasError,
            isDisabled,
            isReadOnly,
            shouldAlignPickerToRightEdge,
            shouldOpenUp,
        } = this.props;

        return {
            [`${this.baseCls}--disabled`]: isDisabled,
            [`${this.baseCls}--has-error`]: hasError,
            [`${this.baseCls}--read-only`]: isReadOnly,
            [`${this.baseCls}--should-align-picker-to-right-edge`]:
                shouldAlignPickerToRightEdge,
            [`${this.baseCls}--should-open-up`]: shouldOpenUp,
        };
    };

    getExtantInputProps = () => {
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
        } = this.props;

        return {
            ...rest,
            ...(hasError && { 'aria-invalid': true }),
        };
    };

    getExtantPickerProps = () => {
        const { color, changeCompleteThreshold, hasAlpha } = this.props;

        return {
            color,
            changeCompleteThreshold,
            hasAlpha,
        };
    };

    getExtantTriggerProps = () => {
        const { isDisabled, isReadOnly, triggerProps } = this.props;

        return {
            ...(!isReadOnly && {
                ...triggerProps,
                disabled: isDisabled,
                onClick: this.handleTriggerClick,
                type: 'button',
            }),
        };
    };

    closeColorPicker = () => {
        this.setState({ shouldShowPicker: false });
    };

    addListeners = () => {
        document.addEventListener('keydown', this.handleDocumentKeyDown);
        document.addEventListener('mouseup', this.handleMouseClick);
    };

    removeListeners = () => {
        document.removeEventListener('keydown', this.handleDocumentKeyDown);
        document.removeEventListener('mouseup', this.handleMouseClick);
    };

    baseCls = 'bankai-color-picker-input';
}

export default ColorPickerInput;
