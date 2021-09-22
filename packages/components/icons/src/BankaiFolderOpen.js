import React from 'react';
import PropTypes from 'prop-types';
import { IoFolderOpenOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiFolderOpen = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoFolderOpenOutline
            {...rest}
            className={classNameUtil(`${baseCls}-folder-open`, className)}
        />
    );
};

BankaiFolderOpen.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiFolderOpen;
