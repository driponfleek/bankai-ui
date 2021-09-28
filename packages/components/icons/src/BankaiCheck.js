import React from 'react';
import PropTypes from 'prop-types';
import { HiCheck } from 'react-icons/hi';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiCheck = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <HiCheck
            {...rest}
            className={classNameUtil(`${baseCls}-check`, className, contextCls)}
        />
    );
};

BankaiCheck.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCheck;
