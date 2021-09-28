import React from 'react';
import PropTypes from 'prop-types';
import { BsFullscreen } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiMaximize = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsFullscreen
            {...rest}
            className={classNameUtil(`${baseCls}-maximize`, className, contextCls)}
        />
    );
};

BankaiMaximize.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiMaximize;
