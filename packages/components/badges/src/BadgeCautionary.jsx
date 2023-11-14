import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Badge from './Badge';

// Styles
import './styles/badge-cautionary.scss';

const BadgeCautionary = (props) => {
    const { contextCls, children } = props;
    const baseCls = 'bankai-badge--cautionary';

    return <Badge contextCls={cx(baseCls, contextCls)}>{children}</Badge>;
};

BadgeCautionary.propTypes = {
    contextCls: PropTypes.string,
};

export default BadgeCautionary;
