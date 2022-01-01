import React from 'react';
import PropTypes from 'prop-types';
import { IoMenuOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiMenu = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoMenuOutline
            {...rest}
            className={classNameUtil(`${baseCls}-menu`, className, contextCls)}
        />
    );
};

BankaiMenu.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiMenu;
