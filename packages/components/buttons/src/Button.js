import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BankaiSpinner } from '@epr0t0type/bankai-ui-icons';
import ButtonIcon from './components/ButtonIcon';
import ButtonText from './components/ButtonText';

// Utils
import { getBtnModCls } from './utils/buttonUtils';

// Styles
import './styles/button.scss';

class Button extends PureComponent {
    static defaultProps = {
        type: 'button',
        isBusy: false,
        isDisabled: false,
        onClick: () => Promise.resolve(),
    };

    static propTypes = {
        'aria-label': PropTypes.string,
        contextCls: PropTypes.string,
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
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
        const props = this.getExtantProps();
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
        const { text, isBusy } = this.props;
        const shouldRenderBtnIcon = this.getShouldRenderBtnIcon();

        return (
            <Fragment>
                {shouldRenderBtnIcon && this.renderIcon()}
                {isBusy && this.renderIcon(isBusy)}
                {!!text && this.renderText()}
            </Fragment>
        );
    };

    renderIcon = (isBusyIcon) => {
        const { renderBusyIcon, renderIcon } = this.props;
        const busyIconRenderer = renderBusyIcon || this.renderBusyIcon;
        const iconRenderer = isBusyIcon ? busyIconRenderer : renderIcon;

        return <ButtonIcon baseCls={this.baseCls} renderIcon={iconRenderer} />;
    };

    renderBusyIcon = () => {
        return <BankaiSpinner />;
    };

    renderText = () => {
        const { text } = this.props;

        return <ButtonText baseCls={this.baseCls}>{text}</ButtonText>;
    };

    handleClick = (e) => {
        const { onClick, data } = this.props;

        onClick({ e, ...(data && { data }) });
    };

    getShouldRenderBtnIcon = () => {
        const { isBusy, renderIcon } = this.props;

        return !isBusy && !!renderIcon;
    };

    getModCls = () => {
        const { variant, isBusy } = this.props;

        return {
            ...getBtnModCls(variant, this.baseCls),
            [`${this.baseCls}--busy`]: isBusy,
        };
    };

    getExtantProps = () => {
        const {
            'aria-label': ariaLabel,
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

        return {
            ...rest,
            ...(!text && ariaLabel && { 'aria-label': ariaLabel }),
            disabled: isBusy || isDisabled,
        };
    };

    baseCls = 'bankai-button';
}

export default Button;
