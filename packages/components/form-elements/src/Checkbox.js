import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BankaiCheck } from '@epr0t0type/bankai-ui-icons';

// Styles
import './styles/checkbox.scss';

class Checkbox extends PureComponent {
    static defaultProps = {
        isDisabled: false,
        isChecked: false,
        isReadOnly: false,
        onChange: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.string,
        isChecked: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        data: PropTypes.object,
        onChange: PropTypes.func,
        renderCheckedIcon: PropTypes.func,
    };

    render() {
        const { contextCls, isChecked } = this.props;
        const checkboxProps = this.getCheckboxProps();
        const modCls = this.getModCls();

        return (
            <span className={cx(this.baseCls, modCls, contextCls)}>
                <input
                    {...checkboxProps}
                    className={`${this.baseCls}__input`}
                    type="checkbox"
                    onChange={this.handleChange}
                />
                <span className={`${this.baseCls}__container`}>
                    {isChecked && this.renderCheckedIcon()}
                </span>
            </span>
        );
    }

    renderCheckedIcon = () => {
        const { renderCheckedIcon } = this.props;
        const iconCls = `${this.baseCls}__icon`;

        if (renderCheckedIcon) {
            return renderCheckedIcon(iconCls);
        }

        return <BankaiCheck contextCls={iconCls} />;
    };

    handleChange = (e) => {
        const { value, isChecked, data, onChange } = this.props;
        const params = {
            value,
            isChecked,
            data,
            e,
        };

        onChange(params);
    };

    getModCls = () => {
        const { isChecked, isDisabled } = this.props;

        return {
            [`${this.baseCls}--checked`]: isChecked,
            [`${this.baseCls}--disabled`]: isDisabled,
        };
    };

    getCheckboxProps = () => {
        const {
            contextCls,
            isChecked,
            isDisabled,
            isReadOnly,
            data,
            onChange,
            renderCheckedIcon,
            ...rest
        } = this.props;

        return {
            ...rest,
            disabled: isDisabled,
            readOnly: isReadOnly,
            checked: isChecked,
        };
    };

    baseCls = 'bankai-checkbox';
}

export default Checkbox;
