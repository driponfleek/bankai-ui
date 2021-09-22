import React from 'react';
import PropTypes from 'prop-types';
import { BsInfoCircle } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiCircleInfo = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsInfoCircle
            {...rest}
            className={classNameUtil(`${baseCls}-circle-info`, className)}
        />
    );
};

BankaiCircleInfo.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCircleInfo;
