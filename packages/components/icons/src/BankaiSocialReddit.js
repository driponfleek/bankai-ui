import React from 'react';
import PropTypes from 'prop-types';
import { RiRedditFill } from 'react-icons/ri';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiSocialReddit = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <RiRedditFill
            {...rest}
            className={classNameUtil(`${baseCls}-social-reddit`, className)}
        />
    );
};

BankaiSocialReddit.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSocialReddit;
