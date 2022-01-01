import React from 'react';
import PropTypes from 'prop-types';
import { IoMailUnreadOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiMailUnread = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoMailUnreadOutline
            {...rest}
            className={classNameUtil(
                `${baseCls}-mail-unread`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiMailUnread.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiMailUnread;
