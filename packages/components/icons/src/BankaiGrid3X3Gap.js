import React from 'react';
import PropTypes from 'prop-types';
import { BsGrid3X3Gap } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiGrid3X3Gap = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsGrid3X3Gap
            {...rest}
            className={classNameUtil(
                `${baseCls}-grid-3x3-gap`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiGrid3X3Gap.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiGrid3X3Gap;
