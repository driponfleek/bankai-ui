import React from 'react';
import PropTypes from 'prop-types';
import { RiFacebookFill } from 'react-icons/ri';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiSocialFacebook = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <RiFacebookFill
            {...rest}
            className={classNameUtil(
                `${baseCls}-social-facebook`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiSocialFacebook.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSocialFacebook;
