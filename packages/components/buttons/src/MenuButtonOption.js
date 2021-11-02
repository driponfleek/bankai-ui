import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { MenuItem } from 'react-aria-menubutton';

// Styles
import './styles/menu-button-option.scss';

class MenuButtonOption extends PureComponent {
    static propTypes = {
        contextCls: PropTypes.string,
        text: PropTypes.string,
        isDestructive: PropTypes.bool,
        isDisabled: PropTypes.bool,
        renderIcon: PropTypes.func,
        // eslint-disable-next-line react/forbid-prop-types
        value: PropTypes.any,
    };

    render() {
        const {
            contextCls,
            text,
            isDestructive,
            isDisabled,
            value,
            renderIcon,
            children,
            ...rest
        } = this.props;
        const modCls = {
            [`${this.baseCls}--is-destructive`]: isDestructive,
        };

        return (
            <MenuItem
                {...rest}
                className={cx(this.baseCls, modCls, contextCls)}
                tag="button"
                text={text}
                value={value}
                disabled={isDisabled}
            >
                {!children && (
                    <span className={`${this.baseCls}__content-container`}>
                        {!!renderIcon && this.renderIcon()}
                        {!!text && this.renderText()}
                    </span>
                )}
                {children}
            </MenuItem>
        );
    }

    renderIcon = () => {
        const { renderIcon } = this.props;

        return (
            <span className={`${this.baseCls}__icon-container`}>
                <span className={`${this.baseCls}__icon-safe-space`}>
                    {renderIcon(`${this.baseCls}__icon`)}
                </span>
            </span>
        );
    };

    renderText = () => {
        const { text } = this.props;

        return (
            <span className={`${this.baseCls}__text-container`}>
                <span className={`${this.baseCls}__text`}>{text}</span>
            </span>
        );
    };

    baseCls = 'bankai-menu-button-option';
}

export default MenuButtonOption;
