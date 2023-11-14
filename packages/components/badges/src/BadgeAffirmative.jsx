import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Badge from './Badge';

// Styles
import './styles/badge-affirmative.scss';

const BadgeAffirmative = (props) => {
    const { contextCls, children } = props;
    const baseCls = 'bankai-badge--affirmative';

    return <Badge contextCls={cx(baseCls, contextCls)}>{children}</Badge>;
};

BadgeAffirmative.propTypes = {
    contextCls: PropTypes.string,
};

export default BadgeAffirmative;
