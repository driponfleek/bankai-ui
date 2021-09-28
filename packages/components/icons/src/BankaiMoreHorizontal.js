import React from 'react';
import PropTypes from 'prop-types';
import { BsThreeDots } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiMoreHorizontal = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsThreeDots
            {...rest}
            className={classNameUtil(`${baseCls}-more-horizontal`, className, contextCls)}
        />
    );
};

BankaiMoreHorizontal.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiMoreHorizontal;
