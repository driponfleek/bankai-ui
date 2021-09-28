import React from 'react';
import PropTypes from 'prop-types';
import { FiSave } from 'react-icons/fi';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiSave = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <FiSave
            {...rest}
            className={classNameUtil(`${baseCls}-save`, className, contextCls)}
        />
    );
};

BankaiSave.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSave;
