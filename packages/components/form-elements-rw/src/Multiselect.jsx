import cx from 'classnames';
import MultiselectField from 'react-widgets/Multiselect';
import BusySpinner from './components/BusySpinner';
import SelectIcon from './components/SelectIcon';
import ClearTagIcon from './components/multiselect/ClearTagIcon';
import { getMultiselectExtantProps } from './utils/extantPropsUtils';

// Styles
import './styles/multiselect.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.defaultSearchTerm] - Initial search term (uncontrolled)
 * @param {string} [props.id] - ID attribute for the multiselect input
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.searchTerm] - Current search term (controlled)
 * @param {boolean} [props.hasError] - Whether the multiselect is in an error state
 * @param {boolean} [props.isBusy] - Whether to display the busy/loading state
 * @param {boolean} [props.isDefaultOpen] - Whether the dropdown is open by default (uncontrolled)
 * @param {boolean} [props.isDisabled] - Whether the multiselect is disabled
 * @param {boolean} [props.isOpen] - Whether the dropdown is open (controlled)
 * @param {boolean} [props.isReadOnly] - Whether the multiselect is read-only
 * @param {boolean} [props.shouldAutoFocus] - Whether to auto-focus on mount
 * @param {boolean} [props.shouldDropUp] - Whether the dropdown should open upward
 * @param {boolean} [props.shouldFocustFirstItem] - Whether to focus the first item when opened
 * @param {boolean} [props.shouldShowPlaceholderWithValues] - Whether to show the placeholder when values are selected
 * @param {Array} [props.data] - Array of items to display in the dropdown
 * @param {Array} [props.defaultValue] - Initial selected values (uncontrolled)
 * @param {Array} [props.value] - Currently selected values (controlled)
 * @param {Object} [props.inputProps] - Additional props for the input element
 * @param {Object} [props.listProps] - Additional props for the list element
 * @param {Object} [props.messages] - Localization message overrides
 * @param {string|boolean} [props.allowCreate] - Whether to allow creating new items
 * @param {string|Function} [props.dataKey] - Field or function to use as the option key
 * @param {string|Function|boolean} [props.filter] - Filter function, method name, or false to disable
 * @param {string|Function} [props.groupBy] - Field or function to group items by
 * @param {Element|Function} [props.listComponent] - Custom list component
 * @param {Element|Function} [props.tagOptionComponent] - Custom tag component
 * @param {string|Function} [props.textField] - Field or function to use as the display text
 * @param {Function} [props.onChange] - Callback fired when the selected values change
 * @param {Function} [props.onCreate] - Callback fired when a new item is created
 * @param {Function} [props.onSearch] - Callback fired when the search term changes
 * @param {Function} [props.onSelect] - Callback fired when an item is selected
 * @param {Function} [props.renderBusySpinner] - Custom render function for the busy spinner
 * @param {Function} [props.renderClearTagIcon] - Custom render function for the tag clear icon
 * @param {Function} [props.renderListGroup] - Custom render function for list group headers
 * @param {Function} [props.renderListItem] - Custom render function for list items
 * @param {Function} [props.renderSelectIcon] - Custom render function for the dropdown icon
 * @param {Function} [props.renderTagValue] - Custom render function for tag content
 */
const Multiselect = (props) => {
    const {
        contextCls,
        hasError = false,
        isBusy = false,
        isDefaultOpen = false,
        isDisabled = false,
        isReadOnly = false,
        shouldAutoFocus = false,
        shouldDropUp = false,
        shouldFocustFirstItem = false,
        shouldShowPlaceholderWithValues = true,
        data = [],
        onChange = Multiselect.onChange,
        onCreate = Multiselect.onCreate,
        onSearch = Multiselect.onSearch,
        onSelect = Multiselect.onSelect,
        renderBusySpinner = BusySpinner,
        renderClearTagIcon = ClearTagIcon,
        renderSelectIcon = SelectIcon,
        ...rest
    } = props;
    const baseCls = 'bankai-multiselect';
    const multiselectProps = getMultiselectExtantProps({
        ...rest,
        contextCls,
        hasError,
        isBusy,
        isDefaultOpen,
        isDisabled,
        isReadOnly,
        shouldAutoFocus,
        shouldDropUp,
        shouldFocustFirstItem,
        shouldShowPlaceholderWithValues,
        data,
        onChange,
        onCreate,
        onSearch,
        onSelect,
        renderBusySpinner,
        renderClearTagIcon,
        renderSelectIcon,
    });
    const modCls = {
        [`${baseCls}--error`]: hasError,
    };
    const busySpinner = renderBusySpinner({ baseCls });
    const selectIcon = renderSelectIcon({ baseCls });
    const clearTagIcon = renderClearTagIcon({ baseCls });

    return (
        <MultiselectField
            {...multiselectProps}
            className={cx(baseCls, modCls, contextCls)}
            onChange={onChange}
            onCreate={onCreate}
            onSearch={onSearch}
            onSelect={onSelect}
            busySpinner={busySpinner}
            selectIcon={selectIcon}
            clearTagIcon={clearTagIcon}
        />
    );
};

Multiselect.onChange = () => Promise.resolve();
Multiselect.onCreate = () => Promise.resolve();
Multiselect.onSearch = () => Promise.resolve();
Multiselect.onSelect = () => Promise.resolve();

export default Multiselect;
