import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { debounce } from '@epr0t0type/bankai-lib-helper-utils';
import RWNumberPicker from 'react-widgets/NumberPicker';

// Styles
import './styles/number-picker.scss';

class NumberPicker extends PureComponent {
    static defaultProps = {
        hasError: false,
        isDisabled: false,
        isReadOnly: false,
        shouldAutoFocus: false,
        inputProps: {},
        onBlur: () => Promise.resolve(),
        onChange: () => Promise.resolve(),
        onChangeComplete: () => Promise.resolve(),
        onFocus: () => Promise.resolve(),
        onKeyDown: () => Promise.resolve(),
        onKeyPress: () => Promise.resolve(),
        onKeyUp: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        format: PropTypes.string,
        name: PropTypes.string,
        placeholder: PropTypes.string,
        max: PropTypes.number,
        min: PropTypes.number,
        precision: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        step: PropTypes.number,
        value: PropTypes.number,
        hasError: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        shouldAutoFocus: PropTypes.bool,
        inputProps: PropTypes.object,
        messages: PropTypes.object,
        decrementIcon: PropTypes.element,
        incrementIcon: PropTypes.element,
        onBlur: PropTypes.func,
        onChange: PropTypes.func,
        onChangeComplete: PropTypes.func,
        onFocus: PropTypes.func,
        onKeyDown: PropTypes.func,
        onKeyPress: PropTypes.func,
        onKeyUp: PropTypes.func,
    };

    render() {
        const {
            contextCls,
            hasError,
            onFocus,
            onBlur,
            onKeyDown,
            onKeyPress,
            onKeyUp,
        } = this.props;
        const props = this.getExtantProps();
        const modCls = {
            [`${this.baseCls}--error`]: hasError,
        };

        return (
            <RWNumberPicker
                {...props}
                className={cx(this.baseCls, modCls, contextCls)}
                onBlur={onBlur}
                onChange={this.handleChange}
                onFocus={onFocus}
                onKeyDown={onKeyDown}
                onKeyPress={onKeyPress}
                onKeyUp={onKeyUp}
            />
        );
    }

    handleChange = (newValue) => {
        const { onChange, name, value } = this.props;

        if (newValue !== value) {
            const params = {
                name,
                newValue,
            };

            onChange(params);
            this.handleChangeComplete(params);
        }
    };

    handleChangeComplete = debounce((params) => {
        const { onChangeComplete } = this.props;

        onChangeComplete(params);
    }, 200);

    getExtantProps = () => {
        const { isDisabled, isReadOnly, shouldAutoFocus, ...rest } = this.props;
        const props = { ...rest };
        delete props.contextCls;
        delete props.hasError;
        delete props.onBlur;
        delete props.onChange;
        delete props.onChangeComplete;
        delete props.onFocus;
        delete props.onKeyDown;
        delete props.onKeyPress;
        delete props.onKeyUp;
        props.autoFocus = shouldAutoFocus;
        props.disabled = isDisabled;
        props.readOnly = isReadOnly;

        return props;
    };

    baseCls = 'bankai-number-picker';
}

export default NumberPicker;
