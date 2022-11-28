import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/radio.scss';

class Radio extends PureComponent {
    static defaultProps = {
        isDisabled: false,
        isChecked: false,
        onChange: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.string,
        isChecked: PropTypes.bool,
        isDisabled: PropTypes.bool,
        data: PropTypes.object,
        onChange: PropTypes.func,
        renderCheckedIcon: PropTypes.func,
    };

    render() {
        const { contextCls, isChecked } = this.props;
        const radioProps = this.getExtantProps();
        const modCls = this.getModCls();

        return (
            <span className={cx(this.baseCls, modCls, contextCls)}>
                <input
                    {...radioProps}
                    className={`${this.baseCls}__input`}
                    type="radio"
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

        return <span className={iconCls} />;
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

    getExtantProps = () => {
        const {
            contextCls,
            isChecked,
            isDisabled,
            data,
            onChange,
            renderCheckedIcon,
            ...rest
        } = this.props;

        return {
            ...rest,
            disabled: isDisabled,
            checked: isChecked,
        };
    };

    baseCls = 'bankai-radio';
}

export default Radio;
