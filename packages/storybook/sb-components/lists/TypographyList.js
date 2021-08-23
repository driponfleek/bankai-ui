import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import TypographyListItem from './TypographyListItem';

// Styles
import './styles/typography-list.scss';

class TypographyList extends PureComponent {
    static defaultProps = {
        data: [],
    };

    static propTypes = {
        contextCls: PropTypes.string,
        data: PropTypes.array,
    };

    render() {
        const { contextCls, data } = this.props;

        return (
            <div className={cx('bankai-sb-typography-list', contextCls)}>
                {data.map((iconCls) => this.renderListItem(iconCls))}
            </div>
        );
    }

    renderListItem = (data) => {
        const { fontFamilyName } = data;

        return <TypographyListItem key={fontFamilyName} {...data} />;
    };
}

export default TypographyList;
