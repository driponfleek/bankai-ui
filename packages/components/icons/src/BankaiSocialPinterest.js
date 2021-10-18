import React from 'react';
import PropTypes from 'prop-types';
import { RiPinterestFill } from 'react-icons/ri';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiSocialPinterest = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <RiPinterestFill
            {...rest}
            className={classNameUtil(
                `${baseCls}-social-pinterest`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiSocialPinterest.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSocialPinterest;
