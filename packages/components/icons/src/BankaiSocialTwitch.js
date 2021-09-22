import React from 'react';
import PropTypes from 'prop-types';
import { RiTwitchFill } from 'react-icons/ri';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiSocialTwitch = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <RiTwitchFill
            {...rest}
            className={classNameUtil(`${baseCls}-social-twitch`, className)}
        />
    );
};

BankaiSocialTwitch.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSocialTwitch;
