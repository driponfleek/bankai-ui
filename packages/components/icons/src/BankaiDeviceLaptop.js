import React from 'react';
import PropTypes from 'prop-types';
import { BsLaptop } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiDeviceLaptop = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsLaptop
            {...rest}
            className={classNameUtil(`${baseCls}-device-laptop`, className)}
        />
    );
};

BankaiDeviceLaptop.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiDeviceLaptop;
