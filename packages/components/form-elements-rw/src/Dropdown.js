import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import DropdownList from 'react-widgets/DropdownList';

// Styles
import './styles/dropdown.scss';

class Dropdown extends PureComponent {
    static defaultProps = {
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
    };

    static propTypes = {
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
        optionComponent: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.string,
        ]),
        textField: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
            PropTypes.object,
        ]),
        renderListGroup: PropTypes.func,
        renderListItem: PropTypes.func,
        renderValue: PropTypes.func,
        onChange: PropTypes.func,
        onSelect: PropTypes.func,
        onToggle: PropTypes.func,
    };

    render() {
        const { contextCls, hasError, filter } = this.props;
        const modCls = {
            [`${this.baseCls}--error`]: hasError,
            [`${this.baseCls}--no-filter`]: !filter,
        };
        const props = this.getExtantProps();

        return (
            <DropdownList
                {...props}
                className={cx(this.baseCls, modCls, contextCls)}
                busySpinner={this.renderBusySpinner()}
                onChange={this.handleChange}
                onCreate={this.handleCreate}
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
            isBusy: busy,
            isDefaultOpen: defaultOpen,
            isDisabled: disabled,
            isOpen: open,
            isReadOnly: readOnly,
            shouldAutoFocus: autoFocus,
            shouldDropUp: dropUp,
            onChange,
            onSelect,
            onToggle,
            ...rest
        } = this.props;

        return {
            ...rest,
            autoFocus,
            busy,
            defaultOpen,
            disabled,
            open,
            readOnly,
            dropUp,
        };
    };

    baseCls = 'bankai-dropdown';
}

export default Dropdown;
