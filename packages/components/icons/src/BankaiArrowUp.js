import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowUp } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiArrowUp = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsArrowUp
            {...rest}
            className={classNameUtil(`${baseCls}-arrow-up`, className)}
        />
    );
};

BankaiArrowUp.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiArrowUp;
