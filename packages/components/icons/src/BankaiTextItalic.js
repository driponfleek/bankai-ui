import React from 'react';
import PropTypes from 'prop-types';
import { BsTypeItalic } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiTextItalic = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsTypeItalic
            {...rest}
            className={classNameUtil(`${baseCls}-text-italic`, className)}
        />
    );
};

BankaiTextItalic.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextItalic;
