import PropTypes from 'prop-types';
import cx from 'classnames';
import DateField from 'react-widgets/DatePicker';
import CalendarSelectIcon from './components/date-picker/CalendarSelectIcon';

import { getDatePickerExtantProps } from './utils/extantPropsUtils';

// Styles
import './styles/date-picker.scss';

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

DatePicker.propTypes = {
    contextCls: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    currentDate: PropTypes.instanceOf(Date),
    defaultValue: PropTypes.instanceOf(Date),
    max: PropTypes.instanceOf(Date),
    min: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    hasError: PropTypes.bool,
    isDefaultOpen: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    isOpen: PropTypes.bool,
    shouldAutoFocus: PropTypes.bool,
    shouldDropUp: PropTypes.bool,
    shouldHideDropdownBtn: PropTypes.bool,
    formats: PropTypes.object,
    inputProps: PropTypes.object,
    messages: PropTypes.object,
    valueDisplayFormat: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    valueEditFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    valueFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onCurrentDateChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyPress: PropTypes.func,
    onSelect: PropTypes.func,
    onToggle: PropTypes.func,
    renderSelectIcon: PropTypes.func,
};

export default DatePicker;
