import { Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ListItem from './ListItem';
import ListEmptyState from './ListEmptyState';

// Styles
import './styles/list.scss';

const List = (props) => {
    const {
        contextCls,
        data,
        emptyStateProps,
        shouldAlternateColors,
        renderEmptyState,
        renderListItem,
    } = props;
    const baseCls = 'bankai-list';
    const modCls = {
        [`${baseCls}--alternate-item-bg-colors`]: shouldAlternateColors,
    };
    const isEmpty = data.length === 0;
    const childItems = Children.toArray(
        data.map((item) => (
            <li className={`${baseCls}__li`}>{renderListItem(item)}</li>
        )),
    );

    return (
        <>
            {isEmpty &&
                renderEmptyState({
                    ...emptyStateProps,
                    contextCls: `${baseCls}--empty-state`,
                })}
            {!isEmpty && (
                <ul className={cx(baseCls, modCls, contextCls)}>
                    {childItems}
                </ul>
            )}
        </>
    );
};

List.defaultProps = {
    shouldAlternateColors: false,
    data: [],
    renderEmptyState: ListEmptyState,
    renderListItem: ListItem,
};

List.propTypes = {
    contextCls: PropTypes.string,
    emptyStateProps: PropTypes.shape({
        msg: PropTypes.string,
        title: PropTypes.string,
        headingLvl: PropTypes.number,
    }),
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

export default List;
