import React from 'react';
import PropTypes from 'prop-types';
import { BsTypeH2 } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiTextH2 = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsTypeH2
            {...rest}
            className={classNameUtil(`${baseCls}-text-h2`, className)}
        />
    );
};

BankaiTextH2.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextH2;
