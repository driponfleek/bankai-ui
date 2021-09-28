import React from 'react';
import PropTypes from 'prop-types';
import { BsCaretRightFill } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiCaretRight = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsCaretRightFill
            {...rest}
            className={classNameUtil(`${baseCls}-caret-right`, className, contextCls)}
        />
    );
};

BankaiCaretRight.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCaretRight;
