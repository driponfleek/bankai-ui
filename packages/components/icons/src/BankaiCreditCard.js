import React from 'react';
import PropTypes from 'prop-types';
import { BsCreditCard } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiCreditCard = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsCreditCard
            className={classNameUtil(`${baseCls}-credit-card`, className)}
            {...rest}
        />
    );
};

BankaiCreditCard.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCreditCard;
