import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineScissor } from 'react-icons/ai';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiScissors = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <AiOutlineScissor
            {...rest}
            className={classNameUtil(`${baseCls}-scissors`, className, contextCls)}
        />
    );
};

BankaiScissors.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiScissors;
