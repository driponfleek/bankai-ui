import React from 'react';
import PropTypes from 'prop-types';
import { IoNotificationsOffOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiNotificationsOff = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoNotificationsOffOutline
            {...rest}
            className={classNameUtil(`${baseCls}-notifications-off`, className)}
        />
    );
};

BankaiNotificationsOff.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiNotificationsOff;
