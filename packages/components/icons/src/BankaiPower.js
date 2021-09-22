import React from 'react';
import PropTypes from 'prop-types';
import { BsPower } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiPower = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsPower
            {...rest}
            className={classNameUtil(`${baseCls}-power`, className)}
        />
    );
};

BankaiPower.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiPower;
