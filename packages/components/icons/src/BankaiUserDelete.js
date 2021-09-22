import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineUserDelete } from 'react-icons/ai';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiUserDelete = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <AiOutlineUserDelete
            {...rest}
            className={classNameUtil(`${baseCls}-user-delete`, className)}
        />
    );
};

BankaiUserDelete.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiUserDelete;
