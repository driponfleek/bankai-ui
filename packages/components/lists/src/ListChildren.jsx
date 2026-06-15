import { Children, useMemo } from 'react';
import ListItem from './ListItem';

/**
 * @param {Object} props
 * @param {string} props.liCls - CSS class name to apply to each list item `<li>` element
 * @param {Array} [props.data] - Array of data objects to render as list items
 * @param {Function} [props.renderListItem] - Custom render function for each list item
 */
const ListChildren = (props) => {
    const { liCls, data = [], renderListItem = ListItem } = props;

    return useMemo(() => {
        return Children.toArray(
            data.map((item) => (
                <li className={liCls}>{renderListItem(item)}</li>
            )),
        );
    }, [data, renderListItem, liCls]);
};

export default ListChildren;
