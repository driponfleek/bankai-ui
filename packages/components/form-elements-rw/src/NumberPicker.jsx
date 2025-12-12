import PropTypes from 'prop-types';
import cx from 'classnames';
import { debounce } from '@driponfleek/bankai-lib-helper-utils';
import RWNumberPicker from 'react-widgets/NumberPicker';
import IncrementIcon from './components/number-picker/IncrementIcon';
import DecrementIcon from './components/number-picker/DecrementIcon';
import { getNumberPickerExtantProps } from './utils/extantPropsUtils';

// Styles
import './styles/number-picker.scss';

const NumberPicker = (props) => {
    const {
        contextCls,
        hasError = false,
        isDisabled = false,
        isReadOnly = false,
        shouldAutoFocus = false,
        inputProps = {},
        onBlur = NumberPicker.onBlur,
        onChangeComplete = NumberPicker.onChangeComplete,
        onChange = NumberPicker.onChange,
        onFocus = NumberPicker.onFocus,
        onKeyDown = NumberPicker.onKeyDown,
        onKeyPress = NumberPicker.onKeyPress,
        onKeyUp = NumberPicker.onKeyUp,
        renderDecrementIcon = DecrementIcon,
        renderIncrementIcon = IncrementIcon,
        ...rest
    } = props;
    const baseCls = 'bankai-number-picker';
    const npProps = getNumberPickerExtantProps({
        ...rest,
        contextCls,
        hasError,
        isDisabled,
        isReadOnly,
        shouldAutoFocus,
        inputProps,
        onBlur,
        onChangeComplete,
        onChange,
        onFocus,
        onKeyDown,
        onKeyPress,
        onKeyUp,
        renderDecrementIcon,
        renderIncrementIcon,
    });
    const modCls = {
        [`${baseCls}--error`]: hasError,
    };
    const incrementIcon = renderIncrementIcon({
        baseCls,
    });
    const decrementIcon = renderDecrementIcon({
        baseCls,
    });
    const handleChangeComplete = debounce((params) => {
        onChangeComplete(params);
    }, 300);
    const handleChange = (newValue) => {
        const { name, value } = props;

        if (newValue !== value) {
            const params = {
                name,
                newValue,
            };

            onChange(params);
            handleChangeComplete(params);
        }
    };

    return (
        <RWNumberPicker
            {...npProps}
            className={cx(baseCls, modCls, contextCls)}
            decrementIcon={decrementIcon}
            incrementIcon={incrementIcon}
            onBlur={onBlur}
            onChange={handleChange}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            onKeyPress={onKeyPress}
            onKeyUp={onKeyUp}
        />
    );
};

NumberPicker.onBlur = () => Promise.resolve();
NumberPicker.onChange = () => Promise.resolve();
NumberPicker.onChangeComplete = () => Promise.resolve();
NumberPicker.onFocus = () => Promise.resolve();
NumberPicker.onKeyDown = () => Promise.resolve();
NumberPicker.onKeyPress = () => Promise.resolve();
NumberPicker.onKeyUp = () => Promise.resolve();

NumberPicker.propTypes = {
    contextCls: PropTypes.string,
    format: PropTypes.string,
    id: PropTypes.string,
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
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onChangeComplete: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
    renderDecrementIcon: PropTypes.func,
    renderIncrementIcon: PropTypes.func,
};

export default NumberPicker;
