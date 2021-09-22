import React from 'react';
import PropTypes from 'prop-types';
import { BsCaretDownFill } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiCaretDown = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsCaretDownFill
            {...rest}
            className={classNameUtil(`${baseCls}-caret-down`, className)}
        />
    );
};

BankaiCaretDown.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCaretDown;
