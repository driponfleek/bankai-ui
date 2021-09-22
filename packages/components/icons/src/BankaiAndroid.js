import React from 'react';
import PropTypes from 'prop-types';
import { AiFillAndroid } from 'react-icons/ai';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiAndroid = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <AiFillAndroid
            {...rest}
            className={classNameUtil(`${baseCls}-android`, className)}
        />
    );
};

BankaiAndroid.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiAndroid;
