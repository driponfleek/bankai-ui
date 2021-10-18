import React from 'react';
import PropTypes from 'prop-types';
import { BsStarHalf } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiStarHalf = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsStarHalf
            {...rest}
            className={classNameUtil(
                `${baseCls}-star-half`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiStarHalf.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiStarHalf;
