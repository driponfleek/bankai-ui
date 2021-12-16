import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Wrapper, Button, Menu } from 'react-aria-menubutton';
import { v4 as uuidv4 } from 'uuid';
import ButtonIcon from './components/ButtonIcon';
import ButtonText from './components/ButtonText';
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
        const { btnContextCls, variant, isDisabled, children } = this.props;
        const props = this.getBtnExtantProps();
        const modCls = getBtnModCls(variant, this.btnCls);

        return (
            <Button
                {...props}
                className={cx(`${this.baseCls}__button`, modCls, btnContextCls)}
                tag="button"
                disabled={isDisabled}
            >
                <span className={`${this.btnCls}__content-container`}>
                    {!children && this.renderMain()}
                    {children}
                </span>
            </Button>
        );
    };

    renderMain = () => {
        const { text, renderIcon } = this.props;

        return (
            <Fragment>
                {!!text && this.renderText()}
                {!!renderIcon && this.renderIcon()}
            </Fragment>
        );
    };

    renderIcon = () => {
        const { renderIcon } = this.props;

        return <ButtonIcon baseCls={this.btnCls} renderIcon={renderIcon} />;
    };

    renderText() {
        const { text } = this.props;

        return <ButtonText baseCls={this.btnCls}>{text}</ButtonText>;
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

    getBtnExtantProps = () => {
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
