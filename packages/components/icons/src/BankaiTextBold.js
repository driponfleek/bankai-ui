import React from 'react';
import PropTypes from 'prop-types';
import { BsTypeBold } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiTextBold = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsTypeBold
            {...rest}
            className={classNameUtil(`${baseCls}-text-bold`, className)}
        />
    );
};

BankaiTextBold.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextBold;
