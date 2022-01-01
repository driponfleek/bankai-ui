import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowsMove } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiMove = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsArrowsMove
            {...rest}
            className={classNameUtil(`${baseCls}-move`, className, contextCls)}
        />
    );
};

BankaiMove.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiMove;
