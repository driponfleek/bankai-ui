import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineUser } from 'react-icons/ai';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiUser = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <AiOutlineUser
            {...rest}
            className={classNameUtil(`${baseCls}-user`, className)}
        />
    );
};

BankaiUser.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiUser;
