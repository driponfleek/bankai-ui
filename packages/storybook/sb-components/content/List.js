import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/list.scss';

const List = (props) => {
    const { contextCls, isOrderedList, children } = props;
    const baseCls = 'bankai-sb-list';
    const ListEl = isOrderedList ? 'ol' : 'ul';
    const modCls = {
        [`${baseCls}--ordered`]: isOrderedList,
        [`${baseCls}--unordered`]: !isOrderedList,
    };

    return (
        <ListEl className={cx(baseCls, modCls, contextCls)}>{children}</ListEl>
    );
};

List.defaultProps = {
    isOrderedList: false,
};

List.propTypes = {
    contextCls: PropTypes.string,
    isOrderedList: PropTypes.bool,
};

export default List;
