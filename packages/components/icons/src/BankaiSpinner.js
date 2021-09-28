import React from 'react';
import PropTypes from 'prop-types';
import { RiLoader5Fill } from 'react-icons/ri';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiSpinner = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <RiLoader5Fill
            {...rest}
            className={classNameUtil(
                `${baseCls}-spinner`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiSpinner.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSpinner;
