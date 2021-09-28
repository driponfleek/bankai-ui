import React from 'react';
import PropTypes from 'prop-types';
import { IoFolderOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiFolder = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoFolderOutline
            {...rest}
            className={classNameUtil(`${baseCls}-folder`, className, contextCls)}
        />
    );
};

BankaiFolder.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiFolder;
