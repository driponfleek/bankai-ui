import React from 'react';
import PropTypes from 'prop-types';
import { BsFullscreenExit } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiMinimize = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsFullscreenExit
            {...rest}
            className={classNameUtil(`${baseCls}-minimize`, className, contextCls)}
        />
    );
};

BankaiMinimize.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiMinimize;
