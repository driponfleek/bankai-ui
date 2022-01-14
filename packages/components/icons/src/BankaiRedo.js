import React from 'react';
import PropTypes from 'prop-types';
import { IoArrowRedoOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiRedo = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoArrowRedoOutline
            {...rest}
            className={classNameUtil(`${baseCls}-redo`, className, contextCls)}
        />
    );
};

BankaiRedo.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiRedo;
