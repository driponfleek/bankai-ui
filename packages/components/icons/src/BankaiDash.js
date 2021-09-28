import React from 'react';
import PropTypes from 'prop-types';
import { BsDash } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiDash = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsDash
            {...rest}
            className={classNameUtil(`${baseCls}-dash`, className, contextCls)}
        />
    );
};

BankaiDash.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiDash;
