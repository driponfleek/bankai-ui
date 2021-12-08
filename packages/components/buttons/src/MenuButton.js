import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Wrapper, Button, Menu } from 'react-aria-menubutton';
import { v4 as uuidv4 } from 'uuid';
import MenuButtonOption from './MenuButtonOption';

// Utils
import { getBtnModCls } from './utils/buttonUtils';

// Styles
import './styles/menu-button.scss';

class MenuButton extends Component {
    static defaultProps = {
        isDisabled: false,
        shouldCloseOnBlur: true,
        shouldCloseOnSelection: true,
        menuOptions: [],
        onSelection: () => Promise.resolve(),
        onMenuToggle: () => Promise.resolve(),
    };

    static propTypes = {
        btnContextCls: PropTypes.string,
        contextCls: PropTypes.string,
        text: PropTypes.string,
        variant: PropTypes.string,
        isDisabled: PropTypes.bool,
        shouldCloseOnBlur: PropTypes.bool,
        shouldCloseOnSelection: PropTypes.bool,
        menuProps: PropTypes.object,
        wrapperProps: PropTypes.object,
        menuOptions: PropTypes.array,
        onSelection: PropTypes.func,
        onMenuToggle: PropTypes.func,
        renderIcon: PropTypes.func,
        renderMenuOption: PropTypes.func,
    };

    render() {
        const {
            contextCls,
            shouldCloseOnBlur,
            shouldCloseOnSelection,
            wrapperProps,
            onSelection,
            onMenuToggle,
        } = this.props;

        return (
            <Wrapper
                {...wrapperProps}
                className={cx(this.baseCls, contextCls)}
                closeOnBlur={shouldCloseOnBlur}
                closeOnSelection={shouldCloseOnSelection}
                onMenuToggle={onMenuToggle}
                onSelection={onSelection}
            >
                {this.renderButton()}
                {this.renderMenu()}
            </Wrapper>
        );
    }

    renderButton = () => {
        const {
            btnContextCls,
            text,
            variant,
            isDisabled,
            renderIcon,
            children,
        } = this.props;
        const props = this.getBtnProps();
        const modCls = getBtnModCls(variant, this.btnCls);

        return (
            <Button
                {...props}
                className={cx(`${this.baseCls}__button`, modCls, btnContextCls)}
                tag="button"
                disabled={isDisabled}
            >
                <span className={`${this.btnCls}__content-container`}>
                    {!children && (
                        <Fragment>
                            {!!renderIcon && this.renderIcon()}
                            {!!text && this.renderText()}
                        </Fragment>
                    )}
                    {children}
                </span>
            </Button>
        );
    };

    renderIcon = () => {
        const { renderIcon } = this.props;
        const iconCls = `${this.btnCls}__icon`;

        return (
            <span className={`${iconCls}-container`}>
                <span className={`${iconCls}-safe-space`}>
                    <span className={iconCls}>{renderIcon()}</span>
                </span>
            </span>
        );
    };

    renderText() {
        const { text } = this.props;

        return (
            <span className={`${this.btnCls}__text-container`}>
                <span className={`${this.btnCls}__text`}>{text}</span>
            </span>
        );
    }

    renderMenu = () => {
        const { menuOptions, menuProps } = this.props;

        return (
            <Menu {...menuProps} className={`${this.baseCls}__menu`}>
                <ul className={`${this.baseCls}__menu-list`}>
                    {menuOptions.map((menuOption) =>
                        this.renderMenuOption(menuOption),
                    )}
                </ul>
            </Menu>
        );
    };

    renderMenuOption = (menuOption) => {
        const { renderMenuOption } = this.props;
        const key = `${this.baseCls}-li-${uuidv4()}`;

        return (
            <li key={key} className={`${this.baseCls}__menu-list-option`}>
                {renderMenuOption ? (
                    renderMenuOption(menuOption)
                ) : (
                    <MenuButtonOption {...menuOption} />
                )}
            </li>
        );
    };

    getBtnProps = () => {
        const {
            btnContextCls,
            contextCls,
            text,
            variant,
            isDisabled,
            shouldCloseOnBlur,
            shouldCloseOnSelection,
            wrapperProps,
            menuProps,
            menuOptions,
            onSelection,
            onMenuToggle,
            renderIcon,
            renderMenuOption,
            children,
            ...rest
        } = this.props;

        return {
            ...rest,
        };
    };

    baseCls = 'bankai-menu-button';

    btnCls = 'bankai-button';
}

export default MenuButton;
