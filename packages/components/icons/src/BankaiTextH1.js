import React from 'react';
import PropTypes from 'prop-types';
import { BsTypeH1 } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiTextH1 = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsTypeH1
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-h1`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiTextH1.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextH1;
