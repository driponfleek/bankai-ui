import React from 'react';
import PropTypes from 'prop-types';
import { BsFlag } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiFlag = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsFlag
            {...rest}
            className={classNameUtil(`${baseCls}-flag`, className)}
        />
    );
};

BankaiFlag.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiFlag;
