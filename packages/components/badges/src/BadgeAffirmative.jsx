import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Badge from './Badge';

// Styles
import './styles/badge-affirmative.scss';

const BadgeAffirmative = (props) => {
    const { contextCls, children, ...rest } = props;
    const baseCls = 'bankai-badge--affirmative';

    return (
        <Badge {...rest} contextCls={cx(baseCls, contextCls)}>
            {children}
        </Badge>
    );
};

BadgeAffirmative.propTypes = {
    contextCls: PropTypes.string,
};

export default BadgeAffirmative;
