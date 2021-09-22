import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowLeft } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiArrowLeft = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsArrowLeft
            {...rest}
            className={classNameUtil(`${baseCls}-arrow-left`, className)}
        />
    );
};

BankaiArrowLeft.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiArrowLeft;
