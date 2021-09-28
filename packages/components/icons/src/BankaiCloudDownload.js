import React from 'react';
import PropTypes from 'prop-types';
import { BsCloudDownload } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiCloudDownload = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsCloudDownload
            {...rest}
            className={classNameUtil(`${baseCls}-cloud-download`, className, contextCls)}
        />
    );
};

BankaiCloudDownload.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCloudDownload;
