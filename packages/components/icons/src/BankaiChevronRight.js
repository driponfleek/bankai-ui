import React from 'react';
import PropTypes from 'prop-types';
import { FiChevronRight } from 'react-icons/fi';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiChevronRight = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <FiChevronRight
            {...rest}
            className={classNameUtil(`${baseCls}-chevron-right`, className)}
        />
    );
};

BankaiChevronRight.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiChevronRight;
