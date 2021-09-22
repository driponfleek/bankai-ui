import React from 'react';
import PropTypes from 'prop-types';
import { BsEye } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiEye = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsEye
            {...rest}
            className={classNameUtil(`${baseCls}-eye`, className)}
        />
    );
};

BankaiEye.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiEye;
