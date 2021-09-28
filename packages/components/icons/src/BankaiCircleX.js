import React from 'react';
import PropTypes from 'prop-types';
import { BsXCircle } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiCircleX = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsXCircle
            {...rest}
            className={classNameUtil(`${baseCls}-circle-x`, className, contextCls)}
        />
    );
};

BankaiCircleX.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCircleX;
