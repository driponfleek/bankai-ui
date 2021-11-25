import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Callout } from '@epr0t0type/bankai-ui-callouts';
import { BankaiTextBulletList } from '@epr0t0type/bankai-ui-icons';
import ListItem from './ListItem';

// Styles
import './styles/list.scss';

class List extends PureComponent {
    static defaultProps = {
        shouldAlternateColors: false,
        data: [],
    };

    static propTypes = {
        contextCls: PropTypes.string,
        emptyStateMsg: PropTypes.string,
        emptyStateTitle: PropTypes.string,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                meta: PropTypes.string,
                title: PropTypes.string,
            }),
        ),
        shouldAlternateColors: PropTypes.bool,
        renderEmptyState: PropTypes.func,
        renderListItem: PropTypes.func,
    };

    render() {
        const { data, renderEmptyState } = this.props;
        const isEmpty = data.length === 0;
        const emptyStateRenderer = renderEmptyState || this.renderEmptyState;

        return isEmpty ? emptyStateRenderer() : this.renderList();
    }

    renderEmptyState = () => {
        const { emptyStateMsg, emptyStateTitle } = this.props;

        return (
            <Callout
                contextCls={`${this.baseCls}--empty-state`}
                msg={emptyStateMsg}
                title={emptyStateTitle}
                renderIcon={this.renderEmptyStateIcon}
            />
        );
    };

    renderEmptyStateIcon = (iconCls) => (
        <BankaiTextBulletList contextCls={iconCls} />
    );

    renderList = () => {
        const { contextCls, shouldAlternateColors, data } = this.props;
        const modCls = {
            [`${this.baseCls}--alternate-item-bg-colors`]: shouldAlternateColors,
        };

        return (
            <ul className={cx(this.baseCls, modCls, contextCls)}>
                {data.map((item) => this.renderListItem(item))}
            </ul>
        );
    };

    renderListItem = (item) => {
        const { renderListItem } = this.props;
        const { id, ...rest } = item || {};

        return (
            <li key={id} className={`${this.baseCls}__li`}>
                {renderListItem ? renderListItem(item) : <ListItem {...rest} />}
            </li>
        );
    };

    baseCls = 'bankai-list';
}

export default List;
