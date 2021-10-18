import React from 'react';
import PropTypes from 'prop-types';
import { RiLinkedinBoxFill } from 'react-icons/ri';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiSocialLinkedIn = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <RiLinkedinBoxFill
            {...rest}
            className={classNameUtil(
                `${baseCls}-social-linkedin`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiSocialLinkedIn.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSocialLinkedIn;
