import React from 'react';
import PropTypes from 'prop-types';
import { BsTextLeft } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiTextAlignLeft = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsTextLeft
            {...rest}
            className={classNameUtil(`${baseCls}-text-align-left`, className)}
        />
    );
};

BankaiTextAlignLeft.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextAlignLeft;
