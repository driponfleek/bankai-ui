import React from 'react';
import PropTypes from 'prop-types';
import { RiPaypalFill } from 'react-icons/ri';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiPayPal = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <RiPaypalFill
            {...rest}
            className={classNameUtil(`${baseCls}-paypal`, className)}
        />
    );
};

BankaiPayPal.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiPayPal;
