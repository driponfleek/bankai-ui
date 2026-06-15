import cx from 'classnames';
import RWCombobox from 'react-widgets/Combobox';
import BusySpinner from './components/BusySpinner';
import SelectIcon from './components/SelectIcon';

import { getComboboxExtantProps } from './utils/extantPropsUtils';

// Styles
import './styles/combobox.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.id] - ID attribute for the combobox input
 * @param {string} [props.name] - Name attribute for the combobox input
 * @param {string} [props.placeholder] - Placeholder text
 * @param {boolean} [props.hasError] - Whether the combobox is in an error state
 * @param {boolean} [props.isBusy] - Whether to display the busy/loading state
 * @param {boolean} [props.isDefaultOpen] - Whether the dropdown is open by default (uncontrolled)
 * @param {boolean} [props.isDisabled] - Whether the combobox is disabled
 * @param {boolean} [props.isOpen] - Whether the dropdown is open (controlled)
 * @param {boolean} [props.isReadOnly] - Whether the combobox is read-only
 * @param {boolean} [props.shouldAutoFocus] - Whether the combobox should auto-focus on mount
 * @param {boolean} [props.shouldAutoSelectMatches] - Whether to auto-select matching items
 * @param {boolean} [props.shouldDropUp] - Whether the dropdown should open upward
 * @param {boolean} [props.shouldFocustFirstItem] - Whether to focus the first item when opened
 * @param {boolean} [props.shouldHideCaret] - Whether to hide the dropdown caret
 * @param {boolean} [props.shouldHideEmptyPopup] - Whether to hide the popup when there are no items
 * @param {Array} [props.data] - Array of items to display in the dropdown
 * @param {Array} [props.disabledOptions] - Array of items that should be disabled
 * @param {Object} [props.inputProps] - Additional props for the input element
 * @param {Object} [props.listProps] - Additional props for the list element
 * @param {Object} [props.messages] - Localization message overrides
 * @param {string|Function} [props.dataKey] - Field or function to use as the option key
 * @param {string|Array|Object} [props.defaultValue] - Initial value (uncontrolled)
 * @param {string|Function|boolean} [props.filter] - Filter function, method name, or false to disable
 * @param {string|Function} [props.groupBy] - Field or function to group items by
 * @param {Element|Function} [props.listComponent] - Custom list component
 * @param {string|Function} [props.textField] - Field or function to use as the display text
 * @param {string|Array|Object} [props.value] - Current value (controlled)
 * @param {Function} [props.onChange] - Callback fired when the value changes
 * @param {Function} [props.onSelect] - Callback fired when an item is selected
 * @param {Function} [props.onToggle] - Callback fired when the dropdown opens/closes
 * @param {Function} [props.renderBusySpinner] - Custom render function for the busy spinner
 * @param {Function} [props.renderListGroup] - Custom render function for list group headers
 * @param {Function} [props.renderListItem] - Custom render function for list items
 * @param {Function} [props.renderSelectIcon] - Custom render function for the dropdown icon
 */
const Combobox = (props) => {
    const {
        contextCls,
        hasError = false,
        shouldAutoFocus = false,
        shouldAutoSelectMatches = false,
        isBusy = false,
        isDefaultOpen = false,
        isDisabled = false,
        isReadOnly = false,
        shouldDropUp = false,
        shouldFocustFirstItem = false,
        data = [],
        onChange = Combobox.onChange,
        onSelect = Combobox.onSelect,
        onToggle = Combobox.onToggle,
        renderBusySpinner = BusySpinner,
        renderSelectIcon = SelectIcon,
        ...rest
    } = props;
    const baseCls = 'bankai-combobox';
    const comboboxProps = getComboboxExtantProps({
        ...rest,
        contextCls,
        hasError,
        shouldAutoFocus,
        shouldAutoSelectMatches,
        isBusy,
        isDefaultOpen,
        isDisabled,
        isReadOnly,
        shouldDropUp,
        shouldFocustFirstItem,
        data,
        onChange,
        onSelect,
        onToggle,
        renderBusySpinner,
        renderSelectIcon,
    });
    const modCls = {
        [`${baseCls}--error`]: hasError,
    };
    const busySpinner = renderBusySpinner({ baseCls });
    const selectIcon = renderSelectIcon({ baseCls });

    return (
        <RWCombobox
            {...comboboxProps}
            className={cx(baseCls, modCls, contextCls)}
            busySpinner={busySpinner}
            selectIcon={selectIcon}
            onChange={onChange}
            onSelect={onSelect}
            onToggle={onToggle}
        />
    );
};

Combobox.onChange = () => Promise.resolve();
Combobox.onSelect = () => Promise.resolve();
Combobox.onToggle = () => Promise.resolve();

export default Combobox;
