import React from 'react';
import PropTypes from 'prop-types';
import { BsListOl } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

const BankaiTextNumberedList = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsListOl
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-numbered-list`,
                className,
            )}
        />
    );
};

BankaiTextNumberedList.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextNumberedList;
