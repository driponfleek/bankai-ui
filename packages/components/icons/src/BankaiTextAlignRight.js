import React from 'react';
import PropTypes from 'prop-types';
import { BsTextRight } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiTextAlignRight = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsTextRight
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-align-right`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiTextAlignRight.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextAlignRight;
