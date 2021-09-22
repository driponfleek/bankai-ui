import React from 'react';
import PropTypes from 'prop-types';
import { IoPrintOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiPrint = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoPrintOutline
            {...rest}
            className={classNameUtil(`${baseCls}-print`, className)}
        />
    );
};

BankaiPrint.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiPrint;
