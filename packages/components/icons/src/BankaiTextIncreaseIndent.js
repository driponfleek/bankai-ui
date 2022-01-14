import React from 'react';
import PropTypes from 'prop-types';
import { BsTextIndentLeft } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiTextIncreaseIndent = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsTextIndentLeft
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-increase-indent`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiTextIncreaseIndent.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextIncreaseIndent;
