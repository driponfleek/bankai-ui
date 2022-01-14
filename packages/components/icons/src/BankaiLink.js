import React from 'react';
import PropTypes from 'prop-types';
import { BsLink45Deg } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiLink = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsLink45Deg
            {...rest}
            className={classNameUtil(`${baseCls}-link`, className, contextCls)}
        />
    );
};

BankaiLink.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiLink;
