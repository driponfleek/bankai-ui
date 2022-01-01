import React from 'react';
import PropTypes from 'prop-types';
import { IoShareSocialOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiShare = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoShareSocialOutline
            {...rest}
            className={classNameUtil(`${baseCls}-share`, className, contextCls)}
        />
    );
};

BankaiShare.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiShare;
