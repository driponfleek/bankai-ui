import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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
        onClick: () => Promise.resolve(),
    };

    static propTypes = {
        busyIconCls: PropTypes.string,
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
        data: PropTypes.object,
        onClick: PropTypes.func,
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
                <span className={`${this.baseCls}__content`}>
                    {!children && this.renderMain()}
                    {children}
                </span>
            </button>
        );
    }

    renderMain() {
        const { text } = this.props;
        const shouldRenderIcon = this.getShouldRenderIcon();

        return (
            <Fragment>
                {shouldRenderIcon && this.renderIcon()}
                {!!text && this.renderText()}
            </Fragment>
        );
    }

    renderIcon() {
        const { iconCls, busyIconCls, isBusy, isLink } = this.props;
        const baseIconCls = `${this.baseCls}__icon`;
        const shouldRenderBusyIcon = !isLink && isBusy;
        const iconClsToUse = {
            [iconCls]: !shouldRenderBusyIcon,
            [busyIconCls]: shouldRenderBusyIcon,
        };

        return <span className={cx(baseIconCls, iconClsToUse)} />;
    }

    renderText() {
        const { text } = this.props;

        return <span className={`${this.baseCls}__text`}>{text}</span>;
    }

    handleClick = (e) => {
        const { onClick, data } = this.props;

        onClick({ e, data });
    };

    getShouldRenderIcon() {
        const { isBusy, isLink, iconCls } = this.props;

        return (isBusy && !isLink) || !!iconCls;
    }

    getModCls() {
        const { isPrimary, isSecondary, isLink, isDestructive } = this.props;

        return {
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
    }

    getProps = () => {
        const {
            busyIconCls,
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
            data,
            onClick,
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
