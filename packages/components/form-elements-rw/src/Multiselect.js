import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MultiselectField from 'react-widgets/Multiselect';

// Styles
import './styles/multiselect.scss';

class Multiselect extends PureComponent {
    static defaultProps = {
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
    };

    static propTypes = {
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
        busySpinner: PropTypes.element,
        clearTagIcon: PropTypes.element,
        selectIcon: PropTypes.element,
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
        renderListGroup: PropTypes.func,
        renderListItem: PropTypes.func,
        renderTagValue: PropTypes.func,
    };

    render() {
        const { contextCls, hasError } = this.props;
        const props = this.getProps();
        const modCls = {
            [`${this.baseCls}--error`]: hasError,
        };

        return (
            <MultiselectField
                {...props}
                className={cx(this.baseCls, modCls, contextCls)}
                onChange={this.handleChange}
                onCreate={this.handleCreate}
                onSearch={this.handleSearch}
                onSelect={this.handleSelect}
                busySpinner={this.renderBusySpinner()}
                clearTagIcon={this.renderClearTagIcon()}
            />
        );
    }

    renderClearTagIcon = () => {
        const { clearTagIcon } = this.props;

        return (
            clearTagIcon || (
                <span
                    className={cx(
                        `${this.baseCls}__clear-tag-icon`,
                        'bankai-icon-close',
                    )}
                />
            )
        );
    };

    renderBusySpinner = () => {
        const { busySpinner } = this.props;

        return (
            busySpinner || (
                <span
                    className={cx(
                        `${this.baseCls}__busy-spinner`,
                        'bankai-icon-spinner',
                    )}
                />
            )
        );
    };

    handleChange = (e) => {
        const { onChange } = this.props;

        onChange(e);
    };

    handleCreate = (e) => {
        const { onCreate } = this.props;

        onCreate(e);
    };

    handleSearch = (e) => {
        const { onSearch } = this.props;

        onSearch(e);
    };

    handleSelect = (e) => {
        const { onSelect } = this.props;

        onSelect(e);
    };

    getProps = () => {
        const {
            isBusy,
            isDefaultOpen,
            isDisabled,
            isReadOnly,
            shouldAutoFocus,
            shouldDropUp,
            shouldFocustFirstItem,
            shouldShowPlaceholderWithValues,
            isOpen,
            ...rest
        } = this.props;
        const props = { ...rest };
        delete props.contextCls;
        delete props.hasError;
        delete props.onChange;
        delete props.onCreate;
        delete props.onSearch;
        delete props.onSelect;
        props.autoFocus = shouldAutoFocus;
        props.busy = isBusy;
        props.defaultOpen = isDefaultOpen;
        props.disabled = isDisabled;
        props.dropUp = shouldDropUp;
        props.focusFirstItem = shouldFocustFirstItem;
        props.showPlaceholderWithValues = shouldShowPlaceholderWithValues;
        props.readOnly = isReadOnly;
        props.open = !isDisabled && isOpen;

        return props;
    };

    baseCls = 'bankai-multiselect';
}

export default Multiselect;
