import React from 'react';
import PropTypes from 'prop-types';
import { IoBanOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiBan = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoBanOutline
            {...rest}
            className={classNameUtil(`${baseCls}-ban`, className, contextCls)}
        />
    );
};

BankaiBan.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiBan;
