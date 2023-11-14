import PropTypes from 'prop-types';
import cx from 'classnames';
import MultiselectField from 'react-widgets/Multiselect';
import BusySpinner from './components/BusySpinner';
import SelectIcon from './components/SelectIcon';
import ClearTagIcon from './components/multiselect/ClearTagIcon';
import { getMultiselectExtantProps } from './utils/extantPropsUtils';

// Styles
import './styles/multiselect.scss';

const Multiselect = (props) => {
    const {
        contextCls,
        hasError,
        onChange,
        onCreate,
        onSearch,
        onSelect,
        renderBusySpinner,
        renderClearTagIcon,
        renderSelectIcon,
    } = props;
    const baseCls = 'bankai-multiselect';
    const multiselectProps = getMultiselectExtantProps(props);
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

Multiselect.defaultProps = {
    hasError: false,
    isBusy: false,
    isDefaultOpen: false,
    isDisabled: false,
    isReadOnly: false,
    shouldAutoFocus: false,
    shouldDropUp: false,
    shouldFocustFirstItem: false,
    shouldShowPlaceholderWithValues: true,
    data: [],
    onChange: () => Promise.resolve(),
    onCreate: () => Promise.resolve(),
    onSearch: () => Promise.resolve(),
    onSelect: () => Promise.resolve(),
    renderBusySpinner: BusySpinner,
    renderClearTagIcon: ClearTagIcon,
    renderSelectIcon: SelectIcon,
};

Multiselect.propTypes = {
    contextCls: PropTypes.string,
    defaultSearchTerm: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    searchTerm: PropTypes.string,
    hasError: PropTypes.bool,
    isBusy: PropTypes.bool,
    isDefaultOpen: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isOpen: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    shouldAutoFocus: PropTypes.bool,
    shouldDropUp: PropTypes.bool,
    shouldFocustFirstItem: PropTypes.bool,
    shouldShowPlaceholderWithValues: PropTypes.bool,
    data: PropTypes.array,
    defaultValue: PropTypes.array,
    value: PropTypes.array,
    inputProps: PropTypes.object,
    listProps: PropTypes.object,
    messages: PropTypes.object,
    allowCreate: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    filter: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.bool,
    ]),
    groupBy: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    listComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    tagOptionComponent: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func,
    ]),
    textField: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    onChange: PropTypes.func,
    onCreate: PropTypes.func,
    onSearch: PropTypes.func,
    onSelect: PropTypes.func,
    renderBusySpinner: PropTypes.func,
    renderClearTagIcon: PropTypes.func,
    renderListGroup: PropTypes.func,
    renderListItem: PropTypes.func,
    renderSelectIcon: PropTypes.func,
    renderTagValue: PropTypes.func,
};

export default Multiselect;
