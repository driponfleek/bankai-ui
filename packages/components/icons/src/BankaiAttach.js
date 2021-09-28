import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlinePaperClip } from 'react-icons/ai';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiAttach = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <AiOutlinePaperClip
            {...rest}
            className={classNameUtil(`${baseCls}-attach`, className, contextCls)}
        />
    );
};

BankaiAttach.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiAttach;
