import React from 'react';
import PropTypes from 'prop-types';
import { BsDisplay } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiDeviceDesktop = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsDisplay
            {...rest}
            className={classNameUtil(
                `${baseCls}-desktop`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiDeviceDesktop.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiDeviceDesktop;
