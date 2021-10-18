import React from 'react';
import PropTypes from 'prop-types';
import { BsCloudUpload } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiCloudUpload = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsCloudUpload
            {...rest}
            className={classNameUtil(
                `${baseCls}-cloud-upload`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCloudUpload.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCloudUpload;
