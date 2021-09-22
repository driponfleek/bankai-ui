import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRight } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiArrowRight = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsArrowRight
            {...rest}
            className={classNameUtil(`${baseCls}-arrow-right`, className)}
        />
    );
};

BankaiArrowRight.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiArrowRight;
