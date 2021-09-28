import React from 'react';
import PropTypes from 'prop-types';
import { BsTablet } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiDeviceTablet = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsTablet
            {...rest}
            className={classNameUtil(`${baseCls}-device-tablet`, className, contextCls)}
        />
    );
};

BankaiDeviceTablet.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiDeviceTablet;
