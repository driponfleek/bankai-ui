import React from 'react';
import PropTypes from 'prop-types';
import { BsClock } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiClock = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsClock
            {...rest}
            className={classNameUtil(`${baseCls}-clock`, className, contextCls)}
        />
    );
};

BankaiClock.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiClock;
