import React from 'react';
import PropTypes from 'prop-types';
import { IoArrowUndoOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiUndo = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoArrowUndoOutline
            {...rest}
            className={classNameUtil(`${baseCls}-undo`, className, contextCls)}
        />
    );
};

BankaiUndo.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiUndo;
