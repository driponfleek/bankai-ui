import React from 'react';
import PropTypes from 'prop-types';
import { BsCaretUpFill } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiCaretUp = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsCaretUpFill
            {...rest}
            className={classNameUtil(
                `${baseCls}-caret-up`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCaretUp.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCaretUp;
