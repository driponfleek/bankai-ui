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
        nameCopiedToClipboard: undefined,
    };

    render() {
        const { contextCls, icons } = this.props;

        return (
            <div className={cx('bankai-sb-iconography-list', contextCls)}>
                {icons.map((iconData) => this.renderListItem(iconData))}
            </div>
        );
    }

    renderListItem(iconData) {
        const { locale } = this.props;
        const { nameCopiedToClipboard } = this.state;
        const { Icon, name } = iconData;

        return (
            <IconographyListItem
                key={name}
                name={name}
                Icon={Icon}
                hasCopiedToClipboard={name === nameCopiedToClipboard}
                locale={locale}
                onClick={this.handleIconClick}
            />
        );
    }

    handleIconClick = (name) => {
        this.setState({ nameCopiedToClipboard: name }, () => {
            navigator.clipboard.writeText(name);
            clearTimeout(this.handleIconClickTimeout);

            this.handleIconClickTimeout = setTimeout(() => {
                this.setState({ nameCopiedToClipboard: undefined });
            }, 1500);
        });
    };
}

export default IconographyList;
