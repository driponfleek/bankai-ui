import React from 'react';
import PropTypes from 'prop-types';
import { BsLock } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiLock = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsLock
            {...rest}
            className={classNameUtil(`${baseCls}-lock`, className)}
        />
    );
};

BankaiLock.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiLock;
