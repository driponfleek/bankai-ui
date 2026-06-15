import cx from 'classnames';
import DropdownList from 'react-widgets/DropdownList';
import BusySpinner from './components/BusySpinner';
import SelectIcon from './components/SelectIcon';
import { getDropdownExtantProps } from './utils/extantPropsUtils';

// Styles
import './styles/dropdown.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.id] - ID attribute for the dropdown input
 * @param {string} [props.name] - Name attribute for the dropdown input
 * @param {string} [props.placeholder] - Placeholder text
 * @param {number} [props.delay] - Delay in milliseconds for keyboard navigation
 * @param {boolean} [props.hasError] - Whether the dropdown is in an error state
 * @param {boolean} [props.isBusy] - Whether to display the busy/loading state
 * @param {boolean} [props.isDefaultOpen] - Whether the dropdown is open by default (uncontrolled)
 * @param {boolean} [props.isDisabled] - Whether the dropdown is disabled
 * @param {boolean} [props.isOpen] - Whether the dropdown is open (controlled)
 * @param {boolean} [props.isReadOnly] - Whether the dropdown is read-only
 * @param {boolean} [props.shouldAutoFocus] - Whether to auto-focus on mount
 * @param {boolean} [props.shouldDropUp] - Whether the dropdown should open upward
 * @param {Array} [props.data] - Array of items to display
 * @param {Array} [props.disabledOptions] - Array of items that should be disabled
 * @param {Object} [props.inputProps] - Additional props for the input element
 * @param {Object} [props.listProps] - Additional props for the list element
 * @param {Object} [props.messages] - Localization message overrides
 * @param {string|Function} [props.dataKey] - Field or function to use as the option key
 * @param {string|Array|Object} [props.defaultValue] - Initial value (uncontrolled)
 * @param {string|Function|boolean} [props.filter] - Filter function, method name, or false to disable
 * @param {string|Function} [props.groupBy] - Field or function to group items by
 * @param {Element|Function} [props.listComponent] - Custom list component
 * @param {Element|string} [props.optionComponent] - Custom option component
 * @param {string|Function} [props.textField] - Field or function to use as the display text
 * @param {string|Array|Object} [props.value] - Current value (controlled)
 * @param {Function} [props.onChange] - Callback fired when the value changes
 * @param {Function} [props.onSelect] - Callback fired when an item is selected
 * @param {Function} [props.onToggle] - Callback fired when the dropdown opens/closes
 * @param {Function} [props.renderBusySpinner] - Custom render function for the busy spinner
 * @param {Function} [props.renderListGroup] - Custom render function for list group headers
 * @param {Function} [props.renderListItem] - Custom render function for list items
 * @param {Function} [props.renderSelectIcon] - Custom render function for the dropdown icon
 * @param {Function} [props.renderValue] - Custom render function for the selected value display
 */
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

export default Dropdown;
