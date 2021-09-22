import React from 'react';
import PropTypes from 'prop-types';
import { BsShield } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiShield = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsShield
            {...rest}
            className={classNameUtil(`${baseCls}-shield`, className)}
        />
    );
};

BankaiShield.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiShield;
