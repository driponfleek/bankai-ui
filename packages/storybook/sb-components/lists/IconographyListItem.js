import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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
        iconCls: PropTypes.string,
        hasCopiedToClipboard: PropTypes.bool,
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
        const { iconCls, hasCopiedToClipboard } = this.props;
        const icon = hasCopiedToClipboard ? 'bankai-icon-check' : iconCls;

        return (
            <span className={`${this.baseCls}__icon-container`}>
                <span className={`${this.baseCls}__icon-safe-area`}>
                    <span className={cx(`${this.baseCls}__icon`, icon)} />
                </span>
            </span>
        );
    }

    renderText() {
        const { locale, iconCls, hasCopiedToClipboard } = this.props;
        const { copiedText } = locale;
        const text = hasCopiedToClipboard ? copiedText : iconCls;

        return (
            <span className={`${this.baseCls}__text-container`}>
                <span className={`${this.baseCls}__text`}>{text}</span>
            </span>
        );
    }

    handleClick = () => {
        const { onClick, iconCls } = this.props;

        onClick(iconCls);
    };

    baseCls = 'bankai-sb-iconography-list-item';
}

export default IconographyListItem;
