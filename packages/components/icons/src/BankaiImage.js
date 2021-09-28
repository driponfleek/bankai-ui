import React from 'react';
import PropTypes from 'prop-types';
import { BsCardImage } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiImage = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsCardImage
            {...rest}
            className={classNameUtil(`${baseCls}-image`, className, contextCls)}
        />
    );
};

BankaiImage.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiImage;
