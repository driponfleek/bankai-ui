import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BankaiCheck } from '@epr0t0type/bankai-ui-icons';

// Styles
import './styles/iconography-list-item.scss';

class IconographyListItem extends PureComponent {
    static defaultProps = {
        hasCopiedToClipboard: false,
        locale: {},
        onClick: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        name: PropTypes.string,
        hasCopiedToClipboard: PropTypes.bool,
        Icon: PropTypes.func,
        locale: PropTypes.shape({
            copyText: PropTypes.string,
            copiedText: PropTypes.string,
        }),
        onClick: PropTypes.func,
    };

    render() {
        const { hasCopiedToClipboard, contextCls, locale } = this.props;
        const { copyText } = locale;
        const modCls = {
            [`${this.baseCls}--copied`]: hasCopiedToClipboard,
        };

        return (
            <button
                className={cx(this.baseCls, modCls, contextCls)}
                type="button"
                title={copyText}
                onClick={this.handleClick}
            >
                <span className={`${this.baseCls}__inner`}>
                    {this.renderIcon()}
                    {this.renderText()}
                </span>
            </button>
        );
    }

    renderIcon() {
        const { hasCopiedToClipboard, Icon } = this.props;
        const IconComp = hasCopiedToClipboard ? BankaiCheck : Icon;

        return (
            <span className={`${this.baseCls}__icon-container`}>
                <span className={`${this.baseCls}__icon-safe-area`}>
                    <span className={`${this.baseCls}__icon`}>
                        <IconComp />
                    </span>
                </span>
            </span>
        );
    }

    renderText() {
        const { locale, name, hasCopiedToClipboard } = this.props;
        const { copiedText } = locale;
        const text = hasCopiedToClipboard ? copiedText : name;

        return (
            <span className={`${this.baseCls}__text-container`}>
                <span className={`${this.baseCls}__text`}>{text}</span>
            </span>
        );
    }

    handleClick = () => {
        const { onClick, name } = this.props;

        onClick(name);
    };

    baseCls = 'bankai-sb-iconography-list-item';
}

export default IconographyListItem;
