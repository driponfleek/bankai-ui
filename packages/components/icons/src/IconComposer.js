import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const withIconContainer = (Icon) => {
    const Wrapped = (props) => {
        const { contextCls, className, iconClsSuffix, ...rest } = props;
        const baseCls = 'bankai-icon';
        const iconCls = {
            [`${baseCls}-${iconClsSuffix}`]: !!iconClsSuffix,
        };

        return (
            <Icon
                {...rest}
                className={cx(baseCls, className, iconCls, contextCls)}
            />
        );
    };
    Wrapped.propTypes = {
        className: PropTypes.string,
        contextCls: PropTypes.string,
        iconClsSuffix: PropTypes.string,
    };

    return Wrapped;
};

const IconComposer = withIconContainer;

export default IconComposer;
