import React from 'react';
import PropTypes from 'prop-types';
import { RiSnapchatFill } from 'react-icons/ri';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiSocialSnapchat = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <RiSnapchatFill
            {...rest}
            className={classNameUtil(
                `${baseCls}-social-snapchat`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiSocialSnapchat.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSocialSnapchat;
