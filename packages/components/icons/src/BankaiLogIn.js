import React from 'react';
import PropTypes from 'prop-types';
import { IoLogInOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiLogIn = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoLogInOutline
            {...rest}
            className={classNameUtil(
                `${baseCls}-log-in`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiLogIn.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiLogIn;
