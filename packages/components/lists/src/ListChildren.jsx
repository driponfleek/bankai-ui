import { Children, useMemo } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

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

ListChildren.propTypes = {
    liCls: PropTypes.string.isRequired,
    data: PropTypes.array,
    renderListItem: PropTypes.func,
};

export default ListChildren;
