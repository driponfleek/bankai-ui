import React from 'react';
import PropTypes from 'prop-types';
import { BsTypeUnderline } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiTextUnderline = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsTypeUnderline
            {...rest}
            className={classNameUtil(`${baseCls}-text-underline`, className, contextCls)}
        />
    );
};

BankaiTextUnderline.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextUnderline;
