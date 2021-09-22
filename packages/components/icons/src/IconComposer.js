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
                className={cx(baseCls, iconCls, className, contextCls)}
            />
        );
    };
    wrapped.propTypes = {
        contextCls: PropTypes.string,
    };

    return wrapped;
};

const IconComposer = withIconContainer;

export default IconComposer;
