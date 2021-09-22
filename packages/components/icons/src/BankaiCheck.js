import React from 'react';
import PropTypes from 'prop-types';
import { BsCheck } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiCheck = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsCheck
            {...rest}
            className={classNameUtil(`${baseCls}-check`, className)}
        />
    );
};

BankaiCheck.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCheck;
