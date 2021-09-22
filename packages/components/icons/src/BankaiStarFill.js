import React from 'react';
import PropTypes from 'prop-types';
import { BsStarFill } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiStarFill = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsStarFill
            {...rest}
            className={classNameUtil(`${baseCls}-star-fill`, className)}
        />
    );
};

BankaiStarFill.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiStarFill;
