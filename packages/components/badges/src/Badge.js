import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Utils
import getCSSModifiersUtil from './utils/getCSSModifiersUtil';

// Styles
import './styles/badge.scss';

const Badge = (props) => {
    const { contextCls, variant, children } = props;
    const baseCls = 'bankai-badge';
    const modCls = getCSSModifiersUtil(baseCls, variant);
    console.table(modCls);

    return <span className={cx(baseCls, modCls, contextCls)}>{children}</span>;
};

Badge.propTypes = {
    contextCls: PropTypes.string,
    variant: PropTypes.string,
};

export default Badge;
