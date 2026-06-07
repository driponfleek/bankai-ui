import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Badge from './Badge';

// Styles
import './styles/badge-danger.scss';

const BadgeDanger = (props) => {
    const { contextCls, children, ...rest } = props;
    const baseCls = 'bankai-badge--danger';

    return (
        <Badge {...rest} contextCls={cx(baseCls, contextCls)}>
            {children}
        </Badge>
    );
};

BadgeDanger.propTypes = {
    contextCls: PropTypes.string,
};

export default BadgeDanger;
