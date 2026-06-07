import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Badge from './Badge';

// Styles
import './styles/badge-info.scss';

const BadgeInfo = (props) => {
    const { contextCls, children, ...rest } = props;
    const baseCls = 'bankai-badge--info';

    return (
        <Badge {...rest} contextCls={cx(baseCls, contextCls)}>
            {children}
        </Badge>
    );
};

BadgeInfo.propTypes = {
    contextCls: PropTypes.string,
};

export default BadgeInfo;
