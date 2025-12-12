import PropTypes from 'prop-types';
import cx from 'classnames';
import ListEmptyState from './ListEmptyState';
import ListChildren from './ListChildren';

// Styles
import './styles/list.scss';

const List = (props) => {
    const {
        contextCls,
        shouldAlternateColors = false,
        data = [],
        emptyStateProps,
        renderEmptyState = ListEmptyState,
        renderListItem,
    } = props;
    const baseCls = 'bankai-list';
    const modCls = {
        [`${baseCls}--alternate-item-bg-colors`]: shouldAlternateColors,
    };
    const isEmpty = data.length === 0;

    return (
        <>
            {isEmpty &&
                renderEmptyState({
                    ...emptyStateProps,
                    contextCls: `${baseCls}--empty-state`,
                })}
            {!isEmpty && (
                <ul className={cx(baseCls, modCls, contextCls)}>
                    <ListChildren
                        liCls={`${baseCls}__li`}
                        data={data}
                        renderListItem={renderListItem}
                    />
                </ul>
            )}
        </>
    );
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
            meta: PropTypes.string,
            title: PropTypes.string,
        }),
    ),
    shouldAlternateColors: PropTypes.bool,
    renderEmptyState: PropTypes.func,
    renderListItem: PropTypes.func,
};

export default List;
