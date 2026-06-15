import React from 'react';
import cx from 'classnames';
import Badge from './Badge';

// Styles
import './styles/badge-affirmative.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 */
const BadgeAffirmative = (props) => {
    const { contextCls, children, ...rest } = props;
    const baseCls = 'bankai-badge--affirmative';

    return (
        <Badge {...rest} contextCls={cx(baseCls, contextCls)}>
            {children}
        </Badge>
    );
};

export default BadgeAffirmative;
