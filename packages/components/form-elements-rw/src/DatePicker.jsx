import PropTypes from 'prop-types';
import cx from 'classnames';
import DateField from 'react-widgets/DatePicker';
import CalendarSelectIcon from './components/CalendarSelectIcon';

import { getDatePickerExtantProps } from './utils/extantPropsUtils';

// Localizer
import { defaultFormats as dFormats } from './nls/RWDateLocalizer';

// Styles
import './styles/date-picker.scss';

const DatePicker = (props) => {
    const {
        contextCls,
        hasError,
        shouldHideDropdownBtn,
        onBlur,
        onChange,
        onCurrentDateChange,
        onFocus,
        onKeyDown,
        onKeyPress,
        onSelect,
        onToggle,
        renderSelectIcon,
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

DatePicker.defaultProps = {
    valueDisplayFormat: dFormats.date,
    shouldAutoFocus: false,
    isDefaultOpen: false,
    isDisabled: false,
    hasError: false,
    shouldDropUp: false,
    shouldHideDropdownBtn: false,
    isReadOnly: false,
    formats: dFormats,
    onBlur: () => Promise.resolve(),
    onChange: () => Promise.resolve(),
    onCurrentDateChange: () => Promise.resolve(),
    onFocus: () => Promise.resolve(),
    onKeyDown: () => Promise.resolve(),
    onKeyPress: () => Promise.resolve(),
    onSelect: () => Promise.resolve(),
    onToggle: () => Promise.resolve(),
    renderSelectIcon: CalendarSelectIcon,
};

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
