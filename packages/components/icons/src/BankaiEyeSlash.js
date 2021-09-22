import React from 'react';
import PropTypes from 'prop-types';
import { BsEyeSlash } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiEyeSlash = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsEyeSlash
            {...rest}
            className={classNameUtil(`${baseCls}-eye-slash`, className)}
        />
    );
};

BankaiEyeSlash.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiEyeSlash;
