import React from 'react';
import PropTypes from 'prop-types';
import { IoCropOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiCrop = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoCropOutline
            {...rest}
            className={classNameUtil(`${baseCls}-crop`, className, contextCls)}
        />
    );
};

BankaiCrop.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCrop;
