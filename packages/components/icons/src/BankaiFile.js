import React from 'react';
import PropTypes from 'prop-types';
import { BsFileEarmark } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiFile = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsFileEarmark
            {...rest}
            className={classNameUtil(`${baseCls}-file`, className, contextCls)}
        />
    );
};

BankaiFile.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiFile;
