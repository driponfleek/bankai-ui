import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/badge.scss';

const Badge = (props) => {
    const { contextCls, children } = props;
    const baseCls = 'bankai-badge';

    return <span className={cx(baseCls, contextCls)}>{children}</span>;
};

Badge.propTypes = {
    contextCls: PropTypes.string,
};

export default Badge;
