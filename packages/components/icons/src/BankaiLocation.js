import React from 'react';
import PropTypes from 'prop-types';
import { IoLocationOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiLocation = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoLocationOutline
            {...rest}
            className={classNameUtil(`${baseCls}-location`, className, contextCls)}
        />
    );
};

BankaiLocation.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiLocation;
