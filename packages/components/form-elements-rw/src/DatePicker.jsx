import cx from 'classnames';
import DateField from 'react-widgets/DatePicker';
import CalendarSelectIcon from './components/date-picker/CalendarSelectIcon';

import { getDatePickerExtantProps } from './utils/extantPropsUtils';

// Styles
import './styles/date-picker.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.id] - ID attribute for the date picker input
 * @param {string} [props.name] - Name attribute for the date picker input
 * @param {string} [props.placeholder] - Placeholder text
 * @param {Date} [props.currentDate] - The currently navigated-to date in the calendar
 * @param {Date} [props.defaultValue] - Initial value (uncontrolled)
 * @param {Date} [props.max] - Maximum selectable date
 * @param {Date} [props.min] - Minimum selectable date
 * @param {Date} [props.value] - Current value (controlled)
 * @param {boolean} [props.hasError] - Whether the date picker is in an error state
 * @param {boolean} [props.isDefaultOpen] - Whether the calendar is open by default (uncontrolled)
 * @param {boolean} [props.isDisabled] - Whether the date picker is disabled
 * @param {boolean} [props.isReadOnly] - Whether the date picker is read-only
 * @param {boolean} [props.isOpen] - Whether the calendar is open (controlled)
 * @param {boolean} [props.shouldAutoFocus] - Whether to auto-focus on mount
 * @param {boolean} [props.shouldDropUp] - Whether the calendar should open upward
 * @param {boolean} [props.shouldHideDropdownBtn] - Whether to hide the calendar toggle button
 * @param {Object} [props.formats] - Date format configuration
 * @param {Object} [props.inputProps] - Additional props for the input element
 * @param {Object} [props.messages] - Localization message overrides
 * @param {string|Object} [props.valueDisplayFormat] - Format for displaying the selected value
 * @param {string|Object} [props.valueEditFormat] - Format when the input is being edited
 * @param {string|Object} [props.valueFormat] - Format for the value
 * @param {Function} [props.onBlur] - Callback fired on blur
 * @param {Function} [props.onChange] - Callback fired when the value changes
 * @param {Function} [props.onCurrentDateChange] - Callback fired when the calendar navigation date changes
 * @param {Function} [props.onFocus] - Callback fired on focus
 * @param {Function} [props.onKeyDown] - Callback fired on key down
 * @param {Function} [props.onKeyPress] - Callback fired on key press
 * @param {Function} [props.onSelect] - Callback fired when a date is selected
 * @param {Function} [props.onToggle] - Callback fired when the calendar opens/closes
 * @param {Function} [props.renderSelectIcon] - Custom render function for the calendar toggle icon
 */
const DatePicker = (props) => {
    const {
        contextCls,
        hasError = false,
        shouldHideDropdownBtn = false,
        onBlur = DatePicker.onBlur,
        onChange = DatePicker.on,
        onCurrentDateChange = DatePicker.onCurrentDateChange,
        onFocus = DatePicker.onFocus,
        onKeyDown = DatePicker.onKeyDown,
        onKeyPress = DatePicker.onKeyPress,
        onSelect = DatePicker.onSelect,
        onToggle = DatePicker.onToggle,
        renderSelectIcon = CalendarSelectIcon,
    } = props;
    const baseCls = 'bankai-date-picker';
    const datePickerProps = getDatePickerExtantProps(props);
    const modCls = {
        [`${baseCls}--error`]: hasError,
        [`${baseCls}--no-dropdown-btn`]: shouldHideDropdownBtn,
    };
    const selectIcon = renderSelectIcon({ baseCls });

    return (
        <DateField
            {...datePickerProps}
            className={cx(baseCls, modCls, contextCls)}
            selectIcon={selectIcon}
            onBlur={onBlur}
            onChange={onChange}
            onCurrentDateChange={onCurrentDateChange}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            onKeyPress={onKeyPress}
            onSelect={onSelect}
            onToggle={onToggle}
        />
    );
};

DatePicker.onBlur = () => Promise.resolve();
DatePicker.onChange = () => Promise.resolve();
DatePicker.onCurrentDateChange = () => Promise.resolve();
DatePicker.onFocus = () => Promise.resolve();
DatePicker.onKeyDown = () => Promise.resolve();
DatePicker.onKeyPress = () => Promise.resolve();
DatePicker.onSelect = () => Promise.resolve();
DatePicker.onToggle = () => Promise.resolve();

export default DatePicker;
