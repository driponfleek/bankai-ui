import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BankaiCaretDown } from '@epr0t0type/bankai-ui-icons';
import Button from './Button';
import MenuButton from './MenuButton';

// Utils
import { getBtnModCls } from './utils/buttonUtils';

// Styles
import './styles/split-button.scss';

class SplitButton extends Component {
    static defaultProps = {
        isDisabled: false,
        menuOptions: [],
        onMainButtonClick: () => Promise.resolve(),
        onMenuToggle: () => Promise.resolve(),
        onSelection: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        menuButtonARIALabel: PropTypes.string.isRequired,
        variant: PropTypes.string,
        isDisabled: PropTypes.bool,
        menuOptions: PropTypes.array,
        mainButtonProps: PropTypes.shape({
            isDisabled: PropTypes.bool,
        }),
        menuButtonProps: PropTypes.shape({
            isDisabled: PropTypes.bool,
        }),
        onMainButtonClick: PropTypes.func,
        onMenuToggle: PropTypes.func,
        onSelection: PropTypes.func,
        renderMainButton: PropTypes.func,
        renderMainButtonIcon: PropTypes.func,
        renderMenuButtonIcon: PropTypes.func,
        renderMenuOption: PropTypes.func,
    };

    render() {
        const { contextCls, renderMainButton } = this.props;
        const modCls = this.getModCls();
        const mainBtnProps = this.getMainBtnExtantProps();
        const mainBtnRenderer = renderMainButton || this.renderMainButton;

        return (
            <div className={cx(this.baseCls, modCls, contextCls)}>
                <div className={`${this.baseCls}__inner`}>
                    <div className={`${this.baseCls}__main-btn-container`}>
                        {mainBtnRenderer(mainBtnProps)}
                    </div>
                    <div className={`${this.baseCls}__menu-btn-container`}>
                        {this.renderMenuButton()}
                    </div>
                </div>
            </div>
        );
    }

    renderMainButton = (props) => {
        return <Button {...props} contextCls={`${this.baseCls}__main-btn`} />;
    };

    renderMenuButton = () => {
        const props = this.getMenuBtnExtantProps();

        return (
            <MenuButton {...props} contextCls={`${this.baseCls}__menu-btn`} />
        );
    };

    renderMenuButtonIcon = () => {
        return <BankaiCaretDown />;
    };

    getModCls = () => {
        const { variant, isDisabled } = this.props;

        return {
            ...getBtnModCls(variant, this.baseCls),
            [`${this.baseCls}--is-disabled`]: isDisabled,
        };
    };

    getMainBtnExtantProps = () => {
        const {
            variant,
            isDisabled,
            mainButtonProps,
            onMainButtonClick,
            renderMainButtonIcon,
        } = this.props;
        const { isDisabled: isMainBtnDisabled, ...rest } =
            mainButtonProps || {};

        return {
            ...rest,
            variant,
            isDisabled: isDisabled || isMainBtnDisabled,
            onClick: onMainButtonClick,
            renderIcon: renderMainButtonIcon,
        };
    };

    getMenuBtnExtantProps = () => {
        const {
            menuButtonARIALabel,
            variant,
            isDisabled,
            menuOptions,
            menuButtonProps,
            onMenuToggle,
            onSelection,
            renderMenuButtonIcon,
            renderMenuOption,
        } = this.props;
        const { isDisabled: isMenuBtnDisabled, ...rest } =
            menuButtonProps || {};

        return {
            ...rest,
            'aria-label': menuButtonARIALabel,
            variant,
            isDisabled: isDisabled || isMenuBtnDisabled,
            menuOptions,
            onMenuToggle,
            onSelection,
            renderIcon: renderMenuButtonIcon || this.renderMenuButtonIcon,
            renderMenuOption,
        };
    };

    baseCls = 'bankai-split-button';
}

export default SplitButton;
