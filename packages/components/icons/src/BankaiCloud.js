import React from 'react';
import PropTypes from 'prop-types';
import { BsCloud } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCloud = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsCloud
            {...rest}
            className={classNameUtil(`${baseCls}-cloud`, className, contextCls)}
        />
    );
};

BankaiCloud.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCloud;
