import React from 'react';
import PropTypes from 'prop-types';
import { CgZoomOut } from 'react-icons/cg';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiZoomOut = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <CgZoomOut
            {...rest}
            className={classNameUtil(`${baseCls}-zoom-out`, className)}
        />
    );
};

BankaiZoomOut.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiZoomOut;
