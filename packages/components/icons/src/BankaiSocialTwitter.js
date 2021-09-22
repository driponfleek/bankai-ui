import React from 'react';
import PropTypes from 'prop-types';
import { RiTwitterFill } from 'react-icons/ri';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiSocialTwitter = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <RiTwitterFill
            {...rest}
            className={classNameUtil(`${baseCls}-social-twitter`, className)}
        />
    );
};

BankaiSocialTwitter.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSocialTwitter;
