import PropTypes from 'prop-types';
import cx from 'classnames';
import RWCombobox from 'react-widgets/Combobox';
import BusySpinner from './components/BusySpinner';
import SelectIcon from './components/SelectIcon';

import { getComboboxExtantProps } from './utils/extantPropsUtils';

// Styles
import './styles/combobox.scss';

const Combobox = (props) => {
    const {
        contextCls,
        hasError,
        onChange,
        onSelect,
        onToggle,
        renderBusySpinner,
        renderSelectIcon,
    } = props;
    const baseCls = 'bankai-combobox';
    const comboboxProps = getComboboxExtantProps(props);
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

Combobox.defaultProps = {
    shouldAutoFocus: false,
    shouldAutoSelectMatches: false,
    hasError: false,
    isBusy: false,
    isDefaultOpen: false,
    isDisabled: false,
    isReadOnly: false,
    shouldDropUp: false,
    shouldFocustFirstItem: false,
    data: [],
    onChange: () => Promise.resolve(),
    onSelect: () => Promise.resolve(),
    onToggle: () => Promise.resolve(),
    renderBusySpinner: BusySpinner,
    renderSelectIcon: SelectIcon,
};

Combobox.propTypes = {
    contextCls: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    hasError: PropTypes.bool,
    isBusy: PropTypes.bool,
    isDefaultOpen: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isOpen: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    shouldAutoFocus: PropTypes.bool,
    shouldAutoSelectMatches: PropTypes.bool,
    shouldDropUp: PropTypes.bool,
    shouldFocustFirstItem: PropTypes.bool,
    shouldHideCaret: PropTypes.bool,
    shouldHideEmptyPopup: PropTypes.bool,
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
};

export default Combobox;
