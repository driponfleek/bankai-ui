import React from 'react';
import PropTypes from 'prop-types';
import { BsThreeDotsVertical } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiMoreVertical = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsThreeDotsVertical
            {...rest}
            className={classNameUtil(`${baseCls}-more-vertical`, className)}
        />
    );
};

BankaiMoreVertical.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiMoreVertical;
