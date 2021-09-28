import React from 'react';
import PropTypes from 'prop-types';
import { IoReloadOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiReload = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoReloadOutline
            {...rest}
            className={classNameUtil(`${baseCls}-reload`, className, contextCls)}
        />
    );
};

BankaiReload.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiReload;
