import React from 'react';
import PropTypes from 'prop-types';
import { IoCopyOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiCopy = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoCopyOutline
            {...rest}
            className={classNameUtil(`${baseCls}-copy`, className)}
        />
    );
};

BankaiCopy.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCopy;
