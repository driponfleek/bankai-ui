import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ListItem = (props) => {
    const { contextCls, children } = props;
    const baseCls = 'bankai-sb-list-item';

    return <li className={cx(baseCls, contextCls)}>{children}</li>;
};

ListItem.defaultProps = {
    contextCls: '',
};

ListItem.propTypes = {
    contextCls: PropTypes.string,
};

export default ListItem;
