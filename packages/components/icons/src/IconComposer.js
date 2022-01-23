import React from 'react';
import PropTypes from 'prop-types';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const withIconContainer = (Icon) => {
    const Wrapped = (props) => {
        const { contextCls, className, iconClsSuffix, ...rest } = props;
        const iconCls = {
            [`${baseCls}-${iconClsSuffix}`]: !!iconClsSuffix,
        };

        return (
            <Icon
                {...rest}
                className={classNameUtil(iconCls, className, contextCls)}
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
