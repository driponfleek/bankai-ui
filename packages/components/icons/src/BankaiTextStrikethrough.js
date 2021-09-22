import React from 'react';
import PropTypes from 'prop-types';
import { BsTypeStrikethrough } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiTextStrikethrough = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsTypeStrikethrough
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-strikethrough`,
                className,
            )}
        />
    );
};

BankaiTextStrikethrough.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextStrikethrough;
