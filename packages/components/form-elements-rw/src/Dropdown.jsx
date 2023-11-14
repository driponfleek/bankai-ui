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
        hasError,
        filter,
        onChange,
        onSelect,
        onToggle,
        renderBusySpinner,
        renderSelectIcon,
    } = props;
    const baseCls = 'bankai-dropdown';
    const modCls = {
        [`${baseCls}--error`]: hasError,
        [`${baseCls}--no-filter`]: !filter,
    };
    const dropdownProps = getDropdownExtantProps(props);
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

Dropdown.defaultProps = {
    filter: false,
    hasError: false,
    isBusy: false,
    isDefaultOpen: false,
    isDisabled: false,
    isReadOnly: false,
    shouldAutoFocus: false,
    shouldDropUp: false,
    data: [],
    onChange: () => Promise.resolve(),
    onSelect: () => Promise.resolve(),
    onToggle: () => Promise.resolve(),
    renderBusySpinner: BusySpinner,
    renderSelectIcon: SelectIcon,
};

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
