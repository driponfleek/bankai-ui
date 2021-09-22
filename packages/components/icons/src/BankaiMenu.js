import React from 'react';
import PropTypes from 'prop-types';
import { IoMenuOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiMenu = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoMenuOutline
            {...rest}
            className={classNameUtil(`${baseCls}-menu`, className)}
        />
    );
};

BankaiMenu.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiMenu;
