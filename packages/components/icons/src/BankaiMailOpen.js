import React from 'react';
import PropTypes from 'prop-types';
import { IoMailOpenOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiMailOpen = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoMailOpenOutline
            {...rest}
            className={classNameUtil(
                `${baseCls}-mail-open`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiMailOpen.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiMailOpen;
