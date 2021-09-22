import React from 'react';
import PropTypes from 'prop-types';
import { BsGrid3X2Gap } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiGrid3X2Gap = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsGrid3X2Gap
            {...rest}
            className={classNameUtil(`${baseCls}-grid-3x2-gap`, className)}
        />
    );
};

BankaiGrid3X2Gap.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiGrid3X2Gap;
