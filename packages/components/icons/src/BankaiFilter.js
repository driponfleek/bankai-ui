import React from 'react';
import PropTypes from 'prop-types';
import { IoFunnelOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiFilter = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoFunnelOutline
            {...rest}
            className={classNameUtil(`${baseCls}-filter`, className, contextCls)}
        />
    );
};

BankaiFilter.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiFilter;
