import cx from 'classnames';
import { debounce } from '@driponfleek/bankai-lib-helper-utils';
import RWNumberPicker from 'react-widgets/NumberPicker';
import IncrementIcon from './components/number-picker/IncrementIcon';
import DecrementIcon from './components/number-picker/DecrementIcon';
import { getNumberPickerExtantProps } from './utils/extantPropsUtils';

// Styles
import './styles/number-picker.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.format] - Number format string
 * @param {string} [props.id] - ID attribute for the number picker input
 * @param {string} [props.name] - Name attribute for the number picker input
 * @param {string} [props.placeholder] - Placeholder text
 * @param {number} [props.max] - Maximum allowed value
 * @param {number} [props.min] - Minimum allowed value
 * @param {number|string} [props.precision] - Decimal precision
 * @param {number} [props.step] - Increment/decrement step amount
 * @param {number} [props.value] - Current value (controlled)
 * @param {boolean} [props.hasError] - Whether the number picker is in an error state
 * @param {boolean} [props.isDisabled] - Whether the number picker is disabled
 * @param {boolean} [props.isReadOnly] - Whether the number picker is read-only
 * @param {boolean} [props.shouldAutoFocus] - Whether to auto-focus on mount
 * @param {Object} [props.inputProps] - Additional props for the input element
 * @param {Object} [props.messages] - Localization message overrides
 * @param {Function} [props.onBlur] - Callback fired on blur
 * @param {Function} [props.onChange] - Callback fired when the value changes
 * @param {Function} [props.onChangeComplete] - Debounced callback fired after the value stabilizes
 * @param {Function} [props.onFocus] - Callback fired on focus
 * @param {Function} [props.onKeyDown] - Callback fired on key down
 * @param {Function} [props.onKeyPress] - Callback fired on key press
 * @param {Function} [props.onKeyUp] - Callback fired on key up
 * @param {Function} [props.renderDecrementIcon] - Custom render function for the decrement button icon
 * @param {Function} [props.renderIncrementIcon] - Custom render function for the increment button icon
 */
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

export default NumberPicker;
