import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Toggle from 'react-toggle';
import { BankaiSpinner } from '@epr0t0type/bankai-ui-icons';

// Styles
import './styles/toggle-switch.scss';

class ToggleSwitch extends Component {
    static defaultProps = {
        isBusy: false,
        isDisabled: false,
        icons: false,
        onChange: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.string,
        isBusy: PropTypes.bool,
        isChecked: PropTypes.bool,
        isDefaultChecked: PropTypes.bool,
        isDisabled: PropTypes.bool,
        icons: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        onChange: PropTypes.func,
        renderBusyIcon: PropTypes.func,
    };

    render() {
        const { contextCls, isBusy, isDisabled } = this.props;
        const props = this.getExtantProps();
        const modCls = {
            [`${this.baseCls}--is-busy`]: isBusy,
            [`${this.baseCls}--is-disabled`]: isBusy || isDisabled,
        };

        return (
            <div className={cx(this.baseCls, modCls, contextCls)}>
                <Toggle
                    {...props}
                    className={`${this.baseCls}__toggle`}
                    onChange={this.handleChange}
                />
                {isBusy && (
                    <BankaiSpinner contextCls={`${this.baseCls}__icon-busy`} />
                )}
            </div>
        );
    }

    handleChange = () => {
        const { id, name, value, onChange } = this.props;
        const payload = { id, name, value };

        onChange(payload);
    };

    getExtantProps = () => {
        const {
            contextCls,
            isBusy,
            isChecked,
            isDefaultChecked,
            isDisabled,
            icons,
            onChange,
            ...rest
        } = this.props;

        return {
            ...rest,
            checked: isChecked,
            defaultChecked: isDefaultChecked,
            disabled: isBusy || isDisabled,
            icons: isBusy && icons !== undefined ? false : icons,
        };
    };

    baseCls = 'bankai-toggle-switch';
}

export default ToggleSwitch;
