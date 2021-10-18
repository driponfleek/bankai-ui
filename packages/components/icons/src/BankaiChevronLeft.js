import React from 'react';
import PropTypes from 'prop-types';
import { FiChevronLeft } from 'react-icons/fi';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiChevronLeft = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <FiChevronLeft
            {...rest}
            className={classNameUtil(
                `${baseCls}-chevron-left`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiChevronLeft.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiChevronLeft;
