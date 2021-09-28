import React from 'react';
import PropTypes from 'prop-types';
import { AiFillYoutube } from 'react-icons/ai';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiYouTube = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <AiFillYoutube
            {...rest}
            className={classNameUtil(`${baseCls}-text-subscript`, className, contextCls)}
        />
    );
};

BankaiYouTube.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiYouTube;
