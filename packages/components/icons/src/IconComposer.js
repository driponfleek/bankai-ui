import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const withIconContainer = (Icon) => {
    const wrapped = (props) => {
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
    wrapped.propTypes = {
        className: PropTypes.string,
        contextCls: PropTypes.string,
        iconClsSuffix: PropTypes.string,
    };

    return wrapped;
};

const IconComposer = withIconContainer;

export default IconComposer;
