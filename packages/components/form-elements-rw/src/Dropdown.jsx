import PropTypes from 'prop-types';
import cx from 'classnames';
import DropdownList from 'react-widgets/DropdownList';
import BusySpinner from './components/BusySpinner';
import SelectIcon from './components/SelectIcon';
import { getDropdownExtantProps } from './utils/extantPropsUtils';

// Styles
import './styles/dropdown.scss';

const Dropdown = (props) => {
    const {
        contextCls,
        filter = false,
        hasError = false,
        isBusy = false,
        isDefaultOpen = false,
        isDisabled = false,
        isReadOnly = false,
        shouldAutoFocus = false,
        shouldDropUp = false,
        data = [],
        onChange = Dropdown.onChange,
        onSelect = Dropdown.onSelect,
        onToggle = Dropdown.onToggle,
        renderBusySpinner = BusySpinner,
        renderSelectIcon = SelectIcon,
        ...rest
    } = props;
    const baseCls = 'bankai-dropdown';
    const modCls = {
        [`${baseCls}--error`]: hasError,
        [`${baseCls}--no-filter`]: !filter,
    };
    const dropdownProps = getDropdownExtantProps({
        ...rest,
        contextCls,
        hasError,
        isBusy,
        isDefaultOpen,
        isDisabled,
        isReadOnly,
        shouldAutoFocus,
        shouldDropUp,
        data,
        filter,
        onChange,
        onSelect,
        onToggle,
        renderBusySpinner,
        renderSelectIcon,
    });

    const busySpinner = renderBusySpinner({ baseCls });
    const selectIcon = renderSelectIcon({ baseCls });

    return (
        <DropdownList
            {...dropdownProps}
            className={cx(baseCls, modCls, contextCls)}
            busySpinner={busySpinner}
            selectIcon={selectIcon}
            onChange={onChange}
            onSelect={onSelect}
            onToggle={onToggle}
        />
    );
};

Dropdown.onChange = () => Promise.resolve();
Dropdown.onSelect = () => Promise.resolve();
Dropdown.onToggle = () => Promise.resolve();

Dropdown.propTypes = {
    contextCls: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    delay: PropTypes.number,
    hasError: PropTypes.bool,
    isBusy: PropTypes.bool,
    isDefaultOpen: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isOpen: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    shouldAutoFocus: PropTypes.bool,
    shouldDropUp: PropTypes.bool,
    data: PropTypes.array,
    disabledOptions: PropTypes.array,
    inputProps: PropTypes.object,
    listProps: PropTypes.object,
    messages: PropTypes.object,
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object,
    ]),
    filter: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.bool,
    ]),
    groupBy: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    listComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    optionComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    textField: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object,
    ]),
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    onToggle: PropTypes.func,
    renderBusySpinner: PropTypes.func,
    renderListGroup: PropTypes.func,
    renderListItem: PropTypes.func,
    renderSelectIcon: PropTypes.func,
    renderValue: PropTypes.func,
};

export default Dropdown;
