import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BankaiCalendarClear } from '@epr0t0type/bankai-ui-icons';
import DateField from 'react-widgets/DatePicker';

// Localizer
import { defaultFormats as dFormats } from './nls/RWDateLocalizer';

// Styles
import './styles/date-picker.scss';

class DatePicker extends PureComponent {
    static defaultProps = {
        valueDisplayFormat: dFormats.date,
        shouldAutoFocus: false,
        isDefaultOpen: false,
        isDisabled: false,
        hasError: false,
        shouldDropUp: false,
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
    };

    static propTypes = {
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
        formats: PropTypes.object,
        inputProps: PropTypes.object,
        messages: PropTypes.object,
        valueDisplayFormat: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
        ]),
        valueEditFormat: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
        ]),
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

    render() {
        const {
            contextCls,
            hasError,
            onBlur,
            onChange,
            onCurrentDateChange,
            onFocus,
            onKeyDown,
            onKeyPress,
            onSelect,
            onToggle,
        } = this.props;
        const props = this.getExtantProps();
        const modCls = {
            [`${this.baseCls}--error`]: hasError,
        };

        return (
            <DateField
                {...props}
                className={cx(this.baseCls, modCls, contextCls)}
                selectIcon={this.renderSelectIcon()}
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
    }

    renderSelectIcon = () => {
        const { renderSelectIcon } = this.props;
        const selectIconRenderer =
            renderSelectIcon || this.renderDefaultSelectIcon;

        return selectIconRenderer();
    };

    renderDefaultSelectIcon = () => {
        return (
            <span className={cx(`${this.baseCls}__select-icon`)}>
                <BankaiCalendarClear />
            </span>
        );
    };

    getExtantProps = () => {
        const {
            isDefaultOpen,
            isDisabled,
            isReadOnly,
            isOpen,
            shouldAutoFocus,
            shouldDropUp,
            ...rest
        } = this.props;
        const props = { ...rest };
        delete props.contextCls;
        delete props.hasError;
        delete props.onBlur;
        delete props.onChange;
        delete props.onCurrentDateChange;
        delete props.onFocus;
        delete props.onKeyDown;
        delete props.onKeyPress;
        delete props.onSelect;
        delete props.onToggle;
        props.autoFocus = shouldAutoFocus;
        props.defaultOpen = isDefaultOpen;
        props.disabled = isDisabled;
        props.dropUp = shouldDropUp;
        props.open = !isDisabled && isOpen;
        props.readOnly = isReadOnly;

        return props;
    };

    baseCls = 'bankai-date-picker';
}

export default DatePicker;
