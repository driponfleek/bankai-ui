import React from 'react';
import PropTypes from 'prop-types';
import { FiEdit2 } from 'react-icons/fi';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiEdit = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <FiEdit2
            {...rest}
            className={classNameUtil(`${baseCls}-edit`, className)}
        />
    );
};

BankaiEdit.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiEdit;
