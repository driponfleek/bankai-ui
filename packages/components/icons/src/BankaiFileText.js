import React from 'react';
import PropTypes from 'prop-types';
import { BsFileEarmarkText } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiFileText = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsFileEarmarkText
            {...rest}
            className={classNameUtil(
                `${baseCls}-file-text`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiFileText.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiFileText;
