import React from 'react';
import PropTypes from 'prop-types';
import { FiCamera } from 'react-icons/fi';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiCamera = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <FiCamera
            {...rest}
            className={classNameUtil(
                `${baseCls}-camera`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCamera.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCamera;
