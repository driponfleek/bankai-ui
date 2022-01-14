import React from 'react';
import PropTypes from 'prop-types';
import { IoStorefrontOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiStorefront = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoStorefrontOutline
            {...rest}
            className={classNameUtil(
                `${baseCls}-storefront`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiStorefront.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiStorefront;
