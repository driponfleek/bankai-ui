import React from 'react';
import PropTypes from 'prop-types';
import { BsCaretLeftFill } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiCaretLeft = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsCaretLeftFill
            {...rest}
            className={classNameUtil(
                `${baseCls}-caret-left`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCaretLeft.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCaretLeft;
