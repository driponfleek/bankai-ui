import React from 'react';
import PropTypes from 'prop-types';
import { BsTrash } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiTrash = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsTrash
            {...rest}
            className={classNameUtil(`${baseCls}-trash`, className)}
        />
    );
};

BankaiTrash.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTrash;
