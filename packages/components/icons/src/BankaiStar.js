import React from 'react';
import PropTypes from 'prop-types';
import { BsStar } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiStar = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsStar
            {...rest}
            className={classNameUtil(`${baseCls}-star`, className, contextCls)}
        />
    );
};

BankaiStar.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiStar;
