import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/badge.scss';

const Badge = (props) => {
    const { contextCls, isPill = true, children } = props;
    const baseCls = 'bankai-badge';
    const modCls = { [`${baseCls}--pill`]: isPill };

    return <span className={cx(baseCls, modCls, contextCls)}>{children}</span>;
};

Badge.propTypes = {
    contextCls: PropTypes.string,
    isPill: PropTypes.bool,
};

export default Badge;
