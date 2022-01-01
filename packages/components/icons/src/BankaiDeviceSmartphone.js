import React from 'react';
import PropTypes from 'prop-types';
import { BsPhone } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiDeviceSmartphone = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsPhone
            {...rest}
            className={classNameUtil(
                `${baseCls}-device-smartphone`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiDeviceSmartphone.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiDeviceSmartphone;
