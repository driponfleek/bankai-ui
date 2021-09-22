import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineUserAdd } from 'react-icons/ai';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiUserAdd = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <AiOutlineUserAdd
            {...rest}
            className={classNameUtil(`${baseCls}-user-add`, className)}
        />
    );
};

BankaiUserAdd.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiUserAdd;
