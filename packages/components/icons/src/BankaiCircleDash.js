import React from 'react';
import PropTypes from 'prop-types';
import { BsDashCircle } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiCircleDash = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsDashCircle
            {...rest}
            className={classNameUtil(`${baseCls}-circle-dash`, className, contextCls)}
        />
    );
};

BankaiCircleDash.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCircleDash;
