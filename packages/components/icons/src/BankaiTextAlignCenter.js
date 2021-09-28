import React from 'react';
import PropTypes from 'prop-types';
import { BsTextCenter } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiTextAlignCenter = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsTextCenter
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-align-center`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiTextAlignCenter.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextAlignCenter;
