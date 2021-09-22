import React from 'react';
import PropTypes from 'prop-types';
import { BsClipboard } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiClipboard = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsClipboard
            {...rest}
            className={classNameUtil(`${baseCls}-clipboard`, className)}
        />
    );
};

BankaiClipboard.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiClipboard;
