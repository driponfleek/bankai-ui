import React from 'react';
import PropTypes from 'prop-types';
import { IoCartOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiCart = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoCartOutline
            {...rest}
            className={classNameUtil(`${baseCls}-cart`, className)}
        />
    );
};

BankaiCart.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCart;
