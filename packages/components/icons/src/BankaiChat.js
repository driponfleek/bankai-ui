import React from 'react';
import PropTypes from 'prop-types';
import { BsChat } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiChat = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsChat
            {...rest}
            className={classNameUtil(`${baseCls}-chat`, className, contextCls)}
        />
    );
};

BankaiChat.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiChat;
