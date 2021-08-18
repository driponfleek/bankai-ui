import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import IconographyListItem from './IconographyListItem';

// Styles
import './styles/iconography-list.scss';

class IconographyList extends PureComponent {
    static defaultProps = {
        icons: [],
        locale: {},
    };

    static propTypes = {
        contextCls: PropTypes.string,
        icons: PropTypes.array,
        locale: PropTypes.shape({
            copyText: PropTypes.string,
            copiedText: PropTypes.string,
        }),
    };

    state = {
        iconClsCopiedToClipboard: undefined,
    };

    render() {
        const { contextCls, icons } = this.props;

        return (
            <div className={cx('bankai-sb-iconography-list', contextCls)}>
                {icons.map((iconCls) => this.renderListItem(iconCls))}
            </div>
        );
    }

    renderListItem(iconCls) {
        const { locale } = this.props;
        const { iconClsCopiedToClipboard } = this.state;

        return (
            <IconographyListItem
                key={iconCls}
                iconCls={iconCls}
                hasCopiedToClipboard={iconCls === iconClsCopiedToClipboard}
                locale={locale}
                onClick={this.handleIconClick}
            />
        );
    }

    handleIconClick = (iconCls) => {
        this.setState({ iconClsCopiedToClipboard: iconCls }, () => {
            navigator.clipboard.writeText(iconCls);
            clearTimeout(this.handleIconClickTimeout);

            this.handleIconClickTimeout = setTimeout(() => {
                this.setState({ iconClsCopiedToClipboard: undefined });
            }, 1500);
        });
    };
}

export default IconographyList;
