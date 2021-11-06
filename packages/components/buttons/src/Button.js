import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BankaiSpinner } from '@epr0t0type/bankai-ui-icons';

// Constants
import { BTN_VARIANTS } from './const/variantsConst';

// Styles
import './styles/button.scss';

const {
    LINK,
    PRIMARY,
    PRIMARY_DESTRUCTIVE,
    SECONDARY,
    SECONDARY_DESTRUCTIVE,
} = BTN_VARIANTS;

class Button extends PureComponent {
    static defaultProps = {
        type: 'button',
        isBusy: false,
        isDisabled: false,
        onClick: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        text: PropTypes.string,
        type: PropTypes.string,
        variant: PropTypes.string,
        isBusy: PropTypes.bool,
        isDisabled: PropTypes.bool,
        data: PropTypes.object,
        onClick: PropTypes.func,
        renderIcon: PropTypes.func,
        renderBusyIcon: PropTypes.func,
    };

    render() {
        const { contextCls, type, children } = this.props;
        const props = this.getProps();
        const modCls = this.getModCls();

        return (
            <button
                {...props}
                className={cx(this.baseCls, modCls, contextCls)}
                // Disabling react/button-has-type due to
                // https://github.com/yannickcr/eslint-plugin-react/issues/1555
                // eslint-disable-next-line react/button-has-type
                type={type}
                onClick={this.handleClick}
            >
                <span className={`${this.baseCls}__content-container`}>
                    {!children && this.renderMain()}
                    {children}
                </span>
            </button>
        );
    }

    renderMain = () => {
        const { text } = this.props;
        const shouldRenderBtnIcon = this.getShouldRenderBtnIcon();
        const shouldRenderBusyIcon = this.getShouldRenderBusyIcon();

        return (
            <Fragment>
                {shouldRenderBtnIcon && this.renderIcon()}
                {shouldRenderBusyIcon && this.renderIcon(shouldRenderBusyIcon)}
                {!!text && this.renderText()}
            </Fragment>
        );
    };

    renderIcon = (isBusyIcon) => {
        const { renderBusyIcon, renderIcon } = this.props;
        const baseIconCls = `${this.baseCls}__icon`;
        const busyIconRenderer = renderBusyIcon || this.renderBusyIcon;
        const iconRenderer = isBusyIcon ? busyIconRenderer : renderIcon;

        return (
            <span className={`${baseIconCls}-container`}>
                <span className={`${baseIconCls}-safe-space`}>
                    <span className={baseIconCls}>{iconRenderer()}</span>
                </span>
            </span>
        );
    };

    renderBusyIcon = () => {
        return <BankaiSpinner />;
    };

    renderText = () => {
        const { text } = this.props;

        return (
            <span className={`${this.baseCls}__text-container`}>
                <span className={`${this.baseCls}__text`}>{text}</span>
            </span>
        );
    };

    handleClick = (e) => {
        const { onClick, data } = this.props;

        onClick({ e, ...(data && { data }) });
    };

    getIsLink = () => {
        const { variant } = this.props;

        return variant === LINK;
    };

    getShouldRenderBtnIcon = () => {
        const { isBusy, renderIcon } = this.props;

        return !isBusy && !!renderIcon;
    };

    getShouldRenderBusyIcon = () => {
        const { isBusy } = this.props;

        return !this.getIsLink() && isBusy;
    };

    getModCls = () => {
        const { variant, isBusy } = this.props;

        return {
            [`${this.baseCls}--busy`]: !this.getIsLink() && isBusy,
            [`${this.baseCls}--primary`]: variant === PRIMARY,
            [`${this.baseCls}--secondary`]: variant === SECONDARY,
            [`${this.baseCls}--primary-destructive`]:
                variant === PRIMARY_DESTRUCTIVE,
            [`${this.baseCls}--secondary-destructive`]:
                variant === SECONDARY_DESTRUCTIVE,
            [`${this.baseCls}--link`]: this.getIsLink(),
        };
    };

    getProps = () => {
        const {
            contextCls,
            text,
            type,
            variant,
            isBusy,
            isDisabled,
            data,
            onClick,
            renderIcon,
            renderBusyIcon,
            children,
            ...rest
        } = this.props;
        const props = { ...rest };
        props.disabled = isBusy || isDisabled;

        // To enforce button text being properly written and
        // prevent scenario where text and aria label exist,
        // delete the aria-label prop if props.text is present
        if (text) {
            delete props['aria-label'];
        }

        return props;
    };

    baseCls = 'bankai-button';
}

export default Button;
