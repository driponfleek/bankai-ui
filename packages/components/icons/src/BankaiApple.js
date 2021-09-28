import React from 'react';
import PropTypes from 'prop-types';
import { AiFillApple } from 'react-icons/ai';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiApple = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <AiFillApple
            {...rest}
            className={classNameUtil(`${baseCls}-apple`, className, contextCls)}
        />
    );
};

BankaiApple.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiApple;
