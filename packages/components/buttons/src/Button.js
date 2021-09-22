import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BankaiSpinner } from '@epr0t0type/bankai-ui-icons';

// Styles
import './styles/button.scss';

class Button extends PureComponent {
    static defaultProps = {
        type: 'button',
        isDestructive: false,
        isDisabled: false,
        isLink: false,
        isPrimary: false,
        isSecondary: false,
        shouldAnimateBusyIcon: true,
        onClick: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        iconCls: PropTypes.string,
        text: PropTypes.string,
        type: PropTypes.string,
        isBusy: PropTypes.bool,
        isDestructive: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isLink: PropTypes.bool,
        isPrimary: PropTypes.bool,
        isSecondary: PropTypes.bool,
        shouldAnimateBusyIcon: PropTypes.bool,
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

    getShouldRenderBtnIcon = () => {
        const { isBusy, renderIcon } = this.props;

        return !isBusy && !!renderIcon;
    };

    getShouldRenderBusyIcon = () => {
        const { isBusy, isLink } = this.props;

        return !isLink && isBusy;
    };

    getModCls = () => {
        const {
            isPrimary,
            isSecondary,
            isLink,
            isBusy,
            isDestructive,
            shouldAnimateBusyIcon,
        } = this.props;

        return {
            [`${this.baseCls}--animate-busy`]: !isLink && shouldAnimateBusyIcon,
            [`${this.baseCls}--busy`]: !isLink && isBusy,
            [`${this.baseCls}--primary`]:
                !isLink && !isSecondary && !isDestructive && isPrimary,
            [`${this.baseCls}--secondary`]:
                !isLink && !isPrimary && !isDestructive && isSecondary,
            [`${this.baseCls}--primary-destructive`]:
                !isLink && !isSecondary && isDestructive && isPrimary,
            [`${this.baseCls}--secondary-destructive`]:
                !isLink && !isPrimary && isDestructive && isSecondary,
            [`${this.baseCls}--link`]:
                !isPrimary && !isSecondary && !isDestructive && isLink,
            [`${this.baseCls}--link-destructive`]:
                !isPrimary && !isSecondary && isDestructive && isLink,
        };
    };

    getProps = () => {
        const {
            contextCls,
            iconCls,
            text,
            type,
            isBusy,
            isDestructive,
            isDisabled,
            isLink,
            isPrimary,
            isSecondary,
            shouldAnimateBusyIcon,
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
