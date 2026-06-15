import cx from 'classnames';
import ListEmptyState from './ListEmptyState';
import ListChildren from './ListChildren';

// Styles
import './styles/list.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {Object} [props.emptyStateProps] - Props passed to the empty state component (supports `msg`, `title`, `headingLvl`)
 * @param {Array} [props.data] - Array of list item data objects (each with `meta` and `title`)
 * @param {boolean} [props.shouldAlternateColors] - Whether to alternate background colors between list items
 * @param {Function} [props.renderEmptyState] - Custom render function for the empty state
 * @param {Function} [props.renderListItem] - Custom render function for each list item
 */
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

export default List;
