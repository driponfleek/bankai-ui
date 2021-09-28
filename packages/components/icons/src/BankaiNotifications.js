import React from 'react';
import PropTypes from 'prop-types';
import { IoNotificationsOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiNotifications = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoNotificationsOutline
            {...rest}
            className={classNameUtil(`${baseCls}-notifications`, className, contextCls)}
        />
    );
};

BankaiNotifications.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiNotifications;
