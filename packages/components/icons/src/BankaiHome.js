import React from 'react';
import PropTypes from 'prop-types';
import { BsHouse } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiHome = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsHouse
            {...rest}
            className={classNameUtil(`${baseCls}-home`, className)}
        />
    );
};

BankaiHome.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiHome;
