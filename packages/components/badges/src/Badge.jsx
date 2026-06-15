import React from 'react';
import cx from 'classnames';

// Styles
import './styles/badge.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {boolean} [props.isPill] - Whether to render the badge with pill (rounded) styling
 */
const Badge = (props) => {
    const { contextCls, isPill = true, children } = props;
    const baseCls = 'bankai-badge';
    const modCls = { [`${baseCls}--pill`]: isPill };

    return <span className={cx(baseCls, modCls, contextCls)}>{children}</span>;
};

export default Badge;
