import React from 'react';
import PropTypes from 'prop-types';
import { BsExclamationTriangle } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiTriangleAlert = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsExclamationTriangle
            {...rest}
            className={classNameUtil(`${baseCls}-triangle-alert`, className)}
        />
    );
};

BankaiTriangleAlert.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTriangleAlert;
