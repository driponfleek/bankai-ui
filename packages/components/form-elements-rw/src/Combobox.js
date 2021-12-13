import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import RWCombobox from 'react-widgets/Combobox';

// Styles
import './styles/combobox.scss';

class Combobox extends PureComponent {
    static defaultProps = {
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
    };

    static propTypes = {
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
        busySpinner: PropTypes.element,
        selectIcon: PropTypes.element,
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
        renderListGroup: PropTypes.func,
        renderListItem: PropTypes.func,
        onChange: PropTypes.func,
        onSelect: PropTypes.func,
        onToggle: PropTypes.func,
    };

    render() {
        const { contextCls, hasError } = this.props;
        const props = this.getExtantProps();
        const modCls = {
            [`${this.baseCls}--error`]: hasError,
        };

        return (
            <RWCombobox
                {...props}
                className={cx(this.baseCls, modCls, contextCls)}
                busySpinner={this.renderBusySpinner()}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                onToggle={this.handleToggle}
            />
        );
    }

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

    handleSelect = (e) => {
        const { onSelect } = this.props;

        onSelect(e);
    };

    handleToggle = (e) => {
        const { onToggle } = this.props;

        onToggle(e);
    };

    getExtantProps = () => {
        const {
            contextCls,
            hasError,
            disabledOptions,
            isBusy,
            isDefaultOpen,
            isDisabled,
            isOpen,
            isReadOnly,
            shouldAutoFocus,
            shouldAutoSelectMatches,
            shouldDropUp,
            shouldFocustFirstItem,
            shouldHideCaret,
            shouldHideEmptyPopup,
            onChange,
            onSelect,
            onToggle,
            ...rest
        } = this.props;
        const props = { ...rest };

        props.autoFocus = shouldAutoFocus;
        props.autoSelectMatches = shouldAutoSelectMatches;
        props.busy = isBusy;
        props.defaultOpen = isDefaultOpen;
        props.disabled = isDisabled || disabledOptions;
        props.focusFirstItem = shouldFocustFirstItem;
        props.hideCaret = shouldHideCaret;
        props.hideEmptyPopup = shouldHideEmptyPopup;
        props.open = !isDisabled && isOpen;
        props.readOnly = isReadOnly;
        props.dropUp = shouldDropUp;

        return props;
    };

    baseCls = 'bankai-combobox';
}

export default Combobox;
